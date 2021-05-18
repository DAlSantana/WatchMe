import { useState } from "react";
import { Button } from "./Button";

export function SideBar(props: any) {
  const { onClick } = props;
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  return props.genres.map((genre: any) => (
    <Button
      key={String(genre.id)}
      title={genre.title}
      iconName={genre.name}
      onClick={() => {
        handleClickButton(genre.id);
      }}
      selected={selectedGenreId === genre.id}
    />
  ));
  function handleClickButton(id: any) {
    onClick(id);
    setSelectedGenreId(id);
  }
}
