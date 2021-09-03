using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineCT.Domain.Constants;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Domain.Enums
{
    public enum SideType : byte
    {
        None = 0,

        [RadioReportId("spi_c_0402201", InstanceName = InstanceNames.Configuration)]
        [RadioReportId("spi_c_0504205", InstanceName = InstanceNames.Disc)]
        [RadioReportId("spi_c_080252", InstanceName = nameof(SoftTissuesFinding.LongissimusCapitisMuscleSideType))]
        [RadioReportId("spi_c_080256", InstanceName = nameof(SoftTissuesFinding.LevatorScapulaeMuscleSideType))]
        [RadioReportId("spi_c_080260", InstanceName = nameof(SoftTissuesFinding.SemispinalisColliMuscleSideType))]
        [RadioReportId("spi_c_0803378", InstanceName = nameof(SoftTissuesFinding.SemispinalisCapitisMuscleSideType))]
        [RadioReportId("spi_c_0803382", InstanceName = nameof(SoftTissuesFinding.SpleniusCapitisMuscleSideType))]
        [RadioReportId("spi_c_0803386", InstanceName = nameof(SoftTissuesFinding.CervicalSpineAutochthonousSideType))]
        [RadioReportId("spi_c_0804326", InstanceName = nameof(SoftTissuesFinding.ThoracicOrLumbarSpineAutochthonousSideType))]
        [RadioReportId("spi_c_0804330", InstanceName = nameof(SoftTissuesFinding.IliocostalisMuscleSideType))]
        [RadioReportId("spi_c_0804334", InstanceName = nameof(SoftTissuesFinding.LongissimusMuscleSideType))]
        [RadioReportId("spi_c_0805323", InstanceName = nameof(SoftTissuesFinding.QuadratusLumborumMuscleSideType))]
        [RadioReportId("spi_c_0805327", InstanceName = nameof(SoftTissuesFinding.PsoasMajorMuscleSideType))]
        [RadioReportId("spi_c_0805330", InstanceName = nameof(SoftTissuesFinding.MultifidusMuscleSideType))]
        Right = 1,

        [RadioReportId("spi_c_0402202", InstanceName = InstanceNames.Configuration)]
        [RadioReportId("spi_c_0504206", InstanceName = InstanceNames.Disc)]
        [RadioReportId("spi_c_080253", InstanceName = nameof(SoftTissuesFinding.LongissimusCapitisMuscleSideType))]
        [RadioReportId("spi_c_080257", InstanceName = nameof(SoftTissuesFinding.LevatorScapulaeMuscleSideType))]
        [RadioReportId("spi_c_080261", InstanceName = nameof(SoftTissuesFinding.SemispinalisColliMuscleSideType))]
        [RadioReportId("spi_c_0803379", InstanceName = nameof(SoftTissuesFinding.SemispinalisCapitisMuscleSideType))]
        [RadioReportId("spi_c_0803383", InstanceName = nameof(SoftTissuesFinding.SpleniusCapitisMuscleSideType))]
        [RadioReportId("spi_c_0803387", InstanceName = nameof(SoftTissuesFinding.CervicalSpineAutochthonousSideType))]
        [RadioReportId("spi_c_0804327", InstanceName = nameof(SoftTissuesFinding.ThoracicOrLumbarSpineAutochthonousSideType))]
        [RadioReportId("spi_c_0804331", InstanceName = nameof(SoftTissuesFinding.IliocostalisMuscleSideType))]
        [RadioReportId("spi_c_0804335", InstanceName = nameof(SoftTissuesFinding.LongissimusMuscleSideType))]
        [RadioReportId("spi_c_0805324", InstanceName = nameof(SoftTissuesFinding.QuadratusLumborumMuscleSideType))]
        [RadioReportId("spi_c_0805328", InstanceName = nameof(SoftTissuesFinding.PsoasMajorMuscleSideType))]
        [RadioReportId("spi_c_0805331", InstanceName = nameof(SoftTissuesFinding.MultifidusMuscleSideType))]
        Left = 2
    }
}
