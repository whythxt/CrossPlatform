import { Genre } from "./Genre";

export class GenreList {
    genre = new Map();

    constructor() {
        this.genre.set(0, { id: 0, name: "Драма" });
        this.genre.set(1, { id: 1, name: "Біографія" });
    }

    add(genre: Genre) {
        this.genre.set(genre.id, { id: genre.id, name: genre.name });
    }
}