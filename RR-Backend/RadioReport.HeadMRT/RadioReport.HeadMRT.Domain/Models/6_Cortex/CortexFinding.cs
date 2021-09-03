using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Enums.Pages.Localizers;
using RadioReport.HeadMRT.Domain.Constants;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.Cortex;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class CortexFinding : CortexFindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        #region COMMON

        [RadioReportId("hea_m_060110-l", InstanceName = InstanceNames.Cortex, IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("hea_m_060205")]
        public bool IsHistologyKnown { get; set; }

        [RadioReportId("hea_m_060205-l", InstanceName = nameof(InstanceNames.Cortex), IsExportable = false)]
        public HistologyKnownType HistologyKnownType { get; set; }

        [RadioReportId("hea_m_060251", CustomConditionName = nameof(DescriptionType.IKnow))]
        public ClassificationFazekasType LocalizationFazekasScale { get; set; }

        [RadioReportId("hea_m_0603201")]
        public CortexLocations CortexLocations { get; set; }

        [RadioReportId("hea_m_0604202")]
        public bool IsPraecuneus { get; set; }

        [RadioReportId("hea_m_0604204")]
        public bool IsCuneus { get; set; }

        [RadioReportId("hea_m_0604205")]
        public bool IsLingualGyrus { get; set; }

        [RadioReportId("hea_m_0604207")]
        public bool IsGyrusTemporalisTransversus { get; set; }

        [RadioReportId("hea_m_0604208")]
        public bool IsLateralOccipitotemporalGyrus { get; set; }

        [RadioReportId("hea_m_0604210")]
        public bool IsParsIntermedia { get; set; }

        [RadioReportId("hea_m_0604211")]
        public bool IsSuperiorCerebellarPeduncle { get; set; }

        [RadioReportId("hea_m_0604212")]
        public bool IsMiddleCerebellarPeduncle { get; set; }

        [RadioReportId("hea_m_0604213")]
        public bool IsInferiorCerebellarPeduncle { get; set; }

        [RadioReportId("hea_m_0605201")]
        public bool IsCortex { get; set; }

        [RadioReportId("hea_m_0605202")]
        public bool IsWhiteMatter { get; set; }

        [RadioReportId("hea_m_0605203")]
        public LocalizationType LocalizationType { get; set; }

        public DetailsType DetailsType { get; set; }

        public ShapeType ShapeType { get; set; }

        [RadioReportId("hea_m_060235", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060548", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsCalcification { get; set; }

        [RadioReportId("hea_m_060243", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060555", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsConfluent { get; set; }

        [RadioReportId("hea_m_060245", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060557", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsInfiltration { get; set; }

        [RadioReportId("hea_m_060329", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060275", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsDescentOfTheCerebellarTonsils { get; set; }

        [RadioReportId("hea_m_060330", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060276", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsHydrocephalus { get; set; }

        [RadioReportId("hea_m_060331", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060277", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsMidlineShift { get; set; }

        [RadioReportId("hea_m_060333", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060279", InstanceName = nameof(CortexFindingType.Diffuse))]
        public SideType SideType { get; set; }

        [RadioReportId("hea_m_060335", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060281", InstanceName = nameof(CortexFindingType.Diffuse))]
        public int? MidlineShift { get; set; }

        [RadioReportId("hea_m_060337", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060283", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsHerniation { get; set; }

        [RadioReportId("hea_m_060339", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060285", InstanceName = nameof(CortexFindingType.Diffuse))]
        public RegionType RegionType { get; set; }

        [RadioReportId("hea_m_060427", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060365", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsCorticalThinning { get; set; }

        public CorticalThinningType CorticalThinningType { get; set; }

        [RadioReportId("hea_m_060430", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060368", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsMesiotemporalSclerosis { get; set; }

        [RadioReportId("hea_m_060431", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060369", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsCorticalTuber { get; set; }

        [RadioReportId("hea_m_060432", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060370", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsSubependymalNodules { get; set; }

        [RadioReportId("hea_m_060433", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060371", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsCalcified { get; set; }

        [RadioReportId("hea_m_060434", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060372", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsAbscess { get; set; }

        [RadioReportId("hea_m_060436", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060374", InstanceName = nameof(CortexFindingType.Diffuse))]
        public int? MaxDiameter { get; set; }

        [RadioReportId("hea_m_0604214", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_0604218", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsVentricularHerniation { get; set; }

        [RadioReportId("hea_m_0604215", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_0604219", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsLateralVentricleRight { get; set; }

        [RadioReportId("hea_m_0604216", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_0604220", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsLateralVentricleLeft { get; set; }

        [RadioReportId("hea_m_0604217", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_0604221", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool Is3RdVentricle { get; set; }

        [RadioReportId("hea_m_060248", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060286", InstanceName = nameof(CortexFindingType.Diffuse))]
        public CortexDifferentialDiagnosisType DifferentialDiagnosisType1 { get; set; }

        [RadioReportId("hea_m_060249")]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("hea_m_060251", CustomConditionName = nameof(DescriptionType.IDescribe))]
        public ClassificationFazekasType ClassificationFazekas1 { get; set; }

        [RadioReportId("hea_m_060341", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060377", InstanceName = nameof(CortexFindingType.Diffuse))]
        public CortexDifferentialDiagnosisType DifferentialDiagnosisType2 { get; set; }

        [RadioReportId("hea_m_060342")]
        public bool IsSubordinate { get; set; }

        [RadioReportId("hea_m_060344")]
        public ClassificationFazekasType ClassificationFazekas2 { get; set; }

        [RadioReportId("hea_m_060439", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060473", InstanceName = nameof(CortexFindingType.Diffuse))]
        public CortexDifferentialDiagnosisType DifferentialDiagnosisType3 { get; set; }

        [RadioReportId("hea_m_060441")]
        public ClassificationFazekasType ClassificationFazekas3 { get; set; }

        [RadioReportId("hea_m_060530")]
        public bool IsRight { get; set; }

        [RadioReportId("hea_m_060531")]
        public bool IsLeft { get; set; }

        [RadioReportId("hea_m_060533")]
        public bool IsFrontal { get; set; }

        [RadioReportId("hea_m_060534")]
        public bool IsTemporal { get; set; }

        [RadioReportId("hea_m_060535")]
        public bool IsParietal { get; set; }

        [RadioReportId("hea_m_060536")]
        public bool IsOccipital { get; set; }

        [RadioReportId("hea_m_060537")]
        public bool IsInfratentorial { get; set; }

        #endregion

        #region FOCAL

        [RadioReportId("hea_m_060253", InstanceName = nameof(CortexFindingType.Focal), CustomConditionName = nameof(DescriptionType.IKnow))]
        public ClassificationWHOType LocalizationWHOClassification { get; set; }

        [RadioReportId("hea_m_060218", InstanceName = nameof(CortexFindingType.Focal))]
        public int? Size { get; set; }

        [RadioReportId("hea_m_060221", InstanceName = nameof(CortexFindingType.Focal))]
        public int? Size2ndPlane { get; set; }

        [RadioReportId("hea_m_060224", InstanceName = nameof(CortexFindingType.Focal))]
        public int? Size3rdPlane { get; set; }

        [RadioReportId("hea_m_060232", InstanceName = nameof(CortexFindingType.Focal))]
        public bool IsSubstanceDefect { get; set; }

        [RadioReportId("hea_m_060236", InstanceName = nameof(CortexFindingType.Focal))]
        public bool IsFat { get; set; }

        [RadioReportId("hea_m_060238", InstanceName = nameof(CortexFindingType.Focal))]
        public bool IsCapsule { get; set; }

        [RadioReportId("hea_m_060239", InstanceName = nameof(CortexFindingType.Focal))]
        public bool IsSepta { get; set; }

        [RadioReportId("hea_m_060253", InstanceName = nameof(CortexFindingType.Focal), CustomConditionName = nameof(DescriptionType.IDescribe))]
        public ClassificationWHOType ClassificationWHO1 { get; set; }

        [RadioReportId("hea_m_060346", InstanceName = nameof(CortexFindingType.Focal))]
        public ClassificationWHOType ClassificationWHO2 { get; set; }

        [RadioReportId("hea_m_060443", InstanceName = nameof(CortexFindingType.Focal))]
        public ClassificationWHOType ClassificationWHO3 { get; set; }
        
        #endregion

        #region DIFFUSE
        
        [RadioReportId("hea_m_060288", InstanceName = nameof(CortexFindingType.Diffuse), CustomConditionName = nameof(DescriptionType.IKnow))]
        public ClassificationAdamsType LocalizationModifiedClassificationAdams { get; set; }

        [RadioReportId("hea_m_060552", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsMicroBleeding { get; set; }

        [RadioReportId("hea_m_060553", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsHemorrhagicLacunae { get; set; }

        [RadioReportId("hea_m_060376", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsAtrophy { get; set; }

        [RadioReportId("hea_m_060288", InstanceName = nameof(CortexFindingType.Diffuse), CustomConditionName = nameof(DescriptionType.IDescribe))]
        public ClassificationAdamsType ClassificationAdams1 { get; set; }

        [RadioReportId("hea_m_060379", InstanceName = nameof(CortexFindingType.Diffuse))]
        public ClassificationAdamsType ClassificationAdams2 { get; set; }

        [RadioReportId("hea_m_060475", InstanceName = nameof(CortexFindingType.Diffuse))]
        public ClassificationAdamsType ClassificationAdams3 { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) => customConditionId switch
        {
            nameof(DescriptionType.IDescribe) => DescriptionType.ToString() == customConditionId,
            nameof(DescriptionType.IKnow) => DescriptionType.ToString() == customConditionId,
            nameof(CortexFindingType.Focal) => FindingType.ToString() == customConditionId,
            nameof(CortexFindingType.Diffuse) => FindingType.ToString() == customConditionId,
            _ => false
        };
    }
}
