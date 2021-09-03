using System;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Core.FakeDataGenerator.Domain.Models;

namespace RadioReport.Core.FakeDataGenerator.Domain.Interfaces
{
    public interface IFakeDataManager
    {
        Task<Report> CreateFakeReport(CreateFakeReportRequest request);
        Task<int> CreateFakeReports(CreateFakeReportsRequest request);
        Task<Patient> CreateFakePatient(Guid? instituteId);
        Task<int> CreateFakePatients(CreateFakePatientsRequest request);
        Task<int> CreateFakeReportListEntries(int amount);
    }
}
