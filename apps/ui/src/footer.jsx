export default function Index() {
  return (
    <footer className="z-10 border-t border-gray-200 bg-white/75 py-8">
      <div className="lg:px-10">
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm leading-5 text-gray-500">
            © {new Date().getFullYear()} Teeny Tiny Links
          </p>
        </div>
      </div>
    </footer>
  );
}
