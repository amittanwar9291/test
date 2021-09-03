using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum SideType : byte
    {
        None = 0,

        [RadioReportId("spi_c_060411", InstanceName = nameof(BonesFinding.SideType),CustomConditionName = nameof(BonesFindingType.Fracture))]
        [RadioReportId("spi_c_0602101", InstanceName = nameof(BonesFinding.LocationSideType), CustomConditionName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        Right = 1,

        [RadioReportId("spi_c_060413", InstanceName = nameof(BonesFinding.SideType),CustomConditionName = nameof(BonesFindingType.Fracture))]
        [RadioReportId("spi_c_0602102", InstanceName = nameof(BonesFinding.LocationSideType), CustomConditionName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        Left = 2,
        
        [RadioReportId("spi_c_0604200", InstanceName = nameof(BonesFinding.SideType),CustomConditionName = nameof(BonesFindingType.Fracture))]
        Bilateral = 3,
        
        [RadioReportId("spi_c_0602103", InstanceName = nameof(BonesFinding.LocationSideType), CustomConditionName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        OnBothSides = 4
    }
}
