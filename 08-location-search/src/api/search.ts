import { Place } from './Place';

interface SearchResponse {
  features: {
    geometry: {
      coordinates: [number, number];
    };
    properties: {
      place_id: string;
      display_name: string;
    };
  }[];
}

export const search = async (term: string): Promise<Place[]> => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&layer=address&limit=5`,
  );

  const data: SearchResponse = await response.json();

  return data.features.map((feature) => ({
    id: feature.properties.place_id,
    name: feature.properties.display_name,
    longitude: feature.geometry.coordinates[0],
    latitude: feature.geometry.coordinates[1],
  }));
};
