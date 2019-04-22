
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
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import {ActorService} from './actors/actor.service';
import { ActorListComponent } from './actors/actor-list/actor-list.component';
import { ActorItemComponent } from './actors/actor-item/actor-item.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { ActorDetailComponent } from './actors/actor-detail/actor-detail.component';
import { ActorEditComponent } from './actors/actor-edit/actor-edit.component';
import { LoginComponent } from './authentication/login/login.component';
import {AuthGuardService} from './authentication/auth-guard.service';
import {AuthenticationService} from './authentication/authentication.service';
import { SignupComponent } from './authentication/signup/signup.component';

@NgModule({
  declarations: [
    ActorsComponent,
    AppComponent,
    HeaderComponent,
    DirectorsComponent,
    DirectorEditComponent,
    DirectorDetailComponent,
    DirectorItemComponent,
    DirectorListComponent,
    MoviesComponent,
    MovieItemComponent,
    MovieListComponent,
    MovieDetailComponent,
    ActorListComponent,
    ActorItemComponent,
    MovieEditComponent,
    ActorDetailComponent,
    ActorEditComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ActorService, DirectorService, MovieService, AuthGuardService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
