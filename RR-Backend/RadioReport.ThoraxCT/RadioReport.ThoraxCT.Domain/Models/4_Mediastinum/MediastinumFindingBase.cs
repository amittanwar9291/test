using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.ThoraxCT.Domain.Enums;

namespace RadioReport.ThoraxCT.Domain.Models
{
    public class MediastinumFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("tho_c_040106")]
        public MediastinumFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("tho_c_040310", InstanceName = nameof(MediastinumFindingType.LymphNodes), CustomConditionName = nameof(LymphNodesType.MultiplePathologicallyEnlargedLymphNodes))]
        [RadioReportId("tho_c_040509", InstanceName = nameof(MediastinumFindingType.LymphNodes), CustomConditionName = nameof(LymphNodesType.LocalizationAccToIASCL))]
        [RadioReportId("tho_c_040221", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        [RadioReportId("tho_c_040348", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        [RadioReportId("tho_c_040527", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsCalcification { get; set; }

        public MediastinumCalcificationType CalcificationType { get; set; }

        [RadioReportId("tho_c_040259", InstanceName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_c_040305", InstanceName = nameof(MediastinumFindingType.Mediastinum))]
        public bool IsUpperMediastinum { get; set; }

        [RadioReportId("tho_c_040260", InstanceName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_c_040306", InstanceName = nameof(MediastinumFindingType.Mediastinum))]
        public bool IsLowerMediastinum { get; set; }

        #endregion

        #region Mass

        [RadioReportId("tho_c_040262", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsAnteriorMediastinum { get; set; }

        [RadioReportId("tho_c_040263", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsMiddleMediastinum { get; set; }

        [RadioReportId("tho_c_040264", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsPosteriorMediastinum { get; set; }

        [RadioReportId("tho_c_0403110", InstanceName = nameof(MediastinumFindingType.Mass))]
        public MediastinumDiagnosisType MainCharacteristicsDifferentialDiagnosis01 { get; set; }

        public MediastinumLimitationType LimitationType { get; set; }

        [RadioReportId("tho_c_040352", InstanceName = nameof(MediastinumFinding) + nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        public DensityType DensityType { get; set; }

        [RadioReportId("tho_c_040525", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsFat { get; set; }

        [RadioReportId("tho_c_040526", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsCysts { get; set; }

        [RadioReportId("tho_c_040519", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsCapsule { get; set; }

        [RadioReportId("tho_c_040520", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsFibrousSepta { get; set; }

        [RadioReportId("tho_c_040521", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsLiquidFatMirror { get; set; }

        [RadioReportId("tho_c_040522", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsToothBoneSystem { get; set; }

        [RadioReportId("tho_c_040523", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsNecroses { get; set; }

        public MediastinumGrowthPatternsType GrowthPatternsType { get; set; }

        public ContrastEnhancementType ContrastEnhancementType { get; set; }

        [RadioReportId("tho_c_040449-l", InstanceName = nameof(NoCMEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType NoCMEnhancementHomogeneityType { get; set; }

        #endregion
    }
}