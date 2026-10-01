import { ReactNode } from 'react'

interface EmptyStateProps {
  title: string
  description?: string
  icon?: ReactNode
  action?: ReactNode
}

export function EmptyState({ title, description, icon, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 p-12 text-center dark:border-gray-700">
      {icon && <div className="mb-4 text-gray-400">{icon}</div>}
      <h3 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
      {description && <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{description}</p>}
      {action && <div>{action}</div>}
    </div>
  )
}
