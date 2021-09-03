using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using System;
using System.Threading.Tasks;

namespace RadioReport.Common.Module.Logic.Interfaces.ReportGenerator
{
    public interface IReportSchemaSessionRepository : IRepository<ReportSchemaSession>
    {
        Task<ReportSchemaSession> GetByReportIdAsync(Guid reportId);
    }
}
