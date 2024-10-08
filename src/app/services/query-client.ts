import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false,
			staleTime: 5000,
			gcTime: 10 * 60 * 1000, // 10 minutes
		},
	},
})
