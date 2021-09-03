using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Core.ReportList.Domain.Models;

namespace RadioReport.Core.ReportList.Domain.Interfaces
{
    public interface IExportCsvManager
    {
        Task<List<ReportEntry>> GetExportCsvData();
    }
}
