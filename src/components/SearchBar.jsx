
import React from 'react';

export default function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search expenses..."
      onChange={(e) => onSearch(e.target.value)} // passing the search term to the parent
      className="search-input"
      style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
    />
  );
}
