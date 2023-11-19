import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CharacterPageComponent } from './characters/character-page/character-page.component';
import { EpisodePageComponent } from './episodes/episode-page/episode-page.component';
import { LocationPageComponent } from './locations/location-page/location-page.component';
import { SingleCharAllInfoComponent } from './characters/single-char-all-info/single-char-all-info.component';
import { SingleEpisodeAllInfoComponent } from './episodes/single-episode-all-info/single-episode-all-info.component';
import { SingleLocationAllInfoComponent } from './locations/single-location-all-info/single-location-all-info.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'character', component: CharacterPageComponent },
  { path: 'episode', component: EpisodePageComponent },
  { path: 'location', component: LocationPageComponent },
  { path: 'characterInfo/:id', component: SingleCharAllInfoComponent },
  { path: 'episodeInfo/:id', component: SingleEpisodeAllInfoComponent },
  { path: 'locationInfo/:id', component: SingleLocationAllInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
