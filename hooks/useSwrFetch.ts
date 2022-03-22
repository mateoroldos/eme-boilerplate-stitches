/**
 * Hook for connecting with endpoints through client-side using SWR library
 */
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useSwrFetch(endpoint: string) {
  const { data, error } = useSWR(endpoint, fetcher, { revalidateOnFocus: false });
  console.log(data);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useSwrFetch;
