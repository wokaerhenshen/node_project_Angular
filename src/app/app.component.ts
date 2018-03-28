import { Component }        from '@angular/core';
import {  MyRemoteService } from './app.myremoteservice';

// This component consumes the re-usable service.
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    // Providers allow us to inject an object instance through the constructor.
    
    providers:[MyRemoteService]
})
export class AppComponent {
    remoteService: MyRemoteService;
    userName: string;
    password: string;
    token: string;
    users: any;
    goodsName:any;
    goodsDescription:any;
    goodsPrice:any;
    goods:any;
    registerUserName: string;
    registerPassword: string;
    info :string;
    publicData:any;
    privateData:any;
    message:string;
    status :boolean;

    // Since using a provider above we can receive service.
    constructor(_remoteService: MyRemoteService) {
        this.remoteService = _remoteService;
    }
}
