"use client";

import { FC, useEffect, useRef } from "react";
import heroImage from "@/assets/images/hero-image.jpg";
import Image from "next/image";
import Button from "@/components/Button";
import SplitType from "split-type";
import { useAnimate, motion, useScroll, useTransform } from "motion/react";
import { stagger } from "motion";

const Hero: FC = () => {
  const [titleScope, titleAnimate] = useAnimate();
  const scrollingDiv = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ['start end', 'end end']
  });

  const portraitWidth = useTransform(scrollYProgress, [0, 1], ['100%', '240%']);

  useEffect(() => {
    if (titleScope.current) {
      new SplitType(titleScope.current, {
        types: 'lines,words',
        tagName: 'span',
      });

      titleAnimate(
        titleScope.current.querySelectorAll('.word'),
        { transform: 'translateY(0)' },
        { duration: 0.5, delay: stagger(0.2) }
      );
    }
  }, [titleAnimate]);

  return (
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0"
              ref={titleScope}
            >
              Crafting digital experiences through code and creative design
            </motion.h1>
            <div className="flex flex-col md:flex-row md:items-center mt-10 items-start gap-6">
              <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.75 }}
              >
                <Button variant="secondary">
                  <span>View My Work</span>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.2 }}
              >
                <Button variant="text">Let&apos;s Talk</Button>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <motion.div
            className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full"
            style={{ width: portraitWidth }}
          >
            <Image
              src={heroImage}
              alt="Portrait Image"
              className="size-full object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
      <div className="md:h-[200vh]" ref={scrollingDiv}></div>
    </section>
  );
};

export default Hero;