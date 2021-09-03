using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
    public enum KMEnhancementType : byte
	{
		None = 0,

		[RadioReportId("pel_m_080534", InstanceName = nameof(RectumFinding.SigmaMassKmEnhancementType))]
		[RadioReportId("pel_m_080280", InstanceName = nameof(RectumFinding.ChronicBowelDiseaseKMEnhancementType), CustomConditionName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        [RadioReportId("pel_m_080280", InstanceName = nameof(RectumFinding.AppendicitisKMEnhancementType), CustomConditionName = nameof(RectumFindingType.Appendicitis))]
		[RadioReportId("pel_m_080575", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.Perianal))]
        [RadioReportId("pel_m_080575", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.Rectovaginal))]
        [RadioReportId("pel_m_0804111", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.Colovaginal))]
        [RadioReportId("pel_m_0804111", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.Colovesical))]
        [RadioReportId("pel_m_0804111", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.Vesicovaginal))]
        [RadioReportId("pel_m_0804111", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.Vesicocervical))]
        [RadioReportId("pel_m_0804111", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.Complex))]
        [RadioReportId("pel_m_0804111", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.PilonidalSinus))]
        Strong = 1,

		[RadioReportId("pel_m_080535", InstanceName = nameof(RectumFinding.SigmaMassKmEnhancementType))]
		[RadioReportId("pel_m_080281", InstanceName = nameof(RectumFinding.ChronicBowelDiseaseKMEnhancementType), CustomConditionName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        [RadioReportId("pel_m_080281", InstanceName = nameof(RectumFinding.AppendicitisKMEnhancementType), CustomConditionName = nameof(RectumFindingType.Appendicitis))]
		[RadioReportId("pel_m_080576", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.Perianal))]
        [RadioReportId("pel_m_080576", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.Rectovaginal))]
        [RadioReportId("pel_m_0804112", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.Colovaginal))]
        [RadioReportId("pel_m_0804112", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.Colovesical))]
        [RadioReportId("pel_m_0804112", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.Vesicovaginal))]
        [RadioReportId("pel_m_0804112", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.Vesicocervical))]
        [RadioReportId("pel_m_0804112", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.Complex))]
        [RadioReportId("pel_m_0804112", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.PilonidalSinus))]
        Low = 2,

		[RadioReportId("pel_m_080536", InstanceName = nameof(RectumFinding.SigmaMassKmEnhancementType))]
		[RadioReportId("pel_m_080282", InstanceName = nameof(RectumFinding.ChronicBowelDiseaseKMEnhancementType), CustomConditionName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        [RadioReportId("pel_m_080282", InstanceName = nameof(RectumFinding.AppendicitisKMEnhancementType), CustomConditionName = nameof(RectumFindingType.Appendicitis))]
		[RadioReportId("pel_m_080577", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.Perianal))]
        [RadioReportId("pel_m_080577", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.Rectovaginal))]
        [RadioReportId("pel_m_0804113", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.Colovaginal))]
        [RadioReportId("pel_m_0804113", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.Colovesical))]
        [RadioReportId("pel_m_0804113", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.Vesicovaginal))]
        [RadioReportId("pel_m_0804113", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.Vesicocervical))]
        [RadioReportId("pel_m_0804113", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.Complex))]
        [RadioReportId("pel_m_0804113", InstanceName = nameof(RectumFinding.FistulaKMEnhancementType), CustomConditionName = nameof(FistulaType.PilonidalSinus))]
        No = 3
	}
}
