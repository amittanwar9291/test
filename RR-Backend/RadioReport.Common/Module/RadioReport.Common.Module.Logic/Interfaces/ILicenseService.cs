using System;
using System.Threading.Tasks;
using RadioReport.Common.Module.Logic.Models;

namespace RadioReport.Common.Module.Logic.Interfaces
{
    public interface ILicenseService
    {
        Task VerifyLicense(ReportTextGenerationParams generationParams);
    }
}
