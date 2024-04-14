import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: Category;
  };
}
const products = initialData.products;

export default function ({ params }: Props) {
  const { id } = params;
  const filteredProducts = products.filter((product) => product.gender === id);
  // if(id ==="kids"){
  //   notFound();
  // }
  const names: Record<Category, string> = {
    men: "para hombres",
    women: "para mujeres",
    kid: "para niño",
    unisex: "para Todos"
  };

  return (
    <>
      <Title
        title={`Productos ${names[id]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />
      <ProductGrid products={filteredProducts} />
    </>
  );
}
