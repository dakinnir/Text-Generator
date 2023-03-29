import React, { ChangeEvent } from "react";

type OptionsPropType = {
  onCountChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  onTypeChangeHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Options = ({
  onTypeChangeHandler,
  onCountChangeHandler,
}: OptionsPropType) => {
  return (
    <div>
      <div className='flex flex-col my-4 w-52 gap-1'>
        <p className='text-slate-600'>Select the content type:</p>
        <select
          name='type'
          id='type'
          className='border rounded-sm outline-none'
          onChange={onTypeChangeHandler}
        >
          <option value='html'>HTML</option>
          <option value='text'>Text</option>
        </select>
      </div>
      <div className='flex flex-row gap-5 my-4'>
        <p className='text-slate-600'>Paragraphs:</p>

        <input
          type='number'
          id='count'
          name='count'
          min={0}
          className='w-24 border pl-1 rounded-sm'
          onChange={onCountChangeHandler}
        />
      </div>
    </div>
  );
};

export default Options;
