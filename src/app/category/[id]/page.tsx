// src/app/category/[id]/page.tsx

import { Params } from "../../../types/base.interface";

  export default function CategoryDetail({ params }: Params) {
    const { id } = params; // Access the dynamic route parameter
  
    return (
      <div>
        <h1>Category Detail</h1>
        <p>Details for category ID: {id}</p>
      </div>
    );
  }