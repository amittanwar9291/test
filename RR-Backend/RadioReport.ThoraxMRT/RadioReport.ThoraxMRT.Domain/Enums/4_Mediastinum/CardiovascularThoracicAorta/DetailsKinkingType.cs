using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum DetailsKinkingType : byte
    {
        None = 0,

        [RadioReportId("tho_m_040438", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        FunctionalStenosis = 1,

        [RadioReportId("tho_m_040439", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        MorphologicalStenosis = 2
    }
}

