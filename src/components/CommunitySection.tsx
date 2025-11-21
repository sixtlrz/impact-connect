import alainLeGrix from "@/assets/alain-le-grix.jpg";
import patrickPouyanne from "@/assets/patrick-pouyanne.jpg";

const members = [
  {
    name: "Patrick Pouyanné",
    title: "CEO, TotalEnergies",
    image: patrickPouyanne,
  },
  {
    name: "Alain Le Grix de la Salle",
    title: "President, ArcelorMittal",
    image: alainLeGrix,
  },
  {
    name: "Xavier Guesnu",
    title: "President, Lafarge France",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  },
  {
    name: "Rodolphe Saadé",
    title: "CEO, CMA CGM",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
];

export const CommunitySection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Join our club
        </h2>
        <p className="text-lg md:text-xl text-foreground/90 text-center mb-16 max-w-4xl mx-auto">
          GiveBack is an impact community of investors and philantropist passionate about driving meaningful change. We believe that capital can do more than generate returns — it can solve real-world problems. Our members are committed to supporting startups and initiatives that create measurable social and environmental impact, because we want to be part of the change, not just watch it happen.
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
          They are part of our community
        </h3>
        <p className="text-xl text-muted-foreground text-center mb-16">
          Join successful impact investors shaping the future
        </p>
        
        <div className="flex justify-center items-start gap-8 flex-wrap">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-3">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};