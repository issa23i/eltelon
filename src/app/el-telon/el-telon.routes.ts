// src/app/el-telon/el-telon.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'quienes-somos',
    loadComponent: () =>
      import('./pages/quienes-somos/quienes-somos').then((m) => m.QuienesSomos),
  },
  {
    path: 'obras',
    loadComponent: () => import('./pages/obras/obras').then((m) => m.Obras),
  },
  {
    path: 'galeria',
    loadComponent: () =>
      import('./pages/galeria/galeria').then((m) => m.Galeria),
  },
  {
    path: 'casting',
    // loadComponent: () =>
    //   import('./pages/casting/casting').then((m) => m.Casting),
    // TODO: BORRAR CUANDO TENGA MÁS DETALLES Y CREAR LA PANTALLA CASTING
    loadComponent: () =>
      import('./pages/casting/casting').then((m) => m.Casting),
  },
  {
    path: 'hazte-socio',
    // loadComponent: () =>
    //   import('./pages/hazte-socio/hazte-socio').then((m) => m.HazteSocio),
    // TODO: BORRAR CUANDO ESTÉ LA CUENTA CORRIENTE Y CREAR LA PANTALLA HAZTE SOCIO
    loadComponent: () =>
      import('./pages/contacto/contacto').then((m) => m.Contacto),
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contacto/contacto').then((m) => m.Contacto),
  },
  {
    path: 'privacidad',
    loadComponent: () =>
      import('./pages/privacidad/privacidad').then((m) => m.Privacidad),
  },
  {
    path: 'aviso-legal',
    loadComponent: () =>
      import('./pages/aviso-legal/aviso-legal').then((m) => m.AvisoLegal),
  },
  { path: '**', redirectTo: '/home' },
];
