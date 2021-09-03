using System.Threading.Tasks;
using RadioReport.Core.Tracking.Domain.Models;

namespace RadioReport.Core.Tracking.Domain.Interfaces
{
    public interface ITrackingService
    {
        Task StartStopTracking(StartStopTrackingRequest request);
        Task RemoveTracking(RemoveTrackingRequest request);
    }
}