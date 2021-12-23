import Link from 'next/link'

export default function Button({
  children,
  element,
  type = undefined,
  href = undefined
}) {
  if (element === 'button') {
    return (
      <button type={type} className="defaultButton">
        {children}
      </button>
    )
  }

  return (
    <Link href={href}>
      <a className="defaultButton">{children}</a>
    </Link>
  )
}
