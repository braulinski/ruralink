export default function RuralinkDashboard() {
  const vehicles = [
    { id: 'CHS-4421', driver: 'Andrés Méndez', speed: '67 km/h', status: 'online' },
    { id: 'OAX-8873', driver: 'Lucía Torres', speed: '52 km/h', status: 'online' },
    { id: 'CHS-5502', driver: 'Ramón Estrada', speed: '78 km/h', status: 'warning' },
    { id: 'OAX-3340', driver: 'Marta Villanueva', speed: 'ALERTA', status: 'danger' },
  ];

  const alerts = [
    {
      title: 'Impacto detectado',
      unit: 'OAX-3340',
      description: 'Grabación disponible · Hace 12 min',
      color: 'bg-red-500/20 border-red-500',
    },
    {
      title: 'Exceso de velocidad',
      unit: 'CHS-5502',
      description: '92 km/h en zona 70',
      color: 'bg-yellow-500/20 border-yellow-500',
    },
    {
      title: 'Desconexión prolongada',
      unit: 'OAX-2201',
      description: 'Sin señal · Cache local activo',
      color: 'bg-blue-500/20 border-blue-500',
    },
  ];

  return (
    <div className="min-h-screen bg-[#061120] text-white flex font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-[#081529] border-r border-cyan-900/40 p-6 flex flex-col">
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-wide text-cyan-400">
            RURALINK
          </h1>
          <p className="text-xs uppercase tracking-[4px] text-cyan-600 mt-1">
            Ecosistema IoT Rural
          </p>
        </div>

        <nav className="space-y-3 text-sm">
          <SidebarItem active label="Dashboard" />
          <SidebarItem label="GPS en tiempo real" />
          <SidebarItem label="Vehículos" />
          <SidebarItem label="Alertas" badge="3" />
          <SidebarItem label="Eventos" badge="7" />
          <SidebarItem label="Historial de rutas" />
          <SidebarItem label="Cámaras live" />
          <SidebarItem label="Grabaciones" />
          <SidebarItem label="Usuarios" />
          <SidebarItem label="Datos & Storage" />
          <SidebarItem label="Reportes" />
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Topbar */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-5xl font-bold leading-tight">
              Panel de <br /> monitoreo
            </h2>
            <p className="text-gray-400 mt-3">
              Última sincronización: hace 47 seg · Lunes 26 May 2025
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <div className="px-5 py-2 rounded-full border border-cyan-500 text-cyan-400 bg-cyan-500/10">
              ● Sistema activo · 4G/LTE
            </div>

            <button className="px-6 py-3 rounded-xl border border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 transition">
              Modo híbrido
            </button>
          </div>
        </div>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <StatCard title="Unidades activas" value="18" subtitle="3 vs ayer" color="text-cyan-400" />
          <StatCard title="Alertas críticas" value="3" subtitle="1 sin resolver" color="text-red-400" />
          <StatCard title="Eventos hoy" value="27" subtitle="6 vs promedio" color="text-yellow-400" />
          <StatCard title="Storage usado" value="64%" subtitle="142 GB de 220" color="text-blue-400" />
        </section>

        {/* Grid */}
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Map */}
          <div className="bg-[#091829] rounded-3xl border border-cyan-900/40 p-5 min-h-[400px] relative overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Mapa en tiempo real</h3>
              <button className="text-cyan-400 border border-cyan-500 px-4 py-2 rounded-xl text-sm">
                Ver completo
              </button>
            </div>

            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#00ffff_1px,transparent_1px),linear-gradient(90deg,#00ffff_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse shadow-[0_0_25px_#facc15]" />
            </div>
          </div>

          {/* Vehicles */}
          <div className="bg-[#091829] rounded-3xl border border-cyan-900/40 p-5 xl:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Unidades registradas</h3>
              <button className="text-cyan-400 border border-cyan-500 px-4 py-2 rounded-xl text-sm">
                Ver todas
              </button>
            </div>

            <div className="space-y-4">
              {vehicles.map((vehicle, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-[#0b1d33] border border-cyan-900/20 rounded-2xl p-4 hover:border-cyan-500 transition"
                >
                  <div>
                    <h4 className="font-semibold text-lg">{vehicle.id}</h4>
                    <p className="text-gray-400 text-sm">{vehicle.driver}</p>
                  </div>

                  <div
                    className={`font-bold text-lg ${
                      vehicle.status === 'danger'
                        ? 'text-red-400'
                        : vehicle.status === 'warning'
                        ? 'text-yellow-400'
                        : 'text-cyan-400'
                    }`}
                  >
                    {vehicle.speed}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alerts */}
          <div className="bg-[#091829] rounded-3xl border border-cyan-900/40 p-5">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Alertas activas</h3>
              <button className="text-cyan-400 border border-cyan-500 px-4 py-2 rounded-xl text-sm">
                Gestionar
              </button>
            </div>

            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div
                  key={index}
                  className={`border rounded-2xl p-4 ${alert.color}`}
                >
                  <h4 className="font-semibold">
                    {alert.title} · {alert.unit}
                  </h4>
                  <p className="text-sm text-gray-300 mt-2">
                    {alert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Events */}
          <div className="bg-[#091829] rounded-3xl border border-cyan-900/40 p-5">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Registro de eventos</h3>
              <button className="text-cyan-400 border border-cyan-500 px-4 py-2 rounded-xl text-sm">
                Historial
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <EventItem tag="IMPACTO" unit="OAX-3340" detail="Aceleración brusca" />
              <EventItem tag="VELOCIDAD" unit="CHS-5502" detail="92 km/h en zona 70" />
              <EventItem tag="PUERTA" unit="OAX-8873" detail="Apertura fuera de ruta" />
              <EventItem tag="FRENADO" unit="CHS-4421" detail="Frenado brusco" />
            </div>
          </div>

          {/* Cameras */}
          <div className="bg-[#091829] rounded-3xl border border-cyan-900/40 p-5">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Cámaras vehiculares</h3>
              <button className="text-cyan-400 border border-cyan-500 px-4 py-2 rounded-xl text-sm">
                Gestionar
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <CameraCard title="CHS-4421" status="REC" />
              <CameraCard title="OAX-8873" status="LIVE" />
              <CameraCard title="OAX-3340" status="EVENTO" />
              <CameraCard title="OAX-2201" status="OFFLINE" />
            </div>
          </div>

          {/* Storage */}
          <div className="bg-[#091829] rounded-3xl border border-cyan-900/40 p-5">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Consumo de datos & storage</h3>
              <button className="text-cyan-400 border border-cyan-500 px-4 py-2 rounded-xl text-sm">
                Detalles
              </button>
            </div>

            <StorageBar label="Almacenamiento" value="64" amount="142 / 220 GB" />
            <StorageBar label="Grabaciones por evento" value="38" amount="38.4 GB" />
            <StorageBar label="Datos GPS transmitidos" value="22" amount="1.2 GB" />

            <div className="mt-8 p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30">
              <p className="text-gray-300 text-sm uppercase tracking-wide">
                Smart Recording · ahorro estimado
              </p>
              <h4 className="text-5xl font-bold text-cyan-400 mt-2">73%</h4>
              <p className="text-gray-400 text-sm mt-2">
                Menos almacenamiento vs grabación continua.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SidebarItem({ label, active, badge }) {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition ${
        active
          ? 'bg-cyan-500/15 border border-cyan-500 text-cyan-400'
          : 'hover:bg-[#10233d] text-gray-300'
      }`}
    >
      <span>{label}</span>
      {badge && (
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {badge}
        </span>
      )}
    </div>
  );
}

function StatCard({ title, value, subtitle, color }) {
  return (
    <div className="bg-[#091829] border border-cyan-900/40 rounded-3xl p-6 hover:border-cyan-500 transition">
      <p className="text-gray-400 uppercase text-xs tracking-[3px]">{title}</p>
      <h3 className={`text-5xl font-bold mt-4 ${color}`}>{value}</h3>
      <p className="text-gray-500 mt-2 text-sm">{subtitle}</p>
    </div>
  );
}

function EventItem({ tag, unit, detail }) {
  return (
    <div className="flex justify-between items-center bg-[#0b1d33] rounded-2xl p-4 border border-cyan-900/20">
      <div>
        <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300">
          {tag}
        </span>
        <h4 className="font-semibold mt-2">{unit}</h4>
      </div>

      <p className="text-gray-400 text-sm max-w-[150px] text-right">
        {detail}
      </p>
    </div>
  );
}

function CameraCard({ title, status }) {
  return (
    <div className="bg-black rounded-2xl border border-cyan-900/20 h-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />

      <div className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full bg-red-500 text-white">
        {status}
      </div>

      <div className="absolute bottom-3 left-3">
        <h4 className="font-semibold text-sm">{title}</h4>
        <p className="text-gray-400 text-xs">Cámara frontal</p>
      </div>
    </div>
  );
}

function StorageBar({ label, value, amount }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-300">{label}</span>
        <span className="text-cyan-400">{amount}</span>
      </div>

      <div className="w-full h-3 bg-[#12243c] rounded-full overflow-hidden">
        <div
          className="h-full bg-cyan-400 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
