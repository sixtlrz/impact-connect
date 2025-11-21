import heroImage from "@/assets/hero-impact.jpg";

export const HeroSection = () => {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center flex items-center justify-center h-full">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            What is impact investing?
          </h1>
        </div>
      </div>
    </section>
  );
};