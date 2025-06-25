import { Routes } from '@angular/router';
import { Login } from './Pages/Login/login/login';
import { Register } from './Pages/Register/register/register';
import { Home } from './Pages/Home/home/home';
import { Dashboard } from './Pages/Dashboard/dashboard/dashboard';

export const routes: Routes = [
    { path :'',redirectTo:'login',pathMatch:'full'},
    { path: 'login', component: Login },       
  { path: 'register', component: Register } ,
  {
    path : 'home',
    component : Home,
    children : [
      { path :'',redirectTo:'dashboard',pathMatch:'full'},
      { path : 'dashboard',component: Dashboard },
    ]
  }
];
