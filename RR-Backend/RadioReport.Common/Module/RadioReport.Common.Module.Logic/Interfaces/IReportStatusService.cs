using System;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.Common.Module.Logic.Interfaces
{
    public interface IReportStatusService
    {
        Task<Report> UpdateReportStatusAsync(Guid reportId, ReportStatus newStatus, bool persist);
        Task<Report> UpdateReportStatusAsync(Report report, ReportStatus newStatus, bool persist);
        
        Task<ReportStatus> GetReportStatusAsync(Guid reportId);
    }
}
