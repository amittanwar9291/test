using RadioReport.Common.Logic.Attributes;
using RadioReport.ThoraxCT.Domain.Enums;

namespace RadioReport.ThoraxCT.Domain.Models
{
    public enum StructureType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0603121", InstanceName = nameof(LungInterstitiumFindingType.Reticulations))]
        Smooth = 1,

        [RadioReportId("tho_c_0603122", InstanceName = nameof(LungInterstitiumFindingType.Reticulations))]
        Irregular = 2,

        [RadioReportId("tho_c_0603123", InstanceName = nameof(LungInterstitiumFindingType.Reticulations))]
        NodularSeptalThickening = 3
    }
}
