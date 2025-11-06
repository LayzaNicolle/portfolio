export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-white/70">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Layza Nicolle . Feito com Next.js.</p>
          <div className="flex gap-4">
            <a className="hover:underline" href="https://github.com/LayzaNicolle" target="_blank">GitHub</a>
            <a className="hover:underline" href="https://www.linkedin.com/in/layza-nicolle/" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
