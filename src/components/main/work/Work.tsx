import React from "react";
import UploadGallery from "./ImageGallery";

const Work: React.FC<{ title: string }> = ({ title = "Work" }) => {
  return (
    <div className="main p-0 h-full">
      <UploadGallery />
    </div>
  );
};

export default Work;
