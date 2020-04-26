import { Injectable } from '@angular/core';
import { HttpHeaderResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../assets/interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url = 'http://localhost:8000/api/'
  httpHeaders = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }

  constructor(private http: HttpClient) { }

  login(user): Observable<User> {
    return this.http.post<User>(this._url + 'login/', user, this.httpHeaders)
  }

  register(user): Observable<User> {
    return this.http.post<User>(this._url + 'register/', user, this.httpHeaders)
  }

  enroll(info): Observable<User> {
    return this.http.post<User>(this._url + 'enroll/', info, this.httpHeaders)
  }
}
