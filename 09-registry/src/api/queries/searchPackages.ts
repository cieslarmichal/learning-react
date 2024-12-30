import type { PackageSummary } from '../types/packageSummary';

interface SearchResponse {
  readonly objects: {
    readonly package: {
      readonly name: string;
      readonly version: string;
      readonly description: string;
      readonly keywords?: string[];
    };
  }[];
}

export async function searchPackages(term: string): Promise<PackageSummary[]> {
  const response = await fetch(`https://registry.npmjs.org/-/v1/search?text=${term}&size=10`);

  const data: SearchResponse = await response.json();

  return data.objects.map((object) => object.package);
}
