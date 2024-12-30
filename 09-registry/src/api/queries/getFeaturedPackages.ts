import type { PackageDetails } from '../types/packageDetails';

const featuredPackages = ['react', 'typescript', 'eslint', 'vite'];

export async function getFeaturedPackages(): Promise<PackageDetails[]> {
  const data = await Promise.all(
    featuredPackages.map(async (name) => {
      const response = await fetch(`https://registry.npmjs.org/${name}`);

      return response.json();
    }),
  );

  return data as PackageDetails[];
}
