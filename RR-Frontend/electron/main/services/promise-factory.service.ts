export class PromiseFactory {
  static createErrorHandlingPromise<T>(
    action: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void
  ): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      try {
        action(resolve, reject);
      } catch (error) {
        reject(error);
      }
    });
  }
}
