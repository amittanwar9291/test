using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.ThoraxMRT.Domain.Enums;

namespace RadioReport.ThoraxMRT.Domain.Models
{
    public class LungsFlapsMulticolorLocalizer : ModelBase
	{
        [RadioReportId("tho_m_0502120", InstanceName = nameof(LungParenchymaFinding.BronchiectasisOrWallThickeningLocalizer))]
        [RadioReportId("tho_m_0502129", InstanceName = nameof(LungParenchymaFinding.MucusPlaqueLocalizer))]
        [RadioReportId("tho_m_0502123", InstanceName = nameof(LungParenchymaFinding.SacculationOrAbscessLocalizer))]
        [RadioReportId("tho_m_0502132", InstanceName = nameof(LungParenchymaFinding.ConsolidationLocalizer))]
        [RadioReportId("tho_m_0502126", InstanceName = nameof(LungParenchymaFinding.OtherAbnormalityLocalizer))]
        [RadioReportId("tho_m_0502135", InstanceName = nameof(LungParenchymaFinding.FunctionLocalizer))]
        public LungsFlapsLocations LessThan50Location { get; set; }

        [RadioReportId("tho_m_0502121", InstanceName = nameof(LungParenchymaFinding.BronchiectasisOrWallThickeningLocalizer))]
        [RadioReportId("tho_m_0502130", InstanceName = nameof(LungParenchymaFinding.MucusPlaqueLocalizer))]
        [RadioReportId("tho_m_0502124", InstanceName = nameof(LungParenchymaFinding.SacculationOrAbscessLocalizer))]
        [RadioReportId("tho_m_0502133", InstanceName = nameof(LungParenchymaFinding.ConsolidationLocalizer))]
        [RadioReportId("tho_m_0502127", InstanceName = nameof(LungParenchymaFinding.OtherAbnormalityLocalizer))]
        [RadioReportId("tho_m_0502136", InstanceName = nameof(LungParenchymaFinding.FunctionLocalizer))]
        public LungsFlapsLocations MoreThan50Location { get; set; }
	}
}
