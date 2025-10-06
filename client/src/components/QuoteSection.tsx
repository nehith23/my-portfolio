import roboticsBackground from '@assets/image_1759772285383.png';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function QuoteSection() {
  return (
    <section id="quote" className="min-h-screen flex items-center py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Philosophy & Vision
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A guiding principle that shapes my approach to robotics and artificial intelligence.
              </p>
            </div>
          </ScrollReveal>

          {/* Quote and Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Quote */}
            <ScrollReveal direction="up" delay={0.2} duration={1.2}>
              <div className="bg-card p-8 rounded-lg border border-card-border">
                <blockquote className="space-y-4">
                  <p className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed italic">
                    "We built the body—the robot. We gave it the mind—the intelligent system. 
                    We set it free—the autonomous system. We are not just building tools, 
                    we're giving them will."
                  </p>
                </blockquote>
              </div>
            </ScrollReveal>

            {/* Image */}
            <ScrollReveal direction="right" delay={0.4} duration={1.2}>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={roboticsBackground} 
                  alt="Robot in forest environment" 
                  className="w-full h-auto"
                  data-testid="img-robot-quote"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
