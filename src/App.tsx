import React, { ChangeEvent, useEffect, useState } from "react";
import { ContentDisplay } from "./components/ContentDisplay";
import Options from "./components/Options";
import { fetchContentData } from "./services/api";
import copy from 'copy-to-clipboard';
function App() {
  const [contentCount, setContentCount] = useState(0);
  const [contentType, setContentType] = useState("html");
  const [data, setData] = useState("");

  // ui re-rendering when content count changes
  useEffect(() => {
    if (contentCount === 0) {
      // small delay
      setTimeout(() => setData(""), 500);
      return;
    }
    fetchContentData(contentCount, contentType).then((data) => {
      setData(data);
    });
  }, [contentCount, contentType]);

  // Count change handler
  const changeCountHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setContentCount(Number(value));
  };

  const changeTypeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setContentType(event.target.value);
  };

  return (
    <div className='flex justify-center p-10 box-border overflow-hidden'>
      <div
        className={`w-[760px] p-4 border border-slate-300 rounded shadow-md box-border overflow-scroll ${
          data.length > 0 && "h-[80vh]"
        }`}
      >
        <h2 className='text-3xl font-semibold text-center mb-2'>
          Text Generator
        </h2>
        <Options
          onTypeChangeHandler={changeTypeHandler}
          onCountChangeHandler={changeCountHandler}
        />

        {/* text content */}
        {data.length > 0 && <ContentDisplay content={data} />}

        {data.length !== 0 && (
          <div className='flex justify-center'>
            <button
              className={`block border border-yellow-400 rounded-md bg-yellow-400 hover:bg-yellow-500 px-2 py-1 font-normal my-4 tran`}
              onClick={() => {
                copy(data)
              }}
            >
              Copy text to clipboard!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
