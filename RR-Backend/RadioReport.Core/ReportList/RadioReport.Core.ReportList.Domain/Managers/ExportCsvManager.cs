using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Core.ReportList.Domain.Interfaces;
using RadioReport.Core.ReportList.Domain.Models;

namespace RadioReport.Core.ReportList.Domain.Managers
{
    public class ExportCsvManager : IExportCsvManager
    {
        private readonly IReportEntryRepository _reportEntryRepository;

        public ExportCsvManager(IReportEntryRepository reportEntryRepository)
        {
            _reportEntryRepository = reportEntryRepository;
        }

        public Task<List<ReportEntry>> GetExportCsvData() => _reportEntryRepository.GetExportCsvData();        
    }
}
