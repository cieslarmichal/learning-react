import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

export const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005' }),
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: (album) => {
        return {
          url: '/photos',
          params: { albumId: album.id },
          method: 'GET',
        };
      },
      providesTags: (result, error, album) => {
        const tags = result.map((photo) => {
          return { type: 'Photo', id: photo.id };
        });

        tags.push({ type: 'AlbumPhoto', id: album.id });

        return tags;
      },
    }),
    addPhoto: builder.mutation({
      query: (album) => ({
        url: '/photos',
        method: 'POST',
        body: {
          albumId: album.id,
          url: faker.image.abstract(150, 150, true),
        },
      }),
      invalidatesTags: (result, error, album) => [{ type: 'AlbumPhoto', id: album.id }],
    }),
    removePhoto: builder.mutation({
      query: (photo) => ({
        url: `/photos/${photo.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, photo) => [{ type: 'Photo', id: photo.id }],
    }),
  }),
});

export const { useGetPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } = photosApi;
