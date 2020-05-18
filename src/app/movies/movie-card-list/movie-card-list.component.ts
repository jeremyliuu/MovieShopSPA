import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-movie-card-list',
  templateUrl: './movie-card-list.component.html',
  styleUrls: ['./movie-card-list.component.css']
})
export class MovieCardListComponent implements OnInit {

  //it needs to read the id from URL and call Movie Service that will call API Service that will call our Rest.API
  //to get the movies belong to the genre
  genreId: number;
  genreMovies: Movie[];
  constructor(private activeRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      params => {
        this.genreId = +params.get('id');
        this.movieService.getMovieByGenre(this.genreId).subscribe(
          m => {
            this.genreMovies = m;
            console.log(this.genreMovies);
          }
        )
        //console.log(this.genreId);
      }
    )
    
  }

}
