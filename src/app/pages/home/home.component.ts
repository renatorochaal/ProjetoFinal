import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { th } from 'date-fns/locale';
import { Subscription } from 'rxjs';
import { newMusica } from 'src/app/Common/factories';
import { IMusica } from 'src/app/Interfaces/IMusicas';
import { PlayerService } from 'src/app/services/player.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  musicas: IMusica[] = []
  musicaAtual: IMusica = newMusica();

  subs: Subscription [] = []


  playIcone = faPlay;


  constructor(
    private spotifyService: SpotifyService,
    private changeDetectorRef: ChangeDetectorRef,
    private playerService: PlayerService

  ){}


  ngOnInit(): void {
    this.obterMusicas();
    this.obterMusicaAtual();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }


  async obterMusicas(){
    this.musicas = await this.spotifyService.buscarMusicas();
    this.changeDetectorRef.detectChanges();
   }

  obterArtistas(musica: IMusica){
    return musica.artistas.map(artista => artista.nome).join(', ');
  }

  obterMusicaAtual(){
    const sub = this.playerService.musicaAtual.subscribe(musica => {
      this.musicaAtual = musica;
    });
    this.subs.push(sub);
    this.changeDetectorRef.detectChanges();

  }

  async executarMusica(musica: IMusica){
    await this.spotifyService.executarMusica(musica.id);
    this.playerService.definirMusicaAtual(musica);
  }
}
