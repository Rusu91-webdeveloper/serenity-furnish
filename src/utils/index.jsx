import axios from "axios";
const productionUrl = "https://strapi-store-server.onrender.com/api";
// const productionUrl = "http://localhost:3000";

// CUSTOM HOOK
export const customFetch = axios.create({
  baseURL: productionUrl,
});

// For the SingleProduct,in order to have the amount of the product
export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
