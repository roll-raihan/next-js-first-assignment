"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "admin@example.com" && password === "123456") {
      document.cookie = "auth=true; path=/";
      router.push("/items");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-10 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Login</h1>
      <input name="email" placeholder="Email" className="border p-2 w-full mb-2" />
      <input name="password" type="password" placeholder="Password" className="border p-2 w-full mb-2" />
      <button className="bg-blue-600 text-white px-4 py-2">
        Login
      </button>
    </form>
  );
}