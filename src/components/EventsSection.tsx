import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

const EventsSection = () => {
  const eventPlaceholders = Array.from({ length: 4 });

  return (
    <section id="events" className="relative py-24 md:py-32 px-4">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-glow-strong tracking-widest">EVENTS</h2>
          <p className="mt-3 text-muted-foreground">Discover what's happening at TECSTASY</p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventPlaceholders.map((_, i) => (
            <Card key={i} className="box-glow bg-card/80 border-border/60">
              <CardContent>
                <AspectRatio ratio={16 / 9}>
                  <div className="flex h-full w-full items-center justify-center rounded-md bg-muted/40 border border-border/50">
                    <Skeleton className="h-full w-full rounded-md" />
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Register Button */}
        <div className="mt-12 flex justify-center">
          <Button
            asChild
            size="lg"
            className="box-glow bg-gradient-to-r from-glow-cyan to-glow-blue hover:from-glow-blue hover:to-glow-cyan text-primary-foreground font-display text-lg tracking-wider px-8 py-6 transition-all duration-300"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd8hALmTyozeIFBG8jsa1H_AFpFAzOMj0P4kiiaWhaT2sj0Sg/viewform?usp=sharing&ouid=105008377002093675664"
              target="_blank"
              rel="noopener noreferrer"
            >
              REGISTER NOW
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
