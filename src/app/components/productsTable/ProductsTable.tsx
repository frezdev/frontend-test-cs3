'use client'
import { useRef, useState } from 'react';
import { Paging, Product } from '@/app/types'
import { ProductItem } from '@/app/components/productItem';
import { PaginationBar } from '@/app/components/paginationBar';
import { TableSkeleton } from '@/app/components/tableSkeleton';
import { getProducts } from '@/app/services';

const tableHeadTitles = [
  'Id',
  'Nombre',
  'Precio',
  'MercadoEnlace',
  'Imagen'
]

interface Props {
  products: Product[],
  paging: Paging,
  category: string | null
}
export const ProductsTable = ({ products, paging, category }: Props) => {
  const [curretData, setCurretData] = useState({ products, paging });
  const [pageNumber, setPageNumber] = useState(curretData.paging.offset);
  const [loading, setLoading] = useState(false);
  const tableContainer = useRef<HTMLDivElement>(null);

  const handleClickNext = async () => {
    setLoading(true);
    const data = await getProducts({ offset: pageNumber + 1, category });
    if (!data) return;
    setCurretData(data)
    setPageNumber(prev => prev + 1)
    tableContainer.current?.scroll(0, 0);
    setLoading(false);
  }

  const handleClickPrev = async () => {
    setLoading(true);
    const data = await getProducts({ offset: pageNumber - 1, category });
    if (!data) return;
    setCurretData(data)
    setPageNumber(prev => prev - 1)
    tableContainer.current?.scroll(0, 0);
    setLoading(false);
  }

  return (
    <div className='px-3'>
      <div ref={tableContainer} className="relative overflow-x-auto max-h-[calc(100dvh-156px)] shadow-md sm:rounded-sm">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-400">
            <tr>
              {tableHeadTitles.map(title => (
                <th scope="col" className='px-10 py-3' key={title}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>

            {
              loading
                ? <TableSkeleton />
                : (curretData.products?.map((product) => (
                  <ProductItem product={product} key={product.id} />
                )))
            }
          </tbody>
        </table>
      </div>
      <PaginationBar paging={curretData.paging} clickNext={handleClickNext} clickPrev={handleClickPrev} />
    </div>
  )
}