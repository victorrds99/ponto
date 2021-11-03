import { Observable } from 'rxjs';
import { CadastroPj } from './../models/cadastro-pj.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastrarPjService {

  private readonly PATH: string = 'cadastrar-pj';

  constructor(private http: HttpClient) { }

  cadastrar(cadastroPj: CadastroPj): Observable<any>{
    return this.http.post(env.baseApiUrl + this.PATH, cadastroPj)
  }
}
