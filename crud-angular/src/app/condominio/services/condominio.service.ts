import { Condominio } from './../model/condominio';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap, first, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CondominioService {

  private readonly API = 'api/condominio';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Condominio[]>(this.API)
      .pipe(
        //first(),
        delay(1000),
        tap(condominio => console.log('Sucess'))
      );
  }

  save(record: Condominio) {
    // console.log('Record', record)
    return this.httpClient.post<Condominio>(this.API, record); // .pipe(first());
  }

}
