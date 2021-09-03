using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineMRT.Domain.Models;
using RadioReport.SpineMRT.Domain.Enums.SpinalCanal;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum DescriptionType : byte
    {
        None = 0,

        [RadioReportId("spi_m_070111", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        [RadioReportId("spi_m_070111", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        [RadioReportId("spi_m_060111", InstanceName = nameof(BonesFindingType.FocalTumor))]
        [RadioReportId("spi_m_060111", InstanceName = nameof(BonesFindingType.DiffuseTumor))]
        [RadioReportId("spi_m_080111", InstanceName = nameof(SoftTissuesFinding))]
        [RadioReportId("spi_m_090110", InstanceName = nameof(SacroiliacJointFinding))]
        IDescribe = 1,

        [RadioReportId("spi_m_070112", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        [RadioReportId("spi_m_070112", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        [RadioReportId("spi_m_060113", InstanceName = nameof(BonesFindingType.FocalTumor))]
        [RadioReportId("spi_m_060113", InstanceName = nameof(BonesFindingType.DiffuseTumor))]
        [RadioReportId("spi_m_080110", InstanceName = nameof(SoftTissuesFinding))]
        [RadioReportId("spi_m_090111", InstanceName = nameof(SacroiliacJointFinding))]
        IKnow = 2
    }
}
