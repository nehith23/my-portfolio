import roboticsBackground from '@assets/image_1758728862834.png';

export default function QuoteSection() {
  return (
    <section 
      className="min-h-[50vh] flex items-center justify-center relative pt-16"
      style={{
        backgroundImage: `url(${roboticsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="relative">
            <div className="text-6xl text-white/30 font-serif absolute -top-4 -left-4">"</div>
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed italic drop-shadow-lg">
              We built the body—the robot. We gave it the mind—the intelligent system. 
              We set it free—the autonomous system. We are not just building tools, 
              we're giving them will.
            </p>
            <div className="text-6xl text-white/30 font-serif absolute -bottom-8 -right-4">"</div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}