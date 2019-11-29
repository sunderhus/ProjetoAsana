import {
  Component,
  OnInit
} from '@angular/core';
import { PropostaService } from '../service/proposta.service';
import { Proposta } from '../model/proposta.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manutencao-propostas',
  templateUrl: './manutencao-propostas.component.html',
  styleUrls: ['./manutencao-propostas.component.scss']
})
export class ManutencaoPropostas implements OnInit {
  id: string;
  proposta: Proposta = new Proposta();
  carregado: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private propostaService: PropostaService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || null;
      if (this.id === null) {
        this.carregado = true;
        return;
      }
      this.retornar(Number.parseInt(this.id)).subscribe(dados => {
        this.proposta = dados;
        this.carregado = true;
      });
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
