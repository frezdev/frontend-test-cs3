// 'use client'
import { Paging } from "@/types"

interface Props {
  paging: Paging;
  clickNext: () => void;
  clickPrev: () => void;
}

export const PaginationBar = ({ paging, clickNext, clickPrev }: Props) => {
  const { total, offset } = paging;

  const from = offset * 10 + 1;
  const to = Math.min((offset + 1) * 10, total);

  const isLastPage = to >= total;
  const isFirstPage = offset <= 0;

  const handleClickNext = () => {
    if (isLastPage) return;
    clickNext()
  }

  const handleClickPrev = () => {
    if (isFirstPage) return;
    clickPrev();
  }

  return (
    <div className="flex items-center gap-4 p-4">
      <span className="text-sm text-gray-700">
        <span className="font-semibold text-gray-900">{from}</span> - <span className="font-semibold text-gray-900 ">{to}</span> de <span className="font-semibold text-gray-900">{total}</span>
      </span>
      <div className="inline-flex xs:mt-0">
        <button
          onClick={handleClickPrev}
          disabled={isFirstPage}
          className="
            flex items-center justify-center px-3 h-8
            text-sm font-medium text-white bg-gray-800
            rounded-s
            hover:bg-gray-900
            disabled:hover:cursor-not-allowed
            disabled:bg-gray-800/50
          "
        >
          <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5H1m0 0 4 4M1 5l4-4" />
          </svg>
        </button>
        <button
          onClick={handleClickNext}
          disabled={isLastPage}
          className="
            flex items-center justify-center px-3 h-8
            text-sm font-medium text-white bg-gray-800 border-0 border-s
            border-gray-700 rounded-e
            hover:bg-gray-900
            disabled:hover:cursor-not-allowed
            disabled:bg-gray-800/50
          "
        >
          <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </div>
    </div>
  )
}
