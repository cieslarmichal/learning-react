import type { HomeLoaderResult } from './homeLoader';
import { useLoaderData, Link } from 'react-router-dom';

export default function HomePage() {
  const { featuredPackages } = useLoaderData<HomeLoaderResult>();

  const renderedPackages = featuredPackages.map((pkg) => (
    <div
      key={pkg.name}
      className="flex flex-col justify-between gap-3 p-4 border rounded shadow"
    >
      <div className="flex flex-col gap-1 border-bottom border-gray-400">
        <div className="font-bold text-center">{pkg.name}</div>
        <div className="text-sm text-gray-500">{pkg.description}</div>
        <div className="text-sm text-gray-500">{pkg.maintainers.length} Maintainers</div>
      </div>
      <Link
        to={`/packages/${pkg.name}`}
        className="border rounded border-gray-900 text-center"
      >
        View
      </Link>
    </div>
  ));

  return (
    <div className="container py-12 space-y-8">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold">The NPM Regitry</h1>
        <p className="mx-auto max-w-[600px] text-gray-500">
          The package manager for Javescrpt. Search and view packages.
        </p>
      </div>
      <div className="mx-auto grid grid-cols-4 max-w-[900px] items-stretch gap-4">{renderedPackages}</div>
    </div>
  );
}
