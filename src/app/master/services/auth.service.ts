import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Http, RequestOptions, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http) {
  }

  login(credentials) {  
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
   return this.http.post('http://localhost:8080/api/auth/signin', 
      JSON.stringify(credentials), options)
      .map(response => {
          let result = response.json();
          if(result && result.accessToken){
            localStorage.setItem('token', result.accessToken);
            return true;
          }
          return false;
      });
  }

  logout() { 
  }

  isLoggedIn() { 
    return tokenNotExpired();
  }

  getCurrentUser(){
    let token = localStorage.getItem('token');
    if(!token) return null;

    return new JwtHelper().decodeToken(token);
  }

}
