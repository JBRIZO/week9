import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('src/app/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('src/app/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('src/app/cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
