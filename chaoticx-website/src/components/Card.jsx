export default function Card({ title, children }) {
  return (
    <div className="bg-white/5 p-4 rounded-2xl shadow-md border border-white/5">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
