import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination-menu',
  templateUrl: './pagination-menu.component.html',
  styleUrls: ['./pagination-menu.component.css']
})
export class PaginationMenuComponent {

  @Input() pages: number[] = [];
  @Input() selectedPageIn: number = 1;
  @Output() selectedPage = new EventEmitter<number>();

  ProvPage() {

  }

  NextPage() {

  }

  NavTo(page: number){
    this.selectedPage.emit(page);
  }

  getPaginationExibition(): number[] {
    if (this.pages.length <= 6) {
      return this.pages;
    }

    const pagesExibicao: number[] = [this.pages[0], this.selectedPageIn, this.pages[this.pages.length - 1]];

    return pagesExibicao;
  }
}
