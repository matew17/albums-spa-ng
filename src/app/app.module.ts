import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AlbumComponent } from './components/album/album.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AppComponent } from './app.component';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [
    AlbumComponent,
    AlbumsComponent,
    AppComponent,
    RatingComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
