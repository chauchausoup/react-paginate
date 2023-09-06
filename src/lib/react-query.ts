import { AxiosError } from 'axios';
import { QueryClient, UseQueryOptions, UseMutationOptions, DefaultOptions } from 'react-query';
import { PromiseValue } from 'type-fest';

type QueryFunction<Result, Args extends unknown[]> = (...args: Args) => Promise<Result>;

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export type ExtractFnReturnType<FnType extends QueryFunction<unknown, unknown[]>> = PromiseValue<
  ReturnType<FnType>
>;

export type QueryConfig<QueryFnType extends QueryFunction<unknown, unknown[]>> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
  'queryKey' | 'queryFn'
>;

export type MutationConfig<MutationFnType extends QueryFunction<unknown, unknown[]>> =
  UseMutationOptions<
    ExtractFnReturnType<MutationFnType>,
    AxiosError,
    Parameters<MutationFnType>[0]
  >;
