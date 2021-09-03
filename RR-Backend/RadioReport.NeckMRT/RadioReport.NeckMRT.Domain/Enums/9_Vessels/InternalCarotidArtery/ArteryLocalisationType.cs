using System;

namespace RadioReport.NeckMRT.Domain.Enums.Vessels
{
    [Flags]
	public enum ArteryLocalisationType : byte
	{
		None = 0,
        C1 = 1 << 0,
        C2 = 1 << 1,
        C3 = 1 << 2,
        C4 = 1 << 3,
        C5 = 1 << 4,
        C6 = 1 << 5,
        C7 = 1 << 6
	}
}