using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum HistologyKnownType : byte
	{
		None = 0,

		[RadioReportId("tho_m_040236", InstanceName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_m_060212", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060253", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_070232", InstanceName = nameof(BonesFindingType.ClavicularMass))]
        [RadioReportId("tho_m_070232", InstanceName = nameof(BonesFindingType.ScapularMass))]
        [RadioReportId("tho_m_070232", InstanceName = nameof(BonesFindingType.MassOfTheRibs))]
        [RadioReportId("tho_m_070232", InstanceName = nameof(BonesFindingType.SternalMass))]
        [RadioReportId("tho_m_070380", InstanceName = nameof(BonesFindingType.SpinalMass))]
        Benign = 1,

		[RadioReportId("tho_m_040237", InstanceName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_m_060213", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060254", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_070233", InstanceName = nameof(BonesFindingType.ClavicularMass))]
        [RadioReportId("tho_m_070233", InstanceName = nameof(BonesFindingType.ScapularMass))]
        [RadioReportId("tho_m_070233", InstanceName = nameof(BonesFindingType.MassOfTheRibs))]
        [RadioReportId("tho_m_070233", InstanceName = nameof(BonesFindingType.SternalMass))]
        [RadioReportId("tho_m_070381", InstanceName = nameof(BonesFindingType.SpinalMass))]
        Malignant = 2
    }
}
