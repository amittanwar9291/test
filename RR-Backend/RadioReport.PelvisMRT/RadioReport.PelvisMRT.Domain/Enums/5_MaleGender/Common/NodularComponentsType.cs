using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.MaleGender
{
    public enum NodularComponentsType : byte
    {
        None = 0,

        [RadioReportId("pel_m_050458", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
        [RadioReportId("pel_m_050535", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
        NodularParts = 1

    }
}