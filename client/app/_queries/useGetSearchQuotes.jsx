import { useQuery } from '@tanstack/react-query'
import { fetchQuotes } from '@services/services'

export const useGetSearchQuotes = (queryParams, enabled) => {
  const {
    data: quotes = [],
    isLoading,
    isFetching,
    error,
  } = useQuery({
    queryKey: ['searchQuotes', queryParams],
    queryFn: () => fetchQuotes(queryParams),
    enabled,
    refetchOnWindowFocus: false,
    staleTime: 30_000,
    retry: 1,
    placeholderData: [],
  })

  return { quotes, isLoading: isLoading || isFetching, error }
}
