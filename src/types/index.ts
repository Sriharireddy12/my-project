export interface FirewallRule {
  id: string;
  protocol: string;
  port: string;
  action: string;
}

export interface ScriptConfig {
  users: string;
  groups: string;
  firewallRules: FirewallRule[];
  hostname: string;
  sshPort: string;
  disableRootLogin: boolean;
}
