import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IClub } from 'src/assets/interfaces/club';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private _url: string = "assets/data/club.json"
  constructor(private http: HttpClient) { }

  getClub():Observable<IClub[]> {
    return this.http.get<IClub[]>(this._url)
  }

  create(club):Observable<IClub> {
    return this.http.post<IClub>(this._url, club, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
}
