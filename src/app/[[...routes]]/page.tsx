import { getProducts } from '@/app/services';
import { ProductsTable } from '@/app/components/productsTable';

export default async function ProductsPage(
  { params }: { params: { routes?: string[] } }
) {

  const category = params.routes ? params.routes[0] : null;
  const data = await getProducts({ category, offset: 0 });

  return (
    <section>
      {data?.products && (
        <ProductsTable products={data.products} paging={data.paging} category={category} />
      )}
    </section>
  );
}
