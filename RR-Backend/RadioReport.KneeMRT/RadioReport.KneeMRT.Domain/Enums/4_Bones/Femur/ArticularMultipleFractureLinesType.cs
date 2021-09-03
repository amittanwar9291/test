using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum ArticularMultipleFractureLinesType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040410", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        MetaphysealSingleFractureLine = 1,

        [RadioReportId("kne_m_040411", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        MetaphysealWedgeFracture = 2,

        [RadioReportId("kne_m_040412", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        MetaphysealWedgeFractureFragmentedWedge = 3
    }
}