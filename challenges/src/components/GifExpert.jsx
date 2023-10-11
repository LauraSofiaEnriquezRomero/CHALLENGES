import React, { useState } from 'react';
import { GifGrid } from './GifGrid';
import { AddCategory } from './AddCategory';

export const GifExpert = () => {
  const [categories] = useState(["panda"]);

  const onAddCategory = (category) => {
    console.log(`Adding category: ${category}`);
  };

  return (
    <>
      <h1>GifExpert</h1>
      <AddCategory onAddCategory={onAddCategory} />

      {categories.map((category, key) => (
        <GifGrid category={category} key={key} />
      ))}
    </>
  );
};
