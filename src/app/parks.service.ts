import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Attraction} from "./attraction/attraction";

@Injectable()
export class ParksService {

  private parksUrl = 'http://localhost:3000/api'

  constructor(private http: Http) { }

  // Get wait times for DLP
  getDisneylandParisTimes(): Observable<Attraction> {
    const url = this.parksUrl + '/disneyland-paris';
    return this.http.get(url)
      .map(res => res.json());
  }
}