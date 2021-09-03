using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum EvaluationFractureType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040205", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        [RadioReportId("kne_m_040213", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        [RadioReportId("kne_m_040220", InstanceName = nameof(BonesFindingType.FracturePatella))]
        Extraarticular = 1,

        [RadioReportId("kne_m_040206", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        [RadioReportId("kne_m_040214", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        [RadioReportId("kne_m_040221", InstanceName = nameof(BonesFindingType.FracturePatella))]
        PartiallyArticular = 2,

        [RadioReportId("kne_m_040207", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        [RadioReportId("kne_m_040215", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        [RadioReportId("kne_m_040222", InstanceName = nameof(BonesFindingType.FracturePatella))]
        Articular = 3,

        [RadioReportId("kne_m_040208", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        [RadioReportId("kne_m_040216", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        [RadioReportId("kne_m_040223", InstanceName = nameof(BonesFindingType.FracturePatella))]
        FractureDistNotSpecified = 4,

        [RadioReportId("kne_m_040264", InstanceName = nameof(BonesFindingType.FractureFibulaProximal))]
        SimpleFracture = 5,

        [RadioReportId("kne_m_040265", InstanceName = nameof(BonesFindingType.FractureFibulaProximal))]
        MultiFragmentFracture = 6,

        [RadioReportId("kne_m_040268", InstanceName = nameof(BonesFindingType.FractureFibulaProximal))]
        FractureOlderConsolidated = 7,

        [RadioReportId("kne_m_040279", InstanceName = nameof(BonesFindingType.FractureFibulaProximal))]
        SuspicionOf = 8
    }
}