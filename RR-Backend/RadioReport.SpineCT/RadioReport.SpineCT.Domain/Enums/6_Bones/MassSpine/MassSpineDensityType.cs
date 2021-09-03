using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum MassSpineDensityType : byte
    {
        None = 0,
        
        [RadioReportId("spi_c_0605238", InstanceName = nameof(BonesFindingType.MassSpine))]
        FatIsodensApproxMinus100HU = 1,
        
        [RadioReportId("spi_c_0605239", InstanceName = nameof(BonesFindingType.MassSpine))]
        FluidIsodensAbove0HU = 2,
        
        [RadioReportId("spi_c_0605240", InstanceName = nameof(BonesFindingType.MassSpine))]
        SoftTissueIsodense = 3
    }
}
