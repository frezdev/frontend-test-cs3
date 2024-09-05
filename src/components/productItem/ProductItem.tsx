/* eslint-disable @next/next/no-img-element */
import { type Product } from '@/types';

export const ProductItem = ({ product }: { product: Product }) => {
  const { id, title, price, permalink, currency_id, thumbnail } = product;

  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <td className="px-4 py-2 font-semibold text-gray-900">
        {id}
      </td>
      <td className="px-4 py-2 font-semibold text-gray-900 min-w-56">
        {title}
      </td>
      <td className="px-4 py-2 font-semibold text-gray-900">
        {price.toLocaleString('es-AR', { currency: currency_id, style: 'currency' })}
      </td>
      <td className="px-4 py-2">
        <a href={permalink} target='_blank' className="font-medium text-blue-500 hover:underline">{permalink}</a>
      </td>
      <td className="p-4">
        <img src={thumbnail} loading='lazy' className="w-16 md:w-32 max-w-full max-h-full rounded" alt={title} />
      </td>
    </tr>
  )
}