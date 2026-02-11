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
  Globe
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-200/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center gap-2">
          <div className="bg-brand-blue p-1.5 rounded-lg shadow-lg shadow-brand-blue/20">
            <Server className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-dark">n-kudo</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#how-it-works" className="hover:text-brand-blue transition-colors">How it Works</a>
          <a href="#features" className="hover:text-brand-blue transition-colors">Features</a>
          <a href="#why-different" className="hover:text-brand-blue transition-colors">Why n-kudo</a>
          <a href="#sovereignty" className="hover:text-brand-blue transition-colors">EU Sovereignty</a>
        </div>
        <button className="btn-primary py-2 text-sm shadow-sm">
          Request Early Access
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-50" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold tracking-widest uppercase mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
        </span>
        SaaS Control Plane for Edge
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold text-brand-dark tracking-tight mb-6 leading-[1.1]">
        Cloud capabilities. <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-accent">Your infrastructure.</span>
      </h1>
      <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed font-light">
        Run modern workloads on your own hardware — managed from a single SaaS dashboard. No heavy on-prem platforms, no vendor lock-in.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <button className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
          Start for Free <ArrowRight className="w-5 h-5" />
        </button>
        <button className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
          View Demo
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 text-left">
        {[
          { icon: Database, title: "Bring your own Infra", desc: "Use existing VMs or hypervisors on any Linux host." },
          { icon: Zap, title: "Lightweight Agent", desc: "Zero-configuration edge agent enrolls in seconds." },
          { icon: ShieldCheck, title: "Secure Mesh", desc: "Mesh networking and microVMs managed via SaaS." }
        ].map((item, idx) => (
          <div key={idx} className="premium-card group">
            <div className="bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-blue/10 transition-colors">
              <item.icon className="w-6 h-6 text-slate-600 group-hover:text-brand-blue transition-colors" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-brand-dark">{item.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-white border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">How n-kudo works</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Connecting your hardware to modern cloud management in three steps.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 -z-10" />
        {[
          { step: "01", title: "Connect your site", desc: "Install a 2MB edge agent. Enroll securely with a one-time token via mTLS and NetBird." },
          { step: "02", title: "Cloud Provisioning", desc: "n-kudo creates microVMs inside your environment using Cloud Hypervisor. All data stays local." },
          { step: "03", title: "Manage Everywhere", desc: "Start, stop, and observe workloads across all sites from a single dashboard." }
        ].map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl relative">
            <div className="text-6xl font-black text-slate-50 mb-4 select-none">{item.step}</div>
            <h3 className="text-xl font-bold mb-3 text-brand-dark">{item.title}</h3>
            <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 bg-brand-dark rounded-3xl text-white overflow-hidden relative group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div>
            <h4 className="text-2xl font-bold mb-2">Technical Core</h4>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <span className="bg-white/10 px-3 py-1 rounded-full flex items-center gap-2"><Cpu className="w-4 h-4" /> Cloud Hypervisor</span>
              <span className="bg-white/10 px-3 py-1 rounded-full flex items-center gap-2"><Network className="w-4 h-4" /> NetBird Mesh</span>
              <span className="bg-white/10 px-3 py-1 rounded-full flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> mTLS Hardened</span>
            </div>
          </div>
          <div className="bg-black/50 p-6 rounded-xl font-mono text-xs text-brand-blue border border-white/10 w-full md:w-auto">
            <span className="text-slate-400"># Install the n-kudo edge agent</span><br />
            curl -sSfL https://get.n-kudo.com | sh<br />
            <span className="text-slate-400"># Enroll with your token</span><br />
            nkudo enroll --token eyJhbGciOiJIUz...
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">Built for Performance and Precision</h2>
          <p className="text-slate-500 max-w-xl">Everything you need to manage workloads across any edge location or on-prem environment.</p>
        </div>
        <div className="bg-brand-blue/5 border border-brand-blue/20 px-4 py-2 rounded-xl text-brand-blue text-sm font-semibold">
          MVP-1 Scope Ready
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: Activity, title: "MicroVM Lifecycle", desc: "Deploy lightweight, immutable microVMs in seconds with Cloud Hypervisor." },
          { icon: Globe, title: "Cloud-Init Support", desc: "Automate OS configuration and service initialization on the first boot." },
          { icon: Activity, title: "Real-time Metrics", desc: "Monitor host capacity and VM health with streaming telemetry." },
          { icon: ShieldCheck, title: "Zero Trust Mesh", desc: "Seamless connectivity between all sites without complex VPN tunnels." },
          { icon: Server, title: "Host Management", desc: "Abstract your infrastructure into a single logical pool of compute." },
          { icon: Lock, title: "SaaS Control Plane", desc: "Manage everything from a secure, cloud-hosted dashboard accessible anywhere." }
        ].map((item, idx) => (
          <div key={idx} className="flex gap-4 group">
            <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all transform group-hover:scale-110">
              <item.icon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-brand-dark mb-1">{item.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Sovereignty = () => (
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
            n-kudo ensures your data never leaves your infrastructure. Gain cloud efficiency while maintaining total control over data residency and compliance within the EU.
          </p>
          <ul className="space-y-4">
            {[
              "No foreign cloud control of local workloads",
              "Compliance with EU data residency regulations",
              "Reduced dependency on US hyperscalers",
              "Lightweight agent, no operational lock-in"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-300">
                <ShieldCheck className="w-5 h-5 text-brand-blue" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="premium-card bg-white/5 border-white/10 backdrop-blur-xl p-1 justify-self-center max-w-sm w-full">
          <div className="bg-slate-800/80 rounded-2xl p-8 border border-white/5">
            <div className="flex justify-between items-center mb-8">
              <div className="w-8 h-8 rounded-full bg-brand-blue/20" />
              <div className="flex gap-2">
                <div className="w-6 h-2 rounded bg-white/10" />
                <div className="w-10 h-2 rounded bg-white/10" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-4 bg-white/5 rounded w-full" />
              <div className="h-4 bg-white/5 rounded w-4/5" />
              <div className="h-10 bg-brand-blue/20 rounded w-full" />
              <div className="h-4 bg-white/5 rounded w-2/3" />
            </div>
            <div className="mt-8 flex justify-center">
              <div className="px-4 py-2 border border-white/10 rounded-lg text-[10px] text-slate-400 font-mono">
                LOCAL EXECUTION ONLY
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Roadmap = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">The Future of n-kudo</h2>
        <p className="text-slate-500">Transparent updates on what's coming next to the platform.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {[
          { status: "Coming Soon", title: "Ansible Abstraction", desc: "Define server states using familiar declarative syntax." },
          { status: "In Progress", title: "Live Migration", desc: "Move microVMs between hosts without service interruption." },
          { status: "Planned", title: "Service Templates", desc: "One-click deployment for common edge workloads." },
          { status: "Planned", title: "Usage Billing", desc: "Precision billing based on actual resource consumption." }
        ].map((item, idx) => (
          <div key={idx} className="border border-slate-100 p-6 rounded-2xl hover:bg-slate-50 transition-colors">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue mb-4 block">{item.status}</span>
            <h4 className="font-bold text-brand-dark mb-2">{item.title}</h4>
            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-slate-50 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Server className="w-5 h-5 text-brand-blue" />
          <span className="text-lg font-bold tracking-tight text-brand-dark">n-kudo</span>
        </div>
        <div className="flex gap-8 text-sm text-slate-500">
          <a href="#" className="hover:text-brand-blue transition-colors">Documentation</a>
          <a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-blue transition-colors">Contact</a>
        </div>
        <p className="text-xs text-slate-400">
          © 2026 n-kudo. Built for the Sovereign Edge.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Sovereignty />
      <Roadmap />
      <section className="py-24 bg-brand-blue text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Ready to reclaim your infrastructure?</h2>
          <p className="text-xl text-blue-100 mb-10 font-light">Join the early access program and start running sub-clouds today.</p>
          <button className="bg-white text-brand-blue px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-blue/5 hover:text-white border-2 border-white transition-all transform hover:scale-105 shadow-2xl shadow-black/10">
            Contact us for a Demo
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
