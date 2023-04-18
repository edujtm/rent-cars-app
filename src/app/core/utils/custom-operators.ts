import { EMPTY, from, map, merge, mergeMap, Observable, of, OperatorFunction, pipe, switchMap } from 'rxjs';
import { Loadable } from './loadable';

export class LoadingState {
  static retrieveData<V, T extends Loadable<V>>(): OperatorFunction<T, V> {
    return pipe(
      switchMap((loadable) => {
        if (loadable.type === 'success') {
          return of(loadable.data);
        }

        return EMPTY;
      })
    );
  }

  static isCurrentlyLoading<V, T extends Loadable<V>>(): OperatorFunction<T, boolean> {
    return pipe(map((loadable) => loadable.type === 'loading'));
  }

  static retrieveErrors<V, T extends Loadable<V>>(): OperatorFunction<T, Error> {
    return pipe(
      switchMap((loadable) => {
        if (loadable.type === 'error') {
          return of(loadable.error);
        }

        return EMPTY;
      })
    );
  }

  static mergeErrors<V, T extends Loadable<V>[]>(): OperatorFunction<T, Error> {
    return pipe(
      mergeMap((loadables) => from(loadables)),
      this.retrieveErrors()
    );
  }

  static anyIsLoading<V, T extends Loadable<V>[]>(): OperatorFunction<T, boolean> {
    return pipe(map((loadables) => loadables.some((loadable) => loadable.type === 'loading')));
  }
}
