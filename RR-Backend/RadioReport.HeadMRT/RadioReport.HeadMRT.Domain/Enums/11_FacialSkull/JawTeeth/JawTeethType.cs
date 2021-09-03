using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.FacialSkull
{
    public enum JawTeethType : byte
    {
        None = 0,

        [RadioReportId("hea_m_1102244", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        ToothAnomalies = 1,

        [RadioReportId("hea_m_1102245", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        JawCyst = 2,

        [RadioReportId("hea_m_1102246", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        InternalDerangementTemporomandibularJoint = 3,

        [RadioReportId("hea_m_1102247", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        OsteomyelitisMandible = 4
    }
}