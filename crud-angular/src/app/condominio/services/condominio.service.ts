import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap, first, delay } from 'rxjs/operators'

import { Condominio } from '../model/condominio';

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

}
