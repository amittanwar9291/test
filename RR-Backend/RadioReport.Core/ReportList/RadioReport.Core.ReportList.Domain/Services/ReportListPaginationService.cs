using System;
using RadioReport.Common.Consts;
using RadioReport.Common.Core.Logic.Services;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.ReportList;
using RadioReport.Core.ReportList.Domain.Interfaces;

namespace RadioReport.Core.ReportList.Domain.Services
{
    public class ReportListPaginationService : PaginationService, IReportListPaginationService
    {
        public void SetDefaultsIfEmpty(ReportListOptions options)
        {
            if (options == null) throw new ArgumentNullException(nameof(options));

            options.Pagination ??= new PaginationOptions();
            if (!(options.Pagination.PageSize > 0))
            {
                options.Pagination = new PaginationOptions
                {
                    Total = 0,
                    CurrentPage = 1,
                    PageCount = 1,
                    PageSize = ConfigurationConsts.ReportListDefaultPageSize
                };
            }
        }
    }
}
