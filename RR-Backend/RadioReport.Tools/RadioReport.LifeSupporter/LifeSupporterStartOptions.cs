using CommandLine;

namespace RadioReport.LifeSupporter
{
	public class LifeSupporterStartOptions
	{
		[Option('a', Required = true, HelpText = "Host address part of application url")]
		public string Application { get; set; }
	}
}
