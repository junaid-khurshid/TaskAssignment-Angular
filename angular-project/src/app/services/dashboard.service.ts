import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private BASE_URL = `BASEURL`;
  
  constructor(private http: HttpClient) {}
  
  postData(body: any){
    return this.http.post(`${this.BASE_URL}api/post`,body);
  }


}
