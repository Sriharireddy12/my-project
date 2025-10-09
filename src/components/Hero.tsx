import { Server, Zap, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Generate Linux Configuration Scripts
            <span className="block text-cyan-400 mt-2">In Seconds</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Automate your server setup with custom bash scripts. Create users, configure firewalls,
            and manage SSH settings without writing a single line of code.
          </p>
          <a
            href="#generator"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Start Generating
          </a>
        </div>

        <div id="features" className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <Server className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">User Management</h3>
            <p className="text-slate-400">
              Create multiple users and groups with proper permissions in a single command.
            </p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <Shield className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Firewall Configuration</h3>
            <p className="text-slate-400">
              Set up UFW firewall rules with custom protocols, ports, and actions automatically.
            </p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <Zap className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Instant Generation</h3>
            <p className="text-slate-400">
              Generate production-ready bash scripts instantly. Copy or download with one click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
