import { type ArtistResponse, customFetch } from "@/utils";
import { type LoaderFunction, useLoaderData } from "react-router-dom";
import axios from "axios";

const key = "DfDBmgofFwSMdzLNjRAL";
const secret = "KXFRPyshHlGOKidtXcpeJPVpmcebZTUz";

export const loader: LoaderFunction = async ({ params }) => {
  const url = `https://api.discogs.com/artists/${params.artist}`;
  // const discogsUrl = `${url}&key=${key}&secret=${secret}`;

  const response = await axios(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Discogs key=${key}, secret=${secret}`,
    },
  });
  return response;
};

const Artist = () => {
  const { data } = useLoaderData() as ArtistResponse;
  console.log(data);
  const {
    name,
    id,
    images,
    members,
    profile,
    releases_url,
    resource_url,
    aliases,
    uri,
    urls,
  } = data;
  return (
    <div className="grid grid-cols-[auto,1fr,.4fr] gap-4 py-8 px-24">
      <div className="w-32">
        <img src={images[0].uri} alt={name} />
      </div>
      <div>
        <h1 className="font-semibold">{name}</h1>
        <table className="table-auto">
          <tbody className="">
            <tr>
              <th className="text-left pr-12 py-2 align-top ">Profile:</th>
              <td className="text-left pr-12 py-2 align-top">
                <p>{profile}</p>
              </td>
            </tr>
            <tr className="max-w-8">
              <th className="text-left pr-12 py-2 align-top ">Sites:</th>
              <td className="text-left pr-12 py-2 align-top">
                <div className="flex flex-wrap">
                  {urls.map((url, index) => {
                    return (
                      <div key={url}>
                        <a
                          key={url}
                          href={url}
                          className="text-blue-600 hover:underline break-words"
                        >
                          {url}
                        </a>
                        {index !== urls.length - 1 && <span>,&nbsp;</span>}
                      </div>
                    );
                  })}
                </div>
              </td>
            </tr>
            <tr>
              <th className="text-left pr-12 py-2 align-top">Aliases:</th>
              <td className="text-left pr-12 py-2 align-top">
                <div>
                  {aliases.map((alias) => {
                    return <p>{alias.name}</p>;
                  })}
                </div>
              </td>
            </tr>
            <tr>
              <th className="text-left pr-12 py-2 align-top">Members:</th>
              <td className="text-left pr-12 py-2 align-top">
                <p>{profile}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Artist;
