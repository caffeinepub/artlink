import { useUiState } from '../../state/useUiState';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CategoryChipsProps {
  categories: string[];
}

export default function CategoryChips({ categories }: CategoryChipsProps) {
  const { selectedExploreCategory, setExploreCategory } = useUiState();

  return (
    <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant="outline"
          size="sm"
          onClick={() => setExploreCategory(category)}
          className={cn(
            'rounded-full whitespace-nowrap',
            selectedExploreCategory === category
              ? 'bg-teal-600 text-white border-teal-600 hover:bg-teal-700 hover:text-white'
              : 'hover:bg-slate-100'
          )}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
