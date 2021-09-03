using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Bones
{
	public enum AoClassificationType : byte
	{
		None = 0,

		[RadioReportId("elb_m_040307", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.RadialHead))]
        [RadioReportId("elb_m_0403103", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.ProximalUlna))]
		[RadioReportId("elb_m_0403124", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DistalHumerus))]
        Extraarticular = 1,

		[RadioReportId("elb_m_040308", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.RadialHead))]
        [RadioReportId("elb_m_0403104", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.ProximalUlna))]
        [RadioReportId("elb_m_0403125", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DistalHumerus))]
		PartialArticular = 2,

		[RadioReportId("elb_m_040309", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.RadialHead))]
		[RadioReportId("elb_m_0403105", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.ProximalUlna))]
        [RadioReportId("elb_m_0403126", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DistalHumerus))]
		Articular = 3,

		[RadioReportId("elb_m_040310", InstanceName = nameof(BonesFindingType.Fracture))]
        RadialHeadFractureNotFurtherSpecified = 4,

        [RadioReportId("elb_m_0403106", InstanceName = nameof(BonesFindingType.Fracture))]
        ProximalUlnarFractureNotFurtherSpecified = 5,

        [RadioReportId("elb_m_0403110", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealRadius))]
        [RadioReportId("elb_m_0403117", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealUlna))]
		SimpleFracture = 6,

		[RadioReportId("elb_m_0403111", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealRadius))]
        [RadioReportId("elb_m_0403118", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealUlna))]
		WedgeFracture = 7,

		[RadioReportId("elb_m_0403112", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealRadius))]
        [RadioReportId("elb_m_0403119", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealUlna))]
		MultifragmentaryFracture = 8,

		[RadioReportId("elb_m_0403113", InstanceName = nameof(BonesFindingType.Fracture))]
        RadialShaftFracture = 9,

        [RadioReportId("elb_m_0403120", InstanceName = nameof(BonesFindingType.Fracture))]
		UlnarShaftFracture = 10,

		[RadioReportId("elb_m_0403127", InstanceName = nameof(BonesFindingType.Fracture))]
        DistalHumeralFractureNotFurtherSpecified = 11
	}
}
