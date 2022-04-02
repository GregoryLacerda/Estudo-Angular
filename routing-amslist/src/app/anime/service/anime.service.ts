import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  animeApi = 'http://localhost:8080/animes';

  constructor(private http: HttpClient) { }

  getAnime(): Observable<HttpClient[]>{
    return this.http.get<Array<any>>(this.animeApi);
  }

}