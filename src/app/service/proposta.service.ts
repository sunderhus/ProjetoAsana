import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropostaService {
  propostas: Array<any>;
  propostasUri: string = "//jsonplaceholder.typicode.com/posts/1/comments";
  private readonly _http: HttpClient;
  constructor(http: HttpClient) {
    this._http = http;
  }

  listarPropostas(){
    return this._http.get<any[]>(`${this.propostasUri}`);
  }
}
