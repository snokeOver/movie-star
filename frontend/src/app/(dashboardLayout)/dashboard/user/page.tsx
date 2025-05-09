import UpdateProfile from "@/components/modules/user/UpdateProfile";
import React from "react";

const UpdateUserProfilePage = () => {
  return (
    <div className="min-h-[100vh] flex-1 rounded-xl  md:min-h-min  flex-col items-center gap-10  bg-muted/50 px-5 py-8 lg:px-15 backdrop-blur-md ">
      <UpdateProfile />
    </div>
  );
};

export default UpdateUserProfilePage;
