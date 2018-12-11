import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DirectorsComponent} from './directors/directors.component';
import {MoviesComponent} from './movies/movies.component';
import {DirectorDetailComponent} from './directors/director-detail/director-detail.component';
import {DirectorListComponent} from './directors/director-list/director-list.component';
import {MovieListComponent} from './movies/movie-list/movie-list.component';
import {DirectorEditComponent} from './directors/director-edit/director-edit.component';
import {MovieDetailComponent} from './movies/movie-detail/movie-detail.component';
import {ActorsComponent} from './actors/actors.component';
import {ActorListComponent} from './actors/actor-list/actor-list.component';
import {MovieEditComponent} from './movies/movie-edit/movie-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/directors/list', pathMatch: 'full' },
  { path: 'directors', component: DirectorsComponent, children: [
    { path: '', redirectTo: 'list', pathMatch: 'full'},
    { path: 'list', component: DirectorListComponent },
    { path: 'create', component: DirectorEditComponent},
    { path: ':id/edit', component: DirectorEditComponent},
    { path: ':id', component: DirectorDetailComponent},
  ] },
  // { path: 'movies', component: MoviesComponent}
  { path: 'movies', component: MoviesComponent, children: [
    { path: '', redirectTo: 'list', pathMatch: 'full'},
    { path: 'list', component: MovieListComponent },
    { path: 'create', component: MovieEditComponent},
    { path: ':id/edit', component: MovieEditComponent},
    { path: ':id', component: MovieDetailComponent},
  ] },
  { path: 'actors', component: ActorsComponent, children: [
    { path: '', redirectTo: '/list', pathMatch: 'full'},
    { path: 'list', component: ActorListComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
