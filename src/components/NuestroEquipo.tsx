import { motion } from "framer-motion";
import { Linkedin, ArrowRight } from "lucide-react";

interface TeamMember {
  name: string;
  title: string;
  avatarUrl: string;
  linkedin: string;
}

const mainTeam: TeamMember[] = [
  {
    name: "Orlidan Montesdeoca",
    title: "CEO & DevOps Specialist",
    avatarUrl: "/imgs/equipo/orli.png",
    linkedin: "https://www.linkedin.com/in/orlidan-montesdeoca",
  },
  {
    name: "Cristhian Recalde",
    title: "COO & Tech Lead",
    avatarUrl: "/imgs/equipo/gris.png",
    linkedin: "https://www.linkedin.com/in/isnotcristhianr/",
  },
  {
    name: "Giuseppe Tubon Chamorro",
    title: "CMO & MBA Marketing Digital",
    avatarUrl: "/imgs/equipo/gius.png",
    linkedin: "https://www.linkedin.com/in/giuseppechamorro/",
  },
];

const devsTeam: TeamMember[] = [
  {
    name: "David Villarreal",
    title: "Ing. Mecatrónico & Developer Automatizaciones",
    avatarUrl: "/imgs/equipo/deivid.png",
    linkedin: "https://www.linkedin.com/in/david-villarreal-c",
  },
  {
    name: "Alan Rodriguez",
    title: "Ing. TI & Product Manager",
    avatarUrl: "/imgs/equipo/user.png",
    linkedin: "https://www.linkedin.com/in/alan-rodriguez-c",
  },
];

const marketingTeam: TeamMember[] = [
  {
    name: "Domenica Alvarez",
    title: "Ing. Biotecnología & Content Creator",
    avatarUrl: "/imgs/equipo/dome.png",
    linkedin: "https://www.linkedin.com/in/dom%C3%A9nica/",
  },
  {
    name: "Cristian Morales",
    title: "Filmaker & Editor",
    avatarUrl: "/imgs/equipo/cris.png",
    linkedin: "https://www.linkedin.com/in/cristian-morales/",
  },
];

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="flex justify-between items-end mb-8 border-b border-border/40 pb-4">
    <div className="flex items-center gap-3">
      <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
      <h3 className="text-2xl font-bold text-foreground">{title}</h3>
    </div>
    <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase hidden sm:block">
      {subtitle}
    </span>
  </div>
);

const TeamCard = ({ member }: { member: TeamMember }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full"
  >
    <div className="w-full h-72 overflow-hidden bg-muted">
      <img
        src={member.avatarUrl}
        alt={member.name}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-5 flex justify-between items-start flex-grow bg-background">
      <div>
        <h4 className="font-bold text-foreground text-lg">{member.name}</h4>
        <p className="text-sm text-muted-foreground mt-1">{member.title}</p>
      </div>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-blue-600 transition-colors shrink-0 ml-4 p-1"
        aria-label={`LinkedIn de ${member.name}`}
      >
        <Linkedin size={20} strokeWidth={1.5} />
      </a>
    </div>
  </motion.div>
);

const NuestroEquipo = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0a0a0a] relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            Nuestro Equipo
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight leading-tight">
            Conoce a las mentes detrás de nuestra misión
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Profesionales especializados en tecnología e innovación, trabajando
            juntos para transformar ideas en soluciones digitales de vanguardia.
          </p>
        </div>

        {/* Administration */}
        <div className="mb-20">
          <SectionHeader title="Administración" subtitle="LIDERAZGO" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainTeam.map((member, idx) => (
              <TeamCard key={idx} member={member} />
            ))}
          </div>
        </div>

        {/* Development & Automation */}
        <div className="mb-20">
          <SectionHeader title="Desarrollo y Automatización" subtitle="INGENIERÍA" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {devsTeam.map((member, idx) => (
              <TeamCard key={idx} member={member} />
            ))}
          </div>
        </div>

        {/* Marketing & Creative */}
        <div className="mb-24">
          <SectionHeader title="Marketing y Creatividad" subtitle="CRECIMIENTO" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingTeam.map((member, idx) => (
              <TeamCard key={idx} member={member} />
            ))}
          </div>
        </div>

        {/* Join Our Team Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 to-blue-950 dark:from-slate-900 dark:to-slate-950 rounded-3xl p-10 md:p-14 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden"
        >
          {/* Patrón de fondo sutil (opcional) */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] mix-blend-overlay"></div>

          <div className="max-w-xl relative z-10 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para generar un impacto?</h3>
            <p className="text-slate-300 text-lg">
              Siempre estamos buscando talento excepcional. Si te apasiona la
              innovación, tenemos un escritorio esperando por ti.
            </p>
          </div>
          <button className="relative z-10 bg-white text-slate-900 hover:bg-slate-100 transition-colors px-8 py-4 rounded-full font-semibold flex items-center gap-2 whitespace-nowrap shrink-0 group">
            Únete a Nuestro Equipo
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default NuestroEquipo;
