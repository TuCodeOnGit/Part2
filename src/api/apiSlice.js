import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shop.cyberlearn.vn/api'
  }),
  tagTypes: ['Get', 'Post'],
  endpoints: (builder) => ({
    getShoes: builder.query({
      query: () => '/Product',
      providesTags: ['Get']
    }),
    getShoesDetail: builder.query({
      query: (id) => '/Product/getbyid?id=' + id,
      providesTags: ['Get']
    }),
    addNewUser: builder.mutation({
      query: (user) => ({
        url: '/Users/signup',
        method: 'POST',
        body: user,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      }),
      invalidatesTags: ['Post']
    })
  })
})

export const {
  useGetShoesQuery,
  useGetShoesDetailQuery,
  useAddNewUserMutation
} = apiSlice