using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum WedgeFractureType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040307", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        WedgeOneFragment = 1,

        [RadioReportId("kne_m_040308", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        WedgeFragmented = 2
    }
}