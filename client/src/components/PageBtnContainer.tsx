import { useLocation, Link, useNavigate } from "react-router-dom";
import { useLandingContext } from "@/pages/Landing";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PageBtnContainer = () => {
  const {
    data: {
      pagination: { page: currentPage, pages: numOfPages, urls },
    },
  } = useLandingContext();

  const { search, pathname } = useLocation();
  console.log(search);
  console.log(pathname);
  const navigate = useNavigate();
  const pages = Array.from({ length: numOfPages }, (_, index) => index + 1);

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    console.log(searchParams);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <PaginationLink
        onClick={() => handlePageChange(pageNumber)}
        key={pageNumber}
        isActive={activeClass}
      >
        {pageNumber}
      </PaginationLink>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    // first page
    pageButtons.push(
      addPageButton({ pageNumber: 1, activeClass: currentPage === 1 })
    );
    // dots
    if (currentPage > 3) {
      pageButtons.push(<span key="dots-1">...</span>);
    }
    // one before current page
    if (currentPage !== 1 && currentPage !== 2) {
      pageButtons.push(
        addPageButton({ pageNumber: currentPage - 1, activeClass: false })
      );
    }
    // current page
    if (currentPage !== 1 && currentPage !== numOfPages) {
      pageButtons.push(
        addPageButton({ pageNumber: currentPage, activeClass: true })
      );
    }
    // one after current page
    if (currentPage !== numOfPages && currentPage !== numOfPages - 1) {
      pageButtons.push(
        addPageButton({ pageNumber: currentPage + 1, activeClass: false })
      );
    }
    // dots
    if (currentPage < numOfPages - 2) {
      pageButtons.push(<span key="dots+1">...</span>);
    }
    // last page
    pageButtons.push(
      addPageButton({
        pageNumber: numOfPages,
        activeClass: currentPage === numOfPages,
      })
    );
    return pageButtons;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              let prevPage = currentPage - 1;
              if (prevPage < 1) prevPage = numOfPages;
              handlePageChange(prevPage);
            }}
          />
        </PaginationItem>
        <PaginationItem>{renderPageButtons()}</PaginationItem>
        <PaginationItem>
          <PaginationNext
            onClick={() => {
              let nextPage = currentPage + 1;
              if (nextPage > numOfPages) nextPage = 1;
              handlePageChange(nextPage);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
export default PageBtnContainer;
