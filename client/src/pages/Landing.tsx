import { Hero, SearchSection } from "@/components";
import { customFetch } from "@/utils";
import { LoaderFunction } from "react-router-dom";

const url = "/releases";

export const loader: LoaderFunction = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch(url, { params });
  console.log(response);
  return { ...response.data, params };
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
