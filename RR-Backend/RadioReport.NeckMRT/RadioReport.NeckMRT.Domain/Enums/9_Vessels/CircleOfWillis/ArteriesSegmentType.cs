using System;

namespace RadioReport.NeckMRT.Domain.Enums.Vessels
{
    [Flags]
	public enum ArteriesSegmentType : int
	{
		None = 0,
        ACAa1Right = 1 << 0,
        ACAa2Right = 1 << 1,
        MCAm1Right = 1 << 2,
        MCAm2Right = 1 << 3,
        MCAm3Right = 1 << 4,
        PCOMRight = 1 << 5,
        PCAp1Right = 1 << 6,
        PCAp2Right = 1 << 7,
        SCARight = 1 << 8,
        PontineArteriesRight = 1 << 9,
        LabyrintineArteryRight = 1 << 10,
        AICARight = 1 << 11,
        PICARight = 1 << 12,

        ACOM = 1 << 13,
        BA = 1 << 14,
        AntSpinalArtery = 1 << 15,

        ACAa1Left = 1 << 16,
        ACAa2Left = 1 << 17,
        MCAm1Left = 1 << 18,
        MCAm2Left = 1 << 19,
        MCAm3Left = 1 << 20,
        PCOMLeft = 1 << 21,
        PCAp1Left = 1 << 22,
        PCAp2Left = 1 << 23,
        SCALeft = 1 << 24,
        PontineArteriesLeft = 1 << 25,
        LabyrintineArteryLeft = 1 << 26,
        AICALeft = 1 << 27,
        PICALeft = 1 << 28
	}
}