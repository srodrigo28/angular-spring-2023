import { Cliente } from './../model/cliente';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { ClienteService } from '../services/clientes.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})

export class ClientesComponent implements OnInit {

  clientes$: Observable <Cliente[]>;
  displayedColumns = ['id', 'nome', 'cidade', 'telefone'];

  constructor(
    private clienteService: ClienteService,
    public dialog: MatDialog
  ) {
    this.clientes$ = this.clienteService.list()
      .pipe(
        catchError(error => {
          // console.log(error);
          this.onError('Erro no servidor');
          return of([])
        })
      );
  }
    onError(errorMsg: string){
      this.dialog.open(ErrorDialogComponent, {
        data: errorMsg
      });
  }
  ngOnInit(): void {}

}
