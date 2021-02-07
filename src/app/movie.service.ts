import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _HttpClient:HttpClient)
  {

  }
  getTrendingAll():Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/day?api_key=45e8b4cb71a229308cf3c2c15f98646e");

  }
}
