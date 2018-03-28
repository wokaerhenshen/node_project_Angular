import { Component, OnInit } from '@angular/core';
import {  MyRemoteService } from '../app.myremoteservice';
import { routing } from '../app.routing';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MyRemoteService]
})
export class LoginComponent implements OnInit {

  remoteService: MyRemoteService;
  userName: string;
  password: string;
  registerUserName: string;
  registerPassword: string;
  myboats: any

  constructor(_remoteService: MyRemoteService,public router:Router) {
    this.remoteService = _remoteService;
  }

  ngOnInit() {
  }


  login(userName,password) {  
    // Create the JavaScript object in the format
    // required by the server.
    let FeedBackObject = {
        "userName": userName,
        "password": password
    }
    this.remoteService.postLogin(FeedBackObject).subscribe(
        // Success.
        data => {

          // if(!data["error"]){
          //   alert("There is error with your data")
          //   return
          // }
            // Store token with session data.
        sessionStorage.setItem('myData',JSON.stringify(data));
        //window.localStorage.setItem("my")
            
        //console.log(data)
        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
          };
            this.router.navigate(['mainPage'],navigationExtras);
        },
        // Error.
        error => {
            alert(error)
        })
}

register(registerUserName,registerPassword){

  let FeedBackObject = {
    "userName": registerUserName,
    "password": registerPassword
}

this.remoteService.postRegister(FeedBackObject).subscribe(
              // Success.
              data => {

                console.log(data)

                // Set our navigation extras object
                // that passes on our global query params and fragment
                let navigationExtras: NavigationExtras = {
                  queryParamsHandling: 'preserve',
                  preserveFragment: true
                };


              this.router.navigate(['mainPage'],navigationExtras);

                      },
                      // Error.
                      error => {
                          alert(error)
                      }

)



}


}
