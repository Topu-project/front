import { QueryClient, QueryCache, MutationCache } from "@tanstack/react-query";

const globalErrorHandler = (error: unknown) => {
  console.error("Global query error:", error);
  // 전역 에러 처리 로직
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: globalErrorHandler,
  }),
  mutationCache: new MutationCache({
    onError: globalErrorHandler,
  }),
});

export default queryClient;
