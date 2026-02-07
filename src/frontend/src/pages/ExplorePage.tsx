import { useMemo } from 'react';
import { mockExploreTiles, exploreCategories } from '../mock/mockData';
import { useUiState } from '../state/useUiState';
import CategoryChips from '../components/explore/CategoryChips';
import ExploreGrid from '../components/explore/ExploreGrid';

export default function ExplorePage() {
  const { selectedExploreCategory, searchQuery } = useUiState();

  const filteredTiles = useMemo(() => {
    let tiles = mockExploreTiles;

    if (selectedExploreCategory !== 'All') {
      tiles = tiles.filter((tile) => tile.category === selectedExploreCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      tiles = tiles.filter(
        (tile) =>
          tile.title.toLowerCase().includes(query) ||
          tile.author.toLowerCase().includes(query) ||
          tile.category.toLowerCase().includes(query)
      );
    }

    return tiles;
  }, [selectedExploreCategory, searchQuery]);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <CategoryChips categories={exploreCategories} />
        <ExploreGrid tiles={filteredTiles} />
      </div>
    </div>
  );
}
