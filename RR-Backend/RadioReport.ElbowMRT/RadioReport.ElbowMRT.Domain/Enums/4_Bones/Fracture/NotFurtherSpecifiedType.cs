using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Bones
{
	public enum NotFurtherSpecifiedType : byte
	{
		None = 0,

		[RadioReportId("elb_m_040311", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.RadialHead))]
        [RadioReportId("elb_m_0403107", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.ProximalUlna))]
        [RadioReportId("elb_m_0403114", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealRadius))]
        [RadioReportId("elb_m_0403121", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealUlna))]
        [RadioReportId("elb_m_0403128", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DistalHumerus))]
        FractureOlderRemodeled = 1,

		[RadioReportId("elb_m_040312", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.RadialHead))]
        [RadioReportId("elb_m_0403108", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.ProximalUlna))]
        [RadioReportId("elb_m_0403115", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealRadius))]
        [RadioReportId("elb_m_0403122", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealUlna))]
        [RadioReportId("elb_m_0403129", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DistalHumerus))]
		SuspectedDiagnosis = 2
	}
}
