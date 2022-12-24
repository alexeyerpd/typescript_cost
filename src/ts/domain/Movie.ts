import type { Buyable } from "../../types";

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly price: number,
    readonly name: string,
    readonly subtitle: string,
    readonly cover: string,
    readonly year: number,
    readonly country: string,
    readonly slogan: string,
    readonly genre: string[],
    readonly duration: number
  ) {}
}
