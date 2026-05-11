export interface ProjectImage {
  src: string;
  title: string;
}

export interface CarouselProject {
  id: string;
  heading: string;
  description: string;
  images: ProjectImage[];
  autoPlayInterval: number;
}

export interface CardProject {
  id: string;
  heading: string;
  description: string;
  badge: string;
  title: string;
  body: string;
  tags: string[];
  link: string;
  linkLabel: string;
  image: string;
  imageAlt: string;
}

export const carouselProjects: CarouselProject[] = [
  {
    id: "funilaria",
    heading: "Amostra real: funilaria e pintura",
    description:
      "Carrossel com o projeto desenvolvido para o cliente de funilaria e pintura.",
    images: [
      {
        src: "/imagns/site1.png",
        title: "Site Funilaria e Pintura - Home",
      },
      {
        src: "/imagns/site2.png",
        title: "Site Funilaria e Pintura - Serviços",
      },
      {
        src: "/imagns/site3.png",
        title: "Site Funilaria e Pintura - Contato",
      },
    ],
    autoPlayInterval: 4500,
  },
  {
    id: "gamer",
    heading: "Amostra real: dashboard de biblioteca gamer",
    description:
      "Interface de dashboard para gestão e visualização da biblioteca de jogos.",
    images: [
      {
        src: "/imagns/gamer1.png",
        title: "Dashboard Biblioteca Gamer - Visão geral",
      },
      {
        src: "/imagns/gamer2.png",
        title: "Dashboard Biblioteca Gamer - Catálogo",
      },
      {
        src: "/imagns/gamer3.png",
        title: "Dashboard Biblioteca Gamer - Métricas",
      },
    ],
    autoPlayInterval: 5000,
  },
];

export const cardProjects: CardProject[] = [
  {
    id: "linkbio",
    heading: "LinkBio autoral",
    description:
      "Página única para centralizar seus links, contatos e redes.",
    badge: "Projeto pessoal",
    title: "LinkBio com identidade própria e foco em conversão.",
    body: "Estrutura pensada para apresentar sua marca, facilitar o acesso aos canais e aumentar cliques em poucos segundos.",
    tags: ["Design responsivo", "Navegação direta", "Marca pessoal"],
    link: "https://rianlinks.vercel.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleARiCO5leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaf3-WaKhWPxTm3RE6bHrm_BRDb5aZyiY5cD5dK7--TbCVrDN77JliWloVh6lg_aem_GHUgtlJD0XmU6RTQvy-qCg",
    linkLabel: "Acessar LinkBio",
    image: "/imagns/linkbio.png",
    imageAlt: "Preview do LinkBio autoral",
  },
];
