import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contacto } from './contacto';
import { RecaptchaService } from '../../../services/recaptcha/recaptcha-service';
import { Email } from '../../../services/email/email';
import { CookiesConsentService } from '../../../services/cookies-consent-service/cookies-consent-service';
import { Observable, of, throwError } from 'rxjs';
import { IContacto } from '../../../interface/contacto.interface';

describe('Contacto', () => {
  let component: Contacto;
  let fixture: ComponentFixture<Contacto>;

  let recaptchaServiceMock: jasmine.SpyObj<RecaptchaService>;
  let emailServiceMock: jasmine.SpyObj<Email>;
  let cookiesConsentServiceMock: { consent$: ReturnType<typeof of> };

  beforeEach(async () => {
    recaptchaServiceMock = jasmine.createSpyObj('RecaptchaService', [
      'verifyToken',
    ]);
    recaptchaServiceMock.verifyToken.and.returnValue(of(true));

    emailServiceMock = jasmine.createSpyObj('Email', ['enviarFormulario']);
    recaptchaServiceMock.verifyToken.and.returnValue(of(void 0));

    cookiesConsentServiceMock = {
      consent$: of<void>(undefined) as unknown as Observable<never>,
    };

    await TestBed.configureTestingModule({
      imports: [Contacto],
      providers: [
        { provide: RecaptchaService, useValue: recaptchaServiceMock },
        { provide: Email, useValue: emailServiceMock },
        { provide: CookiesConsentService, useValue: cookiesConsentServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Contacto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize cookiesAceptadas from CookiesConsentService', () => {
    expect(component.cookiesAceptadas).toBeTrue();
  });

  it('should log error if captcha token is null', () => {
    const consoleSpy = spyOn(console, 'error');
    component.onCaptchaResolved(null);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should patch recaptcha token into form', () => {
    component.onCaptchaResolved('test-token');
    expect(component.form.value.recaptcha).toBe('test-token');
  });

  it('should not send email if form is invalid', () => {
    component.form.patchValue({ nombre: '' });
    component.onCaptchaResolved('token');
    expect(emailServiceMock.enviarFormulario).not.toHaveBeenCalled();
  });

  it('should send email when form is valid and captcha is resolved', () => {
    const contactoValido: Partial<IContacto> = {
      nombre: 'Isa',
      apellido1: 'Pastor',
      telefono: '123456789012',
      privacidad: true,
      condiciones: true,
      recaptcha: 'token',
    };

    component.form.patchValue(contactoValido);

    component.onCaptchaResolved('token');

    expect(recaptchaServiceMock.verifyToken).toHaveBeenCalledWith('token');
    expect(emailServiceMock.enviarFormulario).toHaveBeenCalled();
  });

  it('should show success snackbar on successful email send', () => {
    component.form.patchValue({
      nombre: 'Isa',
      apellido1: 'Pastor',
      telefono: '123456789012',
      privacidad: true,
      condiciones: true,
      recaptcha: 'token',
    });

    component.onCaptchaResolved('token');

    expect(component.snackBarOpen.open).toBeTrue();
    expect(component.snackBarOpen.text).toContain('Formulario enviado');
  });

  it('should show error snackbar when email service fails', () => {
    emailServiceMock.enviarFormulario.and.returnValue(
      throwError(() => new Error('fail')),
    );

    component.form.patchValue({
      nombre: 'Isa',
      apellido1: 'Pastor',
      telefono: '123456789012',
      privacidad: true,
      condiciones: true,
      recaptcha: 'token',
    });

    component.onCaptchaResolved('token');

    expect(component.snackBarOpen.open).toBeTrue();
    expect(component.snackBarOpen.text).toContain('Ups...');
  });

  it('should show snackbar error if captcha execution fails', () => {
    component.recaptchaComponent = {
      execute: () => {
        throw new Error('fail');
      },
    } as { execute: () => void };

    component.ejecutarCaptcha();

    expect(component.snackBarOpen.open).toBeTrue();
    expect(component.snackBarOpen.text).toContain('Ups...');
  });
});
