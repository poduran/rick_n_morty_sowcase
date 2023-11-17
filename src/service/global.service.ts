import { Injectable, Optional, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CharacterInfo } from 'src/models/character-info';
import { LocationInfo } from 'src/models/location-info';
import { EpisodeInfo } from 'src/models/episode-info';
import { QueryFilter } from 'src/models/query-filters';
import { Gender, Location, Species, Status } from 'src/models/character-info'

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient, @Optional() @SkipSelf() parentmodule?: GlobalService) {
    if (parentmodule) {
      console.error('GlobalParametersService is already loaded. Import it in the AppModule only');

      throw new Error(
        'GlobalParametersService is already loaded. Import it in the AppModule only');
    }
  }

  private apiUrl: string = 'https://rickandmortyapi.com/api/';

  public filters: QueryFilter = {
    charFilter: {
      name: undefined,
      status: undefined,
      species: undefined,
      type: undefined,
      gender: undefined,
      page: 1
    },
    episodeFilter: {
      name: undefined,
      episode: undefined,
      page: 1
    },
    locFilter: {
      name: undefined,
      type: undefined,
      dimension: undefined,
      page: 1
    }
  };

  getCharacter(): Observable<CharacterInfo> {
    let endpoint = this.apiUrl + 'character/';

    if (this.filters?.charFilter) {
      endpoint = this.treateFilters(Caller.char, endpoint);
    }

    console.log('endpoint => ' + endpoint);

    return this.http.get<CharacterInfo>(endpoint);
  }

  getLocation(): Observable<LocationInfo> {
    let endpoint = this.apiUrl + 'location/';

    if (this.filters?.locFilter) {
      endpoint = this.treateFilters(Caller.location, endpoint);
    }

    console.log('endpoint => ' + endpoint);
    return this.http.get<LocationInfo>(endpoint);
  }

  getEpisode(): Observable<EpisodeInfo> {
    let endpoint = this.apiUrl + 'episode/';

    if (this.filters?.episodeFilter) {
      endpoint = this.treateFilters(Caller.episode, endpoint);
    }

    console.log('endpoint => ' + endpoint);
    return this.http.get<EpisodeInfo>(endpoint)
  }

  private treateFilters(parent: Caller, endpoint: string): string {
    endpoint += '?'
    switch (parent) {
      case Caller.char:
        if (this.filters.charFilter.page) { endpoint += ('&page=' + this.filters.charFilter.page) }
        if (this.filters.charFilter.gender) { endpoint += ('&gender=' + this.filters.charFilter.gender) }
        if (this.filters.charFilter.name) { endpoint += ('&name=' + this.filters.charFilter.name) }
        if (this.filters.charFilter.species) { endpoint += ('&species=' + this.filters.charFilter.species) }
        if (this.filters.charFilter.status) { endpoint += ('&status=' + this.filters.charFilter.status) }
        if (this.filters.charFilter.type) { endpoint += ('&type=' + this.filters.charFilter.type) }
        break;
      case Caller.location:
        if (this.filters.locFilter.page) { endpoint += ('&page=' + this.filters.locFilter.page) }
        if (this.filters.locFilter.dimension) { endpoint += ('&dimension=' + this.filters.locFilter.dimension) }
        if (this.filters.locFilter.name) { endpoint += ('&name=' + this.filters.locFilter.name) }
        if (this.filters.locFilter.type) { endpoint += ('&type=' + this.filters.locFilter.type) }
        break;
      case Caller.episode:
        if (this.filters.episodeFilter.page) { endpoint += ('&page=' + this.filters.episodeFilter.page) }
        if (this.filters.episodeFilter.episode) { endpoint += ('&episode=' + this.filters.episodeFilter.episode) }
        if (this.filters.episodeFilter.name) { endpoint += ('&name=' + this.filters.episodeFilter.name) }
        break;
      default:
        break;
    }

    return endpoint;
  }
}

enum Caller {
  char,
  location,
  episode
}