using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum CurvatureOfInterventricularSeptumType : byte
    {
        None = 0,

        [RadioReportId("tho_m_040324", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        Normal = 1,

        [RadioReportId("tho_m_040325", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        Abnormal = 2
    }
}
