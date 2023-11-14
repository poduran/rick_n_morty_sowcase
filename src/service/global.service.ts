import { Injectable, Optional, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CharacterInfo } from 'src/models/character-info';
import { LocationInfo } from 'src/models/location-info';
import { EpisodeInfo } from 'src/models/episode-info';

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

  getCharacter() : Observable<CharacterInfo>{
    return this.http.get<CharacterInfo>(this.apiUrl + 'character');
  }

  getLocation() : Observable<LocationInfo>{
    return this.http.get<LocationInfo>(this.apiUrl + 'location')
  }

  getEpisode() : Observable<EpisodeInfo>{
    return this.http.get<EpisodeInfo>(this.apiUrl + 'episode')
  }
}
