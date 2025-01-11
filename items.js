import React, { useState } from 'react';

function ItemListManager() {
  // State for the list of items and the input field
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Function to handle adding an item
  const handleAddItem = () => {
    if (inputValue.trim() === '') return; // Do nothing if input is empty

    setItems([...items, inputValue]); // Add the new item to the list
    setInputValue(''); // Clear the input field
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h1>Item List Manager</h1>
      <h3>Item List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter item"
        value={inputValue}
        onChange={(e) =>  setInputValue(e.target.value)}
        style={{ padding: '8px', marginRight: '10px', width: '200px' }}
      />
      <button onClick={handleAddItem} style={{ padding: '8px 16px' }}>
        + Add Item
      </button>
    </div>
    );
}

export default ItemListManager;
