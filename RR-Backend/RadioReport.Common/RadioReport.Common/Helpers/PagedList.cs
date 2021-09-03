using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RadioReport.Common.Helpers
{
    public class PagedList<T> : List<T>
    {
        public int Page { get; }
        public int TotalPages { get; }
        public int PageSize { get; }
        public int TotalCount { get; }
        
        public PagedList(IEnumerable<T> items, int count, int pageNumber, int pageSize)
        {
            TotalCount = count;
            PageSize = pageSize;
            Page = pageNumber;
            TotalPages = (int)Math.Ceiling(count / (double)pageSize);
            AddRange(items);
        }
        
        public static async Task<PagedList<T>> ToPagedList(IQueryable<T> source, int pageNumber, int pageSize)
        {
            var list = await Task.FromResult(source.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToList());
            return new PagedList<T>(list, source.Count(), pageNumber, pageSize);
        }
    }
}
