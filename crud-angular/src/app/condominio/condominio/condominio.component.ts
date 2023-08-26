import { CondominioService } from './../services/condominio.service';
import { Condominio } from './../model/condominio';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-condominio',
  templateUrl: './condominio.component.html',
  styleUrls: ['./condominio.component.scss']
})

export class CondominioComponent implements OnInit {

  condominio$: Observable<Condominio[]>;
  // displayedColumns = ['id', 'nome', 'cnpj', 'cidade', 'bairro', 'endereco', 'data_inicio', 'valor_contrato'];
  displayedColumns = ['nome', 'cnpj', 'cidade', 'data_inicio', 'valor_contrato', 'actions'];

  constructor(
    private condominioService: CondominioService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.condominio$ = this.condominioService.list()
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
  ngOnInit(): void { }

  onAdd() {
    //this.router.navigate(['condominio/new'])
    this.router.navigate(['new'], { relativeTo: this.route });
    console.log('Adicionar?')
  }

  onDelete() {
    console.log('Remover?')
  }

  onEditar() {
    console.log('Editar?')
  }

}
