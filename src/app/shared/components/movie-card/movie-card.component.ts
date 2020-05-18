import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  // recieve the data from its parent component, which could any component

  @Input() movie: Movie;
  
  constructor() { }

  ngOnInit(): void {
  }

}
