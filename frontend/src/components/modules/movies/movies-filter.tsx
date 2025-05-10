"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

export function MoviesFilters({
  currentSort = "recent",
  currentGenre = "",
  currentRating = "",
  currentPlatform = "",
  isMobile = false,
  onClose = () => {},
}) {
  const router = useRouter();
  const pathname = usePathname();

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
    { label: "Recent", value: "recent" },
    { label: "Top Rated", value: "top-rated" },
    { label: "Most Popular", value: "most-liked" },
  ];

  // Genre options
  const genreOptions = [
    { label: "All Genres", value: "" },
    { label: "Action", value: "action" },
    { label: "Comedy", value: "comedy" },
    { label: "Drama", value: "drama" },
    { label: "Horror", value: "horror" },
    { label: "Sci-Fi", value: "sci-fi" },
    { label: "Thriller", value: "thriller" },
  ];

  // Platform options
  const platformOptions = [
    { label: "All Platforms", value: "" },
    { label: "Netflix", value: "netflix" },
    { label: "Disney+", value: "disney" },
    { label: "Amazon Prime", value: "amazon" },
    { label: "HBO Max", value: "hbo" },
    { label: "Apple TV+", value: "apple" },
  ];

  // Apply filters function
  const applyFilters = (filters: Record<string, string>) => {
    const params = new URLSearchParams();

    if (filters.sort && filters.sort !== "recent") {
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

    if (isMobile && onClose) {
      onClose();
    }
  };

  // Handle filter change
  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);

    if (!isMobile) {
      // Apply immediately on desktop
      applyFilters(newFilters);
    }
  };

  // Handle rating change
  const handleRatingChange = (value: number) => {
    setRatingValue(value);

    if (!isMobile) {
      // Apply immediately on desktop
      applyFilters({
        ...localFilters,
        rating: value.toString(),
      });
    }
  };

  // Handle apply filters (for mobile)
  const handleApplyFilters = () => {
    applyFilters({
      ...localFilters,
      rating: ratingValue.toString(),
    });
  };

  // Handle reset filters
  const handleResetFilters = () => {
    setLocalFilters({
      sort: "recent",
      genre: "",
      rating: "",
      platform: "",
    });
    setRatingValue(0);

    if (!isMobile) {
      // Apply immediately on desktop
      applyFilters({
        sort: "recent",
        genre: "",
        rating: "",
        platform: "",
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Sort By Section */}
      <div className="space-y-4">
        <h3 className="font-medium">Sort By</h3>
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
              <Label htmlFor={`sort-${option.value}`}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <Separator />

      {/* Genre Filter */}
      <div className="space-y-4">
        <h3 className="font-medium">Genre</h3>
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
              <Label htmlFor={`genre-${option.value}`}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <Separator />

      {/* Rating Filter */}
      <div className="space-y-4">
        <div className="flex justify-between">
          <h3 className="font-medium">Minimum Rating</h3>
          <span>{ratingValue}+ stars</span>
        </div>
        <Slider
          value={[ratingValue]}
          min={0}
          max={10}
          step={1}
          onValueChange={(value) => setRatingValue(value[0])}
          onValueCommit={(value) => handleRatingChange(value[0])}
        />
      </div>

      <Separator />

      {/* Platform Filter */}
      <div className="space-y-4">
        <h3 className="font-medium">Streaming Platform</h3>
        <RadioGroup
          value={localFilters.platform}
          onValueChange={(value) => handleFilterChange("platform", value)}
          className="space-y-2"
        >
          {platformOptions.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <RadioGroupItem
                value={option.value}
                id={`platform-${option.value}`}
              />
              <Label htmlFor={`platform-${option.value}`}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Active Filters Summary */}
      {(currentGenre || currentRating || currentPlatform) && (
        <div className="pt-4">
          <h3 className="font-medium mb-2">Active Filters</h3>
          <div className="flex flex-wrap gap-2">
            {currentGenre && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {
                  genreOptions.find((option) => option.value === currentGenre)
                    ?.label
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
              <Badge variant="secondary" className="flex items-center gap-1">
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
              <Badge variant="secondary" className="flex items-center gap-1">
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
        </div>
      )}

      {/* Mobile-only buttons */}
      {isMobile && (
        <div className="flex gap-2 pt-4">
          <Button
            variant="outline"
            className="flex-1"
            onClick={handleResetFilters}
          >
            Reset
          </Button>
          <Button className="flex-1" onClick={handleApplyFilters}>
            Apply Filters
          </Button>
        </div>
      )}

      {/* Desktop-only reset button */}
      {!isMobile && (currentGenre || currentRating || currentPlatform) && (
        <Button
          variant="outline"
          size="sm"
          onClick={handleResetFilters}
          className="w-full"
        >
          Reset All Filters
        </Button>
      )}
    </div>
  );
}
