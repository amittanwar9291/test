using System.Threading.Tasks;
using RadioReport.Common.Logic.Enums;

namespace RadioReport.Core.SignalR.API.Interfaces
{
    public interface IReportListHub
    {
        Task UpdateReport(string reportId, string status, bool isLocked);
    }
}
