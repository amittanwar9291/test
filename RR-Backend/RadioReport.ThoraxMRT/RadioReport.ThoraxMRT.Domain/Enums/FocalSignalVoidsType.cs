using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum FocalSignalVoidsType : byte
	{
		None = 0,

        [RadioReportId("tho_m_040336", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        [RadioReportId("tho_m_040253", InstanceName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_m_060534", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_060555", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla))]
        Calcification = 1,

        [RadioReportId("tho_m_040337", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        [RadioReportId("tho_m_040254", InstanceName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_m_060535", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_060556", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla))]
        Air = 2,

        [RadioReportId("tho_m_040338", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        [RadioReportId("tho_m_040255", InstanceName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_m_060536", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_060557", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla))]
        Fibrosis = 3,

        [RadioReportId("tho_m_040256", InstanceName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_m_060537", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_060558", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla))]
        FlowVoid = 4
    }
}
