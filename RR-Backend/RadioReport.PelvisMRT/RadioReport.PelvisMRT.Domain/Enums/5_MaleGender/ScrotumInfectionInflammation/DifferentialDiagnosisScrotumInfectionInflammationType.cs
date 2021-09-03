using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.MaleGender
{
    public enum DifferentialDiagnosisScrotumInfectionInflammationType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0502102", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
        Epididymitis = 1,

        [RadioReportId("pel_m_0502105", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
        FournierGangrene = 2

    }
}
