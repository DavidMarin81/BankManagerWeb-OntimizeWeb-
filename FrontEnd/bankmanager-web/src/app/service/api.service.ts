import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private urlApi = 'http://ergast.com/api/f1/drivers/alonso';

  private urlApi = 'https://rickandmortyapi.com/api/character/289,200,111'

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }
}
