using RadioReport.Core.CenterSpecificSettings.Domain.Enums;
using RadioReport.Core.CenterSpecificSettings.Domain.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.Core.CenterSpecificSettings.Domain.Interfaces
{
    public interface ICSPFindingManager
    {
        Task<IEnumerable<CSPFinding>> GetAll();
        Task<CSPFinding> Get(CSPFindingType type);
        Task<CSPFinding> Get(Guid id);
        Task<CSPFinding> Update(CSPFinding model);
    }
}
