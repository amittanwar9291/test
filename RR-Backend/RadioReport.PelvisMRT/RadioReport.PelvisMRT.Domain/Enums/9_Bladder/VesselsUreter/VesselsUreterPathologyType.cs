using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
    public enum VesselsUreterPathologyType : byte
    {
        None = 0,
        [RadioReportId("pel_m_0903230", InstanceName = nameof(BladderFindingType.VesselsUreter))]
        Congestion = 1,

        [RadioReportId("pel_m_0903231", InstanceName = nameof(BladderFindingType.VesselsUreter))]
        UreterDuplexFissus = 2
    }
}