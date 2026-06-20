import React, { useState, useEffect } from 'react';
import { 
  Battery, HardDrive, Cpu, Wifi, Bluetooth, Volume2, Globe, Monitor, 
  Settings, Clock, MessageSquare, PhoneCall, Phone, Folder, Activity, 
  Bell, Power, Search, Shield, ChevronRight, TerminalSquare, AlertTriangle,
  Minus, Plus
} from 'lucide-react';

// --- MOCK DATA ---
const FLEET_DEVICES = [
  { id: 'dev_1', name: 'Xiaomi 23076RN4BI', hash: '8dfdfa9b342406ab', battery: 69, status: 'online' },
  { id: 'dev_2', name: 'Samsung SM-G998B', hash: '1a2b3c4d5e6f7g8h', battery: 24, status: 'offline' },
  { id: 'dev_3', name: 'Pixel 7 Pro', hash: '9z8y7x6w5v4u3t2s', battery: 88, status: 'online' },
];

const PERMISSIONS = [
  { label: 'SMS INTERCEPT', status: 'GRANTED' },
  { label: 'SMS TRANSMIT', status: 'GRANTED' },
  { label: 'SMS ARCHIVE', status: 'GRANTED' },
  { label: 'VOICE UPLINK', status: 'GRANTED' },
  { label: 'IDENTITY READ', status: 'GRANTED' },
  { label: 'SYSTEM ALERT', status: 'DENIED' },
];

// --- REUSABLE COMPONENTS ---

interface StatCardProps {
  title: string;
  icon?: React.ElementType;
  value?: string | React.ReactNode;
  subtitle?: string;
  progress?: number;
  children?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, icon: Icon, value, subtitle, progress, children }) => (
  <div className="bg-[#0b0b10] border border-[#1a1a24] rounded-lg p-4 flex flex-col justify-between hover:border-[#2a2a35] transition-colors">
    <div className="flex justify-between items-start mb-3">
      <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest">{title}</span>
      {Icon && <Icon className="w-4 h-4 text-red-600/80" aria-hidden="true" />}
    </div>
    {children ? (
      children
    ) : (
      <div>
        <div className="text-lg font-bold text-gray-100 mb-2">{value}</div>
        {progress !== undefined && (
          <div className="w-full bg-[#1a1a24] h-1 rounded-full mb-2 overflow-hidden" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
            <div className="bg-red-600 h-full shadow-[0_0_8px_rgba(220,38,38,0.6)]" style={{ width: `${progress}%` }} />
          </div>
        )}
        {subtitle && <div className="text-[10px] text-gray-500">{subtitle}</div>}
      </div>
    )}
  </div>
);

const PermissionBadge: React.FC<{ label: string; status: string }> = ({ label, status }) => {
  const isGranted = status === 'GRANTED';
  return (
    <div className="flex items-center justify-between p-3 bg-[#0b0b10] border border-[#1a1a24] rounded-md">
      <span className="text-xs text-gray-400 font-medium tracking-wide">{label}</span>
      <span className={`text-[9px] px-2 py-0.5 rounded uppercase font-bold tracking-widest border ${
        isGranted 
          ? 'text-[#00e676] bg-[#00e676]/10 border-[#00e676]/30' 
          : 'text-red-500 bg-red-500/10 border-red-500/30'
      }`}>
        {status}
      </span>
    </div>
  );
};

// --- MAIN LAYOUT COMPONENT ---

export default function C2Dashboard() {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');

  // Clock sync
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex h-screen w-full bg-[#050508] text-gray-300 font-sans overflow-hidden selection:bg-red-900/50">
      
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-64 flex flex-col bg-[#08080c] border-r border-[#1a1a24] z-10" aria-label="Main Navigation">
        {/* Branding */}
        <div className="p-6 flex flex-col items-center border-b border-[#1a1a24]">
          <Shield className="w-10 h-10 text-red-600 mb-2 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]" aria-hidden="true" />
          <h1 className="text-xl font-bold text-white tracking-widest">TESVRIX</h1>
          <div className="flex items-center gap-2 mt-2 bg-[#00e676]/10 px-2 py-1 rounded-full border border-[#00e676]/20">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00e676] animate-pulse" />
            <span className="text-[9px] text-[#00e676] uppercase tracking-widest font-bold">Secure Link</span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 py-4 overflow-y-auto custom-scrollbar">
          <ul className="space-y-1">
            {[
              { icon: MessageSquare, label: 'SMS CENTER' },
              { icon: PhoneCall, label: 'CALL COMMAND' },
              { icon: Phone, label: 'CALL LOG' },
              { icon: Folder, label: 'FILE MANAGER' },
              { icon: TerminalSquare, label: 'ACTIONS' },
              { icon: Bell, label: 'NOTIFICATIONS' },
              { icon: Activity, label: 'DEVICE STATS', active: true },
              { icon: Shield, label: 'SECURITY' },
            ].map((item, idx) => (
              <li key={idx}>
                <button 
                  className={`w-full flex items-center gap-3 px-6 py-3 text-xs font-medium tracking-wide transition-all ${
                    item.active 
                      ? 'text-red-500 bg-red-950/20 border-r-2 border-red-600' 
                      : 'text-gray-500 hover:text-gray-300 hover:bg-[#111116]'
                  }`}
                  aria-current={item.active ? 'page' : undefined}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Bottom */}
        <div className="p-4 border-t border-[#1a1a24]">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-950/30 text-red-500 border border-red-900/50 rounded-md hover:bg-red-900/50 hover:text-white transition-colors text-xs font-bold tracking-widest">
            <Power className="w-3 h-3" />
            DISCONNECT
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* TOP COMMAND BAR */}
        <header className="h-14 bg-[#08080c] border-b border-[#1a1a24] flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center text-xs font-mono text-gray-500 tracking-wider">
            <TerminalSquare className="w-4 h-4 mr-2 text-gray-600" />
            <span className="hover:text-gray-300 cursor-pointer">OPERATOR</span>
            <ChevronRight className="w-3 h-3 mx-2" />
            <span className="text-red-500 font-semibold">DEVICE STATS</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-[#0b0b10] px-3 py-1.5 rounded border border-[#1a1a24]">
            <Clock className="w-3.5 h-3.5 text-gray-500" />
            {currentTime || '00:00:00'}
          </div>
        </header>

        {/* SPLIT VIEW WORKSPACE */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* FLEET LIST (Left Middle) */}
          <section className="w-80 border-r border-[#1a1a24] bg-[#050508] flex flex-col" aria-label="Fleet List">
            <div className="p-4 border-b border-[#1a1a24]">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Monitor className="w-3.5 h-3.5" />
                Tesvrix Fleet
              </h2>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
                <input 
                  type="text" 
                  placeholder="Search Node Identifier..." 
                  className="w-full bg-[#0b0b10] border border-[#1a1a24] text-xs text-white rounded px-9 py-2 focus:outline-none focus:border-red-500/50 transition-colors"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search devices"
                />
              </div>
            </div>
            
            <ul className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
              {FLEET_DEVICES.filter(d => d.name.toLowerCase().includes(searchQuery.toLowerCase())).map((device) => (
                <li key={device.id}>
                  <button className={`w-full flex items-center justify-between p-3 rounded-md transition-colors ${
                    device.id === 'dev_1' ? 'bg-[#111116] border border-[#1a1a24]' : 'hover:bg-[#0b0b10] border border-transparent'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${device.status === 'online' ? 'bg-[#00e676] shadow-[0_0_5px_#00e676]' : 'bg-red-500'}`} />
                      <div className="flex flex-col text-left">
                        <span className={`text-xs font-medium ${device.id === 'dev_1' ? 'text-white' : 'text-gray-400'}`}>
                          {/* Emulate blurred/obscured text for inactive items if needed, standard text here */}
                          {device.name}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-gray-600">{device.battery}%</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* ACTIVE DEVICE DETAILS (Right Area) */}
          <section className="flex-1 bg-[#050508] overflow-y-auto custom-scrollbar p-6 lg:p-8" aria-label="Device Details">
            
            {/* Target Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-1 flex items-center gap-3">
                  Xiaomi 23076RN4BI
                </h2>
                <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                  <Shield className="w-3.5 h-3.5 text-gray-600" />
                  <span className="opacity-50">#</span> {FLEET_DEVICES[0].hash}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 px-3 py-1 bg-[#00e676]/10 border border-[#00e676]/30 rounded text-[#00e676] text-[10px] font-bold tracking-widest uppercase">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00e676]" />
                  Uplink Active
                </div>
                <button className="flex items-center gap-2 px-3 py-1 bg-red-950/20 border border-red-900/50 rounded text-red-500 hover:bg-red-900/40 transition-colors text-[10px] font-bold tracking-widest uppercase">
                  <AlertTriangle className="w-3 h-3" />
                  Delete Node
                </button>
              </div>
            </div>

            {/* Telemetry Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
              <StatCard 
                title="Energy Cell" icon={Battery} 
                value="69%" subtitle="⚡ Discharging" progress={69} 
              />
              <StatCard 
                title="Storage Unit" icon={HardDrive} 
                value="87GB" subtitle="82% Capacity Occupied" progress={82} 
              />
              <StatCard 
                title="Memory Core" icon={Cpu} 
                value="116MB" subtitle="88% Computational Load" progress={88} 
              />
              <StatCard 
                title="Identifier Sigma" icon={Settings} 
              >
                <div className="text-sm font-mono text-gray-300 blur-[2px] select-none mt-1">
                  IMSI: 310260000000000
                </div>
                <div className="text-[10px] text-gray-500 mt-2">SIM Data</div>
              </StatCard>

              <StatCard title="Identifier Slot 1" icon={Settings}>
                <div className="text-sm font-bold text-gray-500 tracking-wider mt-1">HIDDEN</div>
                <div className="text-[10px] text-gray-600 mt-2">Not Set</div>
              </StatCard>

              <StatCard title="Network Control" icon={Wifi}>
                <div className="space-y-2 mt-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center gap-2 text-gray-400"><Wifi className="w-3.5 h-3.5"/> WIFI</span>
                    <span className="text-red-500 text-[10px] font-bold px-1.5 py-0.5 border border-red-900/50 rounded bg-red-950/20">OFF</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center gap-2 text-gray-400"><Bluetooth className="w-3.5 h-3.5"/> BT</span>
                    <span className="text-[#00e676] text-[10px] font-bold px-1.5 py-0.5 border border-[#00e676]/30 rounded bg-[#00e676]/10">ON</span>
                  </div>
                </div>
              </StatCard>

              <StatCard title="Audio Engine" icon={Volume2}>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-lg font-bold text-white w-12">V:80%</span>
                  <div className="flex items-center gap-1">
                    <button className="w-6 h-6 rounded bg-[#1a1a24] hover:bg-[#2a2a35] flex items-center justify-center border border-[#2a2a35]"><Minus className="w-3 h-3 text-gray-400"/></button>
                    <div className="w-16 h-1 bg-[#1a1a24] rounded-full overflow-hidden">
                      <div className="bg-red-600 h-full w-[80%] shadow-[0_0_8px_rgba(220,38,38,0.6)]" />
                    </div>
                    <button className="w-6 h-6 rounded bg-[#1a1a24] hover:bg-[#2a2a35] flex items-center justify-center border border-[#2a2a35]"><Plus className="w-3 h-3 text-gray-400"/></button>
                  </div>
                </div>
                <div className="text-[10px] text-gray-500 mt-2">Media Stream Level</div>
              </StatCard>

              <StatCard title="IP Protocol" icon={Globe}>
                <div className="text-sm font-mono text-gray-300 mt-1 flex items-center gap-2">
                  <span className="blur-[3px] select-none">192.168.1.</span>2:1
                </div>
                <div className="text-[10px] text-gray-500 mt-2">Network Interface</div>
              </StatCard>

              <StatCard title="Visual State" icon={Monitor}>
                <div className="text-sm font-bold text-gray-200 mt-1">ON (LOCKED)</div>
                <div className="text-[10px] text-gray-500 mt-2">Display Hardware Status</div>
              </StatCard>

              <StatCard title="OS Architecture" icon={TerminalSquare}>
                <div className="text-sm font-bold text-gray-200 mt-1">Android 15</div>
                <div className="text-[10px] text-gray-500 mt-2">Kernel Build Level</div>
              </StatCard>

              <StatCard title="Last Telemetry" icon={Clock}>
                <div className="text-sm font-bold text-gray-200 mt-1">12:06:05 PM</div>
                <div className="text-[10px] text-gray-500 mt-2">Sync Timestamp</div>
              </StatCard>
            </div>

            {/* Access Authority Protocols Table */}
            <div>
              <h3 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Access Authority Protocols
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {PERMISSIONS.map((perm, idx) => (
                  <PermissionBadge key={idx} label={perm.label} status={perm.status} />
                ))}
              </div>
            </div>

          </section>
        </div>
      </main>

      {/* Global Styles for Scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #050508;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1a1a24;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #2a2a35;
        }
      `}} />
    </div>
  );
}
