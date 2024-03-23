import { ProductsTable } from '@/app/components/productsTable';
import { getProducts, getCategories } from '@/app/services';
export default async function ProductsPage(
  { params }: { params: { routes?: string[] } }
) {

  const category = params.routes ? params.routes[0] : null;

  const products = await getProducts({ category });
  console.log({ params });

  getCategories(products)

  return (
    <main className='grid grid-col'>
      <aside>

      </aside>
      {products && (
        <ProductsTable products={products} />
      )}
    </main>
  );
}

