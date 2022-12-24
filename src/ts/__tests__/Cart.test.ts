import Cart from "../service/Cart";

test("new card should be empty", () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test("card should be added", () => {
  const cart = new Cart();

  cart.add({ id: 100, name: "Name", price: 100 });
  expect(cart.items.length).toBe(1);
});

test("card should be removed", () => {
  const cart = new Cart();

  cart.add({ id: 100, name: "Name", price: 100 });
  expect(cart.items.length).toBe(1);

  cart.remove(100)
  expect(cart.items.length).toBe(0);
});

test("card should be calc sum", () => {
  const cart = new Cart();

  cart.add({ id: 100, name: "Name", price: 100 });
  cart.add({ id: 101, name: "Name2", price: 250 });
  cart.add({ id: 102, name: "Name3", price: 420 });

  expect(cart.calcSum()).toBe(770);
});

test("card should be calc sum with discount", () => {
  const cart = new Cart();

  cart.add({ id: 100, name: "Name", price: 100 });
  cart.add({ id: 101, name: "Name2", price: 250 });
  cart.add({ id: 102, name: "Name3", price: 420 });

  expect(cart.calcSumWithDiscount(20)).toBe(616);
});
