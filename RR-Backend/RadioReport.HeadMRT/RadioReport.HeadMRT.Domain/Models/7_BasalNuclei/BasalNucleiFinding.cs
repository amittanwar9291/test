using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Enums.Pages.Localizers;
using RadioReport.HeadMRT.Domain.Constants;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.BasalNuclei;
using ShapeType = RadioReport.HeadMRT.Domain.Enums.BasalNuclei.ShapeType;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class BasalNucleiFinding : BasalNucleiFindingBase, IRadioReportIdConditionEvaluator
    {
        [RadioReportId("hea_m_070111-l", InstanceName = InstanceNames.BasalNuclei, IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        #region Pathology

        // Localization Tab
        [RadioReportId("hea_m_070243", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsHistologyKnown { get; set; }

        [RadioReportId("hea_m_070243-l", InstanceName = nameof(InstanceNames.BasalNuclei), IsExportable = false)]
        public HistologyKnownType KnownHistologyType { get; set; }

        [RadioReportId("hea_m_070330", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public BasalGangliaLocations BasalGangliaLocations { get; set; }

        // Characterization I Tab
        [RadioReportId("hea_m_070214", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public int? Size { get; set; }

        [RadioReportId("hea_m_070217", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public int? Size2ndPlane { get; set; }

        [RadioReportId("hea_m_070220", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public int? Size3rdPlane { get; set; }

        [RadioReportId("hea_m_070319-l", InstanceName = InstanceNames.BasalNuclei, IsExportable = false)]
        public ShapeType ShapeType { get; set; }

        public DominantFindingType DominantFindingType { get; set; }

        // Characterization II Tab

        [RadioReportId("hea_m_070223", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsParenchymalDefect { get; set; }

        [RadioReportId("hea_m_070224", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsHemorrhage { get; set; }

        [RadioReportId("hea_m_070225", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("hea_m_070226", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsCalcification { get; set; }

        [RadioReportId("hea_m_070227", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsFat { get; set; }

        [RadioReportId("hea_m_070228", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsCysts { get; set; }

        [RadioReportId("hea_m_070229", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsCapsule { get; set; }

        [RadioReportId("hea_m_070230", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsSepta { get; set; }

        [RadioReportId("hea_m_070232", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsFluidFluidLevel { get; set; }

        [RadioReportId("hea_m_070326", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsConfluent { get; set; }

        [RadioReportId("hea_m_070327", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsMassEffect { get; set; }

        [RadioReportId("hea_m_070328", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsInfiltration { get; set; }

        [RadioReportId("hea_m_070419", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsPerifocalEdema { get; set; }

        [RadioReportId("hea_m_070420", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsAbscess { get; set; }

        [RadioReportId("hea_m_070422", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public int? MaximumDiameter { get; set; }

        [RadioReportId("hea_m_070424", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsMidlineShift { get; set; }

        [RadioReportId("hea_m_070425-l", InstanceName = InstanceNames.BasalNuclei, IsExportable = false)]
        public SideType SideType { get; set; }

        [RadioReportId("hea_m_070429", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public int? ExtentOfMidlineShift { get; set; }

        [RadioReportId("hea_m_070431", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsInvolvementOfVentricles { get; set; }

        [RadioReportId("hea_m_070432", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsLateralVentricleRight { get; set; }

        [RadioReportId("hea_m_070433", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsLateralVentricleLeft { get; set; }

        [RadioReportId("hea_m_070434", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsThirdVentricle { get; set; }

        [RadioReportId("hea_m_070529-l", InstanceName = InstanceNames.BasalNuclei, IsExportable = false)]
        public ContrastDistributionType ContrastDistributionType { get; set;}

        // Differential Diagnosis Tab
        [RadioReportId("hea_m_070235", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public BasalNucleiDiagnosisType DifferentialDiagnosisType1 { get; set; }

        [RadioReportId("hea_m_070236", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("hea_m_070238", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public BasalNucleiDiagnosisType DifferentialDiagnosisType2 { get; set; }

        [RadioReportId("hea_m_070239", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsSubordinate { get; set; }

        [RadioReportId("hea_m_070241", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public BasalNucleiDiagnosisType DifferentialDiagnosisType3 { get; set; }

        [RadioReportId("hea_m_070242", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool Is1LesionOfTheSamePathology { get; set; }
        #endregion

        public bool CheckCondition(string customConditionId) => customConditionId switch
        {
            nameof(BasalNucleiFindingType.Pathology) => FindingType.ToString() == customConditionId,
            _ => false
        };
    }
}
 