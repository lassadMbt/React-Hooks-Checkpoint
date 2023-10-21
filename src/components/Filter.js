// Filter.js
import React from 'react';

function Filter({ filter, setFilter }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={filter.title}
        onChange={(e) => setFilter({ ...filter, title: e.target.value })}
      />
      <input
        type="number"
        placeholder="Min Rating"
        value={filter.rating}
        onChange={(e) => setFilter({ ...filter, rating: parseFloat(e.target.value) })}
      />
    </div>
  );
}

export default Filter;
