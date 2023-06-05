import React, { useState } from 'react';

const Filter = ({ search, onSearchChange }) => {
  const [searchText, setSearchText] = useState(search);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
    onSearchChange(value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
      <ul></ul>
    </div>
  );
};

export default Filter;
