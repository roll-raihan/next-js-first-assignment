export default async function ItemDetails({ params }) {
  const res = await fetch(`http://localhost:5000/items/${params.id}`);
  const item = await res.json();

  return (
    <div className="p-10">
      <h1 className="text-3xl">{item.name}</h1>
      <img src={item.image} />
      <p>{item.description}</p>
      <p className="font-bold">${item.price}</p>
    </div>
  );
}
