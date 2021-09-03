using RadioReport.Common.Logic.Attributes;
using RadioReport.FeetMRT.Domain.Constants;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum DistalTibiaFractureType : byte
	{
		None = 0,

		[RadioReportId("anc_m_040313", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Tibia))]
        [RadioReportId("anc_m_040319", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Fibula))]
        [RadioReportId("anc_m_0403206", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Malleoli))]
        [RadioReportId("anc_m_040331", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Talus))]
        [RadioReportId("anc_m_0403209", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Calcaneus))]
        [RadioReportId("anc_m_0403212", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.OsNaviculare))]
        [RadioReportId("anc_m_0403219", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.OsCuboideum))]
        [RadioReportId("anc_m_0403222", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = CustomConditionNames.Cuneiform)]
        [RadioReportId("anc_m_0403225", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = CustomConditionNames.Metatarsale)]
        [RadioReportId("anc_m_0403228", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = CustomConditionNames.ProximalePhalanx)]
		FractureConsolidation = 1,

		[RadioReportId("anc_m_040314", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Tibia))]
        [RadioReportId("anc_m_040320", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Fibula))]
        [RadioReportId("anc_m_0403207", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Malleoli))]
        [RadioReportId("anc_m_040332", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Talus))]
        [RadioReportId("anc_m_0403210", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Calcaneus))]
        [RadioReportId("anc_m_0403213", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.OsNaviculare))]
        [RadioReportId("anc_m_0403220", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.OsCuboideum))]
        [RadioReportId("anc_m_0403223", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = CustomConditionNames.Cuneiform)]
        [RadioReportId("anc_m_0403226", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = CustomConditionNames.Metatarsale)]
        [RadioReportId("anc_m_0403229", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = CustomConditionNames.ProximalePhalanx)]
		SuspicionOf = 2
    }
}
