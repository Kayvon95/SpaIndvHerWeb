import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DirectorsComponent } from './directors/directors.component';
import { DirectorListComponent } from './directors/director-list/director-list.component';
import { DirectorItemComponent } from './directors/director-item/director-item.component';

import { DirectorService } from './directors/director.service';
import { MoviesComponent } from './movies/movies.component';
import { ActorsComponent } from './actors/actors.component';
import { DirectorDetailComponent } from './directors/director-detail/director-detail.component';
import {AppRoutingModule} from './app-routing.module';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import {MovieService} from './movies/movie.service';
import { MovieItemComponent } from './movies/movie-item/movie-item.component';
import {HttpModule} from '@angular/http';
import { DirectorEditComponent } from './directors/director-edit/director-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ActorsComponent,
    AppComponent,
    HeaderComponent,
    DirectorsComponent,
    DirectorDetailComponent,
    DirectorEditComponent,
    DirectorItemComponent,
    DirectorListComponent,
    MoviesComponent,
    MovieItemComponent,
    MovieListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [DirectorService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
