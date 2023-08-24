import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap, first } from 'rxjs/operators'

import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly API = '/assets/cliente.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Cliente[]>(this.API)
      .pipe(
        //first(),
        tap(clientes => console.log('Sucess'))
      );
  }

}
