using RadioReport.Core.CenterSpecificSettings.Domain.Enums;
using RadioReport.Core.CenterSpecificSettings.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace RadioReport.Core.CenterSpecificSettings.Repo.Seeds
{
    internal static class CSPFindingSeed
    {
        internal static List<CSPFinding> GetPreconfiguredCSPFindings()
        {
            var result = new List<CSPFinding>();
            var allValues = (CSPFindingType[])Enum.GetValues(typeof(CSPFindingType));

            foreach (var value in allValues.Where(v => v != CSPFindingType.None))
            {
                result.Add(new CSPFinding { FindingType = value });
            }

            return result;
        }
    }
}
