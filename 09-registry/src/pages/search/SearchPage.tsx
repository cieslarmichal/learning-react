import { useLoaderData } from "react-router-dom";
import { SearchLoaderResult } from "./searchLoader";

export default function SearchPage() {
  const {searchResults} = useLoaderData<SearchLoaderResult>();

  
  return (
    <div>
      Search Page
    </div>
  );
}
