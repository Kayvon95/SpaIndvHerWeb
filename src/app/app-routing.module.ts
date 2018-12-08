import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DirectorsComponent} from './directors/directors.component';
import {MoviesComponent} from './movies/movies.component';
import {DirectorDetailComponent} from './directors/director-detail/director-detail.component';
import {DirectorListComponent} from './directors/director-list/director-list.component';
import {MovieListComponent} from './movies/movie-list/movie-list.component';
import {DirectorEditComponent} from './directors/director-edit/director-edit.component';

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
    { path: '', redirectTo: '/list', pathMatch: 'full'},
    { path: 'list', component: MovieListComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
