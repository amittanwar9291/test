using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum NoFutherDefinedType : byte
    {
        None = 0,

        [RadioReportId("spi_c_0603249", InstanceName = nameof(BonesFinding.C0NoFutherDefinedTypeRight))]
        [RadioReportId("spi_c_060415", InstanceName = nameof(BonesFinding.C1NoFutherDefinedType))]
        [RadioReportId("spi_c_060570", InstanceName = nameof(BonesFinding.C2NoFutherDefinedType))]
        [RadioReportId("spi_c_060438", InstanceName = nameof(BonesFinding.CommonNoFutherDefinedType))]
        [RadioReportId("spi_c_060453", InstanceName = nameof(BonesFinding.OsSacrumNoFutherDefinedType))]
        [RadioReportId("spi_c_0604205", InstanceName = nameof(BonesFinding.CoccygisNoFutherDefinedType))]
        SuspectedFracture = 1,

        [RadioReportId("spi_c_0603250", InstanceName = nameof(BonesFinding.C0NoFutherDefinedTypeRight))]
        [RadioReportId("spi_c_060409", InstanceName = nameof(BonesFinding.C0NoFutherDefinedTypeLeft))]
        [RadioReportId("spi_c_060416", InstanceName = nameof(BonesFinding.C1NoFutherDefinedType))]
        [RadioReportId("spi_c_060571", InstanceName = nameof(BonesFinding.C2NoFutherDefinedType))]
        [RadioReportId("spi_c_060437", InstanceName = nameof(BonesFinding.CommonNoFutherDefinedType))]
        [RadioReportId("spi_c_060452", InstanceName = nameof(BonesFinding.OsSacrumNoFutherDefinedType))]
        [RadioReportId("spi_c_0604204", InstanceName = nameof(BonesFinding.CoccygisNoFutherDefinedType))]
        OldAppearingConsolidatedFracture = 2,
        
        [RadioReportId("spi_c_060408", InstanceName = nameof(BonesFinding.C0NoFutherDefinedTypeLeft))]
        SuspicionOf = 3
    }
}
