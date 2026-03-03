import { BarChart3, Bot, Lightbulb, Rocket, Search, Code, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Bot,
    title: "Agentes Virtuales a medida",
    description: "Asistentes virtuales inteligentes que atienden 24/7 con funciones como agendar citas, brindar información y atención al cliente automatizada.",
    path: "/agentes-virtuales",
    stats: "Atención 24/7",
    iconColor: "text-blue-500 dark:text-blue-400",
    iconBg: "bg-blue-50 dark:bg-blue-400/10",
    badgeColor: "text-blue-600 dark:text-blue-300 bg-blue-50 dark:bg-blue-400/10",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Dashboards ejecutivos, análisis avanzado y pronósticos que transforman datos brutos en decisiones estratégicas inteligentes.",
    path: "/business-intelligence",
    stats: "Tiempo Real",
    iconColor: "text-blue-500 dark:text-blue-400",
    iconBg: "bg-blue-50 dark:bg-blue-400/10",
    badgeColor: "text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-500/20",
  },
  {
    icon: Lightbulb,
    title: "Marketing Digital",
    description: "Impulsa tu presencia online con campañas de alto impacto y estrategias personalizadas orientadas a resultados tangibles.",
    path: "/marketing-digital",
    stats: "ROAS Optimizado",
    iconColor: "text-orange-500 dark:text-orange-400",
    iconBg: "bg-orange-50 dark:bg-orange-400/10",
    badgeColor: "text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-500/20",
  },
  {
    icon: Search,
    title: "Investigación de Mercados",
    description: "Estudios especializados que identifican oportunidades ocultas y ventajas competitivas clave para posicionar tu negocio.",
    path: "/investigacion-de-mercados",
    stats: "Datos Precisos",
    iconColor: "text-slate-500 dark:text-slate-400",
    iconBg: "bg-slate-100 dark:bg-slate-400/10",
    badgeColor: "text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-500/20",
  },
  {
    icon: Rocket,
    title: "Transformación Digital",
    description: "Automatización de procesos, adopción tecnológica y optimización digital para hacer tu empresa más eficiente y escalable.",
    path: "/transformacion-digital",
    stats: "Sin Interrupciones",
    iconColor: "text-orange-500 dark:text-orange-400",
    iconBg: "bg-orange-50 dark:bg-orange-400/10",
    badgeColor: "text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-500/20",
  },
  {
    icon: Code,
    title: "Desarrollo Web - Móvil",
    description: "Sitios web profesionales, aplicaciones móviles y plataformas digitales personalizadas con las últimas tecnologías del mercado.",
    path: "/desarrollo-web-movil",
    stats: "Multiplataforma",
    iconColor: "text-pink-500 dark:text-pink-400",
    iconBg: "bg-pink-50 dark:bg-pink-400/10",
    badgeColor: "text-pink-700 dark:text-pink-300 bg-pink-100 dark:bg-pink-500/20",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-slate-50 dark:bg-[#0a0f1c] relative overflow-hidden font-sans">
      
      {/* Subtle Background Gradients */}
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-blue-100/40 dark:from-blue-900/10 to-transparent pointer-events-none" />
      <div className="absolute -left-40 top-40 w-96 h-96 bg-purple-200/40 dark:bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight leading-tight">
            Servicios que <span className="text-blue-500 dark:text-[#38bdf8]">Impulsan tu</span><br/>
            <span className="text-blue-500 dark:text-[#38bdf8]">Crecimiento</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
            Ofrecemos soluciones completas que abarcan desde el análisis inicial hasta el crecimiento proyectado, diseñadas para transformar tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1200px] mx-auto">
          {services.map((service, index) => (
            <Link key={service.title} to={service.path} className="group outline-none">
              <div 
                className="h-full flex flex-col p-8 rounded-[2rem] bg-white dark:bg-[#111827]/80 backdrop-blur-xl border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 flex items-center justify-center rounded-2xl ${service.iconBg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-6 h-6 ${service.iconColor}`} strokeWidth={2.5} />
                </div>
                
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#38bdf8] transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 dark:text-[#94a3b8] leading-relaxed mb-8 flex-grow text-[15px]">
                  {service.description}
                </p>

                {/* Footer of card */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-transparent group-hover:border-slate-100 dark:group-hover:border-white/5 transition-colors">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${service.badgeColor}`}>
                    {service.stats}
                  </span>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-[#38bdf8] group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-20">
          <p className="text-xs font-bold tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase">
            Impulsando el futuro de los negocios
          </p>
        </div>
      </div>
    </section>
  );
}
