// src/components/SearchResults.js

import React from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery();
  const searchTerm = query.get("q");

  return (
    <div className="container mt-4" style={{ paddingTop: "200px" }}>
      <h2>Search Results</h2>
      <p>Showing results for: <strong>{searchTerm}</strong></p>

      {/* You can replace this with actual filtering logic */}
      <div className="alert alert-warning mt-3">
        No exact match found. Try a different search term or check our categories!
      </div>
    </div>
  );
}

export default SearchResults;
