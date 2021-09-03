using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum A0ClassificationASubtype : byte
    {
        None = 0,

        [RadioReportId("spi_c_060505", InstanceName = nameof(BonesFinding.A0ClassificationASubtype))]
        TypeA0 = 1,

        [RadioReportId("spi_c_060506", InstanceName = nameof(BonesFinding.A0ClassificationASubtype))]
        [RadioReportId("spi_c_060440", InstanceName = nameof(BonesFinding.A0OsSacrumClassificationASubtype))]
        TypeA1 = 2,

        [RadioReportId("spi_c_060507", InstanceName = nameof(BonesFinding.A0ClassificationASubtype))]
        [RadioReportId("spi_c_060441", InstanceName = nameof(BonesFinding.A0OsSacrumClassificationASubtype))]
        TypeA2 = 3,

        [RadioReportId("spi_c_060508", InstanceName = nameof(BonesFinding.A0ClassificationASubtype))]
        [RadioReportId("spi_c_060442", InstanceName = nameof(BonesFinding.A0OsSacrumClassificationASubtype))]
        TypeA3 = 4,

        [RadioReportId("spi_c_060509", InstanceName = nameof(BonesFinding.A0ClassificationASubtype))]
        TypeA4 = 5
    }
}
