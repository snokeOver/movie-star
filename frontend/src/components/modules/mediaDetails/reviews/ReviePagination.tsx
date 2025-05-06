import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { IMeta } from "@/types";

export function ReviewPagination({
  meta,
  setPage,
}: {
  meta: IMeta;
  setPage: (page: number) => void;
}) {
  //handle right click
  const handleRightClick = () => {
    if (meta.page === meta.total) return;
    setPage(meta.page + 1);
  };

  //handle left click
  const handleLeftClick = () => {
    if (meta.page === 1) return;
    setPage(meta.page - 1);
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={handleLeftClick}
            className={`cursor-pointer ${
              meta.page !== 1 ? "hover:text-primary" : "cursor-not-allowed"
            } `}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            onClick={handleRightClick}
            className={`cursor-pointer ${
              meta.page !== meta.total
                ? "hover:text-primary"
                : "cursor-not-allowed"
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
