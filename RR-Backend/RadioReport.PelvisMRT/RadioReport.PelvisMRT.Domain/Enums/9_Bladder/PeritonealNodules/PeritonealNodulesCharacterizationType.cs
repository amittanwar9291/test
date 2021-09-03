using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
    public enum PeritonealNodulesCharacterizationType : byte
    {
        None = 0,

        [RadioReportId("pel_m_090207", InstanceName = nameof(BladderFindingType.PeritonealNodules))]
        Unifocal = 1,

        [RadioReportId("pel_m_090208", InstanceName = nameof(BladderFindingType.PeritonealNodules))]
        Multifocal = 2
    }
}