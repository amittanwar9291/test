using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.FemaleGender
{
    public enum SubperitonealInfiltrationType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0602471", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        InfiltrationMuscularisPropria = 1,

        [RadioReportId("pel_m_0602472", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        MucosalOrWallCrossingInfiltration = 2
    }
}
