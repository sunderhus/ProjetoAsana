import { ContatoService } from './../service/contato.service';
import { Component, OnInit } from '@angular/core';
import { Contato } from '../model/contato.model';

@Component({
  selector: 'app-listagem-contatos',
  templateUrl: './listagem-contatos.component.html',
  styleUrls: ['./listagem-contatos.component.scss']
})
export class ListagemContatosComponent implements OnInit {
  contatos: Array<Contato>;
  isEdit: boolean = false;

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.contatoService.listarContatos()
      .subscribe(dados => {
        this.contatos = dados;
        console.log(dados);
      });
  }

  editar(contato: Contato) {
    this.contatoService.editarContato(contato, contato.id)
    .subscribe( dados => {
      console.log(dados);
    });
  }

  remover(id: number) {
    this.contatoService.removerContato(id)
    .subscribe(dados => {
        console.log(dados);
    });
  }

  adicionar(contato: Contato) {
    this.contatoService.adicionarContato(contato)
    .subscribe(dados => {
      console.log(dados);
    });
  }

}
