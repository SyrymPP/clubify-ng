import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IClub } from 'src/assets/interfaces/club';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private _url: string = "http://localhost:8000/api/"
  constructor(private http: HttpClient) { }

  private httpheaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getClubsByCategory(id):Observable<IClub[]> {
    return this.http.get<IClub[]>(this._url + 'categories/' + id + '/clubs/')
  }

  getClubs():Observable<IClub[]> {
    return this.http.get<IClub[]>(this._url + 'clubs/')
  }

  getClub(id):Observable<IClub> {
    return this.http.get<IClub>(this._url + 'clubs/' + id + '/')
  }

  create(club):Observable<IClub> {
    return this.http.post<IClub>(this._url + 'clubs/', club, this.httpheaders)
  }

  edit(club_info): Observable<IClub> {
    return this.http.put<IClub>(this._url + 'clubs/' + club_info.id + '/', club_info, this.httpheaders)
  }

  delete(id): Observable<IClub> {
    return this.http.delete<IClub>(this._url + 'clubs/' + id + '/')
  }
}
