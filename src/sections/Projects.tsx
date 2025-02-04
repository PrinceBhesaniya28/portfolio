import { FC } from "react";
import Image from "next/image";
import image1 from "@/assets/images/project-1.jpg";
import image2 from "@/assets/images/project-2.jpg";
import image3 from "@/assets/images/project-3.jpg";
import image4 from "@/assets/images/project-4.jpg";
import image5 from "@/assets/images/project-5.jpg";


/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const projects = [
  {
    name: "Artisan Brew Co.",
    image: image1,
  },
  {
    name: "Wavelength Studios",
    image: image2,
  },
  {
    name: "Nova Fitness",
    image: image3,
  },
  {
    name: "Urban Plates",
    image: image4,
  },
  {
    name: "Bloom Botanicals",
    image: image5,
  },
];

const Projects: FC = () => {
  return <section className="section">
    <div className=" mx-8 lg:mx-16">
      <h2 className="text-4xl md:text-7xl lg:text-8xl">
        Selected Works
      </h2>
      <div className=" mt-10 md:mt-16 lg:mt-20">
        {projects.map(({ name, image }) => (
          <a href="#" key={name} className="border-t last:border-b border-stone-400 border-dotted py-6 md:py-8 lg:py-10 flex flex-col relative group/project"
          >
            <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-700 bg-stone-300 "></div>
            <div className=" relative border-stone-400 border-dotted py-4">
                <div className="aspect-video md:hidden">
                <Image src={image} alt={`${name} image`} className="size-full object-cover" />
              </div>

              <div className="mt-8 flex flex-row ">
                <h3 className="text-2xl md:text-3xl lg:text-4x1">
                  {name}
                  <h3/>
                  <div className="flex relative group w-6 h-6">
                    {/* Arrow SVG (Hides on Hover) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 absolute inset-0 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  <div/>
                    {/* Image (Appears on Hover, Replacing Arrow) */}
                    <div className="absolute inset-0 w-[290px] h-[164px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10">
                      <Image
                        src={image}
                        alt={`${name} image`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                  </div>
</div>
                </h3>
              </div>


            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
};

export default Projects;
