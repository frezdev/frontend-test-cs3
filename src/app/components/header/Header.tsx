import Link from "next/link"

export const Header = () => {
  return (
    <header className="mb-2 p-5 shadow-sm">
      <h1 className="font-bold">
        <Link href="/">Frontend Test</Link>
      </h1>
    </header>
  )
}
