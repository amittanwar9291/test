using System.Diagnostics.CodeAnalysis;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    [SuppressMessage("Microsoft.Naming", "CA1720:IdentifiersShouldNotContainTypeNames")]
    public enum GroundGlassOpacityType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0503228", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        Single = 1,

        [RadioReportId("tho_c_0503229", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        Multiple = 2
    }
}