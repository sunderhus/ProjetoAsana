
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemPropostasComponent } from './listagem-propostas/listagem-propostas.component';
import { ListagemContatosComponent } from './listagem-contatos/listagem-contatos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PropostaService } from './service/proposta.service';
import { ContatoService } from './service/contato.service';
import { ManutencaoPropostas } from './manutencao-propostas/manutencao-propostas.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListagemPropostasComponent,
    ListagemContatosComponent,
    ManutencaoPropostas,
    NavbarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ContatoService, PropostaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
