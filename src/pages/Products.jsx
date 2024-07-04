import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";
// const url = "/data";
export const loader = async ({ request }) => {
  // !In this way , i can get the value of the search input,i can do forr al my input and use the same aproach
  // const search = params.get("search")
  // const params = new URL(request.url).searchParams;

  // ! With this aproach i can get all the data and i don't need to get one by one
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  console.log(request);
  // by passing the params after url we pass all the inputs values to the URL  for EXample  CUstomFetch + url + params  will become this URL "http://localhost:5173/products?search=&category=all&company=all&order=a-z&price=100000"
  const response = await customFetch(url, {
    params,
  });

  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
