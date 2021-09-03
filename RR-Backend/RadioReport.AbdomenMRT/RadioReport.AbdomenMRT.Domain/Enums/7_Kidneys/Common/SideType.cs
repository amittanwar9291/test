using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Kidneys
{
	public enum SideType : byte
	{
		None = 0,

		[RadioReportId("abd_m_070203", InstanceName = nameof(KidneysFinding.SideType), CustomConditionName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
		[RadioReportId("abd_m_070203", InstanceName = nameof(KidneysFinding.SideType), CustomConditionName = nameof(KidneysFindingType.ObstructiveNephropathy))]
		[RadioReportId("abd_m_070321", InstanceName = nameof(KidneysFinding.MassSideType), CustomConditionName = nameof(KidneysFindingType.Mass))]
		[RadioReportId("abd_m_070548", InstanceName = nameof(KidneysFinding.MassSideMoreThanOneLesionType), CustomConditionName = nameof(KidneysFindingType.Mass))]
		[RadioReportId("abd_m_070203", InstanceName = nameof(KidneysFinding.SideType), CustomConditionName = nameof(KidneysFindingType.VascularNephropathy))]
		Right = 1,

		[RadioReportId("abd_m_070204", InstanceName = nameof(KidneysFinding.SideType), CustomConditionName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
		[RadioReportId("abd_m_070204", InstanceName = nameof(KidneysFinding.SideType), CustomConditionName = nameof(KidneysFindingType.ObstructiveNephropathy))]
		[RadioReportId("abd_m_070322", InstanceName = nameof(KidneysFinding.MassSideType), CustomConditionName = nameof(KidneysFindingType.Mass))]
		[RadioReportId("abd_m_070549", InstanceName = nameof(KidneysFinding.MassSideMoreThanOneLesionType), CustomConditionName = nameof(KidneysFindingType.Mass))]
		[RadioReportId("abd_m_070204", InstanceName = nameof(KidneysFinding.SideType), CustomConditionName = nameof(KidneysFindingType.VascularNephropathy))]
		Left = 2
	}
}