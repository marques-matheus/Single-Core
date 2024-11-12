import type { Metadata } from "next";
import Head from "next/head";
import localFont from "next/font/local";
import "./globals.css";

const ScMedium = localFont({
  src: "./fonts/CoreSansD45Medium.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const ScItalic = localFont({
  src: "./fonts/CoreSansD45Medium-Italic.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Single Core",
  description: "Single Core",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Single Core",
            "logo": "https://single-core.vercel.app/_next/image?url=%2Flogo1.png&w=640&q=75",
            "url": "https://www.singlecore.com.br",
            "description": "Soluções em TI com o melhor custo benefício. A Single Core oferece serviços de TI e Telecom com alta qualidade e preços acessíveis, incluindo suporte técnico, gestão de serviços, adequação à LGPD e muito mais.",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "areaServed": "BR",
              "availableLanguage": "Portuguese",
              "email": "faleconosco@singlecore.com.br"
            },
            // "address": {
            //   "@type": "PostalAddress",
            //   "streetAddress": "ENDEREÇO_AQUI",
            //   "addressLocality": "São Paulo",
            //   "addressRegion": "SP",
            //   "postalCode": "00000-000",
            //   "addressCountry": "BR"
            // },
            "sameAs": [
              "https://www.linkedin.com/company/singlecore",
              "https://www.instagram.com/singlecore"
            ],
            "creator": {
              "@type": "Person",
              "name": "Matheus Marques",
              "url": "https://www.linkedin.com/in/marques-matheus-silva/"
            },
            "serviceType": [
              "Suporte Técnico de TI e Telecom",
              "Outsourcing",
              "Gestão de Serviços de TI e Telecom",
              "Eficiência em TI",
              "Estruturação de Rede de Computadores",
              "Adequação à LGPD",
              "Provisão de Internet e Telefonia",
              "Implantação e Gerenciamento de Firewall",
              "Locação de Equipamentos TI e Telecom",
              "Serviços de Cloud"
            ],
            "mission": "Levar os serviços de TI e Telecom a empresas com demandas baixas e complexas, com o melhor custo-benefício e sem a necessidade de uma contratação CLT.",
            "vision": "Somos parceiros, acreditamos na tecnologia como forma de construção e firmamento de marcas. Oferecemos a evolução do seu negócio.",
            "values": [
              "Confiança",
              "Segurança",
              "Lealdade",
              "Atendimento Humanizado"
            ],
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Matheus Costa"
                },
                "reviewBody": "Contar com o apoio da Single Core tem sido importante para nos gerar segurança quanto a continuidade de nosso trabalho. Meu time se sente confortável em poder contar com parceiros, diante de eventuais incidentes em nossos equipamentos e recursos de T.I.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": 5,
                  "bestRating": 5
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Bruno Chan"
                },
                "reviewBody": "AGILIDADE e RESULTADO. Contamos sempre com a Single Core para nossas questões técnicas. Atendimento rápido, preço justo e resultado certo. Parceria de longo prazo.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": 5,
                  "bestRating": 5
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Marcos Romani"
                },
                "reviewBody": "Gostaria de compartilhar a satisfação que estou tendo com o atendimento da empresa Single Core. Desde o início da contratação e até o presente momento não temos reclamações a serem feitas. O cumprimento do atendimento é sempre a contento. Cumprimento de horários e solicitações via atendimento remoto também sempre eficientes. Recomendo a empresa como prestadora de serviço no segmento de TI de sua empresa.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": 5,
                  "bestRating": 5
                }
              }

            ]
          })}
        </script>

      </Head>
      <body
        className={`${ScMedium.variable} ${ScItalic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
