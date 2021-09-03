using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ThoraxCT.Domain.Constants;
using RadioReport.ThoraxCT.Domain.Enums;

namespace RadioReport.ThoraxCT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("ThoraxCT/LungInterstitium")]
    public class LungInterstitiumPage : PageModelBase<LungInterstitiumPage>, IRadioReportIdConditionEvaluator
    {
        public LungInterstitiumAreFindings AreFindings { get; set; }

        [RadioReportId("tho_c_0601104-l", InstanceName = InstanceNames.LungInterstitium, IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("tho_c_0602103")]
        public LungInterstitiumDiagnosisType DifferentialDiagnosis { get; set; }

        public DominantPatternType DominantPatternType { get; set; }

        public LungInterstitiumLocalizationCraniocaudalType LocalizationCraniocaudalType { get; set; }

        [RadioReportId("tho_c_0603107")]
        public LungsFlapsLocations LungsFlapsLocation { get; set; }

        public LocalizationAxialType LocalizationAxialType { get; set; }

        public SideComparisonType SideComparisonType { get; set; }

        public AsymmetricalType AsymmetricalType { get; set; }

        public IEnumerable<LungInterstitiumFinding> Findings { get; set; }

        [RadioReportId("tho_c_0602114")]
        public LungInterstitiumDiagnosisType DifferentialDiagnosis1 { get; set; }

        [RadioReportId("tho_c_0602115")]
        public bool IsSuspected { get; set; }

        [RadioReportId("tho_c_0602117")]
        public LungInterstitiumDiagnosisType DifferentialDiagnosis2 { get; set; }

        [RadioReportId("tho_c_0602118")]
        public bool IsSubordinated { get; set; }

        [RadioReportId("tho_c_0602120")]
        public LungInterstitiumDiagnosisType DifferentialDiagnosis3 { get; set; }

        [RadioReportId("tho_c_0603157")]
        public CauseType CauseType1 { get; set; }

        [RadioReportId("tho_c_0604120")]
        public CauseType CauseType2 { get; set; }

        [RadioReportId("tho_c_0605120")]
        public CauseType CauseType3 { get; set; }

        [RadioReportId("tho_c_0603200-l", InstanceName = nameof(IIPHRCTPatternType1), IsExportable = false)]
        public IIPHRCTPatternType IIPHRCTPatternType1 { get; set; }

        [RadioReportId("tho_c_0604132-l", InstanceName = nameof(IIPHRCTPatternType2), IsExportable = false)]
        public IIPHRCTPatternType IIPHRCTPatternType2 { get; set; }

        [RadioReportId("tho_c_0605132-l", InstanceName = nameof(IIPHRCTPatternType3), IsExportable = false)]
        public IIPHRCTPatternType IIPHRCTPatternType3 { get; set; }

        [RadioReportId("tho_c_0603159")]
        public ClassificationType ClassificationType1 { get; set; }

        [RadioReportId("tho_c_0604122")]
        public ClassificationType ClassificationType2 { get; set; }

        [RadioReportId("tho_c_0605122")]
        public ClassificationType ClassificationType3 { get; set; }

        [RadioReportId("tho_c_0603155-l", InstanceName = nameof(DifferentialDiagnosisDetailsType1), IsExportable = false)]
        public DifferentialDiagnosisDetailsType DifferentialDiagnosisDetailsType1 { get; set; }

        [RadioReportId("tho_c_0604118-l", InstanceName = nameof(DifferentialDiagnosisDetailsType2), IsExportable = false)]
        public DifferentialDiagnosisDetailsType DifferentialDiagnosisDetailsType2 { get; set; }

        [RadioReportId("tho_c_0605118-l", InstanceName = nameof(DifferentialDiagnosisDetailsType3), IsExportable = false)]
        public DifferentialDiagnosisDetailsType DifferentialDiagnosisDetailsType3 { get; set; }

        [RadioReportId("tho_c_0603160-l", InstanceName = nameof(SarcoidosisType1), IsExportable = false)]
        public SarcoidosisType SarcoidosisType1 { get; set; }

        [RadioReportId("tho_c_0604123-l", InstanceName = nameof(SarcoidosisType2), IsExportable = false)]
        public SarcoidosisType SarcoidosisType2 { get; set; }

        [RadioReportId("tho_c_0605123-l", InstanceName = nameof(SarcoidosisType3), IsExportable = false)]
        public SarcoidosisType SarcoidosisType3 { get; set; }

        [RadioReportId("tho_c_0603170", CustomConditionName = nameof(DifferentialDiagnosisDetailsType1))]
        [RadioReportId("tho_c_0604210", CustomConditionName = nameof(DifferentialDiagnosisDetailsType2))]
        [RadioReportId("tho_c_0605142", CustomConditionName = nameof(DifferentialDiagnosisDetailsType3))]
        public bool IsBronchiolitisObliterans { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ThoraxCtLungInterstitium;

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(DifferentialDiagnosisDetailsType1) => DifferentialDiagnosisDetailsType1 == DifferentialDiagnosisDetailsType.Infectious,
                nameof(DifferentialDiagnosisDetailsType2) => DifferentialDiagnosisDetailsType2 == DifferentialDiagnosisDetailsType.Infectious,
                nameof(DifferentialDiagnosisDetailsType3) => DifferentialDiagnosisDetailsType3 == DifferentialDiagnosisDetailsType.Infectious,
                _ => false
            };
    }
}
