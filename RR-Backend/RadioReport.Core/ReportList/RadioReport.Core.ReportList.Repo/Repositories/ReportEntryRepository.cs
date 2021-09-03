using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Models;
using RadioReport.Common.Repository;
using RadioReport.Core.ReportList.Domain.Interfaces;
using RadioReport.Core.ReportList.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RadioReport.Core.ReportList.Repo.Repositories
{
    public class ReportEntryRepository : RepositoryBase<ReportEntry>, IReportEntryRepository
    {
        private readonly HttpAuthContext _httpAuthContext;

        public ReportEntryRepository(ReportListDbContext dbContext, HttpAuthContext httpAuthContext) : base(dbContext)
        {
            _httpAuthContext = httpAuthContext;
        }

        public Task<List<ReportEntry>> GetExportCsvData() => DataContext.Set<ReportEntry>()
            .Where(r => r.InstituteId == _httpAuthContext.InstituteId)
            .ToListAsync();
    }
}
