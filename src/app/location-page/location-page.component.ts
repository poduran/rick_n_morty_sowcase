import { Component, inject, HostListener } from '@angular/core';
import { LocationInfo, Result } from 'src/models/location-info';
import { GlobalService } from 'src/service/global.service';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.css']
})
export class LocationPageComponent {
  constructor() { this.getLocations(); }

  getLocations() {
    this.svc.getLocation().subscribe((dados: LocationInfo) => {
      this.showLocations = dados;

      for (let i = 0; i < dados.results.length; i += 4) {
        let grupo = dados.results.slice(i, i + 4);

        this.loiGroup.push(grupo);
      }
    });
  }

  getMoreItens() {
    if (this.autoFeed && this.showLocations?.info.next) {
      this.svc.filters.locFilter.page = this.svc.filters.locFilter.page! + 1;
      this.getLocations();
    }
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

  showLocations?: LocationInfo;
  loiGroup: Result[][] = [];
  autoFeed: boolean = false;
}
