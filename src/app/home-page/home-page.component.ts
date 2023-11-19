import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router) {
    this.svc.getCharacter()
      .subscribe((dados: CharacterInfo) => {
        this.showCharacters = dados;
        for (let index = 0; index < dados.results.length; index += 10) {
          let grupo = dados.results.slice(index, index + 10);

          this.charGroup.push(grupo);
        }
      });

    this.svc.getEpisode().subscribe((dados: epi) => {
      this.showEpisodes = dados;

      for (let i = 0; i < dados.results.length; i += 10) {
        let grupo = dados.results.slice(i, i + 10);
        this.epGroup.push(grupo);
      }
    });

    this.svc.getLocation().subscribe((dados: loi) => {
      this.showLocations = dados;

      for (let i = 0; i < dados.results.length; i += 10) {
        let grupo = dados.results.slice(i, i + 10);

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

  NavigateToChar(charId: string): void {
    this.router.navigate(['characterInfo', charId]);
  }

  NavigateToEpisode(charId: string): void {
    this.router.navigate(['episodeInfo', charId]);
  }
  
  NavigateToLocation(charId: string): void {
    this.router.navigate(['locationInfo', charId]);
  }
}