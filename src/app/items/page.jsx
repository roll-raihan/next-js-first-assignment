import ItemCard from "@/components/ItemCard";

export default async function ItemsPage() {
  const res = await fetch("http://localhost:5000/items", {
    cache: "no-store",
  });
  const items = await res.json();

  return (
    <div className="p-10 grid grid-cols-3 gap-4">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}