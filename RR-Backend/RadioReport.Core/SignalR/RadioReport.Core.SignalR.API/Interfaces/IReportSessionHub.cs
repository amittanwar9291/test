using System.Threading.Tasks;

namespace RadioReport.Core.SignalR.API.Interfaces
{
    public interface IReportSessionHub
    {
        Task UpdatePages();
    }
}
