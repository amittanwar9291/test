using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum LocalSpreadType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040492", InstanceName = nameof(BonesFindingType.BonesTumor))]
        Intracompartmental = 1,

        [RadioReportId("kne_m_040493", InstanceName = nameof(BonesFindingType.BonesTumor))]
        ExtraCompartmental = 2
    }
}