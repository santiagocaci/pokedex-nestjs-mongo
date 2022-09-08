export interface PokeResponse {
  count: number;
  next: string;
  previous: null | string;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
