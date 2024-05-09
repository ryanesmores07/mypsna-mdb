import React, { useState } from 'react';
import { Form } from "react-router-dom";

interface SearchBarProps {
  onSearch: (query: string) => void; // Modify the onSearch prop
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query); // Pass additionalData to onSearch
  };

  return (
    <Form className="mx-auto w-64 mt-6" onSubmit={handleSubmit}>
      <input className='text-black'
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button className='ml-2' type="submit">Search</button>
    </Form>
  );
};

export default SearchBar;
