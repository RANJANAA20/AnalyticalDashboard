import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { CustomerComponent } from './customer/customer.component';
import { CustListComponent } from './demo/default/cust-list/cust-list.component';
import { CanActivateGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'default', 
        loadComponent: () => import('./demo/default/default.component')
      },
      
      {
        path: 'typography',
        loadComponent: () => import('./demo/elements/typography/typography.component')
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/elements/element-color/element-color.component')
      },
      

      // {
      //  ,canActivate: [CanActivateGuard]
      //   path: 'color',
      //   loadComponent: () => import('./demo/elements/element-color/element-color.component')
      // },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/sample-page/sample-page.component')
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'guest',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
      }
    ]
  },
  {path:'login',component:LoginComponentComponent},
  {path:'customer',component:CustomerComponent},
  {
    path:'dataList',
    component:CustListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
