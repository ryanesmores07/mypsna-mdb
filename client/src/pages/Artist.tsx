import { type ArtistResponse, customFetch } from "@/utils";
import { type LoaderFunction, useLoaderData } from "react-router-dom";
import axios from "axios";

const key = "DfDBmgofFwSMdzLNjRAL";
const secret = "KXFRPyshHlGOKidtXcpeJPVpmcebZTUz";

export const loader: LoaderFunction = async ({ params }) => {
  const url = `https://api.discogs.com/artists/${params.artist}`;
  // const discogsUrl = `${url}&key=${key}&secret=${secret}`;

  const response = await axios(url);
  return response;
};

const Artist = () => {
  const { data } = useLoaderData() as ArtistResponse;
  console.log(data);
  return <div className=""></div>;
};
export default Artist;
