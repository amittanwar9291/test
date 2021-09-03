using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.KneeMRT.Domain.Enums;
using RadioReport.KneeMRT.SoftParts.Domain.Enums;

namespace RadioReport.KneeMRT.Domain.Models
{
    public class SoftPartsFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("kne_m_080106")]
        public SoftPartsFindingType FindingType { get; set; }

        [RadioReportId("kne_m_080515", InstanceName = nameof(Enums.SoftPartsFindingType.SynoviaFocal))]
        [RadioReportId("kne_m_080353", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsQuadricepsTendon))]
        [RadioReportId("kne_m_0803247", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPesAnserinus))]
        public bool IsArticularEffusion { get; set; }

        [RadioReportId("kne_m_0803235", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        [RadioReportId("kne_m_080315", InstanceName = nameof(Enums.SoftPartsFindingType.SynoviaFocal))]
        [RadioReportId("kne_m_0802225", InstanceName = nameof(Enums.SoftPartsFindingType.Musculature))]
        public SignalType T1w { get; set; }

        [RadioReportId("kne_m_0803237", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        [RadioReportId("kne_m_080316", InstanceName = nameof(Enums.SoftPartsFindingType.SynoviaFocal))]
        [RadioReportId("kne_m_0802227", InstanceName = nameof(Enums.SoftPartsFindingType.Musculature))]
        public SignalType T2w { get; set; }

        [RadioReportId("kne_m_080314", InstanceName = nameof(Enums.SoftPartsFindingType.SynoviaFocal))]
        [RadioReportId("kne_m_0803226", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        public SoftPartsDiagnosisType DifferentialDiagnosis { get; set; }

        #region 02 Synovia focal

        [RadioReportId("kne_m_080318", InstanceName = nameof(Enums.SoftPartsFindingType.SynoviaFocal))]
        public bool IsBloomingArtifact { get; set; }

        public SynoviaCMEnhancementType SynoviaCMEnhancementType { get; set; }

        public SynoviaShapeType SynoviaShapeType { get; set; }

        [RadioReportId("kne_m_080404", InstanceName = nameof(Enums.SoftPartsFindingType.SynoviaFocal))]
        public bool IsSynovialNodulusGreaterThan1Lesions { get; set; }

        [RadioReportId("kne_m_080407", InstanceName = nameof(Enums.SoftPartsFindingType.SynoviaFocal))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("kne_m_080408", InstanceName = nameof(Enums.SoftPartsFindingType.SynoviaFocal))]
        public bool IsLooseBody { get; set; }

        [RadioReportId("kne_m_080409", InstanceName = nameof(Enums.SoftPartsFindingType.SynoviaFocal))]
        public bool IsLooseBodyGreaterThan1Lesions { get; set; }

        [RadioReportId("kne_m_080514", InstanceName = nameof(Enums.SoftPartsFindingType.SynoviaFocal))]
        public bool IsHaemarthros { get; set; }

        [RadioReportId("kne_m_080410", InstanceName = nameof(Enums.SoftPartsFindingType.SynoviaFocal))]
        public bool IsBonyErosions { get; set; }

        #endregion

        #region 15 SoftTissueTumor
        #region 1 tab
        public DemarcationType DemarcationType { get; set; }

        [RadioReportId("kne_m_0804232-l", InstanceName = nameof(TissueTumorHomogeneityType), IsExportable = false)]
        public HomogeneityType TissueTumorHomogeneityType { get; set; }

        [RadioReportId("kne_m_0805209", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        public bool IsGrease { get; set; }

        [RadioReportId("kne_m_0805210", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        public bool IsCysts { get; set; }

        [RadioReportId("kne_m_0805211", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        public bool IsCalcification { get; set; }

        [RadioReportId("kne_m_0805212", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        public bool IsCapsule { get; set; }

        [RadioReportId("kne_m_0805215", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        public bool IsSignalVoids { get; set; }
        #endregion
        #region 2 tab
        [RadioReportId("kne_m_0802247", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        public bool IsSubcutaneous { get; set; }

        [RadioReportId("kne_m_0802253", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        public bool IsPressureCorrosionerosionBone { get; set; }

        [RadioReportId("kne_m_0804235", InstanceName = nameof(TissueTumorCMEnhancementType), IsExportable = false)]
        public CMEnchancementType TissueTumorCMEnhancementType { get; set; }

        [RadioReportId("kne_m_0804238-l", InstanceName = nameof(QuantitativeType), IsExportable = false)]
        public HomogeneityType QuantitativeType { get; set; }

        [RadioReportId("kne_m_0804242", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        public bool IsPeripheral { get; set; }
        #endregion
        #endregion
    }
}
