import { Movies } from './../models/movie.model';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const enum endpoint {
  lastest='/movie/lastest',
  now_playing='/movie/now_playing',
  popular='/movie/popular',
  top_rated='/movie/top_rated',
  upcoming='/movie/upcoming',
  trending='/trending/all/week',
  originals='/discover/tv'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {}

  getMovies() : Observable<Movies> {
    return this.http.get<Movies>(`${environment.apiUrl}`)
  }
}
