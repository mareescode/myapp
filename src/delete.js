import React, { useState } from 'react';

function DeleteExample() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ]);

  const handleDelete = (itemId) => {
    const updatedItems = items.filter(item => item.id !== itemId);
    setItems(updatedItems);
  };
  

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeleteExample;
