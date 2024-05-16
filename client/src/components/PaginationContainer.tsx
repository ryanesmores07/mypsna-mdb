import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  constructUrl,
  constructPrevOrNextUrl,
  ArtistSearchResponse,
} from "@/utils";

import { useLoaderData, useLocation } from "react-router-dom";

const PaginationContainer = () => {
  const { pagination } = useLoaderData() as ArtistSearchResponse;
  const { pages: pageCount, page } = pagination;
  const { search, pathname } = useLocation();

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  if (pageCount < 2) return null;

  const renderPagination = pages.map((pageNumber) => {
    const isActive = pageNumber === page;
    const url = constructUrl({ pageNumber, search, pathname });

    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink to={url} isActive={isActive}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  });

  const { prevUrl, nextUrl } = constructPrevOrNextUrl({
    currentPage: page,
    pageCount,
    search,
    pathname,
  });
  return (
    <Pagination className="mt-16">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={prevUrl} />
        </PaginationItem>
        {renderPagination}
        <PaginationItem>
          <PaginationNext to={nextUrl} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
export default PaginationContainer;
