"use client";

export default function AddItem() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const item = {
      name: e.target.name.value,
      description: e.target.description.value,
      price: e.target.price.value,
      image: e.target.image.value,
    };

    await fetch("http://localhost:5000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });

    alert("Item added successfully");
  };

  return (
    <form onSubmit={handleSubmit} className="p-10">
      <input name="name" placeholder="Name" className="border p-2 block mb-2" />
      <input name="description" placeholder="Description" className="border p-2 block mb-2" />
      <input name="price" placeholder="Price" className="border p-2 block mb-2" />
      <input name="image" placeholder="Image URL" className="border p-2 block mb-2" />
      <button className="bg-green-600 text-white px-4 py-2">Add Item</button>
    </form>
  );
}