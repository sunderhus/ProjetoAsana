import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proposta } from '../model/proposta.model';

@Injectable({
  providedIn: 'root'
})
export class PropostaService {
  uri: string = "//localhost:8080";
  private readonly _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
  }

  listar() {
    return this._http.get<Proposta[]>(`${this.uri}/propostas`);
  }
  listarPorCliente(idCliente: number) {
    return this._http.get<Proposta[]>(`${this.uri}/propostas/cliente/${idCliente}`);
  }
  retornar(id: number) {
    return this._http.get<Proposta>(`${this.uri}/propostas/${id}`);
  }
  remover(id: number) {
    console.log(id);
    return this._http.delete(`${this.uri}/propostas/${id}`);
  }
  editar(id: number, proposta: Proposta) {
    return this._http.put<Proposta>(`${this.uri}/propostas/${id}`, proposta);
  }
  adicionar(proposta: Proposta) {
    return this._http.post<Proposta>(`${this.uri}/propostas/`, proposta);
  }
}
