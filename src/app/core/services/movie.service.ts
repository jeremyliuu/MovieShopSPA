import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiService: ApiService) { }

  getTopMovies(): Observable<Movie[]> {
    return this.apiService.getAll('movies/toprevenue');
  }

  getMovieById(id: number): Observable<Movie> {
    return this.apiService.getOne(`${'movies/'}`, id);
  }

  getMovieByGenre(id: number): Observable<Movie[]> {
    return this.apiService.getAll(`${'movies/genresmovie/'}`+ id)
  }
}
