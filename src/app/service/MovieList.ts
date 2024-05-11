import { ConfigService } from "./config.service";
import { Movie } from "./Movie";

export class MovieList {
    private movieList = new Array(); 
    private searchmovie = new Array();

    searchMovieResult: string[] = [];

    langSub = this.configService.genre$.subscribe(() => {
        let lang = this.configService.genre$.value;
        this.search(lang.id);
    })

    constructor(private configService: ConfigService) {
        let movie = new Movie();
        movie.name = "Втеча з Шоушенка";
        movie.genre_id = 0;
        movie.author = "Френк Дарабонт";
        movie.year = 1994;
        movie.rating = 9;
        this.add(movie);

        let movie1 = new Movie();
        movie1.name = "Оппенгеймер";
        movie1.genre_id = 1;
        movie1.author = "Крістофер Нолан";
        movie1.year = 2023;
        movie1.rating = 8;
        this.add(movie1);

        this.search(0);
    }

    add(movie: Movie) {
        this.movieList.push(movie);
        this.search(movie.genre_id);
    }

    search(genre_id: number) {
        this.searchmovie = this.movieList.filter((movie) => {
            return movie.genre_id == genre_id;
        })

        this.searchMovieResult = [];
        this.searchmovie.forEach(el => {
            this.searchMovieResult.push('Назва: ' + el.name);
            this.searchMovieResult.push('Автор: ' + el.author);
            this.searchMovieResult.push('Рік: ' + el.year);
            this.searchMovieResult.push('Рейтинг: ' + el.rating);
        })
    }
}