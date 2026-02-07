import { MockExploreTile } from '../../mock/mockData';
import { Heart } from 'lucide-react';

interface ExploreGridProps {
  tiles: MockExploreTile[];
}

export default function ExploreGrid({ tiles }: ExploreGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {tiles.map((tile, index) => {
        const isLarge = index % 7 === 0;
        return (
          <div
            key={tile.id}
            className={cn(
              'relative group cursor-pointer rounded-xl overflow-hidden bg-slate-100',
              isLarge ? 'md:col-span-2 md:row-span-2' : 'aspect-square'
            )}
          >
            <img
              src={tile.image}
              alt={tile.title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="font-medium mb-1">{tile.title}</p>
                <p className="text-sm text-white/80 mb-2">by {tile.author}</p>
                <div className="flex items-center gap-1 text-sm">
                  <Heart className="w-4 h-4" />
                  <span>{tile.likes.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
