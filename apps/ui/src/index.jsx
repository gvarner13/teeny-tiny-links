export default function Index() {
  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto mb-10 mt-12 px-2.5 text-center sm:px-0">
        <h1 className="text-center text-6xl font-black">
          Making your{" "}
          <span
            style={{
              background: "linear-gradient(to right, #E7FF52, #41FF54)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Links
          </span>{" "}
          smarter
        </h1>
        <h2 className="mt-5 text-gray-600 sm:text-xl">
          Simple to use analytics and alerts for short links
        </h2>
      </div>
    </div>
  );
}
