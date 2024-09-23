// src/app/category/index.tsx
"use client"
import Link from "next/link";
import { Category as CategoryType } from "@/interfaces";
import React, { useState } from 'react';
import Sidebar from './Sidebar';

export default function Category() {
  const categories: CategoryType[] = [
    { id: "1", name: "Fruits" },
    { id: "2", name: "Vegetables" },
  ];
  const [filters, setFilters] = useState<{ priceRange: number[]; rating: number }>({
    priceRange: [0, 100],
    rating: 0,
  });

  const handleFilterChange = (newFilters: { priceRange: number[]; rating: number }) => {
    setFilters(newFilters);
    // Implement your filtering logic here, e.g., fetching filtered data
  };
    return (
      <div className="flex">
        <Sidebar onFilterChange={handleFilterChange} />
        <main className="ml-64 p-4">
          <h1 className="text-2xl font-bold">Category Page</h1>
          <p className="mt-4">
            Filters: Price Range - ${filters.priceRange[0]} to ${filters.priceRange[1]}, Rating - {filters.rating} stars
          </p>
          {/* Render your filtered items here */}
        </main>
      </div>
    );

  
}
