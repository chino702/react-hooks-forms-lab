import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

const ItemForm = ({ onItemFormSubmit }) => {
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('Produce');

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setItemCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };

    if (typeof onItemFormSubmit === 'function') {
      onItemFormSubmit(newItem);
    }

    setItemName('');
    setItemCategory('Produce');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="itemName">
        Name:
        <input id="itemName" type="text" value={itemName} onChange={handleNameChange} />
      </label>
      <br />
      <label htmlFor="itemCategory">
        Category:
        <select id="itemCategory" value={itemCategory} onChange={handleCategoryChange}>
          <option value="">Select Category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <br />
      <button type="submit">Add to List</button>
    </form>
  );
};

ItemForm.propTypes = {
  onItemFormSubmit: PropTypes.func.isRequired,
};

export default ItemForm;
