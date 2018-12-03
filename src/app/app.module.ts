import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DirectorsComponent } from './directors/directors.component';
import { DirectorListComponent } from './directors/director-list/director-list.component';
import { DirectorItemComponent } from './directors/director-item/director-item.component';

import { DirectorService } from './directors/director.service';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DirectorsComponent,
    DirectorListComponent,
    DirectorItemComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DirectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
