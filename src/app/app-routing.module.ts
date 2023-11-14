import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CharacterPageComponent } from './character-page/character-page.component';
import { EpisodePageComponent } from './episode-page/episode-page.component';
import { LocationPageComponent } from './location-page/location-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'character', component: CharacterPageComponent },
  { path: 'episode', component: EpisodePageComponent },
  { path: 'location', component: LocationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
