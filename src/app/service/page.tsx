import { getProducts } from "@/service/products";
import Link from "next/link";

export default function ProductsPage() {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  const products = getProducts();
  return (
    <>
      <h1>Our Service</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product}`} style={{ marginLeft: "20px" }}>
              {product}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
