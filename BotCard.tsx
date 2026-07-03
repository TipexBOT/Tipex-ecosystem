export default function BotCard() {
  return (
    <section className="max-w-4xl mx-auto py-16">
      <div className="border rounded-xl p-8">
        <h2 className="text-2xl font-bold">
          Active Trading Bot
        </h2>

        <div className="mt-6">
          <p>Strategy: Momentum Sniper</p>
          <p>Status: Running</p>
          <p>Trades Today: 43</p>
          <p>Profit: +18.6%</p>
        </div>

        <button className="mt-6 bg-emerald-600 text-white px-6 py-3 rounded-lg">
          Manage Bot
        </button>
      </div>
    </section>
  );
}
