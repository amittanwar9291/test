using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.ThoraxCT.Domain.Enums;
using LocalizationAxialType = RadioReport.ThoraxCT.Domain.Enums.SoftParts.LocalizationAxialType;

namespace RadioReport.ThoraxCT.Domain.Models
{
    public class SoftPartsFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("tho_c_070106")]
        public SoftPartsFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("tho_c_070310", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
        [RadioReportId("tho_c_0703133", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_c_070562", InstanceName = nameof(SoftPartsFindingType.Mamma))]
        public SoftPartsDiagnosisType DifferentialDiagnosis { get; set; }

        [RadioReportId("tho_c_070504-l", InstanceName = nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        [RadioReportId("tho_c_070224", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
        [RadioReportId("tho_c_070533", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        public bool IsFat { get; set; }

        [RadioReportId("tho_c_070225", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
        [RadioReportId("tho_c_0704110", InstanceName = nameof(SoftPartsFindingType.PleuralThickening))]
        [RadioReportId("tho_c_070535", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_c_070560", InstanceName = nameof(SoftPartsFindingType.Mamma))]
        public bool IsCalcification { get; set; }

        public SoftPartsCalcificationType CalcificationType { get; set; }

        public ContrastEnhancementQuantitativeType ContrastEnhancementQuantitativeType { get; set; }

        public MarginType MarginType { get; set; }

        [RadioReportId("tho_c_0704100-l", InstanceName = nameof(CMEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType CMEnhancementHomogeneityType { get; set; }

        #endregion

        #region PleuralMass

        public DisplacementOfFatTissueType DisplacementOfFatTissueType { get; set; }

        [RadioReportId("tho_c_070228", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("tho_c_070229", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
        public bool IsHemorrhage { get; set; }

        [RadioReportId("tho_c_070230", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
        public bool IsCysticChanges { get; set; }

        [RadioReportId("tho_c_070317", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
        public bool IsExtrapleuralFatSign { get; set; }

        [RadioReportId("tho_c_0703125", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
        public bool IsInfiltrationChestWall { get; set; }

        [RadioReportId("tho_c_070321", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
        public bool IsInfiltrationOfExtrapleuralFatTissue { get; set; }

        #endregion

        #region ChestWallSoftTissue

        [RadioReportId("tho_c_070277", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        public LocalizationAxialType LocalizationAxialType { get; set; }

        public DensityType DensityType { get; set; }

        [RadioReportId("tho_c_070534", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        public bool IsCysts { get; set; }

        [RadioReportId("tho_c_070541", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        public bool IsCapsule { get; set; }

        [RadioReportId("tho_c_070542", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        public bool IsSepta { get; set; }

        public SoftPartsGrowthPatternsType GrowthPatternsType { get; set; }

        public HeterogeneousType HeterogeneousType { get; set; }

        #endregion
    }
}