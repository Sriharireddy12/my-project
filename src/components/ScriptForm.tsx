import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import type { FirewallRule, ScriptConfig } from '../types';

interface ScriptFormProps {
  onGenerate: (config: ScriptConfig) => void;
}

export default function ScriptForm({ onGenerate }: ScriptFormProps) {
  const [users, setUsers] = useState('');
  const [groups, setGroups] = useState('');
  const [firewallRules, setFirewallRules] = useState<FirewallRule[]>([
    { id: '1', protocol: 'tcp', port: '22', action: 'allow' }
  ]);
  const [hostname, setHostname] = useState('');
  const [sshPort, setSshPort] = useState('22');
  const [disableRootLogin, setDisableRootLogin] = useState(true);

  const addFirewallRule = () => {
    setFirewallRules([
      ...firewallRules,
      { id: Date.now().toString(), protocol: 'tcp', port: '', action: 'allow' }
    ]);
  };

  const removeFirewallRule = (id: string) => {
    setFirewallRules(firewallRules.filter(rule => rule.id !== id));
  };

  const updateFirewallRule = (id: string, field: keyof FirewallRule, value: string) => {
    setFirewallRules(
      firewallRules.map(rule =>
        rule.id === id ? { ...rule, [field]: value } : rule
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate({
      users,
      groups,
      firewallRules,
      hostname,
      sshPort,
      disableRootLogin
    });
  };

  return (
    <section id="generator" className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Configure Your Script
          </h2>
          <p className="text-lg text-slate-600">
            Fill in the details below to generate your custom server configuration script
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">User Management</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Users to Create
                  <span className="text-slate-500 font-normal ml-2">(comma-separated)</span>
                </label>
                <input
                  type="text"
                  value={users}
                  onChange={(e) => setUsers(e.target.value)}
                  placeholder="john, sarah, mike"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Groups to Create
                  <span className="text-slate-500 font-normal ml-2">(comma-separated)</span>
                </label>
                <input
                  type="text"
                  value={groups}
                  onChange={(e) => setGroups(e.target.value)}
                  placeholder="developers, admins, users"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-900">Firewall Rules</h3>
              <button
                type="button"
                onClick={addFirewallRule}
                className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Rule
              </button>
            </div>
            <div className="space-y-3">
              {firewallRules.map((rule) => (
                <div key={rule.id} className="flex gap-3 items-start">
                  <select
                    value={rule.protocol}
                    onChange={(e) => updateFirewallRule(rule.id, 'protocol', e.target.value)}
                    className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                  >
                    <option value="tcp">TCP</option>
                    <option value="udp">UDP</option>
                  </select>
                  <input
                    type="text"
                    value={rule.port}
                    onChange={(e) => updateFirewallRule(rule.id, 'port', e.target.value)}
                    placeholder="Port"
                    className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                  />
                  <select
                    value={rule.action}
                    onChange={(e) => updateFirewallRule(rule.id, 'action', e.target.value)}
                    className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                  >
                    <option value="allow">Allow</option>
                    <option value="deny">Deny</option>
                  </select>
                  <button
                    type="button"
                    onClick={() => removeFirewallRule(rule.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Optional Settings
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Hostname
                </label>
                <input
                  type="text"
                  value={hostname}
                  onChange={(e) => setHostname(e.target.value)}
                  placeholder="myserver.example.com"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  SSH Port
                </label>
                <input
                  type="text"
                  value={sshPort}
                  onChange={(e) => setSshPort(e.target.value)}
                  placeholder="22"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="disableRootLogin"
                  checked={disableRootLogin}
                  onChange={(e) => setDisableRootLogin(e.target.checked)}
                  className="w-4 h-4 text-cyan-500 border-slate-300 rounded focus:ring-cyan-500"
                />
                <label htmlFor="disableRootLogin" className="ml-2 text-sm font-medium text-slate-700">
                  Disable root SSH login
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Generate Script
          </button>
        </form>
      </div>
    </section>
  );
}
