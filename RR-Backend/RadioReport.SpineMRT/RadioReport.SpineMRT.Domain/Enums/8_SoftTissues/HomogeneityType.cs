using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Domain.Enums.SoftTissues
{
    public enum HomogeneityType : byte
    {
        None = 0,

        [RadioReportId("spi_m_080513", InstanceName = nameof(SoftTissuesFinding.HomogeneityType), CustomConditionName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        [RadioReportId("spi_m_080414", InstanceName = nameof(SoftTissuesFinding.HomogeneityType), CustomConditionName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        [RadioReportId("spi_m_080505", InstanceName = nameof(SoftTissuesFinding.CMEnhancementHomogeneityType), CustomConditionName = nameof(SoftTissuesFindingType.ParaspinalMass) + nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        Homogeneous = 1,

        [RadioReportId("spi_m_080514", InstanceName = nameof(SoftTissuesFinding.HomogeneityType), CustomConditionName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        [RadioReportId("spi_m_080415", InstanceName = nameof(SoftTissuesFinding.HomogeneityType), CustomConditionName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        [RadioReportId("spi_m_080506", InstanceName = nameof(SoftTissuesFinding.CMEnhancementHomogeneityType), CustomConditionName = nameof(SoftTissuesFindingType.ParaspinalMass) + nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        Inhomogeneous = 2,

        [RadioReportId("spi_m_080507", InstanceName = nameof(SoftTissuesFinding.CMEnhancementHomogeneityType), CustomConditionName = nameof(SoftTissuesFindingType.ParaspinalMass) + nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        RimEnhancement = 3
    }
}
