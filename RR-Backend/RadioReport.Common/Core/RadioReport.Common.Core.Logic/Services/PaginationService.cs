using System;
using RadioReport.Common.Consts;
using RadioReport.Common.Core.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.ReportList;

namespace RadioReport.Common.Core.Logic.Services
{
    public class PaginationService : IPaginationService
    {
        public int GetSkipCount(PaginationOptions options, int pageSize)
        {
            if (options == null) throw new ArgumentNullException(nameof(options));

            return pageSize * (options.CurrentPage.Value - 1);
        }

        public int GetPageCount(PaginationOptions options)
        {
            if (options == null) throw new ArgumentNullException(nameof(options));

            return options.Total > 0 && options.PageSize > 0
                ? (int) Math.Ceiling((double) options.Total.Value / options.PageSize.Value)
                : 1;
        }

        public void CapCurrentPage(PaginationOptions options)
        {
            if (options == null) throw new ArgumentNullException(nameof(options));

            options.CurrentPage =
                options.CurrentPage.HasValue && options.PageCount.HasValue
                    ? Math.Min(options.CurrentPage.Value, options.PageCount.Value)
                    : 1;
        }
    }
}
