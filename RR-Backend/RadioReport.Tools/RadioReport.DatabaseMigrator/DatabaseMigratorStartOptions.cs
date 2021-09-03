using CommandLine;

namespace RadioReport.DatabaseMigrator
{
	public class DatabaseMigratorStartOptions
	{
		[Option('d', HelpText = "Database name prefix")]
		public string DatabasePrefix { get; set; }
		[Option('s', Required = true, HelpText = "Data source")]
		public string ServerName { get; set; }

		[Option('m', HelpText = "Module name")]
		public string ModuleName { get; set; }

		[Option('f', HelpText = "Filestream base directory")]
		public string FileStreamBaseDirectory { get; set; }

		[Option('r', Default = DatabaseDeleteBehavior.DeleteOnlyChanged, HelpText = "Delete behavior: 0 - only changed, 1 - all but core, 2 - all")]
		public DatabaseDeleteBehavior DatabaseDeleteBehavior { get; set; }
	}
}
