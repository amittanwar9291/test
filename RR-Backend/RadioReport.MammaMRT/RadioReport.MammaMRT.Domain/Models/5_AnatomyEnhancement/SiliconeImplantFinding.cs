using RadioReport.Common.Logic.Attributes;
using RadioReport.MammaMRT.Domain.Enums;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;

namespace RadioReport.MammaMRT.Domain.Models
{
    public class SiliconeImplantFinding: ModelBase, IRadioReportIdConditionEvaluator
    {
        [RadioReportId("mam_m_050304-1-NotVisible", InstanceName = nameof(AnatomyEnhancementPage.SiliconeImplantFinding1), IsExportable = false)]
        [RadioReportId("mam_m_050304-2-NotVisible", InstanceName = nameof(AnatomyEnhancementPage.SiliconeImplantFinding2), IsExportable = false)]
        public SiliconeImplantFindingType SiliconeImplantType { get; set; }

        [RadioReportId("mam_m_050309-1", InstanceName = nameof(AnatomyEnhancementPage.SiliconeImplantFinding1), CustomConditionName = nameof(CapsularFibrosisType))]
        [RadioReportId("mam_m_050309-2", InstanceName = nameof(AnatomyEnhancementPage.SiliconeImplantFinding2), CustomConditionName = nameof(CapsularFibrosisType))]
        public CapsularFibrosisType? CapsularFibrosisType { get; set; }

        [RadioReportId("mam_m_050309-1", InstanceName = nameof(AnatomyEnhancementPage.SiliconeImplantFinding1), CustomConditionName = nameof(RuptureType))]
        [RadioReportId("mam_m_050309-2", InstanceName = nameof(AnatomyEnhancementPage.SiliconeImplantFinding2), CustomConditionName = nameof(RuptureType))]
        public RuptureType? RuptureType { get; set; }

        [RadioReportId("mam_m_050310-1", InstanceName = nameof(AnatomyEnhancementPage.SiliconeImplantFinding1))]
        [RadioReportId("mam_m_050310-2", InstanceName = nameof(AnatomyEnhancementPage.SiliconeImplantFinding2))]
        public decimal? LongestExtent { get; set; }

        [RadioReportId("mam_m_050311-1", InstanceName = nameof(AnatomyEnhancementPage.SiliconeImplantFinding1))]
        [RadioReportId("mam_m_050311-2", InstanceName = nameof(AnatomyEnhancementPage.SiliconeImplantFinding2))]
        public BreastLocations Location { get; set; }

        public bool CheckCondition(string customConditionId) =>
         customConditionId switch
         {
             nameof(CapsularFibrosisType) => SiliconeImplantType == SiliconeImplantFindingType.CapsularFibrosis,
             nameof(RuptureType) => SiliconeImplantType == SiliconeImplantFindingType.Rupture,
             _ => false
         };
    }
}
