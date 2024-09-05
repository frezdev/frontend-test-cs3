'use client'
import { useState } from "react";
import Link from "next/link";
import { ListOfCategories } from "../ListOfCategories";
import { type Category } from "@/types";

export const ListCategoryItem = ({
  category,
  categories,
}: {
  category: Category;
  categories: Category[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const parentCategories = categories.filter(
    categoryItem => category.id === categoryItem.parentCategoryId
  );

  const hasChildCategories = parentCategories.length > 0;

  return (
    <li key={category.id} className='ml-7 mb-2'>
      {hasChildCategories && (
        <button onClick={handleClick} className="border mr-2 border-gray-400 leading-none rounded w-5 h-5">
          {isOpen ? '–' : '+'}
        </button>
      )}
      <Link href={category.id}>{category.name}</Link>
      {isOpen && (
        <ListOfCategories
          categories={categories}
          parentCategory={category.id}
        />
      )}
    </li>
  )
}