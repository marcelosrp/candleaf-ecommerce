import Link from 'next/link'

export default function Button({
  children,
  element,
  type = undefined,
  href = undefined,
  className = undefined,
  disabled = false
}) {
  if (element === 'button') {
    return (
      <button
        type={type}
        disabled={disabled}
        className={
          className !== undefined
            ? `defaultButton ${className}`
            : 'defaultButton'
        }
      >
        {children}
      </button>
    )
  }

  return (
    <Link href={href}>
      <a
        className={
          className !== undefined
            ? `defaultButton ${className}`
            : 'defaultButton'
        }
      >
        {children}
      </a>
    </Link>
  )
}
