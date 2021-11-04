
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { CadastroPj } from '../../models'
import { CpfValidator, CnpjValidator } from './../../../../shared/validators/';
import { CadastrarPjService } from './../../services';


@Component({
  selector: 'app-cadastrar-pj',
  templateUrl: './cadastrar-pj.component.html',
  styleUrls: ['./cadastrar-pj.component.css']
})
export class CadastrarPjComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private cadastrarPjService: CadastrarPjService
  ) { }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      cpf: ['', [Validators.required, CpfValidator]],
      razaoSocial: ['', [Validators.required, Validators.minLength(5)]],
      cnpj: ['', [Validators.required, CnpjValidator]]
    })
  }

  cadastrarPj(){
    if(this.form.invalid){
      return '';
    }
    const cadastroPj: CadastroPj = this.form.value;
      this.cadastrarPjService.cadastrar(cadastroPj)
      .subscribe(
        date => {
          console.log(JSON.stringify(date));
          const msg: string = "Realize o login para acessar o sistema.";
          this.snackBar.open(msg, "Sucesso", { duration: 5000 });
          this.router.navigate(['/login']);
        },
        erru => {
          console.log(JSON.stringify(erru));
          let msg: string = "Tente novamente em instantes.";
          if(erru.status == 400){
            msg = erru.error.errors.join(' ');
          }
          this.snackBar.open(msg, "Erro", { duration: 5000});
        }
      );
      return false;
  }

}
