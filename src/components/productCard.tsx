const withChange = products.map(p => ({
  ...p,
  change: ((p.today - p.yesterday) / p.yesterday) * 100,
}));

const up = withChange.filter(p => p.change > 0)
  .sort((a, b) => b.change - a.change).slice(0, 6);
const down = withChange.filter(p => p.change < 0)
  .sort((a, b) => a.change - b.change).slice(0, 6);

export default function ProductCard({}) {
  const isUp = change > 0;
  return (
    <section className="rounded-2xl bg-white/70 p-5">
      <div className="flex items-center gap-3">
        <span className="text-4xl">{emoji}</span>
        <div><h3 className="font-bold">{name}</h3>
        <p className="text-sm text-slate-500">{unit}</p></div>
      </div>
      <p className="mt-4 text-sm text-slate-500">আজকের দাম</p>
      <div className="flex justify-between items-end">
        <b className="text-xl">{today.toLocaleString("bn-BD")} টাকা</b>
        <span className={isUp ? "text-red-600" : "text-green-600"}>
          {isUp ? "▲" : "▼"} {Math.abs(change).toFixed(1)}%
        </span>
      </div>
    </section>
  );
}
