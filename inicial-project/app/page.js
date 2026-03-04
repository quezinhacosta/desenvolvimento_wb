import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans ">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
           Quezia Costa
          </h1>
          <Image
            src="/eu.png"
            alt="Minha foto"
            width={100}
            height={100}
          />
          <p> cientista da computação em formação </p>
          <p>web dev amadora </p>
          <p> estudante de iniciação cientifica, orientada por madeiro</p>
          <p>futura cientista de dados</p>
          <p>mãe de gato</p>
          <p>investidora em FII</p>
        </div>
      </main>
    </div>
  );
}
