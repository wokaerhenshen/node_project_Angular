import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {  MyRemoteService } from '../app.myremoteservice';
import { Good } from './good'
import { Boat} from "./boat"
import { clone } from 'lodash';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  remoteService: MyRemoteService;
  goods:Good[];
  goodForm:boolean= false
  editGoodForm:boolean = false
  isNewForm :boolean
  newGood:any = {}
  editedGood:any 
  sellinGoods:any;
  goodsName :string;
  category:any
  myboats:Boat[]


  constructor(_remoteService: MyRemoteService,public router:Router) {
    this.remoteService = _remoteService;
  }

  ngOnInit() {
    console.log("hi")
    console.log( sessionStorage.getItem("myData"))
    this.myboats = JSON.parse(sessionStorage.getItem("myData"));
  }

  log_out() {
    // Jwt has no sense of logout on the server so just
    // destroy the token on the client.
    sessionStorage.setItem('auth_token', null);
    sessionStorage.setItem('myEmail',null);
    sessionStorage.setItem('myData',null);
        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };
          this.router.navigate(['login'],navigationExtras);
  } 
}
