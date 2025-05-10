"use client";

import { Separator } from "@/components/ui/separator";
import { useSidebarStore } from "@/stores/sidebar";

export function MoviesHeader() {
  const { expanded } = useSidebarStore();

  return (
    <div className="space-y-2 pb-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Movies & Series</h1>
      </div>
      <p className="text-muted-foreground">
        Browse all movies and TV series from our curated collection.
      </p>
      <Separator className="my-4" />
    </div>
  );
}
