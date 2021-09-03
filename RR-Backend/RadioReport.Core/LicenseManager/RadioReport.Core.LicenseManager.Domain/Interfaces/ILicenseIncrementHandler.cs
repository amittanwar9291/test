using System.Threading.Tasks;
using RadioReport.Common.Logic.Models.Kafka.Requests;

namespace RadioReport.Core.LicenseManager.Domain.Interfaces
{
    public interface ILicenseIncrementHandler
    {
        Task HandleLicenseIncrement(LicenseIncrementSyncRequest request);
    }
}
