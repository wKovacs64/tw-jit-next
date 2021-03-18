import Head from 'next/head';

function Home() {
  return (
    <div>
      <Head>
        <title>@tailwindcss/jit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center py-4">
        <h1 className="font-bold text-4xl">
          Hello from <code>@tailwindcss/jit</code>.
        </h1>
      </main>

      <footer></footer>
    </div>
  );
}

export default Home;
