import { useState } from 'react';
import { Copy, Download, Check } from 'lucide-react';

interface ScriptOutputProps {
  script: string;
}

export default function ScriptOutput({ script }: ScriptOutputProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(script);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([script], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'server-config.sh';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!script) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Your Generated Script
          </h2>
          <p className="text-slate-600">
            Copy the script below or download it as a .sh file
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 bg-slate-800 border-b border-slate-700">
            <span className="text-slate-300 font-mono text-sm">server-config.sh</span>
            <div className="flex gap-3">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>

          <div className="p-6 overflow-x-auto">
            <pre className="text-sm leading-relaxed">
              <code className="font-mono">
                {script.split('\n').map((line, index) => (
                  <div key={index} className="table-row">
                    <span className="table-cell text-slate-600 pr-4 select-none text-right">
                      {index + 1}
                    </span>
                    <span className="table-cell">
                      <span
                        className={
                          line.startsWith('#')
                            ? 'text-slate-500'
                            : line.includes('echo')
                            ? 'text-green-400'
                            : line.match(/^(if|then|else|fi|set)/)
                            ? 'text-cyan-400'
                            : line.includes('=')
                            ? 'text-yellow-400'
                            : 'text-slate-300'
                        }
                      >
                        {line || ' '}
                      </span>
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-2">Usage Instructions</h3>
          <ol className="text-blue-800 space-y-2 list-decimal list-inside">
            <li>Download the script or copy it to your server</li>
            <li>Make it executable: <code className="bg-blue-100 px-2 py-1 rounded">chmod +x server-config.sh</code></li>
            <li>Run with sudo: <code className="bg-blue-100 px-2 py-1 rounded">sudo ./server-config.sh</code></li>
          </ol>
        </div>
      </div>
    </section>
  );
}
