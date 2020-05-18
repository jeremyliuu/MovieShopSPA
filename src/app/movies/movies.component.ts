import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { Movie } from '../shared/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  topMovies: Movie[];
  movie: Movie;
  id: number;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getTopMovies().subscribe(
      m => {
        this.topMovies = m;
        console.log(this.topMovies);
      }
    );
  }

}
