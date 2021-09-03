using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.Core.FakeDataGenerator.Domain.Interfaces
{
    public interface IFakeDataService
    {
        (Report report, Patient patient) CreateReportWithPatient(string reportTypeName, bool isFindingToday = true, bool isStatusOpen = true);
        Patient CreatePatient();
    }
}
