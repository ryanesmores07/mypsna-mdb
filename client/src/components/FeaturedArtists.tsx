import { useLoaderData, Link } from "react-router-dom";
import { type ArtistSearchResponse } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";

const FeaturedArtists = () => {
  const { pagination, results } = useLoaderData() as ArtistSearchResponse;

  return (
    <>
      <div className="container grid grid-cols-5 place-items-center mt-16">
        {results.map((result) => {
          const { cover_image, title, id } = result;
          return (
            <Link to={`artist/${id}`} key={id}>
              <Card className="m-4 w-max h-[300px]">
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
      {/* <PaginationContainer /> */}
    </>
  );
};
export default FeaturedArtists;
