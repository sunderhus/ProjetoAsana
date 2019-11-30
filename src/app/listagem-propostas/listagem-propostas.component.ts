import {
  Component,
  OnInit
} from '@angular/core';
import { PropostaService } from './../service/proposta.service';
import { Proposta } from '../model/proposta.model';
import { Router } from '@angular/router';

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

  remover(id: number){
    if (!confirm("Realmente deseja apagar a proposta?")) {
      return;
    }
    this.propostaService.remover(id)
    .subscribe(dados => {
        this.listar();
    });
  }

  editar(proposta: Proposta){
    this.router.navigateByUrl(`/propostas/detalhes/${proposta.id}`);
  }

  adicionar(){
    this.router.navigateByUrl(`/propostas/adicionar`);
  }

  listar(){
    this.carregado = false;
    this.propostaService.listar().subscribe(dados => {
      this.propostas = dados
      this.carregado = true;
    });
  }

  // listarPorCliente(idCliente: number) {
  //   return this.propostaService.listarPorCliente(idCliente);
  // }

}
