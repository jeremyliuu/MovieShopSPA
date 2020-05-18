import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http: HttpClient) { }

  // CRUD http methods
  // getALL - returning array of items -- GET
  // getOne - return one item -GET
  // create - sending data to API - POST
  // update - updating a resource - PUT
  // delete - deleting a resource - DELETE
  // API URL's -  http://localhost:49338/api/genres,  http://localhost:49338/api/movies/29
  // GenreService - getAllGenres () - APIService - getAll()
  // GenreService- getAllGenres() - Observable<Genre[]>
  // MovieService - getTopRevenueMovies() - Observable<Movie[]>
  // Models
  // list.where(x => x.id =2).select(y => new {y.id, y.name}).toLIst()
  getAll(path: string): Observable<any[]> {
    return this.http.get(`${environment.apiUrl}${path}`).pipe(
      map(resp => resp as any[])
    )

  }

  getOne(path: string, id?:number): Observable<any>{
    return this.http.get(`${environment.apiUrl}${path}${id}`).pipe(
      map(resp=>resp as any)
    )
    }

    create(path: string, resource: Object = {}, options?): Observable<any> {
      return this.http.post(`${environment.apiUrl}${path}`, resource, options)
        .pipe(map(response => response));
    }

}
