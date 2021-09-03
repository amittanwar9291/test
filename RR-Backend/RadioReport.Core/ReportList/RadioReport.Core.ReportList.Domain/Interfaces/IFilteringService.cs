using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models.ReportList;

namespace RadioReport.Core.ReportList.Domain.Interfaces
{
    public interface IFilteringService : IReportListOptionsService
    {
        bool HasPatientFilter(PatientFilterOptions options);
        Task<List<Guid>> GetPatientIdsByFilterOptions(PatientFilterOptions options);
        ICollection<string> GetExaminationFilterMatches(ICollection<string> examinationSelection);
    }
}
