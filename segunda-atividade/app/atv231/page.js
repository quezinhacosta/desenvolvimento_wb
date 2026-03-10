import styles from "./Atv231.module.css";
import Link from "next/link";

export default function Atv231() {
  return (
    <main className={styles.container}>
      <div className={styles.blocoVermelho}>
        Bloco Vermelho (700px)
      </div>

      <div className={styles.blocoVerde}>
        Bloco Verde (700px + 25px padding)
      </div>

      <Link href="/" className="mt-10 text-blue-600 underline">
        Voltar para Home
      </Link>
    </main>
  );
}