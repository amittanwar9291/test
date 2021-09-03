using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.HeadCT.Domain.Constants;
using RadioReport.HeadCT.Domain.Enums;
using RadioReport.HeadCT.Domain.Enums.BrainstemCranialNerves;

namespace RadioReport.HeadCT.Domain.Models
{
    public class BrainstemCranialNervesFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("hea_c_080107")]
        public BrainstemCranialNervesFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("hea_c_080110-l", InstanceName = InstanceNames.BrainstemCranialNerves, IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("hea_c_080256", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        [RadioReportId("hea_c_080204", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public BrainstemCranialNervesDiagnosisType DifferentialDiagnosis { get; set; }

        [RadioReportId("hea_c_080250", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        [RadioReportId("hea_c_080253", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsHistologyKnown { get; set; }

        [RadioReportId("hea_c_080250-l", InstanceName = InstanceNames.BrainstemCranialNerves, IsExportable = false)]
        public HistologyKnownType HistologyKnownType { get; set; }

        [RadioReportId("hea_c_080213")]
        public int? Size { get; set; }

        [RadioReportId("hea_c_080216")]
        public int? SecondPlane { get; set; }

        [RadioReportId("hea_c_080219")]
        public int? ThirdPlane { get; set; }

        [RadioReportId("hea_c_080320-l", InstanceName = InstanceNames.BrainstemCranialNerves, IsExportable = false)]
        public MarginType MarginType { get; set; }

        public DensityType DensityType { get; set; }

        [RadioReportId("hea_c_080358", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        [RadioReportId("hea_c_080367", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public int? Quantitative { get; set; }

        [RadioReportId("hea_c_080455-l", InstanceName = nameof(BrainstemCranialNervesFinding) + nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        [RadioReportId("hea_c_080521-l", InstanceName = nameof(BrainstemCranialNervesFinding) + nameof(ContrastEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType ContrastEnhancementHomogeneityType { get; set; }

        [RadioReportId("hea_c_080548-l", InstanceName = InstanceNames.BrainstemCranialNerves, IsExportable = false)]
        public ShapeType ShapeType { get; set; }

        [RadioReportId("hea_c_080222")]
        public bool IsSubstanceDefect { get; set; }

        [RadioReportId("hea_c_080223")]
        public bool IsHemorrhage { get; set; }

        [RadioReportId("hea_c_080224")]
        public bool IsNecrosis { get; set; }

        [RadioReportId("hea_c_080225")]
        public bool IsCalcification { get; set; }

        [RadioReportId("hea_c_080226")]
        public bool IsFat { get; set; }

        [RadioReportId("hea_c_080227")]
        public bool IsCysts { get; set; }

        [RadioReportId("hea_c_080228")]
        public bool IsCapsule { get; set; }

        [RadioReportId("hea_c_080229")]
        public bool IsSepta { get; set; }

        [RadioReportId("hea_c_080231")]
        public bool IsFluidLevel { get; set; }

        [RadioReportId("hea_c_080333")]
        public bool IsConfluent { get; set; }

        [RadioReportId("hea_c_080334")]
        public bool IsMassEffect { get; set; }

        [RadioReportId("hea_c_080335")]
        public bool IsInfiltration { get; set; }

        [RadioReportId("hea_c_080336")]
        public bool IsPerineuralTumorSpread { get; set; }

        [RadioReportId("hea_c_080431")]
        public bool IsHydrocephalus { get; set; }

        [RadioReportId("hea_c_080432")]
        public bool IsPerifocalEdema { get; set; }

        [RadioReportId("hea_c_080433")]
        public bool IsMidbrainAtrophy { get; set; }

        [RadioReportId("hea_c_080434")]
        public bool IsBrainstemAtrophy { get; set; }

        [RadioReportId("hea_c_080435")]
        public bool IsNerveThickening { get; set; }

        [RadioReportId("hea_c_080436")]
        public bool IsNerveCompression { get; set; }

        [RadioReportId("hea_c_080518-l", InstanceName = InstanceNames.BrainstemCranialNerves, IsExportable = false)]
        public ContrastEnhancementType ContrastEnhancementQuantitativeType { get; set; }

        [RadioReportId("hea_c_080524-l", InstanceName = InstanceNames.BrainstemCranialNerves, IsExportable = false)]
        public ContrastDistributionType ContrastDistributionType { get; set; }

        [RadioReportId("hea_c_080234")]
        public BrainstemCranialNervesDiagnosisType DifferentialDiagnosis1 { get; set; }

        [RadioReportId("hea_c_080235")]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("hea_c_080237")]
        public BrainstemCranialNervesDiagnosisType DifferentialDiagnosis2 { get; set; }

        [RadioReportId("hea_c_080238")]
        public bool IsSubordinate { get; set; }

        [RadioReportId("hea_c_080240")]
        public BrainstemCranialNervesDiagnosisType DifferentialDiagnosis3 { get; set; }

        [RadioReportId("hea_c_080241")]
        public bool IsMoreThan1Lesion { get; set; }

        #endregion

        #region Brainstem

        [RadioReportId("hea_c_080338", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsMesencephalon { get; set; }

        [RadioReportId("hea_c_080339", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsCrusCerebri { get; set; }

        [RadioReportId("hea_c_080341", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsCrusCerebriRight { get; set; }

        [RadioReportId("hea_c_080342", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsCrusCerebriLeft { get; set; }

        [RadioReportId("hea_c_080343", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsTegmentumMesencephali { get; set; }

        [RadioReportId("hea_c_080344", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsSubstantiaNigra { get; set; }

        [RadioReportId("hea_c_080345", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsNucleusRuber { get; set; }

        [RadioReportId("hea_c_080346", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsLaminaTecti { get; set; }

        [RadioReportId("hea_c_080437", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsPons { get; set; }

        [RadioReportId("hea_c_080438", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsPonsRight { get; set; }

        [RadioReportId("hea_c_080439", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsPonsLeft { get; set; }

        [RadioReportId("hea_c_080440", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsPonsCentral { get; set; }

        [RadioReportId("hea_c_080441", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsPonsPeripheral { get; set; }

        [RadioReportId("hea_c_080530", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsMedullaOblongata { get; set; }

        [RadioReportId("hea_c_080531", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsMedullaOblongataAnterior { get; set; }

        [RadioReportId("hea_c_080532", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsMedullaOblongataCentral { get; set; }

        [RadioReportId("hea_c_080533", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsMedullaOblongataPosterior { get; set; }

        [RadioReportId("hea_c_080458", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsAbscess { get; set; }

        [RadioReportId("hea_c_080460", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public int? MaxDiameter { get; set; }

        [RadioReportId("hea_c_080462", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsVentricularherniation { get; set; }

        [RadioReportId("hea_c_080463", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsLateralVentricleRight { get; set; }

        [RadioReportId("hea_c_080464", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsLateralVentricleLeft { get; set; }

        [RadioReportId("hea_c_080465", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool Is3rdVentricle{ get; set; }

        [RadioReportId("hea_c_080466", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool Is4thVentricle{ get; set; }

        #endregion

        #region CranialNerves

        public SideType SideType { get; set; }

        public CranialNerveType CranialNerveType { get; set; }

        [RadioReportId("hea_c_080534", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsRootEntryZone { get; set; }

        [RadioReportId("hea_c_080536", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsGeniculumOfTheFacialNerve { get; set; }

        [RadioReportId("hea_c_080537", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsMeatusAcusticusInternus { get; set; }

        [RadioReportId("hea_c_080538", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsFacialisCanal { get; set; }

        [RadioReportId("hea_c_080539", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsForamenStylomastoid { get; set; }

        [RadioReportId("hea_c_080540", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsVestibularNerve { get; set; }

        [RadioReportId("hea_c_080541", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsCochlearNerve { get; set; }

        [RadioReportId("hea_c_080542", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsSuperciliaryGanglion { get; set; }

        [RadioReportId("hea_c_080543", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsFossulaPetrosa { get; set; }

        [RadioReportId("hea_c_080544", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsGanglionInferius { get; set; }

        [RadioReportId("hea_c_080545", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsSulcusLateralisPosterior { get; set; }

        [RadioReportId("hea_c_080546", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsTrigonumNerviVagi { get; set; }

        [RadioReportId("hea_c_080547", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsCanalisHypoglossi { get; set; }

        #endregion


        public bool CheckCondition(string customConditionId) => customConditionId switch
        {
            nameof(BrainstemCranialNervesFindingType.Brainstem) => FindingType.ToString() == customConditionId,
            nameof(BrainstemCranialNervesFindingType.CranialNerves) => FindingType.ToString() == customConditionId,
            _ => false
        };
    }
}