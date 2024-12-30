import { useLoaderData } from 'react-router-dom';
import { SearchLoaderResult } from './searchLoader';
import PackageListItem from '../../components/PackageListItem';

export default function SearchPage() {
  const { searchResults } = useLoaderData<SearchLoaderResult>();

  const renderedResults = searchResults.map((packageSummary) => {
    return (
      <PackageListItem
        key={packageSummary.name}
        packageSummary={packageSummary}
      />
    );
  });

  return (
    <div>
      <h1 className="text-2xl font-bold my-6">Search Results</h1>
      <div className="space-y-4 mt-4">{renderedResults}</div>
    </div>
  );
}
