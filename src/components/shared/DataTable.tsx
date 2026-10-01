import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import { Search } from 'lucide-react'

export interface Column<T> {
  header: string
  accessorKey?: keyof T | string
  cell?: (item: T) => ReactNode
}

interface DataTableProps<T> {
  columns: Column<T>[]
  data: T[]
  searchable?: boolean
  filterable?: boolean
  searchPlaceholder?: string
}

export function DataTable<T>({
  columns,
  data,
  searchable,
  filterable,
  searchPlaceholder = 'Cari...',
}: DataTableProps<T>) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {(searchable || filterable) && (
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          {searchable && (
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder={searchPlaceholder}
                className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary dark:border-gray-700 dark:bg-gray-800"
              />
            </div>
          )}
          {filterable && (
            <div className="flex gap-2">
              <select className="rounded-md border border-gray-300 bg-white py-2 px-3 text-sm dark:border-gray-700 dark:bg-gray-800">
                <option value="">Semua Filter</option>
              </select>
            </div>
          )}
        </div>
      )}

      <div className="overflow-x-auto rounded-md border border-gray-200 dark:border-gray-800">
        <table className="w-full text-left text-sm text-gray-700 dark:text-gray-300">
          <thead className="bg-gray-50 uppercase text-gray-500 dark:bg-gray-900/50 dark:text-gray-400">
            <tr>
              {columns.map((col, i) => (
                <th key={i} className="px-6 py-3 font-medium">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-b border-gray-200 last:border-0 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/50"
                >
                  {columns.map((col, colIndex) => (
                    <td key={colIndex} className="px-6 py-4">
                      {col.cell
                        ? col.cell(item)
                        : col.accessorKey
                        ? ((item as any)[col.accessorKey] as ReactNode)
                        : null}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="px-6 py-8 text-center">
                  Tidak ada data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
