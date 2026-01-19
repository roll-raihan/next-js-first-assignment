"use client";

import { useEffect, useState } from "react";
import ItemCard from "@/components/ItemCard";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => setItems(data))
      .catch((err) => {
        console.error(err);
        setError("Backend not reachable");
      });
  }, []);

  if (error) return <p className="p-10 text-red-600">{error}</p>;
  if (!items.length) return <p className="p-10">Loading...</p>;

  return (
    <div className="p-10 grid grid-cols-3 gap-4">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}