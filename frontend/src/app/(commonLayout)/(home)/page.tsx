import { CardDemo } from "@/components/shared/commonCard";
import { Button } from "@/components/ui/button";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Button>Click me</Button>

      <div className="container mx-auto my-20">
        <CardDemo />
      </div>
    </div>
  );
};

export default HomePage;
