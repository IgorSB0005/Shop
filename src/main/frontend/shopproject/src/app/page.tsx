

export default function Home() {


  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-row justify-around p-10 bg-white text-black w-full">
        <div>LOGO</div>
        <div>New</div>
        <div>Men</div>
        <div>Women</div>
        <div>Accessories</div>
      </header>
      <main className="flex-1">
        <div>
          <img src="/images/modernbike.jpg" alt="#" />
        </div>
      </main>

      <footer className="flex-row flex gap-6 flex-wrap items-center justify-center">
        <ul>
          <li>about us</li>
          <li>career</li>
          <li>some</li>
        </ul>
        <ul>
          <li>about us</li>
          <li>career</li>
          <li>some</li>
        </ul>
      </footer>
    </div>
  );
}
