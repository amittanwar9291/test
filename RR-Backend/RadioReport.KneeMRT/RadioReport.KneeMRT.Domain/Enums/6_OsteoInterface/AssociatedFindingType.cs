using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum AssociatedFindingType : byte
    {
        None = 0,

        [RadioReportId("kne_m_060510", InstanceName = nameof(OsteoInterfaceFindingType.TraumaOsteochondralFracture))]
        Haemarthros = 1,

        [RadioReportId("kne_m_060511", InstanceName = nameof(OsteoInterfaceFindingType.TraumaOsteochondralFracture))]
        Lipohaemarthros = 2
    }
}