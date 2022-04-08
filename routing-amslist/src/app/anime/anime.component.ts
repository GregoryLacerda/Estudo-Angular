import { Component, OnInit } from '@angular/core';
import { AnimeService } from './service/anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  animes: Array<any> = [];

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.getAnimes();
  }

  getAnimes(){
    this.animeService.anime.subscribe(retorno => this.animes = retorno);
  }
}
