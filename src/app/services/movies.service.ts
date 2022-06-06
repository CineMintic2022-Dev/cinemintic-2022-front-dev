import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const urlMovie = environment.ApiUrl + '/movie';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  /**
   *
   * @returns
   */
  public movies(){
    return this.http.get(urlMovie + '/buscar-peliculas').pipe(map((response) => response as any));
  }
}
