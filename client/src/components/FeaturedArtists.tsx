import { useLoaderData, Link } from "react-router-dom";
import { type ArtistSearchResponse } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import PageBtnContainer from "./PageBtnContainer";
import { getUserLanguage } from '../lib/languageDetect';

const FeaturedArtists = () => {
  const { pagination, results } = useLoaderData() as ArtistSearchResponse;

  const {
    pages: numOfPages,
    per_page: artists,
    items: totalPages,
  } = pagination;

  const userLanguage = getUserLanguage();
  const isJp = userLanguage === "ja";

  return (
    <section className="px-24">
      {isJp ? (
      <h5 className="text-2xl">
        {totalPages.toLocaleString()} 結果
      </h5>
      ) : (
        <h5 className="text-2xl">
        {totalPages.toLocaleString()} Result{artists > 1 && "s"}
      </h5>
      )}
      <div className="container grid gap-4 md:grid-cols-3 lg:grid-cols-5 place-items-center mt-16 mb-12">
        {results.map((result) => {
          const { cover_image, title, id } = result;
          return (
            <Link to={`artist/${id}`} key={id}>
              <Card className="m-4 w-full h-[300px] ">
                <CardContent className="p-4">
                  <img
                    src={cover_image}
                    alt={title}
                    className="h-64 w-full md:h-48 md:w-48 rounded-md object-cover mb-4"
                  />
                  <div>
                    <h2 className="text-xl font-semibold capitalize max-w-[15ch]">
                      {title}
                    </h2>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </section>
  );
};
export default FeaturedArtists;
