import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import KineticTeamList, { KineticTeamMember } from "@/components/ui/kinetic-team-hybrid";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

const team: KineticTeamMember[] = [
  {
    id: "01",
    name: "Orlidan Montesdeoca",
    role: "CEO · DevOps Specialist",
    group: "Liderazgo",
    image: "/imgs/equipo/orli.png",
    linkedin: "https://www.linkedin.com/in/orlidan-montesdeoca",
  },
  {
    id: "02",
    name: "Cristhian Recalde",
    role: "COO · Tech Lead",
    group: "Liderazgo",
    image: "/imgs/equipo/gris.png",
    linkedin: "https://www.linkedin.com/in/isnotcristhianr/",
  },
  {
    id: "03",
    name: "Giuseppe Tubon",
    role: "CMO · Marketing Digital",
    group: "Liderazgo",
    image: "/imgs/equipo/gius.png",
    linkedin: "https://www.linkedin.com/in/giuseppechamorro/",
  },
  {
    id: "04",
    name: "David Villarreal",
    role: "Developer · Automatizaciones",
    group: "Ingeniería",
    image: "/imgs/equipo/deivid.png",
    linkedin: "https://www.linkedin.com/in/david-villarreal-c",
  },
  {
    id: "05",
    name: "Alan Rodriguez",
    role: "Product Manager",
    group: "Ingeniería",
    image: "/imgs/equipo/user.png",
    linkedin: "https://www.linkedin.com/in/alan-rodriguez-c",
  },
  {
    id: "06",
    name: "Domenica Alvarez",
    role: "Content Creator",
    group: "Marketing",
    image: "/imgs/equipo/dome.png",
    linkedin: "https://www.linkedin.com/in/dom%C3%A9nica/",
  },
  {
    id: "07",
    name: "Cristian Morales",
    role: "Filmmaker · Editor",
    group: "Marketing",
    image: "/imgs/equipo/cris.png",
    linkedin: "https://www.linkedin.com/in/cristian-morales/",
  },
];

const Team = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleJoinClick = () => {
    window.open(
      "https://wa.me/593992249152?text=Hola,%20me%20interesa%20unirme%20al%20equipo%20de%20IonosHub",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <KineticTeamList
          title={
            <>
              Nuestro <span className="text-[#0ea5e9]">Equipo</span>
            </>
          }
          eyebrow="IonosHub · Ecuador"
          members={team}
        />

        {/* Banner: únete al equipo */}
        <section className="container mx-auto px-4 pb-24 max-w-6xl">
          <div className="bg-gradient-to-r from-slate-900 to-blue-950 rounded-3xl p-10 md:p-14 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] mix-blend-overlay" />
            <div className="max-w-xl relative z-10 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para generar un impacto?</h3>
              <p className="text-slate-300 text-lg">
                Siempre estamos buscando talento excepcional. Si te apasiona la
                innovación, tenemos un escritorio esperando por ti.
              </p>
            </div>
            <button
              type="button"
              onClick={handleJoinClick}
              className="relative z-10 bg-white text-slate-900 hover:bg-slate-100 transition-colors px-8 py-4 rounded-full font-semibold flex items-center gap-2 whitespace-nowrap shrink-0 group"
            >
              Únete a Nuestro Equipo
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
