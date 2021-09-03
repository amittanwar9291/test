using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HeadMRT.Domain.Constants;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.SellarRegion;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class SellarRegionFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("hea_m_100106")]
        public SellarRegionFindingType FindingType { get; set; }

        [RadioReportId("hea_m_100204", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public SellarRegionDiagnosisType SellarRegionDiagnosisLocalizationType { get; set; }

        [RadioReportId("hea_m_100205-l", InstanceName = InstanceNames.SellarRegion, IsExportable = false)]
        public MarginType MarginType { get; set; }

        [RadioReportId("hea_m_100208-l", InstanceName = nameof(SellarRegionFinding) + nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        [RadioReportId("hea_m_100211-l", InstanceName = nameof(InstanceNames.SellarRegion), IsExportable = false)]
        public ShapeType ShapeType { get; set; }

        [RadioReportId("hea_m_100313", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public SignalTypeExtended T1wSignalType { get; set; }

        [RadioReportId("hea_m_100315", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public SignalTypeExtended T2wSignalType { get; set; }

        [RadioReportId("hea_m_100317", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public SignalTypeExtended FlairSignalType { get; set; }

        [RadioReportId("hea_m_100415", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsSignalVoid { get; set; }

        [RadioReportId("hea_m_100415-l", InstanceName = InstanceNames.SellarRegion, IsExportable = false)]
        public SignalVoidType SignalVoidType { get; set; }

        [RadioReportId("hea_m_100514", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("hea_m_100517", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsCysts { get; set; }

        [RadioReportId("hea_m_100519", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsSepta { get; set; }

        [RadioReportId("hea_m_100521", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsFluidLevel { get; set; }

        [RadioReportId("hea_m_100319", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsPerifocalEdema { get; set; }

        [RadioReportId("hea_m_100321", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsDuraTailSign { get; set; }

        [RadioReportId("hea_m_100533-l", InstanceName = InstanceNames.SellarRegion, IsExportable = false)]
        public ContrastQuantitativeType ContrastQuantitativeType { get; set; }
        
        [RadioReportId("hea_m_100523-l", InstanceName = nameof(SellarRegionFinding) + nameof(ContrastEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType ContrastEnhancementHomogeneityType { get; set; }

        [RadioReportId("hea_m_100532-l", InstanceName = InstanceNames.SellarRegion, IsExportable = false)]
        public ContrastDistributionType ContrastDistributionType { get; set; }
    }
}