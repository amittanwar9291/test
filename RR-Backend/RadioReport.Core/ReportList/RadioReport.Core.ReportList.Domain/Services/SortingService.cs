using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Consts;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Models.ReportList;
using RadioReport.Core.ReportList.Domain.Interfaces;
using RadioReport.Core.ReportList.Domain.Models;

namespace RadioReport.Core.ReportList.Domain.Services
{
    public class SortingService : ISortingService
    {
        public void SetDefaultsIfEmpty(ReportListOptions options)
        {
            if (options == null) throw new ArgumentNullException(nameof(options));

            if (options.Sort == null || options.Sort.Column.IsNullOrEmpty())
            {
                options.Sort = new SortOptions
                {
                    Ascending = false,
                    Column = nameof(ReportEntry.FindingsDate),
                    TopStatus = ReportStatus.Unknown
                };
            }
            options.Sort.Ascending ??= false;
        }

        public async Task<List<ReportEntry>> SortReports(IQueryable<ReportEntry> queryable, SortOptions sortOptions, int skipCount, int pageSize)
        {
            if (sortOptions == null) throw new ArgumentNullException(nameof(sortOptions));

            queryable = IsStatusSorting(sortOptions)
                ? SortByStatus(queryable, sortOptions.TopStatus)
                : SortByColumn(queryable, sortOptions);

            return await queryable
                .Skip(skipCount)
                .Take(pageSize)
                .ToListAsync();
        }

        private static bool IsStatusSorting(SortOptions options) => options.Column == nameof(ReportEntry.Status) && options.TopStatus != ReportStatus.Unknown;

        private static IQueryable<ReportEntry> SortByStatus(IQueryable<ReportEntry> queryable, ReportStatus topStatus) =>
            queryable
                .Where(r => r.Status == topStatus)
                .Concat(queryable
                    .Where(r => r.Status != topStatus)
                    .OrderBy(r => r.Status)
                    .ThenBy(r => r.FindingsDate)
                    .Skip(0));

        private static IQueryable<ReportEntry> SortByColumn(IQueryable<ReportEntry> queryable, SortOptions sortOptions)
        {
            var orderBy = GetOrderByExpression(sortOptions.Column);
            var orderedQueryable = sortOptions.Ascending ?? false ? queryable.OrderBy(orderBy) : queryable.OrderByDescending(orderBy);
            var thenBy = GetThenByExpression(sortOptions.Column);

            return thenBy == null ? orderedQueryable : orderedQueryable.ThenBy(thenBy);
        }

        private static Expression<Func<ReportEntry, object>> GetOrderByExpression(string orderProperty) =>
            orderProperty switch
            {
                nameof(ReportEntry.PatientAge) => r => r.PatientAge,
                nameof(ReportEntry.ExaminationType) => r => r.ExaminationType,
                nameof(ReportEntry.ExaminationDate) => r => r.ExaminationDate,
                nameof(ReportEntry.UserLabel) => r => r.UserLabel,
                _ => r => r.FindingsDate
            };

        private static Expression<Func<ReportEntry, object>> GetThenByExpression(string orderProperty) =>
            orderProperty switch
            {
                nameof(ReportEntry.FindingsDate) => r => r.Status,
                _ => r => r.FindingsDate
            };
    }
}
