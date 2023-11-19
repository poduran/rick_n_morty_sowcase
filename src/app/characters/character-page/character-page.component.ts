import { Component, inject, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterInfo, Result } from 'src/models/character-info';
import { GlobalService } from 'src/service/global.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css']
})
export class CharacterPageComponent {
  constructor(private router: Router) { this.getChars(); }

  getMoreItens() {
    if (this.autoFeed && this.showCharacters?.info.next) {
      this.svc.filters.charFilter.page = this.svc.filters.charFilter.page! + 1;
      this.getChars();
    }
  }

  getChars() {
    this.svc.getCharacter()
      .subscribe((dados: CharacterInfo) => {
        this.showCharacters = dados;
        for (let index = 0; index < dados.results.length; index += 4) {
          let grupo = dados.results.slice(index, index + 4);

          this.charGroup.push(grupo);
        }
      });
  }

  NavigateTo(charId: string): void {
    this.router.navigate(['characterInfo', charId]);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    if (this.isScrolledToBottom() && this.autoFeed) { this.getMoreItens(); }
  }

  private isScrolledToBottom(): boolean {
    // Lógica para verificar se o usuário chegou ao final da página
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body, html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.scrollY;

    return windowBottom >= docHeight;
  }

  private svc = inject(GlobalService);

  showCharacters?: CharacterInfo;
  charGroup: Result[][] = [];
  autoFeed: boolean = false;

}
