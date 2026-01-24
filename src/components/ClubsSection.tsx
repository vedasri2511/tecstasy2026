import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';
import csiLogo from '@/assets/csi-logo.png';
import scrsLogo from '@/assets/scrs-logo.jpeg';
import sevaLogo from '@/assets/seva-logo.jpeg';
import { useEffect, useState } from 'react';

const clubs = [
  { name: 'CSI', src: csiLogo },
  { name: 'SCRS', src: scrsLogo },
  { name: 'V MEDHA', src: sevaLogo },
];

const ClubsSection = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="clubs" className="relative py-24 md:py-32 px-4">
      <div className="container mx-auto">
        <div className={`mb-12 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="font-display text-3xl md:text-5xl text-glow-strong tracking-widest">CLUBS</h2>
          <p className="mt-3 text-muted-foreground">Our partner clubs powering TECSTASY</p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {clubs.map((club) => (
            <Card key={club.name} className="box-glow bg-card/80 border-border/60 hover:bg-card/90 transition-colors">
              <CardContent className="p-6">
                <AspectRatio ratio={1}>
                  <div className="relative flex h-full w-full items-center justify-center rounded-lg bg-muted/30 border border-border/50 overflow-hidden">
                    <img
                      src={club.src}
                      alt={`${club.name} Logo`}
                      className="h-3/4 w-3/4 object-contain bg-white/60 rounded-md shadow-sm"
                    />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background/80 border border-border/50 text-sm font-display tracking-wide">
                      {club.name}
                    </div>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;
