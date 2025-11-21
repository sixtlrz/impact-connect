const members = [
  {
    name: "Sarah Chen",
    title: "CEO, GreenTech Ventures",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
  {
    name: "Marcus Williams",
    title: "Founder, Social Impact Capital",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  },
  {
    name: "Elena Rodriguez",
    title: "Director, Sustainable Finance",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    name: "James Patterson",
    title: "Managing Partner, Future Fund",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
];

export const CommunitySection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          They are part of our community
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16">
          Join successful impact investors shaping the future
        </p>
        
        <div className="flex justify-center items-start gap-8 flex-wrap">
          {members.map((member, index) => (
            <div key={index} className="text-center space-y-3">
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