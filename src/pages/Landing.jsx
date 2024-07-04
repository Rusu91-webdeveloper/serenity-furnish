import { Hero, FeaturedProducts } from "../components/index";
// customFetch is the customHook i created
import { customFetch } from "../utils";

const url = "/products?featured=true";
// const url = "/data?featured=true";
//! Create the async function and use the CUstomHook in order to fetch the data which looks like this
//? "https://strapi-store-server.onrender.com/api/products?featured=true" => customFetch + url
export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
