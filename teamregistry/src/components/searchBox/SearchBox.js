import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--blue bg-lightest-gray"
        type="search"
        placeholder="Search employees"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
