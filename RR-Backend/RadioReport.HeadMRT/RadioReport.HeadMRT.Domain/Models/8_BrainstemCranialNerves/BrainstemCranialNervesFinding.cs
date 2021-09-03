using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HeadMRT.Domain.Constants;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.BrainstemCranialNerves;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class BrainstemCranialNervesFinding : BrainstemCranialNervesFindingBase, IRadioReportIdConditionEvaluator
    {
        #region Common

        [RadioReportId("hea_m_080110-l", InstanceName = InstanceNames.BrainstemCranialNerves, IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("hea_m_080250", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        [RadioReportId("hea_m_080253", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsHistologyKnown { get; set; }

        [RadioReportId("hea_m_080250-l", InstanceName = nameof(InstanceNames.BrainstemCranialNerves), IsExportable = false)]
        public HistologyKnownType HistologyKnownType { get; set; }

        [RadioReportId("hea_m_080213")]
        public int? Size { get; set; }

        [RadioReportId("hea_m_080216")]
        public int? SecondPlane { get; set; }

        [RadioReportId("hea_m_080219")]
        public int? ThirdPlane { get; set; }

        [RadioReportId("hea_m_080320-l", InstanceName = InstanceNames.BrainstemCranialNerves, IsExportable = false)]
        public MarginType MarginType { get; set; }

        [RadioReportId("hea_m_080323-l", InstanceName = nameof(BrainstemCranialNervesFinding) + nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        [RadioReportId("hea_m_080326-l", InstanceName = InstanceNames.BrainstemCranialNerves, IsExportable = false)]
        public ShapeType ShapeType { get; set; }

        [RadioReportId("hea_m_080515")]
        public SignalType AdcSignalType { get; set; }

        [RadioReportId("hea_m_080517")]
        public bool IsDiffusionRestriction { get; set; }

        [RadioReportId("hea_m_080222")]
        public bool IsSubstanceDefect { get; set; }

        [RadioReportId("hea_m_080223")]
        public bool IsHemorrhage { get; set; }

        [RadioReportId("hea_m_080224")]
        public bool IsNecrosis { get; set; }

        [RadioReportId("hea_m_080225")]
        public bool IsCalcification { get; set; }

        [RadioReportId("hea_m_080226")]
        public bool IsFat { get; set; }

        [RadioReportId("hea_m_080228")]
        public bool IsCapsule { get; set; }

        [RadioReportId("hea_m_080229")]
        public bool IsSepta { get; set; }

        [RadioReportId("hea_m_080230")]
        public bool IsSignalVoids { get; set; }

        [RadioReportId("hea_m_080231")]
        public bool IsFluidLevel { get; set; }

        [RadioReportId("hea_m_080333")]
        public bool IsConfluent { get; set; }

        [RadioReportId("hea_m_080334")]
        public bool IsMassEffect { get; set; }

        [RadioReportId("hea_m_080335")]
        public bool IsInfiltration { get; set; }

        [RadioReportId("hea_m_080336")]
        public bool IsPerineuralTumorSpread { get; set; }

        [RadioReportId("hea_m_080431")]
        public bool IsHydrocephalus { get; set; }

        [RadioReportId("hea_m_080432")]
        public bool IsPerifocalEdema { get; set; }

        [RadioReportId("hea_m_080433")]
        public bool IsMidbrainAtrophy { get; set; }

        [RadioReportId("hea_m_080434")]
        public bool IsBrainstemAtrophy { get; set; }

        [RadioReportId("hea_m_080435")]
        public bool IsNerveThickening { get; set; }

        [RadioReportId("hea_m_080436")]
        public bool IsNerveCompression { get; set; }

        [RadioReportId("hea_m_080234")]
        public BrainstemCranialNervesDiagnosisType DifferentialDiagnosis1 { get; set; }

        [RadioReportId("hea_m_080235")]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("hea_m_080237")]
        public BrainstemCranialNervesDiagnosisType DifferentialDiagnosis2 { get; set; }

        [RadioReportId("hea_m_080238")]
        public bool IsSubordinate { get; set; }

        [RadioReportId("hea_m_080240")]
        public BrainstemCranialNervesDiagnosisType DifferentialDiagnosis3 { get; set; }

        [RadioReportId("hea_m_080241")]
        public bool IsMoreThan1Lesion { get; set; }

        #endregion

        #region Brainstem

        [RadioReportId("hea_m_080338", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsMesencephalon { get; set; }

        [RadioReportId("hea_m_080339", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsCrusCerebri { get; set; }

        [RadioReportId("hea_m_080341", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsCrusCerebriRight { get; set; }

        [RadioReportId("hea_m_080342", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsCrusCerebriLeft { get; set; }

        [RadioReportId("hea_m_080343", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsTegmentumMesencephali { get; set; }

        [RadioReportId("hea_m_080344", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsSubstantiaNigra { get; set; }

        [RadioReportId("hea_m_080345", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsNucleusRuber { get; set; }

        [RadioReportId("hea_m_080346", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsLaminaTecti { get; set; }

        [RadioReportId("hea_m_080438", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsPonsRight { get; set; }

        [RadioReportId("hea_m_080439", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsPonsLeft { get; set; }

        [RadioReportId("hea_m_080440", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsPonsCentral { get; set; }

        [RadioReportId("hea_m_080441", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsPonsPeripheral { get; set; }

        [RadioReportId("hea_m_080530", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsMedullaOblongata { get; set; }

        [RadioReportId("hea_m_080531", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsMedullaOblongataAnterior { get; set; }

        [RadioReportId("hea_m_080532", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsMedullaOblongataCentral { get; set; }

        [RadioReportId("hea_m_080533", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsMedullaOblongataPosterior { get; set; }

        #endregion

        #region CranialNerves

        public SideType SideType { get; set; }

        public CranialNerveType CranialNerveType { get; set; }

        [RadioReportId("hea_m_080534", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsRootEntryZone { get; set; }

        [RadioReportId("hea_m_080536", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsGeniculumOfTheFacialNerve { get; set; }

        [RadioReportId("hea_m_080537", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsMeatusAcusticusInternus { get; set; }

        [RadioReportId("hea_m_080538", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsFacialisCanal { get; set; }

        [RadioReportId("hea_m_080539", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsForamenStylomastoid { get; set; }

        [RadioReportId("hea_m_080540", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsVestibularNerve { get; set; }

        [RadioReportId("hea_m_080541", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsCochlearNerve { get; set; }

        [RadioReportId("hea_m_080542", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsSuperciliaryGanglion { get; set; }

        [RadioReportId("hea_m_080543", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsFossulaPetrosa { get; set; }

        [RadioReportId("hea_m_080544", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsGanglionInferius { get; set; }

        [RadioReportId("hea_m_080545", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsSulcusLateralisPosterior { get; set; }

        [RadioReportId("hea_m_080546", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public bool IsTrigonumNerviVagi { get; set; }

        [RadioReportId("hea_m_080547", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
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
