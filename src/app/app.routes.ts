import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
export const routes: Routes = [
  {
    path: '',
    title: 'Login',
    component: FormComponent,
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    component: DashboardComponent,
  },
];
