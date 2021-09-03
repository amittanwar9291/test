using System;
using RadioReport.Common.Enums;
using RadioReport.Common.Extensions;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models
{
    public class ReportData
    {
        private ReportData()
        {
        }

        public Guid ReportId { get; set; }
        public ModuleType ModuleType { get; set; }

        public static Result<ReportData> Create(string reportIdString, string moduleName)
        {
            if (reportIdString.IsNullOrEmpty() ||
                !Guid.TryParse(reportIdString, out var reportId) ||
                moduleName.IsNullOrEmpty() ||
                !Enum.TryParse<ModuleType>(moduleName, out var moduleType))
            {
                return Result<ReportData>.Fail();
            }

            return Result<ReportData>.Success(new ReportData
            {
                ReportId = reportId,
                ModuleType = moduleType
            });
        }

        public static Result<ReportData> Create(Guid reportId, ModuleType moduleType)
        {
            if (reportId.IsEmpty())
            {
                return Result<ReportData>.Fail();
            }

            return Result<ReportData>.Success(new ReportData
            {
                ReportId = reportId,
                ModuleType = moduleType
            });
        }
    }
}
