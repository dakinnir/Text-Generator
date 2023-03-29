import React from "react";

type ContentDisplayType = {
  content: String;
};

export const ContentDisplay = ({ content }: ContentDisplayType) => {
  return (
    <div className='border border-slate-300 p-2 rounded-md overflow-scroll h-3/6 box-border mb-2 text-[0.9rem] hover:scale-x-100'>
      {content}
    </div>
  );
};
