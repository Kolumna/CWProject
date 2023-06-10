type PostProps = {
  title: string;
  location: string;
  className?: string;
  date: string;
};

export default function Post({ title, location, className, date }: PostProps) {
  return (
    <div className="p-4 pt-64 relative bg-gray-200 rounded-xl flex flex-col gap-4 items-center">
      <div
        className={`${className} bg-cover w-full h-60 absolute top-0 rounded-xl`}
      >
        <div className="absolute bottom-2 left-2 text-3xl font-bold text-white px-4 p-2 bg-emerald-500 rounded-xl">
          {date}
        </div>
      </div>
      <h4 className="text-3xl font-bold">{title}</h4>
      <span className="flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
        {location}
      </span>
    </div>
  );
}
