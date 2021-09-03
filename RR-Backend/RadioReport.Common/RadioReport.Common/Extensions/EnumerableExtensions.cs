using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace RadioReport.Common.Extensions
{
    public static class EnumerableExtensions
    {
        public static bool IsNullOrEmpty<T>(this IEnumerable<T> enumerable) => enumerable == null || !enumerable.Any();

        public static string Join(this IEnumerable<string> stringEnumerable, string separator) => string.Join(separator, stringEnumerable);

        public static IQueryable<T> Order<T, TKey>(this IQueryable<T> source, Expression<Func<T, TKey>> selector, bool ascending) =>
            selector == null
                ? source
                : ascending
                    ? source.OrderBy(selector)
                    : source.OrderByDescending(selector);
    }
}
