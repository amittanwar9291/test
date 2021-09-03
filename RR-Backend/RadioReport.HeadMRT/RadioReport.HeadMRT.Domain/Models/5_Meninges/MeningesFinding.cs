using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HeadMRT.Domain.Constants;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.Meninges;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class MeningesFinding : MeningesFindingBase, IRadioReportIdConditionEvaluator
    {
        #region Common
        [RadioReportId("hea_m_050111-l", InstanceName = InstanceNames.Meninges, IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("hea_m_050209", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050246", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_m_050274", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_m_050290", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsRight { get; set; }

        [RadioReportId("hea_m_050210", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050247", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_m_050275", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_m_050291", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsLeft { get; set; }

        [RadioReportId("hea_m_050211", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050248", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_m_050276", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_m_050292", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsMedian { get; set; }

        [RadioReportId("hea_m_050303", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050250", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_m_050278", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_m_050294", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsFrontal { get; set; }

        [RadioReportId("hea_m_050304", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050251", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_m_050279", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_m_050295", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsTemporal { get; set; }

        [RadioReportId("hea_m_050305", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050252", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_m_050280", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_m_050296", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsParietal { get; set; }

        [RadioReportId("hea_m_050306", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050253", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_m_050281", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_m_050297", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsOccipital { get; set; }

        [RadioReportId("hea_m_050307", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050254", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_m_050282", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_m_050298", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsInfratentorial { get; set; }

        [RadioReportId("hea_m_050403", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050328", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsFalx { get; set; }

        [RadioReportId("hea_m_050404", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050329", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsTentorium { get; set; }

        [RadioReportId("hea_m_050405", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050330", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsLaminaCribrosa { get; set; }

        [RadioReportId("hea_m_050406", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050331", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsOpticNerveSheath { get; set; }

        [RadioReportId("hea_m_050407", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050332", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsIntrasellar { get; set; }

        [RadioReportId("hea_m_050408", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050333", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsPosteriorClinoidProcess { get; set; }

        [RadioReportId("hea_m_050409", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050334", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsSphenoidWing { get; set; }

        [RadioReportId("hea_m_050410", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050335", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsCerebellopontineAngle { get; set; }

        [RadioReportId("hea_m_050411", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050336", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsSulcusSigmoideus { get; set; }

        [RadioReportId("hea_m_050412", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050337", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsTrigoneOfTheLateralVentricle { get; set; }

        [RadioReportId("hea_m_050413", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050338", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsInsularCistern { get; set; }

        [RadioReportId("hea_m_050414", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050339", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsForamenMagnum { get; set; }

        [RadioReportId("hea_m_050214", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050376", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public int? Size { get; set; }

        [RadioReportId("hea_m_050217", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050354", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_m_050379", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public int? SecondPlane { get; set; }

        [RadioReportId("hea_m_050220", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050382", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public int? ThirdPlane { get; set; }

        [RadioReportId("hea_m_0505209", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050341", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_m_050525", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsDiffusionRestriction { get; set; }

        [RadioReportId("hea_m_0502208", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_0504211", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsCapsule { get; set; }

        [RadioReportId("hea_m_0502212", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050343", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsSignalVoids { get; set; }

        [RadioReportId("hea_m_050237", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050268", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsSuspicionOf { get; set; }

        #endregion

        #region Mass

        [RadioReportId("hea_m_050205", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsHistologyKnown { get; set; }

        [RadioReportId("hea_m_050205-l", InstanceName = nameof(InstanceNames.Meninges), IsExportable = false)]
        public HistologyKnownType HistologyKnownType { get; set; }

        [RadioReportId("hea_m_0505205", InstanceName = nameof(MeningesFindingType.Mass))]
        public SignalType DwiSignal { get; set; }

        [RadioReportId("hea_m_0505207", InstanceName = nameof(MeningesFindingType.Mass))]
        public SignalType AdcSignal { get; set; }

        [RadioReportId("hea_m_0502201", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsFat { get; set; }

        public FatType FatType { get; set; }

        public CystType CystType { get; set; }

        [RadioReportId("hea_m_0502207", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsHemorrhageHemosiderin { get; set; }

        [RadioReportId("hea_m_0502209", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsSepta { get; set; }

        [RadioReportId("hea_m_0502211", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsCalcification { get; set; }

        public GrowthPatternType GrowthPatternType { get; set; }

        [RadioReportId("hea_m_0503203", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsIntrameatalGrowth { get; set; }

        [RadioReportId("hea_m_0503204", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsIntraforaminalFissuralGrowth { get; set; }

        [RadioReportId("hea_m_0503208", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsLocalVenousStasis { get; set; }

        [RadioReportId("hea_m_0503209", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsBoneInfiltration { get; set; }

        [RadioReportId("hea_m_050236", InstanceName = nameof(MeningesFindingType.Mass))]
        public MeningesMassDiagnosisType MassDifferentialDiagnosis1 { get; set; }

        [RadioReportId("hea_m_050239", InstanceName = nameof(MeningesFindingType.Mass))]
        public MeningesMassDiagnosisType MassDifferentialDiagnosis2 { get; set; }

        [RadioReportId("hea_m_050240", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsSubordinate { get; set; }

        [RadioReportId("hea_m_050242", InstanceName = nameof(MeningesFindingType.Mass))]
        public MeningesMassDiagnosisType MassDifferentialDiagnosis3 { get; set; }

        [RadioReportId("hea_m_050243", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsLesionOfTheSameEntity { get; set; }

        #endregion

        #region DiffuseChanges

        [RadioReportId("hea_m_050256", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsThickening { get; set; }

        [RadioReportId("hea_m_050258", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public int? MeningesWidth { get; set; }
        
        [RadioReportId("hea_m_050262", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public SignalType T1WSignalDiffuse { get; set; }

        [RadioReportId("hea_m_050265", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public SignalType T2WSignalDiffuse { get; set; }

        [RadioReportId("hea_m_0504207", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsAbscess { get; set; }

        [RadioReportId("hea_m_0504209", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public int? MaxExtension { get; set; }

        [RadioReportId("hea_m_0504212", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsEmpyema { get; set; }

        [RadioReportId("hea_m_0504213", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsHydrocephalus { get; set; }

        [RadioReportId("hea_m_0505217", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsPachymeninges { get; set; }

        [RadioReportId("hea_m_0505218", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsLeptomeninges { get; set; }

        [RadioReportId("hea_m_050267", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public MeningesDiffuseDiagnosisType DiffuseDifferentialDiagnosis1 { get; set; }

        [RadioReportId("hea_m_050270", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public MeningesDiffuseDiagnosisType DiffuseDifferentialDiagnosis2 { get; set; }

        #endregion

        #region SubduralHematoma

        [RadioReportId("hea_m_050346", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsSickleShaped { get; set; }

        [RadioReportId("hea_m_050347", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsCrossingSutures { get; set; }

        [RadioReportId("hea_m_050348", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsMajorAttachmentNotExceeded { get; set; }

        [RadioReportId("hea_m_050351", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public int? MaxWidth { get; set; }

        [RadioReportId("hea_m_050356", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsAlongFalx { get; set; }

        [RadioReportId("hea_m_050357", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsAlongTentorium { get; set; }

        [RadioReportId("hea_m_050284", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsSeptations { get; set; }

        [RadioReportId("hea_m_050285", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsContrastEnhancementMembrane { get; set; }

        [RadioReportId("hea_m_050287", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsFluid { get; set; }

        [RadioReportId("hea_m_050288", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsFluidLevel { get; set; }

        [RadioReportId("hea_m_050359", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsBridgeVeinDisplacementInward { get; set; }

        [RadioReportId("hea_m_050360", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsDuralThickening { get; set; }

        [RadioReportId("hea_m_050361", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsContrastEnhancement { get; set; }

        [RadioReportId("hea_m_050362", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsMidlineShift { get; set; }

        public SideType SideType { get; set; }

        [RadioReportId("hea_m_050367", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public int? MidlineDeviation { get; set; }

        [RadioReportId("hea_m_050369", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsHerniation { get; set; }

        [RadioReportId("hea_m_050371", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public RegionType RegionType { get; set; }

        public CharacterizationHematomaType CharacterizationHematomaType { get; set; }

        [RadioReportId("hea_m_050464", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsSubduralHygroma { get; set; }

        #endregion

        #region EpiduralHematoma

        [RadioReportId("hea_m_050386", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsDuraleAttachmentExceeded { get; set; }

        [RadioReportId("hea_m_050384", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsSuturesNotExceeded { get; set; }

        [RadioReportId("hea_m_050385", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsDisplacedDuraBetweenEdhAndBrain { get; set; }

        [RadioReportId("hea_m_050466", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsBiconvex { get; set; }

        [RadioReportId("hea_m_050468", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsSkullFracture { get; set; }

        [RadioReportId("hea_m_050469", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsContrecoupSdh { get; set; }

        [RadioReportId("hea_m_050470", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsAdjacentContusion { get; set; }

        [RadioReportId("hea_m_050471", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsConcomitantCerebrospinalFluidCongestion { get; set; }

        [RadioReportId("hea_m_050472", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsAssociatedInfarction { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) => customConditionId switch
        {
            nameof(MeningesFindingType.Mass) => FindingType.ToString() == customConditionId,
            nameof(MeningesFindingType.DiffuseChanges) => FindingType.ToString() == customConditionId,
            nameof(MeningesFindingType.SubduralHematoma) => FindingType.ToString() == customConditionId,
            _ => false
        };
    }
}
