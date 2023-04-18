export type Loading = { type: 'loading' };
export type LoadingError = { type: 'error'; error: Error };
export type Success<T> = { type: 'success'; data: T };
export type Loadable<T> = Success<T> | LoadingError | Loading;

export class Load {
  static successful<T>(data: T): Success<T> {
    return { type: 'success', data };
  }

  static error(error: Error): LoadingError {
    return { type: 'error', error };
  }

  static start(): Loading {
    return { type: 'loading' };
  }

  static updateIfLoaded<T, K>(value: Loadable<T>, action: (value: T) => K): Success<K> {
    assertIsLoaded(value);
    return Load.successful(action(value.data));
  }
}

export function assertIsLoaded<T>(value: Loadable<T>): asserts value is Success<T> {
  if (value.type !== 'success') {
    throw new Error(`Expected value to be successfully loaded, but it\'s currently in state ${value.type}`);
  }
}
