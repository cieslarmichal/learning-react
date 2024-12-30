import type { PackageDetails } from '../types/packageDetails';

export async function getPackage(name: string): Promise<PackageDetails> {
  const response = await fetch(`https://registry.npmjs.org/${name}`);

  if (!response.ok) {
    throw new Error('Failed to fetch package details');
  }

  const data = await response.json();

  return data as PackageDetails;
}
