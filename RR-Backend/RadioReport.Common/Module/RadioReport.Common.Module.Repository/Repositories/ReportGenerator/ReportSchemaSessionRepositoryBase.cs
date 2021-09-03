using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using RadioReport.Common.Repository;
using System;
using System.Threading.Tasks;

namespace RadioReport.Common.Module.Repository.Repositories.ReportGenerator
{
    public class ReportSchemaSessionRepositoryBase : RepositoryBase<ReportSchemaSession>, IReportSchemaSessionRepository
    {
        public ReportSchemaSessionRepositoryBase(DbContext dbContext) : base(dbContext)
        {
        }

        public async Task<ReportSchemaSession> GetByReportIdAsync(Guid reportId)
        {
            return await GetFirstOrDefaultAsNoTrackingAsync(s => s.ReportSchemaId == reportId);
        }
    }
}