import { Component, HostListener, inject } from '@angular/core';
import { EpisodeInfo, Result } from 'src/models/episode-info';
import { GlobalService } from 'src/service/global.service';

@Component({
  selector: 'app-episode-page',
  templateUrl: './episode-page.component.html',
  styleUrls: ['./episode-page.component.css']
})
export class EpisodePageComponent {

  constructor() { this.getEpisodes(); }

  getMoreItens() {
    if (this.autoFeed && this.showEpisodes?.info.next) {
      this.svc.filters.episodeFilter.page = this.svc.filters.episodeFilter.page! + 1;
      this.getEpisodes();
    }
  }

  getEpisodes() {
    this.svc.getEpisode().subscribe((dados: EpisodeInfo) => {
      this.showEpisodes = dados;

      for (let i = 0; i < dados.results.length; i += 4) {
        let grupo = dados.results.slice(i, i + 4);
        this.epGroup.push(grupo);
      }
    });
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

  showEpisodes?: EpisodeInfo;
  epGroup: Result[][] = [];
  autoFeed: boolean = false;
}
