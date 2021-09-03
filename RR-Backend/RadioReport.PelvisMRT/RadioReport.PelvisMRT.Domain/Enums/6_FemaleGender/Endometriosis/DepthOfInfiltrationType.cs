using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.FemaleGender
{
    public enum DepthOfInfiltrationType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0602469", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        RestrictedToSerosa = 1,

        [RadioReportId("pel_m_0602470", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        SubperitonealInfiltrationOfMoreThan5Mm = 2
    }
}
