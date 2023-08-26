import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CondominioService } from '../services/condominio.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-condominio-form',
  templateUrl: './condominio-form.component.html',
  styleUrls: ['./condominio-form.component.scss']
})
export class CondominioFormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: CondominioService,
    private snackBar: MatSnackBar,
    private location: Location,
  ) {
    this.form = this.formBuilder.group({
      nome: [null],
      cnpj: [null],
      cidade: [null],
      bairro: [null],
      endereco: [null],
      data_inicio: [null],
      valor_contrato: [null]
    });
  }
  onCancel() {
    this.location.back();
  }
  onSubmit() {
    // console.log(this.form.value);
    // this.service.save(this.form.value)
    this.service.save(this.form.value)
      .subscribe(result => this.onSuccess(), error => this.onError());
  }
  onSuccess() {
    this.snackBar.open('Gravado com sucesso!', '', { duration: 1200 });
    this.onCancel();
  }
  onError() {
    this.snackBar.open('Erro ao gravar os dados Chamar o suprote 62-98592-1140', '', { duration: 1200 });
  }
  // ngOnInit(): void{}

}
