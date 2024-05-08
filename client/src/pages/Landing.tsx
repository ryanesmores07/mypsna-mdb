import { Hero, SearchSection } from "@/components";
import { customFetch } from "@/utils";
import { LoaderFunction } from "react-router-dom";



// export const loader: LoaderFunction = async ({ request }) => {
//   const params = Object.fromEntries([
//     ...new URL(request.url).searchParams.entries(),
//   ]);

//   const response = await customFetch(url, { params });
//   return { ...response.data, params };
// };
export const loader: LoaderFunction = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch("/getAllData");
  console.log(response);

  return null;
};

const Landing = () => {
  return (
    <>
      <Hero />
      <SearchSection />
    </>
  );
};
export default Landing;
