import React, { ChangeEvent, useState, useEffect } from 'react';
import { CategoryDropdownProps } from '../interfaces/common.interface';
import { categories } from '../constants/common.constant';

const CCategoryDropdown = ({ postCategory, setPostCategory }: CategoryDropdownProps) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    setSelectedCategory(postCategory);
  }, [postCategory]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setPostCategory(e.target.value);
  };

  return (
    <div>
      <select
        className="select select-bordered w-full max-w-[150px] bg-transparent"
        value={selectedCategory}
        onChange={(e) => handleChange(e)}
      >
        <option value="" disabled>Select a category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CCategoryDropdown;
