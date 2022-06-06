import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const urlCombos = environment.ApiUrl + '/combo';
@Injectable({
  providedIn: 'root',
})
export class ComboService {
  constructor( private http: HttpClient) {}

  /**
   *
   * @returns
   */
  public buscarCombos() {
    return this.http.get(urlCombos + '/buscar-combos');
  }
}
