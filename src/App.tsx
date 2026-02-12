import { useState, useEffect } from 'react';
import {
  Server,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Network,
  Activity,
  Flag,
  Zap,
  Database,
  Lock,
  Globe,
  Moon,
  Sun,
  Layers,
  Container,
  Terminal,
  ArrowDownCircle,
  FileText,
  Code,
  CheckCircle2,
  Box
} from 'lucide-react';

const ThemeToggle = ({ theme, setTheme }: { theme: string, setTheme: (t: string) => void }) => (
  <button
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
    aria-label="Toggle Theme"
  >
    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
  </button>
);

const WorkloadFlow = () => (
  <div className="py-12">
    <div className="grid md:grid-cols-4 gap-4 relative">
      {/* Connection Lines (Desktop) */}
      <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-slate-200 dark:border-slate-800 -z-0" />

      {[
        { step: "01", icon: Code, title: "Define Plan", desc: "Submit declarative YAML via Control Plane API" },
        { step: "02", icon: Layers, title: "Orchestrate", desc: "Validate and queue for target Edge Site" },
        { step: "03", icon: Container, title: "Provision", desc: "Edge Agent executes via Cloud Hypervisor" },
        { step: "04", icon: Activity, title: "Observe", desc: "Real-time heartbeats and JSON state sync" }
      ].map((item, idx) => (
        <div key={idx} className="relative z-10 flex flex-col items-center text-center p-6 bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4 border-2 border-brand-blue/20">
            <item.icon className="w-6 h-6 text-brand-blue" />
          </div>
          <div className="text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-widest">{item.step}</div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const ArchitectureGraph = () => (
  <div className="w-full py-12 px-4 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 my-16 overflow-x-auto">
    <div className="min-w-[800px] flex flex-col items-center gap-12">
      {/* Control Plane */}
      <div className="w-full max-w-4xl p-8 rounded-2xl border-2 border-dashed border-brand-blue/30 bg-white dark:bg-slate-950 relative">
        <div className="absolute -top-4 left-6 px-3 py-1 bg-brand-blue text-white text-[10px] font-bold uppercase rounded">SaaS Control Plane</div>
        <div className="grid grid-cols-4 gap-4">
          {[
            { icon: Globe, name: "API Gateway", sub: "HTTPS/JSON" },
            { icon: Lock, name: "Auth Service", sub: "API Keys" },
            { icon: ArrowDownCircle, name: "Enrollment", sub: "Tokens" },
            { icon: Activity, name: "Ingest", sub: "Heartbeats" },
            { icon: Layers, name: "Plan Service", sub: "Idempotency" },
            { icon: Network, name: "NetBird", sub: "Mesh Adapter" },
            { icon: FileText, name: "Audit", sub: "Logs" },
            { icon: Database, name: "PostgreSQL", sub: "Sites/VMs" }
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex flex-col items-center text-center gap-2">
              <item.icon className="w-5 h-5 text-brand-blue" />
              <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">{item.name}</div>
              <div className="text-[10px] text-slate-400 font-mono">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Connection */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-0.5 h-12 bg-gradient-to-b from-brand-blue to-accent animate-pulse" />
        <div className="px-4 py-1 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-[10px] font-mono text-brand-blue uppercase tracking-widest">
          mTLS Agent Channel
        </div>
        <div className="w-0.5 h-12 bg-gradient-to-t from-accent to-brand-blue animate-pulse" />
      </div>

      {/* Edge Data-Plane */}
      <div className="w-full max-w-4xl p-8 rounded-2xl border-2 border-dashed border-accent/30 bg-white dark:bg-slate-950 relative">
        <div className="absolute -top-4 left-6 px-3 py-1 bg-accent text-white text-[10px] font-bold uppercase rounded">Edge Data-Plane (Per Site)</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Agent Box */}
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 border-l-4 border-l-brand-blue">
            <h4 className="text-sm font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
              <Terminal className="w-4 h-4 text-brand-blue" /> nkudo-edge Agent
            </h4>
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              {["Enroll Client", "mTLS Client", "Host Facts", "Plan Executor", "State Store (JSON)", "NetBird Module"].map(s => (
                <div key={s} className="px-2 py-1.5 bg-white dark:bg-slate-800 rounded border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-medium">{s}</div>
              ))}
            </div>
          </div>
          {/* Hypervisor Box */}
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 border-l-4 border-l-accent flex flex-col justify-center">
            <h4 className="text-sm font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
              <Cpu className="w-4 h-4 text-accent" /> Cloud Hypervisor
            </h4>
            <div className="space-y-4">
              <div className="flex gap-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex-1 h-12 border border-accent/20 bg-accent/5 rounded-lg flex items-center justify-center relative overflow-hidden group">
                    <Box className="w-5 h-5 text-accent/50" />
                    <div className="absolute bottom-0 left-0 h-1 bg-accent w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </div>
                ))}
              </div>
              <div className="text-[10px] text-slate-500 font-mono text-center">RUST-BASED VMM EXECUTION</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Navbar = ({ theme, setTheme }: { theme: string, setTheme: (t: string) => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-200/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center gap-2">
          <div className="bg-brand-blue p-1.5 rounded-lg shadow-lg shadow-brand-blue/20">
            <Server className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">n-kudo</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
          <a href="#how-it-works" className="hover:text-brand-blue transition-colors">How it Works</a>
          <a href="#architecture" className="hover:text-brand-blue transition-colors">Architecture</a>
          <a href="#features" className="hover:text-brand-blue transition-colors">Features</a>
          <a href="#sovereignty" className="hover:text-brand-blue transition-colors">Sovereignty</a>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button className="btn-primary py-2 text-sm shadow-sm font-bold">
            Access
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--bg-color)]">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 dark:bg-brand-blue/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 dark:bg-accent/20 rounded-full blur-3xl opacity-50" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold tracking-widest uppercase mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
        </span>
        Sovereign Edge Platform
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900 dark:text-white">
        Cloud capabilities. <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-accent">Your infrastructure.</span>
      </h1>
      <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-light">
        Manage globally distributed edge sites as one pool of compute. n-kudo brings modern cloud abstractions to your own localized VMs.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
        <button className="btn-primary text-lg px-10 py-4 w-full sm:w-auto hover:scale-105 transform transition-all group">
          Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="btn-secondary text-lg px-10 py-4 w-full sm:w-auto">
          Technical Brief
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        {[
          { icon: Database, title: "BYO Infrastructure", desc: "Instantly convert any Linux host into a manageable edge site." },
          { icon: Zap, title: "MicroVM Focused", desc: "Lightweight and secure execution using Rust-based Hypervisors." },
          { icon: ShieldCheck, title: "mTLS Hardened", desc: "End-to-end security with automated certificate rotations." }
        ].map((item, idx) => (
          <div key={idx} className="premium-card group relative">
            <div className="bg-slate-50 dark:bg-slate-900 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-blue/10 transition-colors">
              <item.icon className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-brand-blue transition-colors" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">{item.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Life of a Workload</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">From declarative plan to local microVM execution.</p>
      </div>
      <WorkloadFlow />
    </div>
  </section>
);

const ArchitectureSection = () => (
  <section id="architecture" className="py-24 bg-slate-50 dark:bg-slate-900/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">System Architecture</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The n-kudo platform decouples control from execution, ensuring high availability and total data sovereignty.
        </p>
      </div>
      <ArchitectureGraph />
    </div>
  </section>
);

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <HowItWorks />
      <ArchitectureSection />

      {/* Sovereignty Section */}
      <section id="sovereignty" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-brand-blue rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
                <Flag className="w-4 h-4" /> Data Sovereignty
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
                Your Data. <br />
                <span className="text-brand-blue">Your Territory.</span>
              </h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                n-kudo ensures your workloads never leave your infrastructure. Gain cloud efficiency while maintaining total control over data residency.
              </p>
              <ul className="space-y-4">
                {[
                  "No foreign cloud control of local workloads",
                  "Compliance with EU data residency regulations",
                  "Reduced dependency on US hyperscalers",
                  "Lightweight agent, no operational lock-in"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="premium-card bg-slate-950/50 border-white/5 backdrop-blur-xl p-0 overflow-hidden justify-self-center max-w-sm w-full shadow-2xl">
              <div className="h-48 bg-slate-900 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                <div className="relative">
                  <div className="absolute inset-0 w-32 h-32 bg-brand-blue/20 rounded-full animate-ping opacity-50" />
                  <ShieldCheck className="w-16 h-16 text-brand-blue relative z-10" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-green-500 animate-pulse" />
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Local_Enclave_Sync</div>
                  </div>
                  <div className="px-2 py-0.5 rounded-full bg-blue-500/10 text-brand-blue text-[10px] font-bold uppercase">Locked</div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-slate-800 rounded-full">
                    <div className="h-full bg-brand-blue w-full animate-[shimmer_2s_infinite]" style={{ backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }} />
                  </div>
                  <div className="h-2 w-4/5 bg-slate-800 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[var(--bg-color)] text-center border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white">Ready to reclaim your infrastructure?</h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 font-light leading-relaxed">Join the early access program and start running sub-clouds on your own hardware today.</p>
          <button className="btn-primary text-xl px-12 py-6 rounded-2xl mx-auto scale-110 hover:scale-115 transform transition-all group">
            Request Early Access <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <footer className="py-12 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Server className="w-5 h-5 text-brand-blue" />
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">n-kudo</span>
            </div>
            <div className="flex gap-8 text-sm text-slate-500 dark:text-slate-400">
              <a href="https://github.com/kubedoio/n-kudo" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors flex items-center gap-1 group">
                GitHub <ArrowRight className="w-3 h-3 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="#" className="hover:text-brand-blue transition-colors">Documentation</a>
              <a href="#" className="hover:text-brand-blue transition-colors">Contact</a>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              © 2026 n-kudo. Built for the Universal Sovereign Edge.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
