export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md text-center">
        
        <div className="mx-auto mb-6 w-56 h-72 border-[12px] border-slate-200 rounded-xl flex items-center justify-center bg-slate-50">
          <span className="text-5xl font-bold text-slate-400">404</span>
        </div>

        <h1 className="text-2xl font-semibold text-slate-800 mb-3">
        Not Found
        </h1>

        <p className="text-sm text-slate-500 mb-8 leading-relaxed">
          This photo frame is empty. The page you are looking for may have been
          removed or the link is incorrect.
        </p>

        <a
          href="/"
          className="inline-block rounded-full bg-slate-900 px-7 py-3 text-sm text-white hover:bg-slate-700 transition"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}
