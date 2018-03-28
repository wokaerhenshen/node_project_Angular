import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent }          from './app.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { MainPageComponent } from './main-page/main-page.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
   { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'mainPage',component:MainPageComponent},
  {path:'register', component:RegisterComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
 
];

//在应用根部提供配置的路由器。
// forRoot方法提供了路由需要的路由服务提供商和指令，并基于当前浏览器 URL 初始化导航。
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
