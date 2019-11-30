import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PropostaService } from './../service/proposta.service';
import { Proposta } from '../model/proposta.model';
import { Contato } from '../model/contato.model';

@Component({
  selector: 'app-listagem-propostas',
  templateUrl: './listagem-propostas.component.html',
  styleUrls: ['./listagem-propostas.component.scss']
})
export class ListagemPropostasComponent implements OnInit {
  propostas: Array<Proposta>;
  carregado: boolean = false;

  constructor(private propostaService: PropostaService, private router: Router) {
  }

  ngOnInit() {
    this.listar();
  }

  remover(id: number) {
    if (!confirm(`Deseja apagar a proposta (${id}) ? `)) {
      return;
    }
    this.propostaService.remover(id)
    .subscribe(dados => {
        this.listar();
        this.carregado = !this.carregado;
    });
  }

  editar(proposta: Proposta) {
    this.router.navigateByUrl(`/propostas/detalhes/${proposta.id}`);
  }

  adicionar() {
    this.router.navigateByUrl(`/propostas/adicionar`);
  }

  listar() {
    this.propostaService.listar().subscribe(dados => {
      this.propostas = dados;
      this.carregado = !this.carregado;
    });
  }
}