using System;
using System.Threading.Tasks;
using RadioReport.Common.Models;

namespace RadioReport.Common.Extensions
{
    public static class ResultExtensions
    {
        public static Result OnSuccess(this Result result, Action action)
        {
            if (result == null) throw new ArgumentNullException(nameof(result));

            if (result.IsSuccess) action?.Invoke();

            return result;
        }

        public static async Task<Result> OnSuccess(this Result result, Func<Task> task)
        {
            if (result == null) throw new ArgumentNullException(nameof(result));

            if (result.IsSuccess && task != null) await task();

            return result;
        }

        public static Result OnFailure(this Result result, Action action)
        {
            if (result == null) throw new ArgumentNullException(nameof(result));

            if (result.IsFailure) action?.Invoke();

            return result;
        }

        public static Result OnFailureThrow(this Result result, Exception exception)
        {
            if (result == null) throw new ArgumentNullException(nameof(result));

            if (result.IsFailure) throw exception;

            return result;
        }

        public static Result OnFailureThrow<T>(this Result result, string message = null) where T : Exception
        {
            if (result == null) throw new ArgumentNullException(nameof(result));

            if (!result.IsFailure) return result;

            var exception = message != null
                ? Activator.CreateInstance(typeof(T), message) as Exception
                : Activator.CreateInstance(typeof(T)) as Exception;
            if (exception != null)
            {
                throw exception;
            }

            return result;
        }

        public static Result OnException(this Result result, Action<Exception> action)
        {
            if (result == null) throw new ArgumentNullException(nameof(result));

            if (result.IsException) action?.Invoke(result.Error);

            return result;
        }
        
        public static Result<T> OnSuccess<T>(this Result<T> result, Action<T> action)
        {
            if (result == null) throw new ArgumentNullException(nameof(result));

            if (result.IsSuccess) action?.Invoke(result.Value);

            return result;
        }

        public static Result<T> OnFailure<T>(this Result<T> result, Action action)
        {
            if (result == null) throw new ArgumentNullException(nameof(result));

            if (result.IsFailure) action?.Invoke();

            return result;
        }

        public static Result<T> OnFailureThrow<T>(this Result<T> result, Exception exception)
        {
            if (result == null) throw new ArgumentNullException(nameof(result));

            if (result.IsFailure) throw exception;

            return result;
        }

        public static Result<T> OnException<T>(this Result<T> result, Action<Exception> action)
        {
            if (result == null) throw new ArgumentNullException(nameof(result));

            if (result.IsException) action?.Invoke(result.Error);

            return result;
        }
    }
}
