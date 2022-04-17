interface Tile {
  img: Image;
  title: string;
  link: string;
  description: string;
}

interface Image {
  url: string;
  alt: string;
}

export type { Tile, Image };
