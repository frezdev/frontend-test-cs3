import { type Product, type ProductCategory, type PathFromRoot } from '@/app/types';
import { SELLER_ID, API_URL } from '@/app/config'
import { log } from 'console';

interface SearchParams {
  limit?: number
  offset?: number
  category?: string | null
}

interface Category extends PathFromRoot {
  parentCategoryId: string | null
}

export const getProducts = async ({ limit = 10, offset = 0, category }: SearchParams = {}): Promise<Product[] | null> => {
  const url = new URL(`${API_URL}/sites/MLA/search`);

  if (!SELLER_ID) throw Error('Missing seller id');
  url.searchParams.append('seller_id', SELLER_ID);

  if (category) url.searchParams.append('category', category);

  url.searchParams.append('limit', String(limit));
  url.searchParams.append('offset', String(offset));

  try {
    const res = await fetch(url);
    log(url)
    if (!res.ok) throw new Error(await res.text());

    const data = await res.json() as { results: Product[] }

    return data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getCategories = async (products: Product[] | null) => {
  const url = 'https://api.mercadolibre.com/categories';
  const idsList = Array.from(new Set(
    products?.map(product => product.category_id)
  ));

  const categoriesLists = await Promise.all(
    idsList.map(id => (
      fetch(`${url}/${id}`)
        .then(res => res.json() as Promise<ProductCategory>)
        .then(res => res.path_from_root)
    ))
  )

  const categories: Record<string, Category> = {};
  for (const categoriesList of categoriesLists) {
    categoriesList.forEach((category, index) => {
      const parentCategory = categoriesList[index - 1];
      const parentCategoryId = parentCategory ? parentCategory.id : null;
      categories[category.id] = { ...category, parentCategoryId }

      return Object.values(categories);
    })
  }
}