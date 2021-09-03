using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.MaleGender
{
    public enum DifferentialDiagnosisScrotumTraumaType : byte
    {
        None = 0,

        [RadioReportId("pel_m_050336", InstanceName = nameof(MaleGenderFindingType.ScrotumTrauma))]
        TesticularCapsuleRupture = 1,

        [RadioReportId("pel_m_050337", InstanceName = nameof(MaleGenderFindingType.ScrotumTrauma))]
        TesticularContusion = 2
    }
}
