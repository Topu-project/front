import React from "react";
import styles from "./layout.module.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "전체 제품 확인",
  description: "멋진제품을 확인해보세요",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className={styles.nav}>
        <Link href="/service/all">All</Link>
        <Link href="/service/project">Project</Link>
        <Link href="/service/study">Study</Link>
      </nav>
      <section> {children}</section>
    </div>
  );
}
