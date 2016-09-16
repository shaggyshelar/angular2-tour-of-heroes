import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import './rxjs-extensions';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing, routedComponents } from './app.routing';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search.component';
import { FooterComponent } from './layout/footer/footer.component';
import { QuickSidebarComponent } from './layout/quick-sidebar/quick-sidebar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopNavigationBarComponent } from './layout/top-navigation-bar/top-navigation-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeroSearchComponent,
    FooterComponent,
    QuickSidebarComponent,
    SidebarComponent,
    TopNavigationBarComponent,
    routedComponents
  ],
  providers: [
    HeroService,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA, useClass: InMemoryDataService }     // in-mem server data
  ],
  //bootstrap: [AppComponent]
  bootstrap: [HomeComponent]
})
export class AppModule { }
