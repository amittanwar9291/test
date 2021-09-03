using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum AdditionalOssificationType : byte
    {
        None = 0,
        
        [RadioReportId("kne_m_070203", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        PatellaBipartita = 1,

        [RadioReportId("kne_m_070204", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        PatellaTripartita = 2
    }
}
