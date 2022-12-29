import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(credentials: { email: string; password: string }): Observable<any> {
		return this.http.post(`http://192.168.1.69:8001/userservice/api/user/create`, credentials, { headers: this.getHeaders()});
	}

  loginUser(credentials: { email: string; password: string }): Observable<any> {
		return this.http.post(`http://192.168.1.17:8001/userservice/api/user/login`, credentials, { headers: this.getHeaders()});
	}

  getHeaders() {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return headers;
  }

  isAuthenticated() {
    return localStorage.getItem('token') != null;
  }

}
