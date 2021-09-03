using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.MammaMX.Domain.Enums;

namespace RadioReport.MammaMX.Domain.Models
{
    public class TechnologyFinding : FindingBase
    {
        
        [RadioReportId("mam_mx_030202")]
        public TechnologyFindingType FindingType { get; set; }

        [RadioReportId("mam_mx_030301", InstanceName = nameof(TechnologyFindingType.GalactographyRight))]
        [RadioReportId("mam_mx_030301", InstanceName = nameof(TechnologyFindingType.GalactographyLeft))]
        public bool IsContrastAgentForGalactography { get; set; }

        [RadioReportId("mam_mx_030302", InstanceName = nameof(TechnologyFindingType.GalactographyRight))]
        [RadioReportId("mam_mx_030302", InstanceName = nameof(TechnologyFindingType.GalactographyLeft))]
        public float? ContrastVolumeInMl { get; set; }

        public override string InstanceName => FindingType.ToString();
    }
}