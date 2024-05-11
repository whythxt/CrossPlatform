import { Injectable } from '@angular/core';
import { GenreList } from './GenreList';
import { Genre } from './Genre';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  currentGenre = DEFAULT_GENRE;
  genre$: BehaviorSubject<Genre> = new BehaviorSubject<Genre>(DEFAULT_GENRE);

  setGenre(genre: Genre) {
    this.genre$.next(genre);
  }

  constructor() { }
}

var genreList = new GenreList();
const DEFAULT_GENRE = genreList.genre.get(0);
