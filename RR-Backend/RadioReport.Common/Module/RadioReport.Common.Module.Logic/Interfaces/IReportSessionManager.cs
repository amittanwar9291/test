using System;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.Common.Module.Logic.Interfaces
{
    public interface IReportSessionManager : IManager<ReportSession>
    {
        Task<ReportSession> GetByReportId(Guid reportId);
        Task RemoveByReportId(Guid reportId);
    }
}
