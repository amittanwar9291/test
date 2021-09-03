using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum A0ClassificationBSubtype : byte
    {
        None = 0,

        [RadioReportId("spi_c_060511", InstanceName = nameof(BonesFinding.A0ClassificationBSubtype))]
        [RadioReportId("spi_c_060444", InstanceName = nameof(BonesFinding.A0OsSacrumClassificationBSubtype))]
        TypeB1 = 1,

        [RadioReportId("spi_c_060512", InstanceName = nameof(BonesFinding.A0ClassificationBSubtype))]
        [RadioReportId("spi_c_060445", InstanceName = nameof(BonesFinding.A0OsSacrumClassificationBSubtype))]
        TypeB2 = 2,

        [RadioReportId("spi_c_060513", InstanceName = nameof(BonesFinding.A0ClassificationBSubtype))]
        [RadioReportId("spi_c_060446", InstanceName = nameof(BonesFinding.A0OsSacrumClassificationBSubtype))]
        TypeB3 = 3
    }
}
