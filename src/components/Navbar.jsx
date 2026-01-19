import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-gray-900 text-white">
      <h1 className="font-bold">Next Items</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/items">Items</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}