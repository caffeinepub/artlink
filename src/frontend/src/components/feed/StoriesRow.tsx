import { useState } from 'react';
import { MockStory } from '../../mock/mockData';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface StoriesRowProps {
  stories: MockStory[];
}

export default function StoriesRow({ stories }: StoriesRowProps) {
  const [selectedStory, setSelectedStory] = useState<MockStory | null>(null);

  return (
    <>
      <ScrollArea className="w-full">
        <div className="flex gap-4 pb-2">
          {stories.map((story) => (
            <button
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="flex flex-col items-center gap-2 shrink-0 group"
            >
              <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500">
                <div className="w-full h-full rounded-full border-2 border-white overflow-hidden bg-slate-100">
                  <img
                    src={story.avatar}
                    alt={story.username}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="text-xs text-slate-600 max-w-[64px] truncate group-hover:text-slate-900">
                {story.username}
              </span>
            </button>
          ))}
        </div>
      </ScrollArea>

      <Dialog open={!!selectedStory} onOpenChange={() => setSelectedStory(null)}>
        <DialogContent className="max-w-md p-0 bg-slate-900">
          <DialogClose className="absolute right-4 top-4 z-10">
            <X className="w-6 h-6 text-white" />
          </DialogClose>
          {selectedStory && (
            <div className="relative aspect-[9/16] bg-slate-800">
              <div className="absolute top-4 left-4 flex items-center gap-3 z-10">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src={selectedStory.avatar}
                    alt={selectedStory.username}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-white font-medium">{selectedStory.username}</span>
              </div>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={selectedStory.avatar}
                  alt="Story content"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
