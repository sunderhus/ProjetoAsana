import {
  Component,
  OnInit
} from '@angular/core';
import { PropostaService } from '../service/proposta.service';
import { Proposta } from '../model/proposta.model';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ContatoService } from '../service/contato.service';
import { Contato } from '../model/contato.model';

@Component({
  selector: 'app-manutencao-propostas',
  templateUrl: './manutencao-propostas.component.html',
  styleUrls: ['./manutencao-propostas.component.scss']
})
export class ManutencaoPropostas implements OnInit {
  id: string;
  proposta: Proposta = new Proposta();
  carregado: boolean = false;
  listaClientes: Contato[];
  listaStatus = [
    {
      "label": "Selecione",
      "valor": null,
    },
    {
      "label": "Em Análise",
      "valor": "EM_ANALISE",
    },
    {
      "label": "Aprovada",
      "valor": "APROVADA",
    },
    {
      "label": "Recusada",
      "valor": "RECUSADA",
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private propostaService: PropostaService,
    private clienteService: ContatoService
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      this.id = params.get('id') || null;
      if (this.id === null) {
        forkJoin(
          this.clienteService.listarContatos(),
        ).subscribe(resultado => {
          this.listaClientes = resultado[0];
          this.carregado = true;
        })
        return;
      }

      forkJoin(
        this.retornar(Number.parseInt(this.id)),
        this.clienteService.listarContatos(),
      ).subscribe(resultado => {
        this.proposta = resultado[0];
        this.listaClientes = resultado[1];
        this.carregado = true;
      })
    });
  }

  voltar() {
    this.router.navigateByUrl(`/propostas`);
  }

  retornar(id: number) {
    return this.propostaService.retornar(id);
  }

  salvar(proposta: Proposta) {
    let retorno;
    if (this.id) {
      retorno = this.propostaService.editar(this.proposta.id, this.proposta);
    } else {
      retorno = this.propostaService.adicionar(this.proposta);
    }
    retorno.subscribe(resultado => {
      this.proposta = resultado;
      alert('Proposta salva.');
    },
      errorResponse => {
        console.log(errorResponse);
        alert('Falha ao salvar a proposta.');
      })
  }
}
