using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.MaleGender
{
    public enum SeptationsType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0502131", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
        Thin = 1,

        [RadioReportId("pel_m_0502132", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
        Thick = 2
    }
}