import roboticsBackground from '@assets/image_1758728862834.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function QuoteSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0.3, 1, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <section 
      ref={ref}
      className="h-screen flex items-center relative overflow-hidden -mt-16"
    >
      {/* Parallax background with scale effect */}
      <motion.div
        className="absolute inset-0 -top-32 -bottom-32"
        style={{
          y,
          scale,
          backgroundImage: `url(${roboticsBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Dark overlay for text readability with animated opacity */}
      <motion.div 
        className="absolute inset-0 bg-black/60"
        style={{ opacity }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up" delay={0.3} duration={1.5}>
            <blockquote className="relative">
              <div className="text-6xl text-white/30 font-serif absolute -top-4 -left-4">"</div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed italic drop-shadow-lg">
                We built the body—the robot. We gave it the mind—the intelligent system. 
                We set it free—the autonomous system. We are not just building tools, 
                we're giving them will.
              </p>
              <div className="text-6xl text-white/30 font-serif absolute -bottom-8 -right-4">"</div>
            </blockquote>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
