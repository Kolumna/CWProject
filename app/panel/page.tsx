import Link from "next/link";

export default function Panel() {
  return (
    <section className="px-12 p-8">
      <div className="flex gap-4 justify-between">
        <Link
          href="/postepy"
          className="h-96 bg-emerald-700 w-full flex justify-center items-center rounded-xl"
        >
          <div className="flex justify-center flex-col items-center gap-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="w-32 h-32 stroke-gray-50"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
              />
            </svg>
            <span className="text-3xl font-bold text-gray-50">
              Twoje postępy
            </span>
          </div>
        </Link>
        <Link
          href="/spotkania"
          className="h-96 bg-emerald-700 w-full flex justify-center items-center rounded-xl"
        >
          <div className="flex justify-center flex-col items-center gap-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="w-32 h-32 stroke-gray-50"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <span className="text-3xl font-bold text-gray-50">
              Szukaj spotkań
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
