using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
    public enum EpiploicAppendagitisDifferentialDiagnosisType : byte
    {
        None = 0,

        [RadioReportId("pel_m_080473", InstanceName = nameof(RectumFindingType.AcuteEpiploicAppendagitis))]
        Diverticulitis = 1,

        [RadioReportId("pel_m_080474", InstanceName = nameof(RectumFindingType.AcuteEpiploicAppendagitis))]
        Appendicitis = 2,

        [RadioReportId("pel_m_080475", InstanceName = nameof(RectumFindingType.AcuteEpiploicAppendagitis))]
        MesentericPanniculitis = 3
    }
}
