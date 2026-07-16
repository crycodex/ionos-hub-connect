import { Helmet, HelmetProvider } from "react-helmet-async";
import { ReactNode } from "react";

const SITE_URL = "https://ionoshub.net";
const DEFAULT_OG = "/imgs/icon.png";

export function SeoProvider({ children }: { children: ReactNode }) {
  return <HelmetProvider>{children}</HelmetProvider>;
}

interface PageSeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export function PageSeo({
  title,
  description,
  path = "/",
  image = DEFAULT_OG,
  jsonLd,
}: PageSeoProps) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes("IonosHub") ? title : `${title} | IonosHub`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image.startsWith("http") ? image : `${SITE_URL}${image}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd)}
        </script>
      )}
    </Helmet>
  );
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "IonosHub",
  url: SITE_URL,
  logo: `${SITE_URL}/imgs/icon.png`,
  email: "info@ionoshub.net",
  telephone: "+593992249152",
  slogan: "De datos a resultados",
  address: {
    "@type": "PostalAddress",
    addressCountry: "EC",
  },
  sameAs: [],
};
