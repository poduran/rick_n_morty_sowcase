import { Component, inject, OnInit } from '@angular/core';
import { CharacterInfo, Result } from 'src/models/character-info';
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

        for (let i = 0; i < dados.info.pages; i++) {
          this.charPages.push(i);
        }

      });
  }

  private svc = inject(GlobalService);

  showCharacters?: CharacterInfo;

  charGroup: Result[][] = [];
  charPages: number[] = [];


  ngOnInit(): void {
  }

  selectedPage(page: number) { }
}