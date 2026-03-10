import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8 flex flex-col gap-4">
      <h1>Atividade</h1>
      <h2 className="text-gray-600">
        Fundo e Bordas / Margem, padding, largura e altura / Fontes / Transp.
      </h2>
      
      <hr className="border-t border-gray-300" />
      <br />

      {/* No Next.js, apontamos para a pasta, não para o arquivo .js */}
      <nav className="flex flex-col gap-2">
        <Link href="/atv210" className="text-blue-600 hover:underline">
          Atividade 210
        </Link>
        <Link href="/atv231" className="text-blue-600 hover:underline">
          Atividade 231
        </Link>
        <Link href="/atv246" className="text-blue-600 hover:underline">
          Atividade 246
        </Link>
        <Link href="/atv263" className="text-blue-600 hover:underline">
          Atividade 263
        </Link>
      </nav>

      <br />
      <hr className="border-t border-gray-300" />
      
      <footer className="mt-10 text-sm text-gray-500 italic">
        Site feito integralmente por Quezia Costa
      </footer>
    </div>
  );
}