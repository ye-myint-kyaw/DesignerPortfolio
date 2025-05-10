import { TableRow } from "@/types/global";

export const sidebarLinks: Record<string, string>[] = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/#works",
    label: "Works",
  },
  {
    route: "/#info",
    label: "Info",
  },
  {
    route: "/contact",
    label: "Contact",
  },
];

export const TopCategories = [
  {
    img01: "/img/img_category01.webp",
    img02: "/img/img_category02.webp",
    title: "POSTERS & ARTS 🎨",
    description:
      "I love to make aesthetic illustrations and posters just like Forrest Gump running across the country without stopping for anything. Take a seat and enjoy this.",
    slug: "/works/posters-and-arts",
  },
  {
    img01: "/img/img_category03.webp",
    img02: "/img/img_category04.webp",
    title: "DIGITAL & PRINT 🖼️",
    description:
      "I have made projects for Digital like brand identity and social media ads. Printihng design like tshirt, packaging, sticker, and even more flyers and covers. Just need a couple minute to check this out.",
    slug: "/works/digital-and-print",
  },
  {
    img01: "/img/img_category05.webp",
    img02: "/img/img_category06.webp",
    title: "UX & UI 💻",
    description:
      "Sure, apart from graphic design and arts, I love to understand and learn about people which can lead to smooth user interface. Kindly check this and emphatize my work.",
    slug: "/works/UX-and-UI",
  }
]

export const TopPosters = [
  "/img/img_poster01.webp",
  "/img/img_poster02.webp",
  "/img/img_poster03.webp",
  "/img/img_poster04.webp"
]


export const TopIntroTable: TableRow[] = [
  {
    title: "OVERVIEW",
    content: [`Hi, I am the one who believe that great design is more than just aesthetics- It’s about creating solid experience of a person or brand behind the design. With a strong background in visual design, branding and user experience, I craft designs which are both stunning on the look and in the function. Whether It’s designing logo, social ads, poster, t-shirt or digital interface, I bring creativity and strategy together to give feeling and lasting impact. I’m always exploring new trends and technologies to think 
      outside the boundaries and help brands tell their stories effectively.`],
  },
  {
    title: "SERVICES",
    content: [`UX/UI Design
      Graphic Design
      Print Design`,
      `Web Design
      Brand Identity
      Tshirt Design`,
      `App Design
      Social ads Design
      Poster Design`
    ]
  },
  {
    title: "KNOWLEDGE",
    content: [`Photoshop
      Illustrator
      Indesign`,
      `Figma
      Webflow
      XD`,
      `Blender
      Spline
      Inkscape`
    ]
  },
]