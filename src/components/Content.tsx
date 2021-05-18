import { MovieCard } from "./MovieCard";

export function Content(props: any) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {props.selectedGenre}</span>
      </span>
      <main>
        <div className="movies-list">
          {props.movies.map((movie: any) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </header>
  );
}
