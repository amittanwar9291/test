using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Pancreas
{
    public enum PancreaticDuctPathologyType : byte
    {
        None = 0,

        [RadioReportId("abd_m_060213", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060213", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060213", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        Dilatation = 1,

        [RadioReportId("abd_m_060214", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060214", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060214", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        Stenosis = 2,

        [RadioReportId("abd_m_060215", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060215", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060215", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        Abort = 3,

        [RadioReportId("abd_m_060216", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060216", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060216", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        CaliberVariation = 4
    }
}