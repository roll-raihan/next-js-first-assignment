import Image from "next/image";

export default function Home() {
  return (
    <main>
      {[
        "Hero",
        "Features",
        "How It Works",
        "Products",
        "Why Us",
        "Testimonials",
        "Contact"
      ].map((section, i) => (
        <section key={i} className="p-10 border-b">
          <h2 className="text-2xl font-bold">{section}</h2>
          <p className="mt-2 text-gray-600">
            This is the {section} section.
          </p>
        </section>
      ))}
    </main>
  );
}
