// src/app/category/index.tsx

import Link from "next/link";
import { Category as CategoryType } from "../../types/category.interface";

export default function Category() {
  const categories: CategoryType[] = [
    { id: "1", name: "Fruits" },
    { id: "2", name: "Vegetables" },
  ];

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
