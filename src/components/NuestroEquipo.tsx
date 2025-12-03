import ProfileCard from "./ProfileCard";
import { Instagram, Linkedin } from "lucide-react";

const mainTeam = [
  {
    name: "Orlidan Montesdeoca",
    title: "CEO & DevOps Specialist",
    handle: "its.orlo",
    status: "Online",
    avatarUrl: "/imgs/equipo/orli.png",
    linkedin: "https://www.linkedin.com/in/orlidan-montesdeoca",
    instagram: "https://www.instagram.com/its.orlo",
  },
  {
    name: "Cristhian Recalde",
    title: "COO & Tech Lead",
    handle: "cry.code",
    status: "Coding",
    avatarUrl: "/imgs/equipo/gris.png",
    linkedin: "https://www.linkedin.com/in/isnotcristhianr/",
    instagram: "https://www.instagram.com/cry.code/",
  },
  {
    name: "Juan Pablo Vasquez",
    title: "Solutions Architect",
    handle: "juanpablo",
    status: "Architecting",
    avatarUrl: "/imgs/equipo/jp.png",
    linkedin: "#",
    instagram: "#",
  },
];

const marketingTeam = [
  {
    name: "Daniela Ortega",
    title: "Marketing Digital",
    handle: "dani.marketing",
    status: "Creative",
    avatarUrl: "/imgs/equipo/dani.png",
    linkedin: "#",
    instagram: "#",
  },
];

const NuestroEquipo = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nuestro Equipo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Profesionales especializados en tecnología e innovación, trabajando juntos
            para transformar ideas en soluciones digitales de vanguardia.
          </p>
        </div>

        {/* Equipo Principal */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-3">
              Equipo Principal
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
            {mainTeam.map((member, index) => (
              <div key={index} className="flex flex-col items-center gap-6 w-full max-w-sm">
                <ProfileCard
                  name={member.name}
                  title={member.title}
                  handle={member.handle}
                  status={member.status}
                  contactText="Connect"
                  avatarUrl={member.avatarUrl}
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                />
                
                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a 
                    href={member.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-pink-600 hover:text-pink-700 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                    aria-label={`Instagram de ${member.name}`}
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-blue-600 hover:text-blue-700 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing y Social Media */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-3">
              Marketing y Social Media
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-orange-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="flex justify-center">
            {marketingTeam.map((member, index) => (
              <div key={index} className="flex flex-col items-center gap-6 w-full max-w-sm">
                <ProfileCard
                  name={member.name}
                  title={member.title}
                  handle={member.handle}
                  status={member.status}
                  contactText="Connect"
                  avatarUrl={member.avatarUrl}
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                />
                
                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a 
                    href={member.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-pink-600 hover:text-pink-700 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                    aria-label={`Instagram de ${member.name}`}
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-blue-600 hover:text-blue-700 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuestroEquipo;

