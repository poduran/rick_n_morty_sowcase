import { Component, inject, HostListener, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterInfo, Gender, Result, Species, Status } from 'src/models/character-info';
import { GlobalService } from 'src/service/global.service';
import { Subject, debounceTime, takeUntil } from 'rxjs';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css']
})
export class CharacterPageComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private cdr: ChangeDetectorRef) { this.getChars(); }

  private svc = inject(GlobalService);
  private debounceSubject: Subject<void> = new Subject<void>();
  private onDestroy$: Subject<void> = new Subject<void>();

  showCharacters?: CharacterInfo;
  charGroup: Result[][] = [];
  autoFeed: boolean = false;

  statusEnum = Status;
  speciesEnum = Species;
  genderEnum = Gender;

  filterStatus: string | undefined;
  filterSpecies: string | undefined;
  filterName: string | undefined;
  filterGender: string | undefined;
  filterType: string | undefined;

  ngOnInit(): void {
    this.debounceSubject.pipe(
      debounceTime(500),
      takeUntil(this.onDestroy$)
    ).subscribe(() => {
      this.svc.filters.charFilter.name = this.filterName;
      this.svc.filters.charFilter.type = this.filterType;
      this.updateChars();
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onInputChange() {
    this.debounceSubject.next();
  }

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
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body, html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.scrollY;

    return windowBottom >= docHeight;
  }

  enumToArray(enumObj: any): string[] {
    return Object.keys(enumObj).map(key => enumObj[key]);
  }

  updateChars() {
    this.charGroup = [];
    this.svc.getCharacter()
      .subscribe((dados: CharacterInfo) => {
        this.showCharacters = dados;
        for (let index = 0; index < dados.results.length; index += 4) {
          let grupo = dados.results.slice(index, index + 4);
          this.charGroup.push(grupo);
        }

        this.cdr.detectChanges();
      });
  }

  selectedChange() {
    this.svc.filters.charFilter.page = 1;
    this.svc.filters.charFilter.status = this.filterStatus as Status;
    this.svc.filters.charFilter.species = this.filterSpecies as Species;
    this.svc.filters.charFilter.gender = this.filterGender as Gender;

    this.updateChars();
  }

  clearAllFilters() {
    this.svc.filters.charFilter.page = 1;
    this.svc.filters.charFilter.status = undefined;
    this.svc.filters.charFilter.species = undefined;
    this.svc.filters.charFilter.gender = undefined;
    this.svc.filters.charFilter.name = undefined;
    this.svc.filters.charFilter.type = undefined;

    this.filterStatus = undefined;
    this.filterSpecies = undefined;
    this.filterGender = undefined;
    this.filterName = undefined;
    this.filterType = undefined;

    this.updateChars();
  }

  clearFilter(id: number): void {
    switch (id) {
      case 0:
        this.filterName = undefined;
        this.svc.filters.charFilter.name = undefined;
        break;
      case 1:
        this.filterType = undefined;
        this.svc.filters.charFilter.type = undefined;
        break;
      default:
        break;
    }
    this.updateChars();
  }
}
