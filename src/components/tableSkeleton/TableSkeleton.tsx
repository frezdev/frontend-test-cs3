const list = [1, 2, 3, 4, 5];
export const TableSkeleton = () => {
  return (
    <>
      {list.map(item => (
        <tr key={item} className="bg-gray-100 border-b">
          <td className="px-4 py-12">
            <div className='h-7 w-28 rounded-xl bg-gray-400 animate-pulse'></div>
          </td>
          <td className="px-4 py-12 min-w-56">
            <div className='h-7 w-40 rounded-xl bg-gray-400 animate-pulse'></div>
          </td>
          <td className="px-4 py-12">
            <div className='h-7 w-28 rounded-xl bg-gray-400 animate-pulse'></div>
          </td>
          <td className="px-4 py-12">
            <div className='h-7 w-48 rounded-xl bg-gray-400 animate-pulse'></div>
          </td>
          <td className="p-4 flex justify-end">
            <div className='w-16 md:w-24 h-16 md:h-24 rounded bg-gray-400 animate-pulse'></div>
          </td>
        </tr>
      ))}
    </>
  )
}
