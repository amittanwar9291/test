using RadioReport.Common.Logic.Models;
using System.Collections.Generic;

namespace RadioReport.Core.CenterSpecificSettings.Domain.Models
{
    public class CSPSet : FindingBase
    {
        public override string InstanceName => SetName;

        public string SetName { get; set; }

        public IEnumerable<Sequence> Sequences { get; set; }

        public IEnumerable<Acquisition> Acquisitions { get; set; }
    }
}
