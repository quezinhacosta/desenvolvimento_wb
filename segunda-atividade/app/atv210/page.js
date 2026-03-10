import Image from "next/image";
import styles from "./Atv210.module.css";
import Link from "next/link";

export default function Atv210() {
  return (
    <main className={styles.mainContainer}>
      <Image
        src="/imagens/IMAGEM.jpg" 
        alt="Fundo da atividade"
        fill 
        className={styles.bgImage}
        priority 
      />
      <div className={styles.content}>
        <h1 className={styles.tituloPrincipal}>
          Primeiro exercício de CSS
        </h1>

        <div className="mt-10">
          <Link href="/" className="bg-white/90 p-2 rounded text-black hover:bg-white relative z-10">
            Voltar para Home
          </Link>
        </div>
      </div>
    </main>
  );
}