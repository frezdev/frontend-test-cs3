import { type Category } from "@/app/types";
import { ListCategoryItem } from "./ListCategoryItem";

interface Props {
  categories: Category[]
  parentCategory?: string | null
}

export const ListOfCategories = ({ categories, parentCategory = null }: Props) => {

  const parentCategories = categories.filter(
    categoryItem => parentCategory === categoryItem.parentCategoryId
  );

  return (
    <ul className="my-2">
      {parentCategories.map(category => (
        <ListCategoryItem
          key={category.id}
          categories={categories}
          category={category}
        />
      ))}
    </ul>
  )
}
