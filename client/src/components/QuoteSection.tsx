export default function QuoteSection() {
  return (
    <section className="min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="relative">
            <div className="text-6xl text-primary/20 font-serif absolute -top-4 -left-4">"</div>
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed italic">
              We built the body—the robot. We gave it the mind—the intelligent system. 
              We set it free—the autonomous system. We are not just building tools, 
              we're giving them will.
            </p>
            <div className="text-6xl text-primary/20 font-serif absolute -bottom-8 -right-4">"</div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}