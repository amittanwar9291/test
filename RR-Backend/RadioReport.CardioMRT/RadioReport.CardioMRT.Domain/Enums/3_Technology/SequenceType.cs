namespace RadioReport.CardioMRT.Domain.Enums.Technology
{
	public enum SequenceType : byte
	{
		None = 0,
		SEOrTSEOrFSE = 1,
		GREOrFFE = 2,
		HASTEOrSSH = 3,
		STIROrSPIROrSPAIR = 4,
		SSGRE = 5,
		TSOrLLOrMOLLIOrShMOLLI = 6,
		PSIROrTIROrRIR = 7
	}
}
