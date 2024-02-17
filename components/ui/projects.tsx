import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Panda Menu",
    description:
      "A web app that is used to show cafe menu via scanning Qr-code.",
    link: "https://panda-house-menu.vercel.app",
  },
  {
    title: "Movies Hub",
    description:
      "A Movie rating app built using the imdb api as well as react.",
    link: "https://github.com/AnexDev1/Movies-Hub",
  },
  {
    title: "CodingZero",
    description:
      "A Beautifully crafted web page that contains tons of resources for developers , contains loots of useful websites .",
    link: "https://codingzero.vercel.app",
  },
  {
    title: "Fast Delivery",
    description:
      "An ideal food delivery web app beautifully crafted using react and state management.",
    link: "https://fast-delivery-co.netlify.app/",
  },
  {
    title: "Ethio Gaming Store",
    description:
      "A web app that was built for a client who sells game perks as well as other useful equipment and tools , done the full frontend app with react bootstrap and redux.",
    link: "https://ethio-gaming-store.vercel.app",
  },
  {
    title: "Order System",
    description:
      "A fullstack online order taking system built for a client who runs a big corporate with multiple branches and use this system to manage all revenue as well as orders in one place.",
    link: "https://apa-order-system.vercel.app",
  },
];
