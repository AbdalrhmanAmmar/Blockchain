import { twMerge } from "tailwind-merge";
import type { ICardData } from "../../../data/interface";

interface IpropsCard {
  card: ICardData;
}
function CardDataComponent({ card }: IpropsCard) {
  return (
    <>
      <div className="relative z-0 p-8 md:p-10 md:pt-2  max-w-xs md:max-w-md  group   ">
        <div
          className={twMerge(
            "size-16 rounded-xl bg-fuchsia-500 right-1.5 top-1.5 absolute -z-10 blur-2xl opacity-0 group-hover:opacity-100",
            {
              lime: "bg-lime-500",
              cyan: "bg-cyan-500",
              violet: "bg-violet-500",
            }[card.color] || "bg-fuchsia-500"
          )}
        ></div>
        <div
          className={twMerge(
            "size-16 rounded-xl bg-fuchsia-500 right-1.5 top-1.5 absolute -z-10 group-hover:bg-fuchsia-400",
            {
              lime: "bg-lime-500 group-hover:bg-lime-400",
              cyan: "bg-cyan-500 group-hover:bg-cyan-400",
              violet: "bg-violet-500 group-hover:bg-violet-400 ",
            }[card.color]
          )}
        ></div>
        <div className="inset-0 absolute bg-zinc-800 -z-10 rounded-2xl mask-card space-y-8 "></div>
        <div className="flex justify-center -mt-28">
          <div className="inline-flex relative">
            <div className="absolute h-4 w-full bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 top-[calc(100%+16px)] rounded-[100%] CardImgMask"></div>
            <img
              className="size-40 group-hover:-translate-y-6  transition duration-300 "
              src={card.image}
              alt=""
            />
          </div>
        </div>

        <h3 className="text-3xl font-heading font-black mt-12">{card.title}</h3>
        <p className="text-lg text-zinc-400 mt-4">{card.description}</p>

        <div className="flex justify-between mt-12">
          <button
            className={twMerge(
              "text-sm uppercase text-fuchsia-500 font-heading font-extrabold tracking-wider",

              {
                lime: "text-lime-500",
                cyan: "text-cyan-500",
                violet: "text-violet-500  ",
              }[card.color]
            )}
          >
            Learn more
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-8 text-zinc-500 group-hover:text-zinc-300 transition duration-300 -translate-x-2 group-hover:translate-x-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default CardDataComponent;
