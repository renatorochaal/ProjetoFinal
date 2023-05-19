import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRotas } from './player.routes';
import { PainelEsquerdoComponent } from 'src/app/Components/painel-esquerdo/painel-esquerdo.component';
import { BotaoMenuComponent } from 'src/app/Components/botao-menu/botao-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RodapeUsuarioComponent } from 'src/app/Components/rodape-usuario/rodape-usuario.component';
import { HomeComponent } from '../home/home.component';
import { TopArtistaComponent } from 'src/app/Components/top-artista/top-artista.component';
import { PainelDireitoComponent } from 'src/app/Components/painel-direito/painel-direito.component';
import { FormsModule } from '@angular/forms';
import { TopArtistasComponent } from 'src/app/Components/top-artistas/top-artistas.component';
import { BuscasRecentesComponent } from 'src/app/Components/buscas-recetes/buscas-recentes.component';
import { ArtistasItemImagemComponent } from 'src/app/Components/artista-item-imagem/artista-item-imagem.component';
import { PlayerCardComponent } from 'src/app/Components/player-card/player-card.component';

@NgModule({
  declarations: [
    PlayerComponent,
    PainelEsquerdoComponent,
    BotaoMenuComponent,
    RodapeUsuarioComponent,
    HomeComponent,
    TopArtistaComponent,
    PainelDireitoComponent,
    BuscasRecentesComponent,
    TopArtistasComponent,
    ArtistasItemImagemComponent,
    PlayerCardComponent

  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forChild(PlayerRotas)
  ]
})
export class PlayerModule { }
