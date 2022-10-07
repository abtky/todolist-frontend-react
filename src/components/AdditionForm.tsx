import React, { FC, useState } from 'react';

interface Props {
  handleAddClick: (label: string) => void;
}
export const AdditionForm: FC<Props> = (props: Props) => {
  const { handleAddClick: addTask } = props;
  const [inputValue, setInputValue] = useState('');
  const handleAddClick = () => {
    addTask(inputValue);
    setInputValue('');
  };
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <input type="button" value="add" onClick={handleAddClick} />
    </>
  );
};
