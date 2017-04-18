import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { DisneylandParisComponent } from './parks/disneyland-paris/disneyland-paris.component';
import { WaltDisneyStudiosComponent } from './parks/walt-disney-studios/walt-disney-studios.component';
import { HomeComponent } from './home/home.component';
import {ParksService} from './parks.service';

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
    path: 'disneyland-paris',
    component: DisneylandParisComponent
  },
  {
    path: 'walt-disney-studios',
    component: WaltDisneyStudiosComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DisneylandParisComponent,
    WaltDisneyStudiosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ParksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
