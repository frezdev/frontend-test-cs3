/* eslint-disable @next/next/no-img-element */
import { type Product } from '@/app/types';

export const ProductItem = ({ product } : {product: Product}) => {
  const {id, title, price, permalink, currency_id, thumbnail} = product;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{price.toLocaleString('es-AR', {currency: currency_id, style: 'currency'})}</td>
      <td>{permalink}</td>
      <td>
        <img src={thumbnail} alt={`Imagen de ${title}`} loading='lazy' />
      </td>
    </tr>
  )
}
