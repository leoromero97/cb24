"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const key = "151217cai.lgr";

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
    if (event.currentTarget.value === key) setDisabled(!disabled);
  };

  const handleSubmit = (formData: FormData) => {
    const password = formData.get("password");
    if (password === key) {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/home");
    } else {
      setError("Ups, contraseña incorrecta");
    }
  };

  return (
    <main className="flex h-screen flex-col items-center justify-between p-10 bg-slate-900 text-pink-100 overflow-hidden">
      <div className="flex flex-col gap-20 h-full min-h-screen w-full items-center justify-center overflow-hidden max-h-screen">
        <form action={handleSubmit} className="flex flex-col gap-20">
          <label htmlFor="password" className="flex flex-col w-full gap-2">
            Ingresar nuestra clave
            <input
              name="password"
              type="password"
              value={password}
              className="rounded-sm text-pink-900 px-2 py-1 focus-within:outline-pink-300 focus:outline-pink-300 focus-visible:outline-pink-300 border-none"
              onChange={handleChange}
            />
          </label>
          {error !== "" && (
            <span className="font-bold text-red-800">{error}</span>
          )}
          <button
            type="submit"
            disabled={disabled}
            className={`
              px-4 
              py-2 
              rounded-lg 
              font-semibold 
              text-lg 
              text-center 
              w-full 
              max-w-xl 
              transition-colors 
              text-pink-900 
              bg-pink-100 
              hover:bg-pink-200 
              active:bg-pink-300
              disabled:opacity-20`}
          >
            Ingresar
          </button>
        </form>
      </div>
    </main>
  );
}
