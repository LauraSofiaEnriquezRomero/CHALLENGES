import React, { useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const newCategory = inputValue.trim();
    
    if (newCategory !== '') {
      onAddCategory(newCategory);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};
