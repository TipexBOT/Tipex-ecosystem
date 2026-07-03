export default function TokenScanner() {
  return (
    <section className="max-w-6xl mx-auto py-16">
      <h2 className="text-3xl font-bold">
        Live Token Discovery
      </h2>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="border rounded-xl p-6">
          Token: MEMEX
          <br />
          Liquidity: 128 SOL
        </div>

        <div className="border rounded-xl p-6">
          Token: NOVA
          <br />
          Liquidity: 91 SOL
        </div>

        <div className="border rounded-xl p-6">
          Token: FLASH
          <br />
          Liquidity: 243 SOL
        </div>
      </div>
    </section>
  );
}
