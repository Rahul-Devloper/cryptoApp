import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "e7fbe4229emshc8e1e339fb0abedp1ffefcjsn6a35ee8ef136",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
}

const baseUrl = "https://coinranking1.p.rapidapi.com"

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
  // highlight-start
  reducerPath: 'cryptoApi',
  // highlight-end
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // ...endpoints
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`),
    }),
  }),
})

//redux will basically create a hook. example: getCryptos endpoint
//needs to be prefixed and suffixed with use and Query which will be
//created as a hook and will enable calling of that endpoint
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     headers: {
//       'X-RapidAPI-Key': 'e7fbe4229emshc8e1e339fb0abedp1ffefcjsn6a35ee8ef136',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };
