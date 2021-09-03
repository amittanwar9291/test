using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum LocalizationWithinOfTheMuscleType : byte
    {
        None = 0,

        [RadioReportId("anc_m_060252", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        ProximalEnthesis = 1,

        [RadioReportId("anc_m_060253", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        ProximalMusculotendinousTransition = 2,

        [RadioReportId("anc_m_060254", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        ProximalThird = 3,

        [RadioReportId("anc_m_060255", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        MiddleThird = 4,

        [RadioReportId("anc_m_060256", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        DistalThird = 5,

        [RadioReportId("anc_m_060257", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        DistalMusculotendinousTransitionOrInsertion = 6,

        [RadioReportId("anc_m_060258", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        DistalEnthesis = 7
    }
}