export interface IContacto {
  nombre: string;
  apellido1: string;
  apellido2?: string;
  telefono: string;
  mensaje?: string;
  privacidad: boolean;
  condiciones: boolean;
  recaptcha: string;
}
