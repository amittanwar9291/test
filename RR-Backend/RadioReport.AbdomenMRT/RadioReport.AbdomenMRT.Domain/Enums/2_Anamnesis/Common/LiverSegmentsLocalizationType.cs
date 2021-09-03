using System;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Anamnesis
{
    [Flags]
	public enum LiverSegmentsLocalizationType : int
	{
		None = 0,
        Segment1 = 1 << 1,
        Segment2 = 1 << 2,
        Segment3 = 1 << 3,
        Segment4a = 1 << 4,
        Segment4b = 1 << 5,
        Segment5 = 1 << 6,
        Segment6 = 1 << 7,
        Segment7 = 1 << 8,
        Segment8 = 1 << 9
	}
}