using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
    public enum AscitesCharacterizationType : byte
    {
        None = 0,

        [RadioReportId("pel_m_090203", InstanceName = nameof(BladderFindingType.Ascites))]
        Focal = 1,

        [RadioReportId("pel_m_090204", InstanceName = nameof(BladderFindingType.Ascites))]
        Generalized = 2
    }
}