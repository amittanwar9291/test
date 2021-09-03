using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum FractureDistType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040210", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        [RadioReportId("kne_m_040217", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        [RadioReportId("kne_m_040224", InstanceName = nameof(BonesFindingType.FracturePatella))]
        FractureOlderConsolidated = 1,

        [RadioReportId("kne_m_040211", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        [RadioReportId("kne_m_040218", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        [RadioReportId("kne_m_040225", InstanceName = nameof(BonesFindingType.FracturePatella))]
        SuspicionOf = 2
    }
}