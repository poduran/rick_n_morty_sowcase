import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './miscellaneous/nav-bar/nav-bar.component';
import { CharacterPageComponent } from './characters/character-page/character-page.component';
import { LocationPageComponent } from './locations/location-page/location-page.component';
import { EpisodePageComponent } from './episodes/episode-page/episode-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationMenuComponent } from './pagination-menu/pagination-menu.component';
import { StatusBallComponent } from './miscellaneous/status-ball/status-ball.component';
import { SingleCharAllInfoComponent } from './characters/single-char-all-info/single-char-all-info.component';
import { SingleEpisodeAllInfoComponent } from './episodes/single-episode-all-info/single-episode-all-info.component';
import { SingleLocationAllInfoComponent } from './locations/single-location-all-info/single-location-all-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    CharacterPageComponent,
    LocationPageComponent,
    EpisodePageComponent,
    PaginationMenuComponent,
    StatusBallComponent,
    SingleCharAllInfoComponent,
    SingleEpisodeAllInfoComponent,
    SingleLocationAllInfoComponent,
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
