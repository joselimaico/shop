import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <h1>hola mundo</h1>
      <h1 className={titleFont.className}>hola mundo</h1>
    </main>
  );
}
