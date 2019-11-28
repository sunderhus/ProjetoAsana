import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropostaService {
  propostasUri: string = "//gerenciador-propostas-api-igor.herokuapp.com";
  private readonly _http: HttpClient;
  constructor(http: HttpClient) {
    this._http = http;
  }

  listarPropostas(){
    return this._http.get<any[]>(`${this.propostasUri}/clientes/propostas`);
  }
}
