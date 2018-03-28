import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule }    from '@angular/http';
import { LoginComponent } from './login/login.component';
import {routing} from './app.routing';
import {RouterModule, Routes} from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';

// const appRoutes:Routes =[
//   {
//     path:'',
//     component:LoginComponent
//   },

//   {
//     path:'mainPage',
//     component:MainPageComponent
//   }
// ]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent
  ],
  imports: [
   // RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
