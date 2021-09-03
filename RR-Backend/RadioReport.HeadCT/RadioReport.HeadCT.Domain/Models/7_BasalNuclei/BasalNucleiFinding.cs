using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages.Localizers;
using RadioReport.HeadCT.Domain.Constants;
using RadioReport.HeadCT.Domain.Enums;
using RadioReport.HeadCT.Domain.Enums.BasalNuclei;

namespace RadioReport.HeadCT.Domain.Models
{
    public class BasalNucleiFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("hea_c_070106")]
        public BasalNucleiFindingType FindingType { get; set; }

        [RadioReportId("hea_c_070111-l", InstanceName = InstanceNames.BasalNuclei, IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        #region Pathology

        [RadioReportId("hea_c_070204", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public BasalNucleiDiagnosisType DifferentialDiagnosisLocalizationType { get; set; }

        [RadioReportId("hea_c_070243", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsHistologyKnown { get; set; }

        [RadioReportId("hea_c_070243-l", InstanceName = nameof(InstanceNames.BasalNuclei), IsExportable = false)]
        public HistologyKnownType HistologyKnownType { get; set; }

        [RadioReportId("hea_c_070330", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public BasalGangliaLocations BasalGangliaLocations { get; set; }

        public DistributionType DistributionType { get; set; }

        [RadioReportId("hea_c_070214", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public int? Size { get; set; }

        [RadioReportId("hea_c_070217", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public int? Size2ndPlane { get; set; }

        [RadioReportId("hea_c_070220", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public int? Size3rdPlane { get; set; }

        [RadioReportId("hea_c_070313-l", InstanceName = InstanceNames.BasalNuclei, IsExportable = false)]
        public MarginType MarginType { get; set; }

        [RadioReportId("hea_c_070316-l", InstanceName = nameof(BasalNucleiFinding) + nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        [RadioReportId("hea_c_070319-l", InstanceName = InstanceNames.BasalNuclei, IsExportable = false)]
        public ShapeType ShapeType { get; set; }

        [RadioReportId("hea_c_070435-l", InstanceName = InstanceNames.BasalNuclei, IsExportable = false)]
        public DensityType DensityType { get; set; }

        [RadioReportId("hea_c_070443", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public int? Quantitative { get; set; }

        [RadioReportId("hea_c_070548", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsSubstanceDefect { get; set; }

        [RadioReportId("hea_c_070549", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsHemorrhage { get; set; }

        [RadioReportId("hea_c_070550", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("hea_c_070551", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsCalcification { get; set; }

        [RadioReportId("hea_c_070552", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsFat { get; set; }

        [RadioReportId("hea_c_070553", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsCysts { get; set; }

        [RadioReportId("hea_c_070554", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsCapsule { get; set; }

        [RadioReportId("hea_c_070555", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsSepta { get; set; }

        [RadioReportId("hea_c_070556", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsFluidLevel { get; set; }

        [RadioReportId("hea_c_070247", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsConfluent { get; set; }

        [RadioReportId("hea_c_070248", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsMassEffect { get; set; }

        [RadioReportId("hea_c_070249", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsInfiltration { get; set; }

        [RadioReportId("hea_c_070250", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsAtrophy { get; set; }

        [RadioReportId("hea_c_070335", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsPerifocalEdema { get; set; }

        [RadioReportId("hea_c_070336", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsAbscess { get; set; }

        [RadioReportId("hea_c_070339", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public int? MaximumDiameter { get; set; }

        [RadioReportId("hea_c_070340", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsMidlineShift { get; set; }

        [RadioReportId("hea_c_070340-l", InstanceName = InstanceNames.BasalNuclei, IsExportable = false)]
        public MidlineShiftSideType MidlineShiftSideType { get; set; }

        [RadioReportId("hea_c_070346", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public int? ExtentOfMidlineShift { get; set; }

        [RadioReportId("hea_c_070431", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsInvolvementOfVentricles { get; set; }

        [RadioReportId("hea_c_070432", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsLateralVentricleRight { get; set; }

        [RadioReportId("hea_c_070433", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsLateralVentricleLeft { get; set; }

        [RadioReportId("hea_c_070434", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsThirdVentricle { get; set; }

        [RadioReportId("hea_c_070444", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsFourthVentricle { get; set; }

        [RadioReportId("hea_c_070536-l", InstanceName = InstanceNames.BasalNuclei, IsExportable = false)]
        public ContrastEnhancementType ContrastEnhancementType { get; set; }

        [RadioReportId("hea_c_070539-l", InstanceName = nameof(BasalNucleiFinding) + nameof(ContrastEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType ContrastEnhancementHomogeneityType { get; set; }

        [RadioReportId("hea_c_070542-l", InstanceName = InstanceNames.BasalNuclei, IsExportable = false)]
        public ContrastDistributionType ContrastDistributionType { get; set; }

        [RadioReportId("hea_c_070235", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public BasalNucleiDiagnosisType DifferentialDiagnosisType1 { get; set; }

        [RadioReportId("hea_c_070236", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("hea_c_070238", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public BasalNucleiDiagnosisType DifferentialDiagnosisType2 { get; set; }

        [RadioReportId("hea_c_070239", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsSubordinate { get; set; }

        [RadioReportId("hea_c_070241", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public BasalNucleiDiagnosisType DifferentialDiagnosisType3 { get; set; }

        [RadioReportId("hea_c_070242", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool Is1LesionOfTheSamePathology { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) => customConditionId switch
        {
            nameof(BasalNucleiFindingType.Pathology) => FindingType.ToString() == customConditionId,
            _ => false
        };
    }
}
 