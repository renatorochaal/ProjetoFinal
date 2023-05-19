import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IArtista } from 'src/app/Interfaces/IArtista';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-top-artistas',
  templateUrl: './top-artistas.component.html',
  styleUrls: ['./top-artistas.component.scss']
})
export class TopArtistasComponent implements OnInit {

  artistas: IArtista[] =[]

  constructor(
    private spotifyService: SpotifyService,
    private changeDetectorRef: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.buscarTopArtista();
  }

  async buscarTopArtista(){
    this.artistas = await this.spotifyService.buscarTopArtistas(5);
    this.changeDetectorRef.detectChanges();
    console.log(this.artistas)


  }
}
