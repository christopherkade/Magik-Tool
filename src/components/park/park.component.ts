import { Component, OnInit } from '@angular/core';
import {Attraction} from '../../models/attraction/attraction';
import {ParksService} from '../../services/parks.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';
import {ObserveContent} from "@angular/material";
import {Observable} from "rxjs/Observable";
import {Park} from "../../models/park/park";

@Component({
  selector: 'app-park',
  templateUrl: './park.component.html',
  styleUrls: ['./park.component.css']
})
export class ParkComponent implements OnInit {

  attractions: any = [];
  name: string;
  filter: Attraction = new Attraction();
  loading: boolean;

  constructor(private parksService: ParksService,
              private route: ActivatedRoute,
              private router: Router) {
    // Get the current park selected in navigation (in order to have a generic component)
    // .filter(event => event instanceof NavigationEnd)
    router.events
      .subscribe(() => {
        if (this.name !== this.route.snapshot.params['name']) {
          this.name = this.route.snapshot.params['name'];
          this.attractions = [];
          this.getParkAttractions()
            .subscribe(attractions => {
              this.attractions = attractions;
              this.loading = false;
            });
          this.loading = true;
        }
      });
  }

  /**
   * GET for the right park
   */
  getParkAttractions(): Observable<Attraction> {
    switch (this.name) {
      case 'disneyland-paris':
        return this.parksService.getDisneylandParisAttractions();
      case 'walt-disney-studios':
        return this.parksService.getWaltDisneyStudiosAttraction();
      case 'wdw-magic-kingdom':
        return this.parksService.getWaltDisneyWorldMagicKingdom();
      case 'epcot':
        return this.parksService.getWaltDisneyWorldEpcot();
      case 'animal-kingdom':
        return this.parksService.getWaltDisneyWorldAnimalKingdom();
      case 'hollywood-studios':
        return this.parksService.getWaltDisneyWorldHollywoodStudios();
      case 'dr-magic-kingdom':
        return this.parksService.getDisneylandResortMagicKingdom();
      case 'california-adventure':
        return this.parksService.getDisneylandResortCaliforniaAdventure();
      case 'sdr-magic-kingdom':
        return this.parksService.getShanghaiDisneyResort();
      case 'tdr-magic-kingdom':
        return this.parksService.getTokyoMagicKingdom();
      case 'tdr-disney-sea':
        return this.parksService.getTokyoDisneySea();
      case 'hk-disneyland':
        return this.parksService.getHonkKongDisneyland();
      default:
        break;
    }
  }

  ngOnInit() {
  }
}
