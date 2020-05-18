import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GenresComponent } from './genres/genres.component';
import { MoviesComponent } from './movies/movies.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { CreateMovieComponent } from './admin/create-movie/create-movie.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieCardListComponent } from './movies/movie-card-list/movie-card-list.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {  FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PurchasesComponent } from './account/purchases/purchases.component';
import { FavoritesComponent } from './account/favorites/favorites.component';
import { ProfileComponent } from './account/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    GenresComponent,
    MoviesComponent,
    HeaderComponent,
    CreateMovieComponent,
    HomeComponent,
    MovieCardListComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    LoginComponent,
    RegisterComponent,
    PurchasesComponent,
    FavoritesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
