using RadioReport.Common.Logic.Models;
using RadioReport.Core.CenterSpecificSettings.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.Core.CenterSpecificSettings.Domain.Models
{
    public class CSPFinding : ModelBase 
    { 
        public IEnumerable<CSPSet> Sets { get; set; }

        public CSPFindingType FindingType { get; set; }
    }
}
