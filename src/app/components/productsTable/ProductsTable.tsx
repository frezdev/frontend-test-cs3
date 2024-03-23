import { Product } from '@/app/types'
import { ProductItem } from '@/app/components/productItem';

export const ProductsTable = async ({ products }: { products: Product[] }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>MercadoEnlace</th>
          <th>Imagen</th>
        </tr>
      </thead>
      <tbody>
        {products?.map(product => (
          <ProductItem product={product} key={product.id} />
        ))}
      </tbody>
    </table>
  )
}
