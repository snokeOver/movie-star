"use client";

import { useState } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MoviesFilters } from "./movies-filter";

export function MobileFiltersButton({
  currentSort = "recent",
  currentGenre = "",
  currentRating = "",
  currentPlatform = "",
}) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-full flex gap-2 justify-center">
          <Filter className="h-4 w-4" />
          Filters & Sorting
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Filters & Sorting</SheetTitle>
          <SheetDescription>
            Refine your movie and series search
          </SheetDescription>
        </SheetHeader>
        <div className="py-6">
          <MoviesFilters
            currentSort={currentSort}
            currentGenre={currentGenre}
            currentRating={currentRating}
            currentPlatform={currentPlatform}
            isMobile={true}
            onClose={() => setOpen(false)}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
