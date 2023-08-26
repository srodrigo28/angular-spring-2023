import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CondominioService } from '../services/condominio.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-condominio-form',
  templateUrl: './condominio-form.component.html',
  styleUrls: ['./condominio-form.component.scss'],

})
export class CondominioFormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: CondominioService,
    private snackBar: MatSnackBar
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

  onSubmit() {
    // console.log(this.form.value);
    // this.service.save(this.form.value)
    this.service.save(this.form.value).subscribe(result => console.log(result), error => this.onError());
  }
  onError() {
    this.snackBar.open('Erro ao gravar os dados Chamar o suprote 62-98592-1140', '', { duration: 800 });
  }

  onMembro() {
    this.router.navigate(['membro']);
  }

  onModal() {
    // this.router.navigate(['/']);
  }
  // ngOnInit(): void{}

}
