import { TestBed } from '@angular/core/testing';
import { RecaptchaService } from './recaptcha-service';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('RecaptchaService', () => {
  let service: RecaptchaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecaptchaService, provideHttpClientTesting()],
    });

    service = TestBed.inject(RecaptchaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
