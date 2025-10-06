import roboticsBackground from '@assets/image_1759772285383.png';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function QuoteSection() {
  return (
    <section className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote Text */}
        <div className="mb-16">
          <ScrollReveal direction="up" delay={0.2} duration={1.2}>
            <blockquote className="max-w-4xl">
              <p className="text-4xl sm:text-5xl lg:text-6xl font-normal text-black leading-tight tracking-tight">
                We built the body—the robot. We gave it the mind—the intelligent system. 
                We set it free—the autonomous system. We are not just building tools, 
                we're giving them will.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-black mb-16"></div>

        {/* Image - Right Aligned */}
        <div className="flex justify-end">
          <ScrollReveal direction="right" delay={0.4} duration={1.2}>
            <div className="w-full md:w-3/4 lg:w-2/3">
              <img 
                src={roboticsBackground} 
                alt="Robot in forest" 
                className="w-full h-auto rounded-lg shadow-lg"
                data-testid="img-robot-quote"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
