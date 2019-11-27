import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private contatoUri:string = "//gerenciador-propostas-api-igor.herokuapp.com";
  private readonly _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
  }

  listarContatos(){
    return this._http.get<any[]>(`${this.contatoUri}/clientes`);
  }
}
