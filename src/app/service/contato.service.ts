import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato } from '../model/contato.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) {
  }

  listarContatos() {
    return this.http.get<Contato[]>(`${environment.baseUrl}/clientes`);
  }

  removerContato(id: number) {
    return this.http.delete(`${environment.baseUrl}/clientes/${id}`);
  }

  retornarContato(id: number) {
    return this.http.get<Contato>(`${environment.baseUrl}/clientes/${id}`);
  }

  editarContato(contato: Contato, id: number){
    return this.http.put<Contato>(`${environment.baseUrl}/clientes/${id}`, contato);
  }

  adicionarContato(contato: Contato) {
    return this.http.post<Contato>(`${environment.baseUrl}/clientes/`, contato);
  }
}
