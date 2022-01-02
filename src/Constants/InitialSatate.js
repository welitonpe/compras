export const initialState = {
  product: "",
  unitValue: 0,
  quantity: 0,
  totalValue: 0,
};
export const initialProduct = [
  {
    product: "lorem Impsum",
    unitValue: 2.5,
    quantity: 5,
    totalValue: 5 * 2.5,
  },
];

const Constants = { initialState, initialProduct };
export default Constants;
