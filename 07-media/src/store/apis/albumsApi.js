import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

export const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005' }),
  endpoints: (builder) => ({
    getAlbums: builder.query({
      query: (user) => {
        return {
          url: '/albums',
          params: { userId: user.id },
          method: 'GET',
        };
      },
      providesTags: (result, error, user) => {
        const tags = result.map((album) => {
          return { type: 'Album', id: album.id };
        });

        tags.push({ type: 'UsersAlbums', id: user.id });

        return tags;
      },
    }),
    addAlbum: builder.mutation({
      query: (user) => ({
        url: '/albums',
        method: 'POST',
        body: {
          userId: user.id,
          title: faker.commerce.productName(),
        },
      }),
      invalidatesTags: (result, error, user) => [{ type: 'UsersAlbums', id: user.id }],
    }),
    removeAlbum: builder.mutation({
      query: (album) => ({
        url: `/albums/${album.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, album) => [{ type: 'Album', id: album.id }],
    }),
  }),
});

export const { useGetAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } = albumsApi;
