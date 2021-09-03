using System;

namespace RadioReport.CardioMRT.Domain.Enums.SpatialRequirement
{
	[Flags]
	public enum MainTumorLocalizers : byte
	{
		None = 0,

		PER = 1,

		RV = 2,

		RA = 4,

		LV = 8,

		LA = 16
	}
}
