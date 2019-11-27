import { ContatoService } from './../service/contato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-contatos',
  templateUrl: './listagem-contatos.component.html',
  styleUrls: ['./listagem-contatos.component.scss']
})
export class ListagemContatosComponent implements OnInit {
  contatos: Array<any>;

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.contatoService.listarContatos()
      .subscribe(contatos => {
        this.contatos = contatos;
        console.log(contatos);
      });
  }

}
