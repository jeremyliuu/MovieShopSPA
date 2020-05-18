import { Component, OnInit } from '@angular/core';
import { GenreService } from '../core/services/genre.service';
import { Genre } from '../shared/models/genre';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: Genre[];
  constructor(private genreService: GenreService) { }

  // Angular LifeCycle Hooks method
  ngOnInit() {
    console.log('Component Initialized');
    this.genreService.getAllGenres().subscribe(
      g => {
        this.genres = g;
      }
    );
  }

  ngOnDestroy() {
    console.log('Component finished and destroyed')
  }

}
