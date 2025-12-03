import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import NuestroEquipo from "@/components/NuestroEquipo";
import { useEffect } from "react";

const Team = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <NuestroEquipo />
      </main>
      <Footer />
    </div>
  );
};

export default Team;
