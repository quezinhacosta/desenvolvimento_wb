import styles from "./Atv263.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Atv263() {
  const produtos = [
    { id: 1, nome: "Tênis Esportivo", preco: "R$ 299", img: "/imagens/SAPATO.png" },
    { id: 2, nome: "Sapato Social", preco: "R$ 199", img: "/imagens/SAPATO.png" },
    { id: 3, nome: "Bota Couro", preco: "R$ 450", img: "/imagens/SAPATO.png" },
    { id: 4, nome: "Sandália Verão", preco: "R$ 89", img: "/imagens/SAPATO.png" },
    { id: 5, nome: "Sapatênis Casual", preco: "R$ 150", img: "/imagens/SAPATO.png" },
  ];

  return (
    <main className={styles.container}>
      <header className="p-6">
        <h1 className="text-2xl font-bold text-center">Costa calçados</h1>
      </header>

      <section className={styles.vitrine}>
        {produtos.map((produto) => (
          <div key={produto.id} className={styles.cardProduto}>
            <div className={styles.containerImagem}>
              <Image 
                src="/imagens/SAPATO.png" 
                alt={produto.nome}
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            <h3 className="font-bold">{produto.nome}</h3>
            <p>{produto.preco}</p>
          </div>
        ))}
      </section>

      <footer className={styles.rodape}>
        Costa calçados
      </footer>

      <div className="text-center mt-10">
        <Link href="/" className="text-blue-500 underline">Voltar para Home</Link>
      </div>
    </main>
  );
}