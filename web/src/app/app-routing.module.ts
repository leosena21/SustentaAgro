import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/authguard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadagro',
    loadChildren: () => import('./pages/cadagro/cadagro.module').then( m => m.CadagroPageModule),
    canActivate: [AuthService]
  },
  {
    path: 'cadprof',
    loadChildren: () => import('./pages/cadprof/cadprof.module').then( m => m.CadprofPageModule),
    canActivate: [AuthService]
  },
  {
    path: 'dashagro',
    loadChildren: () => import('./pages/dashagro/dashagro.module').then( m => m.DashagroPageModule),
    canActivate: [AuthService]
  },
  {
    path: 'dashprof',
    loadChildren: () => import('./pages/dashprof/dashprof.module').then( m => m.DashprofPageModule),
    canActivate: [AuthService]
  },
  {
    path: 'pratica',
    loadChildren: () => import('./pages/pratica/pratica.module').then( m => m.PraticaPageModule),
    canActivate: [AuthService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
