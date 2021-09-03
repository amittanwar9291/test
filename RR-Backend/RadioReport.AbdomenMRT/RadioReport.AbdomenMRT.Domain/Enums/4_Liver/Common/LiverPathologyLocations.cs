using System;

namespace RadioReport.AbdomenMRT.Domain.Enums.Liver
{
	[Flags]
	public enum LiverPathologyLocations : long
	{
		None = 0,
        SegmentalInRightLiverLobe = 1 << 1,
        Segment5 = 1 << 2,
        Segment6 = 1 << 3,
        Segment7 = 1 << 4,
        Segment8 = 1 << 5,
        RightHepaticDuct = 1 << 6,
        Intrahepatic = 1 << 7,
        Perihilar = 1 << 8,
        Extrahepatic = 1 << 9,
        SegmentalInLeftLiverLobe = 1 << 10,
        Segment1 = 1 << 11,
        Segment2 = 1 << 12,
        Segment3 = 1 << 13,
        Segment4a = 1 << 14,
        Segment4b = 1 << 15,
        LeftHepaticDuct = 1 << 16,
        CommonHepaticDuct = 1 << 17,
        CysticDuct = 1 << 18,
        DuctusCholedochus = 1 << 19,
        DuctusCholedochusCloseToLiver = 1 << 20,
        DuctusCholedochusCloseToPapilla = 1 << 21
	}
}