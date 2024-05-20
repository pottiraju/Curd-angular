import { Routes } from '@angular/router';
import { EmployeeListComponent } from './componets/employee-list/employee-list.component';
import { EmployeeFormComponent } from './componets/employee-form/employee-form.component';
import { LoginComponent } from './componets/login/login.component';
import { GoogleLoginComponent } from './componets/google-login/google-login.component';

export const routes: Routes = [
    {
      path: '',
      component: EmployeeListComponent,
      
    },
    {
      path: 'employee-list',
      component: EmployeeListComponent,
    },
    {
      path: 'create-employee',
      component: EmployeeFormComponent,
    },
    {
      path: 'employee/:id',
      component: EmployeeFormComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'google-login',
      component: GoogleLoginComponent,
    },
  ];
