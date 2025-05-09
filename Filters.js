import React from 'react';
import './Filters.css'; // Add styles if needed

function Filters({ filters, setFilters }) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Location"
        value={filters.location}
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
      />
      <input
        type="number"
        placeholder="Min Rent"
        value={filters.minRent}
        onChange={(e) => setFilters({ ...filters, minRent: e.target.value })}
      />
      <input
        type="number"
        placeholder="Max Rent"
        value={filters.maxRent}
        onChange={(e) => setFilters({ ...filters, maxRent: e.target.value })}
      />
      <select
        value={filters.available}
        onChange={(e) => setFilters({ ...filters, available: e.target.value })}
      >
        <option value="">Available Status</option>
        <option value="true">Available</option>
        <option value="false">Not Available</option>
      </select>
    </div>
  );
}

export default Filters;
