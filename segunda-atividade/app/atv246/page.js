import styles from "./Atv246.module.css";
import Link from "next/link";

export default function Atv246() {
  return (

        <main className="p-10 bg-white min-h-screen">
        <p className={styles.paragrafoArial}>
            professor, eu me confundi totalmente. achei que deveria ser feito tudo em react, e essa atividade pede HTML. 
            <br></br>
            peço perdão, me atentarei nas próximas atividades.
        </p>

        <div className="mt-5">
            <a href="https://www.youtube.com/watch?v=eJg0h643V68" className={styles.linkTimes}>Primeiro Hyperlink</a>
            <a href="https://www.youtube.com/watch?v=urpj4sO10I0&pp=ugUHEgVwdC1QVA%3D%3D" className={styles.linkTimes}>Segundo Hyperlink</a>
        </div>

        <div className="mt-20">
            <Link href="/" className="text-gray-400 text-xs hover:underline">
            Voltar para a Home
            </Link>
        </div>
        </main>

  );
}