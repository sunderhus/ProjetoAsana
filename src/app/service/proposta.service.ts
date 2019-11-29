import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proposta } from '../model/proposta.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropostaService {

  constructor(private http: HttpClient) {
  }

  listar() {
    return this.http.get<Proposta[]>(`${environment.baseUrl}/propostas`);
  }

  listarPorCliente(idCliente: number) {
    return this.http.get<Proposta[]>(`${environment.baseUrl}/propostas/cliente/${idCliente}`);
  }

  retornar(id: number) {
    return this.http.get<Proposta>(`${environment.baseUrl}/propostas/${id}`);
  }

  remover(id: number) {
    console.log(id);
    return this.http.delete(`${environment.baseUrl}/propostas/${id}`);
  }

  editar(id: number, proposta: Proposta) {
    return this.http.put<Proposta>(`${environment.baseUrl}/propostas/${id}`, proposta);
  }

  adicionar(proposta: Proposta) {
    return this.http.post<Proposta>(`${environment.baseUrl}/propostas/`, proposta);
  }
}
