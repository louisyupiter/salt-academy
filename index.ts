import express, { Request, Response } from "express";


const app: express.Application = express();
const PORT = 8000;

function add(firstNumber: number, secondNumber: number): number {
  return firstNumber + secondNumber;
}

interface Song {
  title: string | number,
  singer: string;
  duration: number;

  getDurationInMinutes(): string;
}

class AlbumClass implements Song {
  title: string;
  singer: string;
  duration: number;
  year: number;

  constructor(title: string, singer: string, duration: number, year: number) {
    this.title = title;
    this.singer = singer;
    this.duration = duration;
    this.year = year;
  }

  getTitle() {
    return this.title + ' ' + this.year;

  }

  getDurationInMinutes() {
    return this.duration + " hours";
  }
}

class SongClass implements Song {
  title: string;
  singer: string;
  duration: number;
  year: number;

  constructor(title: string, singer: string, duration: number, year: number) {
    this.title = title;
    this.singer = singer;
    this.duration = duration;
    this.year = year;
  }

  getTitle() {
    return this.title + ' ' + this.year;

  }

  getDurationInMinutes() {
    return this.duration + " minutes";
  }
}

app.get("/", (req: Request, res: Response) => {

  const songClass: AlbumClass = new AlbumClass("The summer", "Singer", 120, 2020);

  // render the index templat
  res.send(songClass.getDurationInMinutes());
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});