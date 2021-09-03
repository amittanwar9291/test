using RadioReport.Common.Logic.Attributes;
using RadioReport.NeckMRT.Domain.Enums.Pharynx;
using RadioReport.NeckMRT.Domain.Enums.Larynx;
using RadioReport.NeckMRT.Domain.Enums.SoftTissues;
using RadioReport.NeckMRT.Domain.Enums.Bones;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Domain.Enums
{
    public enum DescriptionType : byte
    {
        None = 0,
        
        [RadioReportId("nec_m_040111", InstanceName = nameof(PharynxFinding) + nameof(PharynxFindingType.Mass))]
        [RadioReportId("nec_m_050111", InstanceName = nameof(LarynxFinding) + nameof(LarynxFindingType.Mass))]
        [RadioReportId("nec_m_060111", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        [RadioReportId("nec_m_100117", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        IDescribe = 1,

        [RadioReportId("nec_m_040112", InstanceName = nameof(PharynxFinding) + nameof(PharynxFindingType.Mass))]
        [RadioReportId("nec_m_050112", InstanceName = nameof(LarynxFinding) + nameof(LarynxFindingType.Mass))]
        [RadioReportId("nec_m_060112", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        [RadioReportId("nec_m_100118", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        IKnow = 2
    }
}
