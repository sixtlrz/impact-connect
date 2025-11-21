import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";

const upcomingEvents = [
  {
    date: "March 15, 2025",
    title: "Impact Investing Summit 2025",
    location: "Paris, France",
    attendees: "120+ investors",
  },
  {
    date: "April 22, 2025",
    title: "Clean Energy Portfolio Review",
    location: "Virtual Event",
    attendees: "50+ members",
  },
  {
    date: "May 10, 2025",
    title: "Startup Pitch Night",
    location: "Luxembourg",
    attendees: "80+ attendees",
  },
];

export const DatesSection = () => {
  return (
    <section className="pt-12 pb-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Upcoming Events
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16">
          Connect with like-minded investors at our exclusive events
        </p>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {upcomingEvents.map((event, index) => (
            <Card 
              key={index}
              className="hover:shadow-elegant transition-all duration-300 border-border group"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="bg-primary/10 rounded-xl p-6 text-center min-w-[140px] group-hover:bg-primary/20 transition-colors">
                    <div className="text-3xl font-bold text-primary">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-sm font-semibold text-primary">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl font-bold">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Calendar className="w-12 h-12 text-primary/20 group-hover:text-primary/40 transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};