import { Terminal } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Terminal className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">ScriptGen</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#generator" className="text-slate-300 hover:text-white transition-colors">
              Generator
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
