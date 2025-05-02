import ManageMedia from "@/components/modules/admin/mediaLibrary/ManageMedia";
import React from "react";

const ManageMediaPage = async () => {
  return (
    <div className="min-h-[100vh] flex-1 rounded-xl  md:min-h-min  flex-col items-center gap-10  bg-muted/20 px-5 py-8 lg:px-15 backdrop-blur-md ">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-lg font-bold uppercase lg:text-2xl">
          Manage Media Library
        </h1>

        <ManageMedia />
      </div>
    </div>
  );
};

export default ManageMediaPage;
