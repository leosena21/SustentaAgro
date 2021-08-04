import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    loadChildren: () => import('./pages/cadagro/cadagro.module').then( m => m.CadagroPageModule)
  },
  {
    path: 'cadprof',
    loadChildren: () => import('./pages/cadprof/cadprof.module').then( m => m.CadprofPageModule)
  },
  {
    path: 'dashagro',
    loadChildren: () => import('./pages/dashagro/dashagro.module').then( m => m.DashagroPageModule)
  },
  {
    path: 'dashprof',
    loadChildren: () => import('./pages/dashprof/dashprof.module').then( m => m.DashprofPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
