import ProfileCard from "./ProfileCard";
import { Instagram, Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  title: string;
  handle: string;
  status: string;
  avatarUrl: string;
  linkedin: string;
  instagram: string;
}

interface TeamSectionProps {
  title: string;
  gradientClass: string;
  members: TeamMember[];
  columns?: number;
}

const TeamSection: React.FC<TeamSectionProps> = ({
  title,
  gradientClass,
  members,
  columns = 3,
}) => {
  const gridCols = {
    2: "md:grid-cols-2 ",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-foreground mb-3">{title}</h3>
        <div
          className={`w-24 h-1 bg-gradient-to-r ${gradientClass} mx-auto rounded-full`}
        />
      </div>

      <div
        className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-8 justify-items-center max-w-6xl mx-auto`}
      >
        {members.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-6 w-full max-w-sm"
          >
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
  );
};

const mainTeam: TeamMember[] = [
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
];

const marketingTeam: TeamMember[] = [
  {
    name: "Domenica Alvarez",
    title: "Ing. Biotecnología & Content Creator",
    handle: "domealvarezp",
    status: "Creative",
    avatarUrl: "/imgs/equipo/user.png",
    linkedin: "https://www.linkedin.com/in/dom%C3%A9nica/",
    instagram: "https://www.instagram.com/domealvarezp/",
  },
  {
    name: "Giuseppe Chamorro",
    title: "CMO & MBA Marketing Digital",
    handle: "giuschamorro",
    status: "Marketing",
    avatarUrl: "/imgs/equipo/user.png",
    linkedin: "https://www.linkedin.com/in/giuseppechamorro/",
    instagram: "https://www.instagram.com/giuschamorro/",
  },
];

const devsTeam: TeamMember[] = [
  {
    name: "Juan Pablo Vasquez",
    title: "Solutions Architect",
    handle: "juanpablo",
    status: "Architecting",
    avatarUrl: "/imgs/equipo/jp.png",
    linkedin:
      "https://www.linkedin.com/in/juan-pablo-vasquez-5b2116257",
    instagram: "https://www.instagram.com/jupa_dev/",
  },
  {
    name: "David Villarreal",
    title: "Ing. Eléctrico & Developer",
    handle: "davidvillarreal",
    status: "Developing",
    avatarUrl: "/imgs/equipo/deivid.png",
    linkedin: "https://www.linkedin.com/in/david-villarreal-c",
    instagram: "https://www.instagram.com/davidvillarreal.31/",
  },
];

const NuestroEquipo = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nuestro Equipo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Profesionales especializados en tecnología e innovación, trabajando
            juntos para transformar ideas en soluciones digitales de vanguardia.
          </p>
        </div>

        <TeamSection
          title="Equipo Principal"
          gradientClass="from-blue-600 to-purple-600"
          members={mainTeam}
          columns={2}
        />

        <TeamSection
          title="Desarrollo & Arquitectura"
          gradientClass="from-green-600 to-emerald-600"
          members={devsTeam}
          columns={2}
        />

        <TeamSection
          title="Social Media"
          gradientClass="from-pink-600 to-orange-600"
          members={marketingTeam}
          columns={2}
        />
      </div>
    </section>
  );
};

export default NuestroEquipo;

