export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 text-center">
      
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
        Robesan Francis
      </h1>

      <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-300">
        SEO & AI Growth Strategist | Founder of Ryzite  
        Delivering 300% Profit Growth in Under 4 Months
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/contact"
          className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:opacity-80 transition"
        >
          Work With Me
        </a>

        <a
          href="/case-studies"
          className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
        >
          View Case Studies
        </a>
      </div>

      <div className="absolute bottom-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Robesan. All rights reserved.
      </div>
    </main>
  )
}
