import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';
import jayaramImg from '@/assets/Jayaram.png';

const CoordsSection = () => {
  const facultyCoords = [
    { name: 'Dr. D. Jayaram', image: jayaramImg },
    null, // Empty slot
  ];
  const studentSlots = Array.from({ length: 6 });

  return (
    <section id="coords" className="relative py-24 md:py-32 px-4">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-glow-strong tracking-widest">COORDS</h2>
          <p className="mt-3 text-muted-foreground">Meet the team behind TECSTASY</p>
        </div>

        {/* Faculty Coords */}
        <div className="mb-10">
          <h3 className="font-display text-2xl md:text-3xl gradient-text tracking-wide">Faculty Coords</h3>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {facultyCoords.map((faculty, i) => (
              <Card key={i} className="box-glow bg-card/80 border-border/60 group overflow-hidden">
                <CardContent className="p-3">
                  <AspectRatio ratio={1}>
                    {faculty ? (
                      <div className="relative h-full w-full overflow-hidden rounded-md">
                        <img
                          src={faculty.image}
                          alt={faculty.name}
                          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                          <p className="font-display text-sm md:text-lg text-glow-strong tracking-wide">
                            {faculty.name}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center rounded-md bg-muted/40 border border-border/50">
                        <Skeleton className="h-full w-full rounded-md" />
                      </div>
                    )}
                  </AspectRatio>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Student Coords */}
        <div>
          <h3 className="font-display text-2xl md:text-3xl gradient-text tracking-wide">Student Coords</h3>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {studentSlots.map((_, i) => (
              <Card key={i} className="box-glow bg-card/80 border-border/60">
                <CardContent className="p-3">
                  <AspectRatio ratio={1}>
                    <div className="flex h-full w-full items-center justify-center rounded-md bg-muted/40 border border-border/50">
                      <Skeleton className="h-full w-full rounded-md" />
                    </div>
                  </AspectRatio>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoordsSection;
