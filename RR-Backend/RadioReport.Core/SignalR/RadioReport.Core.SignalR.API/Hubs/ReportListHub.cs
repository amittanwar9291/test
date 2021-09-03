using Microsoft.AspNetCore.SignalR;
using RadioReport.Core.SignalR.API.Interfaces;

namespace RadioReport.Core.SignalR.API.Hubs
{
    public class ReportListHub : Hub<IReportListHub>
    {
    }
}
