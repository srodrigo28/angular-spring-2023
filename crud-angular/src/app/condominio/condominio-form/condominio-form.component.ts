import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-condominio-form',
  templateUrl: './condominio-form.component.html',
  styleUrls: ['./condominio-form.component.scss']
})
export class CondominioFormComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
    // console.warn(this.profileForm.value);
  }

  // ngOnInit(): void{}
}
