"use client";
import { stagger, transform } from "motion";
import { useAnimate, useInView } from "motion/react";
import { FC, useEffect } from "react";
import SplitType from "split-type";


const Intro: FC = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, {
    once: true
  });

  useEffect(() => {
    new SplitType(scope.current.querySelector('h2'), {
      types: 'lines,words',
      tagName: 'span',
    });
  }, [scope]);

  useEffect(() => {
    if (inView) {
      animate(scope.current.querySelectorAll('.word'), {
        transform: 'translateY(0%)'
      }, {
        duration: 0.5,
        delay: stagger(0.2),
      });
    }
  }, [inView, animate, scope]);

  return <section className="section mt-8 md:mt-16 lg:mt-20 "
    id="intro"
    ref={scope}
    >
    <div className="mx-8">
      <h2 className="text-4xl md:text-6xl lg:text-8xl lg:w-[80%]">
        Building Beautiful websites with clean code and thoughtful design to help your business grow and stand-out online
      </h2>
    </div>
  </section>
};

export default Intro;
