using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum ArthritisDifferentialDiagnosisType : byte
	{
		None = 0,

		[RadioReportId("anc_m_0405107", InstanceName = nameof(BonesFindingType.Arthritis))]
        RheumatoidArthritis = 1,

		[RadioReportId("anc_m_0405108", InstanceName = nameof(BonesFindingType.Arthritis))]
        PsoriaticArthritis = 2,

		[RadioReportId("anc_m_0405109", InstanceName = nameof(BonesFindingType.Arthritis))]
        TophaceusGout = 3
    }
}
