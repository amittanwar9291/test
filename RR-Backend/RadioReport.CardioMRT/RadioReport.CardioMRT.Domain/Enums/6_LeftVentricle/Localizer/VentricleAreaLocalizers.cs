using System;

namespace RadioReport.CardioMRT.Domain.Enums.LeftVentricle
{
	[Flags]
	public enum VentricleAreaLocalizers
	{
		None = 0,
		Section1 = 1,
		Section2 = 2,
		Section3 = 4,
		Section4 = 8,
		Section5 = 16,
		Section6 = 32,
		Section7 = 64,
		Section8 = 128,
		Section9 = 256,
		Section10 = 512,
		Section11 = 1024,
		Section12 = 2048,
		Section13 = 4096,
		Section14 = 8192,
		Section15 = 16384,
		Section16 = 32768,
		Section17 = 65536
	}
}
