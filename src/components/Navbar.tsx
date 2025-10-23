import StaggeredMenu, { StaggeredMenuItem, StaggeredMenuSocialItem } from './StaggeredMenu';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const scrollToSection = (id: string) => {
    // Si no estamos en la página principal, redirigir primero
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
  };

  const menuItems: StaggeredMenuItem[] = [
    {
      label: 'Inicio',
      ariaLabel: 'Ir al inicio',
      link: '/',
      onClick: handleHomeClick
    },
    {
      label: 'Servicios',
      ariaLabel: 'Ver nuestros servicios',
      link: '/#servicios',
      onClick: () => scrollToSection('servicios')
    },
    {
      label: 'Certificaciones',
      ariaLabel: 'Ver certificaciones',
      link: '/#certificaciones',
      onClick: () => scrollToSection('certificaciones')
    },
    {
      label: 'Testimonios',
      ariaLabel: 'Leer testimonios de clientes',
      link: '/#testimonios',
      onClick: () => scrollToSection('testimonios')
    },
    {
      label: 'Blog',
      ariaLabel: 'Ir al blog',
      link: '/blog-recursos',
      onClick: () => window.location.href = '/blog-recursos'
    },
    {
      label: 'Contacto',
      ariaLabel: 'Contactar con nosotros',
      link: '/#contacto',
      onClick: () => scrollToSection('contacto')
    }
  ];

  const socialItems: StaggeredMenuSocialItem[] = [
    {
      label: 'LinkedIn',
      link: 'https://linkedin.com/company/ionoshub'
    },
    {
      label: 'Instagram',
      link: 'https://www.instagram.com/ionoshub?igsh=aW1uYXhha21rM2Rx'
    },
    {
      label: 'WhatsApp',
      link: 'https://api.whatsapp.com/send/?phone=593992249152&text&type=phone_number&app_absent=0'
    },
    {
      label: 'TikTok',
      link: 'https://www.tiktok.com/@ionoshub?_t=ZM-90mGRMawTPP&_r=1'
    }
  ];

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#000000"
      openMenuButtonColor="#000000"
      changeMenuColorOnOpen={false}
      colors={['rgba(0, 168, 232, 0.1)', 'rgba(0, 168, 232, 0.05)']}
      logoUrl="/imgs/logo%20remove.png"
      accentColor="#00A8E8"
      isFixed={true}
      themeToggle={<ThemeToggle />}
      onMenuOpen={() => console.log('Menu abierto')}
      onMenuClose={() => console.log('Menu cerrado')}
    />
  );
}
