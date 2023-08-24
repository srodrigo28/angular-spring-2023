import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap, first, delay } from 'rxjs/operators'

import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly API = '/assets/clientex.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Cliente[]>(this.API)
      .pipe(
        //first(),
        delay(1000),
        tap(clientes => console.log('Sucess'))
      );
  }

}
