using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.MaleGender
{
    public enum DirectionType : byte
    {
        None = 0,

        [RadioReportId("pel_m_050238", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
        [RadioReportId("pel_m_0502111", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
        [RadioReportId("pel_m_0502111", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesInfectionInflammation))]
        [RadioReportId("pel_m_0502111", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
        Right = 1,

        [RadioReportId("pel_m_050239", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
        [RadioReportId("pel_m_0502112", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
        [RadioReportId("pel_m_0502112", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesInfectionInflammation))]
        [RadioReportId("pel_m_0502112", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
        Left = 2
    }
}