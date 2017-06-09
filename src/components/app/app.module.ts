import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';
import { HomeComponent } from '../home/home.component';
import {ParksService} from '../../services/parks.service';
import {AttractionFilterPipe} from '../park/pipes/filter.pipe';
import {FooterComponent} from '../footer/footer.component';
import {ParkComponent} from '../park/park.component';
import {SortPipe} from "../park/pipes/sort.pipe";
import {LoadModule, LoadService} from 'ng-load-animation';

const ROUTES = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'parks/:name',
    component: ParkComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AttractionFilterPipe,
    SortPipe,
    FooterComponent,
    ParkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    LoadModule
  ],
  providers: [ParksService, LoadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
