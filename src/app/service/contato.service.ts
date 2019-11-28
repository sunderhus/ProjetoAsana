import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private contatoUri:string = "http://gerenciador-proposta-api.herokuapp.com";
  private readonly _http: HttpClient;
  
  constructor(http: HttpClient) {
    this._http = http;
  }

  listarContatos(){
    return this._http.get<any[]>(`${this.contatoUri}/clientes`);
  }
  removerContato(id: number){
    console.log(id);
    return this._http.delete(`${this.contatoUri}/clientes/${id}`);
  }
  editarContato(contato: Contato, id: number){
    return this._http.put(`${this.contatoUri}/clientes/${id}`,contato);
  }
  adicionarContato(contato: Contato){
    return this._http.post(`${this.contatoUri}/clientes/`,contato);
  }
}

interface Contato {
  cnpj: string,
  email: string,
  razaoSocial: string,
  telefone: number,
}
