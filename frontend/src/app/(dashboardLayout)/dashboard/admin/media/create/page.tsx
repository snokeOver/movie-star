import CreateMediaForm from "@/components/modules/admin/mediaLibrary/CreateMedia";
import React from "react";

const CreateMediaPage = () => {
  return (
    <div className="min-h-[100vh] flex-1 rounded-xl  md:min-h-min  flex-col items-center gap-10  bg-muted/50 px-5 py-8 lg:px-15 backdrop-blur-md ">
      <CreateMediaForm />
    </div>
  );
};

export default CreateMediaPage;
