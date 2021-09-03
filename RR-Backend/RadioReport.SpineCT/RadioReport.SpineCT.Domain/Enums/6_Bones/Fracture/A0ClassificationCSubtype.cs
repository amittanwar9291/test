using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum A0ClassificationCSubtype : byte
    {
        None = 0,

        [RadioReportId("spi_c_060448", InstanceName = nameof(BonesFinding.A0OsSacrumClassificationCSubtype))]
        TypeC0 = 1,

        [RadioReportId("spi_c_060449", InstanceName = nameof(BonesFinding.A0OsSacrumClassificationCSubtype))]
        TypeC1 = 2,

        [RadioReportId("spi_c_060450", InstanceName = nameof(BonesFinding.A0OsSacrumClassificationCSubtype))]
        TypeC2 = 3,

        [RadioReportId("spi_c_060451", InstanceName = nameof(BonesFinding.A0OsSacrumClassificationCSubtype))]
        TypeC3 = 4
    }
}
