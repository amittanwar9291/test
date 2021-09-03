using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.MaleGender
{
    public enum SeminalVesicleChannelType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0503102", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesInfectionInflammation))]
        Dilatation = 1,

        [RadioReportId("pel_m_0503103", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesInfectionInflammation))]
        Atrophy = 2
    }
}