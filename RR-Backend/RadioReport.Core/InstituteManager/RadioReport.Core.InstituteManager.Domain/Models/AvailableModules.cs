using System.Collections.Generic;
using RadioReport.Common.Models;

namespace RadioReport.Core.InstituteManager.Domain.Models
{
    public class AvailableModulesResponse : RequestResponseBase
    {
        public List<string> AvailableModules { get; }

        public AvailableModulesResponse(bool isSuccess, List<string> availableModules) : base(isSuccess)
        {
            AvailableModules = availableModules;
        }
    }
}
