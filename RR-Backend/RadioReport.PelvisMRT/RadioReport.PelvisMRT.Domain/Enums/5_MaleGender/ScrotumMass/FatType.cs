using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.MaleGender
{
    public enum FatType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0502128", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
        Macroscopic = 1,

        [RadioReportId("pel_m_0502129", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
        Microscopic = 2

    }
}
