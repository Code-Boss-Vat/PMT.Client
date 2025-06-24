import { Routes } from '@angular/router';
import { Login } from './Pages/Login/login/login';
import { Register } from './Pages/Register/register/register';

export const routes: Routes = [
    { path :'',redirectTo:'login',pathMatch:'full'},
    { path: 'login', component: Login },        // ✅ fixed
  { path: 'register', component: Register } 
];
