// src/app/el-telon/el-telon.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
      { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
      { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
      { path: 'quienes-somos', loadComponent: () => import('./pages/quienes-somos/quienes-somos').then(m => m.QuienesSomos) },
      { path: 'obras', loadComponent: () => import('./pages/obras/obras').then(m => m.Obras) },
      { path: 'galeria', loadComponent: () => import('./pages/galeria/galeria').then(m => m.Galeria) },
      { path: 'casting', loadComponent: () => import('./pages/casting/casting').then(m => m.Casting) },
      { path: 'hazte-socio', loadComponent: () => import('./pages/hazte-socio/hazte-socio').then(m => m.HazteSocio) },
      { path: 'contacto', loadComponent: () => import('./pages/contacto/contacto').then(m => m.Contacto) },
      { path: '**', redirectTo: '/home' }
];
