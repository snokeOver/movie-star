"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpDown, SlidersHorizontal, Star, Tv, Tag } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarMobileTrigger,
  SidebarTrigger,
} from "./ui/sidebar";

import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSidebarStore } from "@/stores/sidebar";

export function MoviesSidebar({
  currentSort = "createdAt",
  currentGenre = "",
  currentRating = "",
  currentPlatform = "",
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { expanded } = useSidebarStore();

  // State for filters
  const [localFilters, setLocalFilters] = useState({
    sort: currentSort,
    genre: currentGenre,
    rating: currentRating,
    platform: currentPlatform,
  });

  // Rating value for the slider
  const [ratingValue, setRatingValue] = useState(
    currentRating ? Number.parseInt(currentRating) : 0
  );

  // Sort options
  const sortOptions = [
    { label: "createdAt", value: "createdAt" },
    { label: "Top Rated", value: "rating" },
    { label: "Most Popular", value: "viewCount" },
  ];

  // Genre options
  const genreOptions = [
    { label: "All Genres", value: "" },
    { label: "Action", value: "action" },
    { label: "Comedy", value: "comedy" },
    { label: "Drama", value: "drama" },
    { label: "Horror", value: "horror" },
    { label: "Sci-Fi", value: "sci_fi" },
    { label: "Thriller", value: "thriller" },
    { label: "Romance", value: "romance" },
    { label: "Mystery", value: "mystery" },
    { label: "Documentary", value: "documentary" },
  ];

  // Platform options
  const platformOptions = [
    { label: "All Platforms", value: "" },
    { label: "Netflix", value: "netflix" },
    { label: "Disney+", value: "disney_plus" },
    { label: "Amazon Prime", value: "amazon_prime" },
    { label: "Hulu", value: "hulu" },
    { label: "Self Hosted", value: "self_hosted" },
  ];

  // Apply filters function
  const applyFilters = (filters: Record<string, string>) => {
    const params = new URLSearchParams();

    if (filters.sort && filters.sort !== "createdAt") {
      params.set("sort", filters.sort);
    }

    if (filters.genre) {
      params.set("genre", filters.genre);
    }

    if (filters.rating && filters.rating !== "0") {
      params.set("rating", filters.rating);
    }

    if (filters.platform) {
      params.set("platform", filters.platform);
    }

    // Reset to page 1 when filters change
    params.set("page", "1");

    router.push(`${pathname}?${params.toString()}`);
  };

  // Handle filter change
  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);

    // Apply immediately
    applyFilters(newFilters);
  };

  // Handle rating change
  const handleRatingChange = (value: number) => {
    setRatingValue(value);

    // Apply immediately
    applyFilters({
      ...localFilters,
      rating: value.toString(),
    });
  };

  // Handle reset filters
  const handleResetFilters = () => {
    setLocalFilters({
      sort: "createdAt",
      genre: "",
      rating: "",
      platform: "",
    });
    setRatingValue(0);

    // Apply immediately
    applyFilters({
      sort: "createdAt",
      genre: "",
      rating: "",
      platform: "",
    });
  };

  // Get platform badge color
  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "netflix":
        return "bg-red-500 hover:bg-red-600 text-white";
      case "disney":
        return "bg-blue-600 hover:bg-blue-700 text-white";
      case "amazon":
        return "bg-blue-500 hover:bg-blue-600 text-white";
      case "hbo":
        return "bg-purple-600 hover:bg-purple-700 text-white";
      case "apple":
        return "bg-gray-800 hover:bg-gray-900 text-white";
      default:
        return "bg-primary hover:bg-primary/90 text-white";
    }
  };

  return (
    <>
      {/* Mobile Trigger */}
      <div className="container mx-auto px-4 md:px-6 py-4 lg:hidden">
        <SidebarMobileTrigger className="w-full">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters & Sorting
        </SidebarMobileTrigger>
      </div>

      {/* Sidebar */}
      <Sidebar>
        <SidebarHeader>
          <h2 className={`text-xl font-bold ${!expanded && "hidden"}`}>
            Filters
          </h2>
          <SidebarTrigger />
        </SidebarHeader>

        <SidebarContent
          className={`${expanded ? "space-y-6" : "space-y-8"} py-2`}
        >
          {/* Sort By Section */}
          <SidebarItem
            title="Sort By"
            icon={<ArrowUpDown className="h-5 w-5 text-muted-foreground" />}
          >
            <RadioGroup
              value={localFilters.sort}
              onValueChange={(value) => handleFilterChange("sort", value)}
              className="space-y-2"
            >
              {sortOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={option.value}
                    id={`sort-${option.value}`}
                  />
                  <Label
                    htmlFor={`sort-${option.value}`}
                    className="cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </SidebarItem>

          {expanded && <Separator />}

          {/* Genre Filter */}
          <SidebarItem
            title="Genre"
            icon={<Tag className="h-5 w-5 text-muted-foreground" />}
          >
            <RadioGroup
              value={localFilters.genre}
              onValueChange={(value) => handleFilterChange("genre", value)}
              className="space-y-2"
            >
              {genreOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={option.value}
                    id={`genre-${option.value}`}
                  />
                  <Label
                    htmlFor={`genre-${option.value}`}
                    className="cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </SidebarItem>

          {expanded && <Separator />}

          {/* Rating Filter */}
          <SidebarItem
            title="Rating"
            icon={<Star className="h-5 w-5 text-amber-500" />}
          >
            {expanded && (
              <>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Minimum</span>
                  <span className="font-medium">{ratingValue}+ stars</span>
                </div>
                <Slider
                  value={[ratingValue]}
                  min={0}
                  max={10}
                  step={1}
                  onValueChange={(value) => setRatingValue(value[0])}
                  onValueCommit={(value) => handleRatingChange(value[0])}
                  className="mb-2"
                />
              </>
            )}
          </SidebarItem>

          {expanded && <Separator />}

          {/* Platform Filter */}
          <SidebarItem
            title="Platform"
            icon={<Tv className="h-5 w-5 text-muted-foreground" />}
          >
            {expanded ? (
              <div className="flex flex-wrap gap-2 ">
                {platformOptions.slice(1).map((option) => (
                  <Badge
                    key={option.value}
                    className={`cursor-pointer text-white ${
                      localFilters.platform === option.value
                        ? getPlatformColor(option.value)
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                    onClick={() =>
                      handleFilterChange(
                        "platform",
                        localFilters.platform === option.value
                          ? ""
                          : option.value
                      )
                    }
                  >
                    {option.label}
                  </Badge>
                ))}
              </div>
            ) : null}
          </SidebarItem>
        </SidebarContent>

        {/* Active Filters Summary */}
        {expanded && (currentGenre || currentRating || currentPlatform) && (
          <SidebarFooter>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Active Filters</h3>
              <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto">
                {currentGenre && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {
                      genreOptions.find(
                        (option) => option.value === currentGenre
                      )?.label
                    }
                    <button
                      className="ml-1 text-xs"
                      onClick={() => handleFilterChange("genre", "")}
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {currentRating && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {currentRating}+ Stars
                    <button
                      className="ml-1 text-xs"
                      onClick={() => handleRatingChange(0)}
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {currentPlatform && (
                  <Badge
                    className={`flex items-center gap-1 ${getPlatformColor(
                      currentPlatform
                    )}`}
                  >
                    {
                      platformOptions.find(
                        (option) => option.value === currentPlatform
                      )?.label
                    }
                    <button
                      className="ml-1 text-xs"
                      onClick={() => handleFilterChange("platform", "")}
                    >
                      ×
                    </button>
                  </Badge>
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleResetFilters}
                className="w-full mt-2"
              >
                Reset All Filters
              </Button>
            </div>
          </SidebarFooter>
        )}
      </Sidebar>
    </>
  );
}
