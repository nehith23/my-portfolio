import roboticsBackground from '@assets/image_1759772285383.png';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function QuoteSection() {
  return (
    <section
      id="philosophy"
      className="relative py-40 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${roboticsBackground})`
      }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote */}
          <ScrollReveal direction="up" delay={0.2} duration={1.2}>
            <div className="relative">
              {/* Decorative quotation mark */}
              <div className="absolute -top-12 -left-8 text-8xl text-white/10 font-serif leading-none select-none">
                "
              </div>

              <blockquote className="relative space-y-6">
                <p className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-white leading-relaxed italic">
                  "True intelligence isn't found in a vacuum; it's forged through interaction. My focus is bridging the gap between high-level reasoning and robust physical execution — building autonomous systems for unpredictable environments."
                </p>
              </blockquote>

              {/* Decorative quotation mark */}
              <div className="absolute -bottom-24 -right-8 text-8xl text-white/10 font-serif leading-none select-none rotate-180">
                "
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
