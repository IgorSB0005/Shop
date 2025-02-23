

export default function Home() {


  return (
    <div className="flex flex-col items-center justify-items-center h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="text-black w-full">
        
        <img
          alt="#"
          src="/images/headerback.jpg"
          className="-z-10 h-full w-full object-cover object-right md:object-center brightness-25"

        />
      </header>
      <main className="">
        <div className=" mb-10 border-t-4 border-b-4 rounded-lg shadow-[0_0_15px_5px_rgba(255,255,255,0.7)] w-screen">
          <h1 className="text-5xl pt-20 pb-20">
            Speed and technology, <br /> everything for the most modern
            <br /> and environmentally friendly movement.
          </h1>
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
