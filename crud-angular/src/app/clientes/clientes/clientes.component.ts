import { Cliente } from './../model/cliente';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ClienteService } from '../services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Observable <Cliente[]>;
  displayedColumns = ['id', 'nome', 'cidade', 'telefone'];

  constructor( private clienteService: ClienteService) {
    this.clientes = this.clienteService.list();
  }

  ngOnInit(): void {}

}
