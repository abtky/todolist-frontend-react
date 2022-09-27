/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import { FC, useState } from 'react';

interface Props {
  handleAddClick: (label: string) => void;
}
export const AdditionForm: FC<Props> = (props: Props) => {
  const [inputValue, setInputValue] = useState('');
  const handleAddClick = () => {
    props.handleAddClick(inputValue);
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
