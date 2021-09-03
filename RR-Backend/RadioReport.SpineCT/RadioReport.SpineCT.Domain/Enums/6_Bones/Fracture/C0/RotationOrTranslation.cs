using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum RotationOrTranslation : byte
    {
        None = 0,

        [RadioReportId("spi_c_0603243", InstanceName = nameof(BonesFinding.RotationOrTranslationRight))]
        [RadioReportId("spi_c_0604241", InstanceName = nameof(BonesFinding.RotationOrTranslationLeft))]
        Rotation = 1,

        [RadioReportId("spi_c_0603246", InstanceName = nameof(BonesFinding.RotationOrTranslationRight))]
        [RadioReportId("spi_c_0604244", InstanceName = nameof(BonesFinding.RotationOrTranslationLeft))]
        Translation = 2
    }
}
