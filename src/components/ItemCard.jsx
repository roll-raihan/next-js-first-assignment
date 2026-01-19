import Link from "next/link";

export default function ItemCard({ item }) {
  return (
    <div className="border p-4">
      <img src={item.image} alt={item.name} />
      <h3 className="font-bold">{item.name}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <Link href={`/items/${item.id}`} className="text-blue-600">
        View Details
      </Link>
    </div>
  );
}