using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Meninges
{
    public enum CysticPartsType : byte
    {
        None = 0,

        [RadioReportId("hea_c_0502205", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0503216", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        Simple = 1,

        [RadioReportId("hea_c_0502206", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0503217", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        Complex = 2
    }
}
