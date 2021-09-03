using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum A0ClassificationType : byte
    {
        None = 0,

        [RadioReportId("spi_c_060430", InstanceName = nameof(BonesFinding.A0ClassificationType))]
        [RadioReportId("spi_c_060326", InstanceName = nameof(BonesFinding.A0OsSacrumClassificationType))]
        [RadioReportId("spi_c_0603256", InstanceName = nameof(BonesFinding.A0CoccygisClassificationType))]
        TypeA = 1,

        [RadioReportId("spi_c_060431", InstanceName = nameof(BonesFinding.A0ClassificationType))]
        [RadioReportId("spi_c_060327", InstanceName = nameof(BonesFinding.A0OsSacrumClassificationType))]
        TypeB = 2,

        [RadioReportId("spi_c_060432", InstanceName = nameof(BonesFinding.A0ClassificationType))]
        [RadioReportId("spi_c_060328", InstanceName = nameof(BonesFinding.A0OsSacrumClassificationType))]
        TypeC = 3,
        
        [RadioReportId("spi_c_060329", InstanceName = nameof(BonesFinding.A0OsSacrumClassificationType))]
        [RadioReportId("spi_c_0603258", InstanceName = nameof(BonesFinding.A0CoccygisClassificationType))]
        NotSpec = 4
    }
}
