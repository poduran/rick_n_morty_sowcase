import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CharacterPageComponent } from './character-page/character-page.component';
import { LocationPageComponent } from './location-page/location-page.component';
import { EpisodePageComponent } from './episode-page/episode-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationMenuComponent } from './pagination-menu/pagination-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    CharacterPageComponent,
    LocationPageComponent,
    EpisodePageComponent,
    PaginationMenuComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
