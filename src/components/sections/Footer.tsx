export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-cream border-t border-charcoal/5" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo.webp" 
              alt="Genefits logo" 
              className="w-8 h-8 rounded-lg"
            />
            <div>
              <p className="font-semibold text-charcoal">Genefits</p>
              <p className="text-xs text-charcoal/50">© {currentYear} Genefits. All rights reserved.</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm text-charcoal/60" aria-label="Footer navigation">
            <a href="#how-it-works" className="hover:text-charcoal transition-colors">How it works</a>
            <a href="#features" className="hover:text-charcoal transition-colors">Features</a>
            <a href="#trust" className="hover:text-charcoal transition-colors">Privacy</a>
            <a href="#faq" className="hover:text-charcoal transition-colors">FAQ</a>
          </nav>

          {/* Social */}
          <nav className="flex items-center gap-3" aria-label="Social media links">
            <a 
              href="https://twitter.com/genefits" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-charcoal/5 flex items-center justify-center hover:bg-charcoal/10 transition-colors"
              aria-label="Follow Genefits on X (Twitter)"
            >
              <svg className="w-4 h-4 text-charcoal/60" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/company/genefits" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-charcoal/5 flex items-center justify-center hover:bg-charcoal/10 transition-colors"
              aria-label="Follow Genefits on LinkedIn"
            >
              <svg className="w-4 h-4 text-charcoal/60" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
