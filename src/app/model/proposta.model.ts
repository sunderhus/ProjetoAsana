
import { Contato } from './contato.model';

export class Proposta {
  public id: number = null;
  public cliente: Contato = new Contato();
  public data: string = null;
  public descricao: string = null;
  public status: string = null;
  public valor: number = null;
}
