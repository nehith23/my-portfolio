import roboticsBackground from '@assets/image_1759772285383.png';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function QuoteSection() {
  return (
    <section
      id="quote"
      className="relative min-h-screen flex items-center justify-center py-16 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${roboticsBackground})`
      }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Philosophy & Vision
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A guiding principle that shapes my approach to robotics and artificial intelligence.
              </p>
            </div>
          </ScrollReveal>

          {/* Quote */}
          <ScrollReveal direction="up" delay={0.2} duration={1.2}>
            <div className="relative">
              {/* Decorative quotation mark */}
              <div className="absolute -top-12 -left-8 text-8xl text-accent/20 font-serif leading-none select-none">
                "
              </div>

              <blockquote className="relative space-y-6">
                <p className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-foreground leading-relaxed italic">
                  "We built the body—the robot. We gave it the mind—the intelligent system.
                  We set it free—the autonomous system. We are not just building tools,
                  we're giving them will."
                </p>
              </blockquote>

              {/* Decorative quotation mark */}
              <div className="absolute -bottom-24 -right-8 text-8xl text-accent/20 font-serif leading-none select-none rotate-180">
                "
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
