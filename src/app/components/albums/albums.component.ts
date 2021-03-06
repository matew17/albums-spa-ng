import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { AlbumsService } from './../../services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums?: Observable<any>;

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.albums = this.albumsService.getAlbums();
  }
}
