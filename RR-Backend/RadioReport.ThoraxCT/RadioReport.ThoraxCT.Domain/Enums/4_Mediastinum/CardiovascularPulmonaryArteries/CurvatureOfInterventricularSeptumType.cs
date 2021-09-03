using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum CurvatureOfInterventricularSeptumType : byte
    {
        None = 0,

        [RadioReportId("tho_c_040328", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        Normal = 1,

        [RadioReportId("tho_c_040329", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        Abnormal = 2
    }
}
