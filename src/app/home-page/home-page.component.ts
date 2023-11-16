import { Component, inject, OnInit } from '@angular/core';
import { CharacterInfo, Result } from 'src/models/character-info';
import { EpisodeInfo as epi, Result as epiRes } from 'src/models/episode-info';
import { LocationInfo as loi, Result as loiRes } from 'src/models/location-info';
import { GlobalService } from 'src/service/global.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor() {
    this.svc.getCharacter()
      .subscribe((dados: CharacterInfo) => {
        this.showCharacters = dados;
        for (let index = 0; index < dados.results.length; index += 4) {
          let grupo = dados.results.slice(index, index + 4);

          this.charGroup.push(grupo);
        }
      });

    this.svc.getEpisode().subscribe((dados: epi) => {
      this.showEpisodes = dados;

      for (let i = 0; i < dados.results.length; i+= 4) {
        let grupo = dados.results.slice(i, i + 4);
        this.epGroup.push(grupo);
      }
    });

    this.svc.getLocation().subscribe((dados: loi) => {
      this.showLocations = dados;

      for (let i = 0; i < dados.results.length; i+= 4) {
        let grupo = dados.results.slice(i, i + 4);

        this.loiGroup.push(grupo);
      }
    });
  }

  private svc = inject(GlobalService);

  showCharacters?: CharacterInfo;
  charGroup: Result[][] = [];

  showLocations?: loi;
  loiGroup: loiRes[][] = [];

  showEpisodes?: epi;
  epGroup: epiRes[][] = [];
}