import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../service/Movie';
import { MovieList } from '../service/MovieList';
import { Genre } from '../service/Genre';
import { GenreList } from '../service/GenreList';
import { ConfigService } from '../service/config.service';

@Component({
  selector: 'app-observablepage',
  templateUrl: './observablepage.page.html',
  styleUrls: ['./observablepage.page.scss'],
})
export class ObservablepagePage {
  genres = new GenreList();
  private configService = new ConfigService();
  private subscriptions: Subscription[] = [];
  movieList = new MovieList(this.configService);
  genre: Genre = new Genre();
  count = 0;

  constructor() { }

  ngOnInit() {
    const genreSub = this.configService.genre$.subscribe(() => {
      this.genre = this.configService.genre$.value;
    })
    this.subscriptions.push(genreSub);
  }

  nextGenre() {
    if (this.count < this.genres.genre.size - 1) {
      this.count++;
    } else {
      this.count = 0;
    }

    this.configService.setGenre(this.genres.genre.get(this.count));
  }

  addMovie(name: any, author: any, year: any, rating: any) {
    let movie = new Movie();
    movie.name = name;
    movie.author = author;
    movie.year = year;
    movie.rating = rating;
    movie.genre_id = this.genre.id;
    
    this.movieList.add(movie);
}


  addGenre(genre: any) {
    let l = new Genre();
    l.id = this.genres.genre.size;
    l.name = genre;
    this.genres.add(l);
  }
  
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
