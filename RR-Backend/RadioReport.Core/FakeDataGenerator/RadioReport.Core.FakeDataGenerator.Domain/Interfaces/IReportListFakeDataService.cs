using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Core.ReportList.Domain.Models;

namespace RadioReport.Core.FakeDataGenerator.Domain.Interfaces
{
    public interface IReportListFakeDataService
    {
        Task<List<ReportEntry>> CreateReportsWithPatients(int amount, Guid instituteId);
    }
}
