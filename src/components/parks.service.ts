import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Attraction} from './attraction/attraction';

/**
 * Service for our parks data
 */
@Injectable()
export class ParksService {

  private parksUrl = 'http://localhost:3000/api'

  constructor(private http: Http) { }

  // PARIS
  getDisneylandParisAttractions(): Observable<Attraction> {
    const url = this.parksUrl + '/disneyland-paris';
    return this.http.get(url)
      .map(res => res.json());
  }

  getWaltDisneyStudiosAttraction(): Observable<Attraction> {
    const url = this.parksUrl + '/walt-disney-studios';
    return this.http.get(url)
      .map(res => res.json());
  }
  // PARIS END

  // WALT DISNEY WORLD
  getWaltDisneyWorldMagicKingdom(): Observable<Attraction> {
    const url = this.parksUrl + '/wdw-magic-kingdom';
    return this.http.get(url)
      .map(res => res.json());
  }

  getWaltDisneyWorldEpcot(): Observable<Attraction> {
    const url = this.parksUrl + '/epcot';
    return this.http.get(url)
      .map(res => res.json());
  }

  getWaltDisneyWorldAnimalKingdom(): Observable<Attraction> {
    const url = this.parksUrl + '/animal-kingdom';
    return this.http.get(url)
      .map(res => res.json());
  }

  getWaltDisneyWorldHollywoodStudios(): Observable<Attraction> {
    const url = this.parksUrl + '/hollywood-studios';
    return this.http.get(url)
      .map(res => res.json());
  }
  // WALT DISNEY WORLD END

  // DISNEYLAND CALIFORNIA
  getDisneylandResortMagicKingdom(): Observable<Attraction> {
    const url = this.parksUrl + '/dr-magic-kingdom';
    return this.http.get(url)
      .map(res => res.json());
  }

  getDisneylandResortCaliforniaAdventure(): Observable<Attraction> {
    const url = this.parksUrl + '/california-adventure';
    return this.http.get(url)
      .map(res => res.json());
  }
  // DISNEYLAND CALIFORNIA END

  // DISNEYLAND ASIA
  getShanghaiDisneyResort(): Observable<Attraction> {
    const url = this.parksUrl + '/sdr-magic-kingdom';
    return this.http.get(url)
      .map(res => res.json());
  }

  getTokyoMagicKingdom(): Observable<Attraction> {
    const url = this.parksUrl + '/tdr-magic-kingdom';
    return this.http.get(url)
      .map(res => res.json());
  }

  getTokyoDisneySea(): Observable<Attraction> {
    const url = this.parksUrl + '/tdr-disney-sea';
    return this.http.get(url)
      .map(res => res.json());
  }

  getHonkKongDisneyland(): Observable<Attraction> {
    const url = this.parksUrl + '/hk-disneyland';
    return this.http.get(url)
      .map(res => res.json());
  }
  // DISNEYLAND ASIA END
}
