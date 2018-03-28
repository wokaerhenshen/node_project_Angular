import { Injectable }     from '@angular/core';
import { Component }      from '@angular/core';
import { URLSearchParams, QueryEncoder} from '@angular/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Good } from './main-page/good'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 

export class LoginModel {
    Username: string;
    Password: string;
}

export class RegisterModel{
    Username: string;
    Password: string;
}

export class GoodModel {
    GoodName :string ;
}

export class ErrorModel{
    myErr : string;
}

@Injectable()
export class MyRemoteService {
    loginModel : LoginModel;
    public site:string;
    constructor(private http: Http) { 
       this.site = "http://localhost:3000/angular/"
    }

    // POST - login
    postLogin(_feedback: Object): Observable<Comment[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url     = this.site + "login";

        let LoginModel = {
            "email": _feedback["userName"],
            "pwd": _feedback["password"]
        }
        return this.http.post(url, LoginModel, options)
            .map(this.extractData) 
            .catch(this.handleError); 
    } 

    postRegister(_feedback: Object): Observable<Comment[]>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url     = this.site + "Register";

        let RegisterModel = {
            "Email": _feedback["userName"],
            "Password": _feedback["password"],
            "FirstName":_feedback["firstName"],
            "LastName":_feedback["lastName"],
            "Address":{
                "street":_feedback["street"],
                "city":_feedback["city"],
                "province":_feedback["province"],
                "postalCode":_feedback["postalCode"],
                "country":_feedback["country"]
            }
        }

        return this.http.post(url, RegisterModel, options)
        .map(this.extractData) 
        .catch(this.handleError); 

    }
    
    // Retreival of JSON from .NET is a success.
    private extractData(res: Response) {
        let body = res.json()
        return body
    }

    // An error occurred. Notify the user.
    // In this case actually we get the error as a response,
    // and what we should do is to tranfer it to json and get its property
    //becasue the response contains many things but the ".json()" method
    // will only convert the body to json what meets our requirements.
    private handleError(error: any) {
     console.log(error.json().err)
        let errMsg = error.json().err
        return Observable.throw(errMsg);
    }
}
