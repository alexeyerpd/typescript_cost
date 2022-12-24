import type { Buyable } from "../../types/";

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  remove(id: number) {
    this._items = this.items.filter((item) => item.id !== id);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  calcSum() {
    return this.items.reduce((sum, { price }) => sum + price, 0);
  }

  calcSumWithDiscount(discont: number) {
    return (
      this.items.reduce((sum, { price }) => sum + price, 0) *
      (1 - discont / 100)
    );
  }
}
