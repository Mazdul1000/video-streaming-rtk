
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9000'
    }),
    endpoints: (builder) =>({
        getVideos: builder.query({
            query: () => '/videos'
        }),
        getVideo: builder.query({
            query: (id) => `/videos/${id}`
        }),
        getRelatedVideos: builder.query({
            query: ({id, title}) => {
                const tags = title.split(" ");
                const likes = tags.map(tag => `title_like=${tag}`);
                const queryString = `/videos?${likes.join("&")}&id_ne=${id}&_limit=4`;
                console.log(queryString);
                return queryString;
            }
        }),
        addVideo: builder.mutation({
            query: (data) => ({
                url: '/videos',
                method: 'POST',
                body: data
            }),
        }),
    })
}) 

export const {useGetVideosQuery, useGetVideoQuery, useGetRelatedVideosQuery, useAddVideoMutation} = apiSlice;