using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.FemaleGender
{
    public enum ComplicationsType : byte
    {
        None = 0,
        
        [RadioReportId("pel_m_0604278", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        UreteralStenosis = 1,

        [RadioReportId("pel_m_0604279", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        IntestinalStenosis = 2,

        [RadioReportId("pel_m_0604280", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        Haematosalpinx = 3,

        [RadioReportId("pel_m_0604281", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        Hydrosalpinx = 4,

        [RadioReportId("pel_m_0604282", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        Adhesions = 5
    }
}
