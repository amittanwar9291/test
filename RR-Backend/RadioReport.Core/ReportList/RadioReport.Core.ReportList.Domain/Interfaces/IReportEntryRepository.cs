using RadioReport.Common.Logic.Interfaces;
using RadioReport.Core.ReportList.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.Core.ReportList.Domain.Interfaces
{
    public interface IReportEntryRepository : IRepository<ReportEntry>
    {
        Task<List<ReportEntry>> GetExportCsvData();
    }
}
