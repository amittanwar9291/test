using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum FractureClassificationType : byte
    {
        None = 0,

        [RadioReportId("sho_m_040302", InstanceName = nameof(BonesFindingType.Fracture))]
        AOClassification = 1,

        [RadioReportId("sho_m_040304", InstanceName = nameof(BonesFindingType.Fracture))]
        NeerClassification = 2
    }
}
