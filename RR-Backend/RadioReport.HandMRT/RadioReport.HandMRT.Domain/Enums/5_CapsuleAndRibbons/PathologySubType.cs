using RadioReport.Common.Logic.Attributes;
using RadioReport.HandMRT.Domain.Models;

namespace RadioReport.HandMRT.Domain.Enums.CapsuleAndRibbons
{
	public enum PathologySubType : byte
	{
		None = 0,

		[RadioReportId("han_m_050313", InstanceName = nameof(CapsuleAndRibbonsFinding.AnnularPulleyRupturType), CustomConditionName = nameof(LocalizationType.D1))]
        [RadioReportId("han_m_050317", InstanceName = nameof(CapsuleAndRibbonsFinding.TenosynovitisStenosansType), CustomConditionName = nameof(LocalizationType.D1))]
        [RadioReportId("han_m_050324", InstanceName = nameof(CapsuleAndRibbonsFinding.AnnularPulleyRupturType), CustomConditionName = "Not" + nameof(LocalizationType.D1))]
        [RadioReportId("han_m_050330", InstanceName = nameof(CapsuleAndRibbonsFinding.TenosynovitisStenosansType), CustomConditionName = "Not" + nameof(LocalizationType.D1))]
        A1 = 1,

        [RadioReportId("han_m_050314", InstanceName = nameof(CapsuleAndRibbonsFinding.AnnularPulleyRupturType), CustomConditionName = nameof(LocalizationType.D1))]
        [RadioReportId("han_m_050318", InstanceName = nameof(CapsuleAndRibbonsFinding.TenosynovitisStenosansType), CustomConditionName = nameof(LocalizationType.D1))]
        O = 2,

        [RadioReportId("han_m_050315", InstanceName = nameof(CapsuleAndRibbonsFinding.AnnularPulleyRupturType), CustomConditionName = nameof(LocalizationType.D1))]
        [RadioReportId("han_m_050319", InstanceName = nameof(CapsuleAndRibbonsFinding.TenosynovitisStenosansType), CustomConditionName = nameof(LocalizationType.D1))]
        [RadioReportId("han_m_050325", InstanceName = nameof(CapsuleAndRibbonsFinding.AnnularPulleyRupturType), CustomConditionName = "Not" + nameof(LocalizationType.D1))]
        [RadioReportId("han_m_050331", InstanceName = nameof(CapsuleAndRibbonsFinding.TenosynovitisStenosansType), CustomConditionName = "Not" + nameof(LocalizationType.D1))]
        A2 = 3,

        [RadioReportId("han_m_050326", InstanceName = nameof(CapsuleAndRibbonsFinding.AnnularPulleyRupturType), CustomConditionName = "Not" + nameof(LocalizationType.D1))]
        [RadioReportId("han_m_050332", InstanceName = nameof(CapsuleAndRibbonsFinding.TenosynovitisStenosansType), CustomConditionName = "Not" + nameof(LocalizationType.D1))]
        A3 = 4,

        [RadioReportId("han_m_050327", InstanceName = nameof(CapsuleAndRibbonsFinding.AnnularPulleyRupturType), CustomConditionName = "Not" + nameof(LocalizationType.D1))]
        [RadioReportId("han_m_050333", InstanceName = nameof(CapsuleAndRibbonsFinding.TenosynovitisStenosansType), CustomConditionName = "Not" + nameof(LocalizationType.D1))]

        A4 = 5,

        [RadioReportId("han_m_050328", InstanceName = nameof(CapsuleAndRibbonsFinding.AnnularPulleyRupturType), CustomConditionName = "Not" + nameof(LocalizationType.D1))]
        [RadioReportId("han_m_050334", InstanceName = nameof(CapsuleAndRibbonsFinding.TenosynovitisStenosansType), CustomConditionName = "Not" + nameof(LocalizationType.D1))]
        A5 = 6

    }
}
