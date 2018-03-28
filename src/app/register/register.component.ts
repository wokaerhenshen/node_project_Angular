import { Component, OnInit } from '@angular/core';
import {  MyRemoteService } from '../app.myremoteservice';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  
})
export class RegisterComponent implements OnInit {

  remoteService: MyRemoteService;
  registerUserName: string;
  registerPassword: string;
  userName: string;
  password: string;
  firstName:string
  lastName:string
  street : string
  city:string
  province:string
  postalCode:string
  country:string

  constructor(_remoteService: MyRemoteService,public router:Router) {
    this.remoteService = _remoteService;
  }

  ngOnInit() {
  }

  register(registerUserName,registerPassword,firstName,lastName,street,city,province,postalCode,country){

    let FeedBackObject = {
      "userName": registerUserName,
      "password": registerPassword,
      "firstName":firstName,
      "lastName":lastName,
      "street":street,
      "city":city,
      "province":province,
      "postalCode":postalCode,
      "country":country
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
                this.router.navigate(['login'],navigationExtras);
                        },
                        // Error.
                        error => {
                            alert(error)
                        }
  )
  }
}
