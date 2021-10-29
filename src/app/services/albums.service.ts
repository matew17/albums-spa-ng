import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any> {
    return this.http.get(
      'https://albums-collection-api.herokuapp.com/api/albums/'
    );
  }
}
