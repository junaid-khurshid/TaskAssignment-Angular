import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private BASE_URL = `BASEURL`;
    constructor(private http: HttpClient) {}
  
    login(body: any){
      return this.http.post(`${this.BASE_URL}api/auth/signIn`,body);
    }
  
    public isLoggedIn(){
      return localStorage.getItem('ACCESS_TOKEN') !== null;
    }
  
    public saveToken(access_token){
      localStorage.setItem('ACCESS_TOKEN', access_token) !== null;
  
    }
  
    public getToken(): string {
      let token = localStorage.getItem('ACCESS_TOKEN');
      return token;
    }
  
    public logout(){
      localStorage.removeItem('ACCESS_TOKEN');
    }
  }
  


