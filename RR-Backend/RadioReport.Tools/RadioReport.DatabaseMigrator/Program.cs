using System;
using System.Globalization;
using System.Linq;
using CommandLine;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using RadioReport.AngiographyMRT.Repo;
using RadioReport.CardioMRT.Repo;
using RadioReport.Core.ReportList.Repo;
using RadioReport.Core.Users.Repo;
using RadioReport.ElbowMRT.Repo;
using RadioReport.FeetMRT.Repo;
using RadioReport.HandMRT.Repo;
using RadioReport.HipMRT.Repo;
using RadioReport.KneeMRT.Repo;
using RadioReport.MammaMRT.Repo;
using RadioReport.ShoulderMRT.Repo;
using RadioReport.SpineMRT.Repo;
using RadioReport.ThoraxCT.Repo;
using RadioReport.PelvisMRT.Repo;
using RadioReport.SpineCT.Repo;
using Microsoft.Data.SqlClient;
using RadioReport.AbdomenCT.Repo;
using RadioReport.Common.Consts;
using RadioReport.Core.CenterSpecificSettings.Repo;
using RadioReport.Core.InstituteManager.Repo;
using RadioReport.MammaMX.Repo;
using RadioReport.AbdomenMRT.Repo;
using RadioReport.NeckMRT.Repo;
using RadioReport.ThoraxMRT.Repo;
using RadioReport.HeadMRT.Repo;
using RadioReport.AngiographyCT.Repo;
using RadioReport.HeadCT.Repo;

namespace RadioReport.DatabaseMigrator
{
    public class Program
    {
        private const string DbPrefix = "DBPrefix";
        private const string DbServer = "DBServer";
        private static bool _wasException;
        private static DatabaseDeleteBehavior _databaseDeleteBehavior;

        static void Main(string[] args)
        {
            Console.WriteLine($"{DateTime.Now}: Start creating/updating databases!");
            var builder = new ConfigurationBuilder();
            builder.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
            IConfigurationRoot configuration = builder.Build();

            string databasePrefixArg = String.Empty;
            string serverNameArg = String.Empty;
            string moduleName = String.Empty;
            string fileStreamBaseDirectory = String.Empty;

            Parser.Default.ParseArguments<DatabaseMigratorStartOptions>(args).WithParsed(o =>
            {
                databasePrefixArg = o.DatabasePrefix;
                serverNameArg = o.ServerName;
                moduleName = o.ModuleName;
                fileStreamBaseDirectory = o.FileStreamBaseDirectory;
                _databaseDeleteBehavior = o.DatabaseDeleteBehavior;
            });

            if (string.IsNullOrEmpty(serverNameArg))
            {
                throw new ArgumentNullException($"Missing server name");
            }

            if (string.IsNullOrEmpty(fileStreamBaseDirectory))
            {
                fileStreamBaseDirectory = configuration.GetSection("FileStreamBaseDirectory")?.Value;
            }
            Environment.SetEnvironmentVariable("filestream_base_directory", fileStreamBaseDirectory);

            var connectionStringSections = configuration.GetSection("ConnectionStrings").GetChildren();
            foreach (var section in connectionStringSections)
            {
                var connectionString = section.Value;
                var newConnectionString = connectionString?.Replace(DbServer, serverNameArg, StringComparison.InvariantCulture);
                if (string.IsNullOrEmpty(databasePrefixArg))
                {
                    newConnectionString = newConnectionString?.Replace(DbPrefix + "_", string.Empty, StringComparison.InvariantCulture);
                }
                else
                {
                    newConnectionString = newConnectionString?.Replace(DbPrefix, databasePrefixArg, StringComparison.InvariantCulture);
                }
                section.Value = newConnectionString;
            }

            migrateDatabase<CoreUserDbContext>(configuration.GetConnectionString("RadioReport_Core_Users"), "Core users");
            migrateDatabase<ReportListDbContext>(configuration.GetConnectionString("RadioReport_Core_ReportList"), "Core report list");
            migrateDatabase<CenterSpecificSettingsDbContext>(configuration.GetConnectionString("RadioReport_Core_CenterSpecificSettings"), "Core center specific settings");
            migrateDatabase<InstituteManagerDbContext>(configuration.GetConnectionString("RadioReport_InstituteManager"), "Institute Manager");

            if (string.IsNullOrEmpty(moduleName) || moduleName.Equals(ReportTypeNames.MammaMRT, StringComparison.InvariantCulture))
            {
                migrateDatabase<MammaMRTDbContext>(configuration.GetConnectionString("RadioReport_MammaMRT"), "MammaMRT");
            }

            if (string.IsNullOrEmpty(moduleName) || moduleName.Equals(ReportTypeNames.ShoulderMRT, StringComparison.InvariantCulture))
            {
                migrateDatabase<ShoulderMRTDbContext>(configuration.GetConnectionString("RadioReport_ShoulderMRT"), "ShoulderMRT");
            }
            if (string.IsNullOrEmpty(moduleName) || moduleName.Equals(ReportTypeNames.SpineMRT, StringComparison.InvariantCulture))
            {
                migrateDatabase<SpineMRTDbContext>(configuration.GetConnectionString("RadioReport_SpineMRT"), "SpineMRT");
            }

            if (string.IsNullOrEmpty(moduleName) || moduleName.Equals(ReportTypeNames.KneeMRT, StringComparison.InvariantCulture))
            {
                migrateDatabase<KneeMRTDbContext>(configuration.GetConnectionString("RadioReport_KneeMRT"), "KneeMRT");
            }

            if (string.IsNullOrEmpty(moduleName) || moduleName.Equals(ReportTypeNames.CardioMRT, StringComparison.InvariantCulture))
            {
                migrateDatabase<CardioMRTDbContext>(configuration.GetConnectionString("RadioReport_CardioMRT"), "CardioMRT");
            }

            if (string.IsNullOrEmpty(moduleName) || moduleName.Equals(ReportTypeNames.ThoraxCT, StringComparison.InvariantCulture))
            {
                migrateDatabase<ThoraxCTDbContext>(configuration.GetConnectionString("RadioReport_ThoraxCT"), "ThoraxCT");
            }

            if (string.IsNullOrEmpty(moduleName) || moduleName.Equals(ReportTypeNames.HipMRT, StringComparison.InvariantCulture))
            {
                migrateDatabase<HipMRTDbContext>(configuration.GetConnectionString("RadioReport_HipMRT"), "HipMRT");
            }

            if (string.IsNullOrEmpty(moduleName) || moduleName.Equals(ReportTypeNames.SpineCT, StringComparison.InvariantCulture))
            {
                migrateDatabase<SpineCTDbContext>(configuration.GetConnectionString("RadioReport_SpineCT"), "SpineCT");
            }

            if (string.IsNullOrEmpty(moduleName) || moduleName.Equals(ReportTypeNames.AngiographyMRT, StringComparison.InvariantCulture))
            {
                migrateDatabase<AngiographyMRTDbContext>(configuration.GetConnectionString("RadioReport_AngiographyMRT"), "AngiographyMRT");
            }

            if (string.IsNullOrEmpty(moduleName) || moduleName.Equals(ReportTypeNames.HandMRT, StringComparison.InvariantCulture))
            {
                migrateDatabase<HandMRTDbContext>(configuration.GetConnectionString("RadioReport_HandMRT"), "HandMRT");
            }

            if (string.IsNullOrEmpty(moduleName) || moduleName.Equals(ReportTypeNames.ElbowMRT, StringComparison.InvariantCulture))
            {
                migrateDatabase<ElbowMRTDbContext>(configuration.GetConnectionString("RadioReport_ElbowMRT"), "ElbowMRT");
            }

            if (string.IsNullOrEmpty(moduleName) || moduleName.Equals(ReportTypeNames.PelvisMRT, StringComparison.InvariantCulture))
            {
                migrateDatabase<PelvisMRTDbContext>(configuration.GetConnectionString("RadioReport_PelvisMRT"), "PelvisMRT");
            }

            if (string.IsNullOrEmpty(moduleName) || moduleName.Equals(ReportTypeNames.FeetMRT, StringComparison.InvariantCulture))
            {
                migrateDatabase<FeetMRTDbContext>(configuration.GetConnectionString("RadioReport_FeetMRT"), "FeetMRT");
            }

            if (string.IsNullOrEmpty(moduleName) || moduleName.Equals(ReportTypeNames.MammaMX, StringComparison.InvariantCulture))
            {
                migrateDatabase<MammaMXDbContext>(configuration.GetConnectionString("RadioReport_MammaMX"), "MammaMX");
            }

            if (string.IsNullOrEmpty(moduleName) || moduleName.Equals(ReportTypeNames.AbdomenMRT, StringComparison.InvariantCulture))
            {
                migrateDatabase<AbdomenMRTDbContext>(configuration.GetConnectionString("RadioReport_AbdomenMRT"), "AbdomenMRT");
            }

            if (string.IsNullOrEmpty(moduleName) || moduleName.Equals(ReportTypeNames.NeckMRT, StringComparison.InvariantCulture))
            {
                migrateDatabase<NeckMRTDbContext>(configuration.GetConnectionString("RadioReport_NeckMRT"), "NeckMRT");
            }
            
            if (string.IsNullOrEmpty(moduleName) || moduleName.Equals(ReportTypeNames.ThoraxMRT, StringComparison.InvariantCulture))
            {
                migrateDatabase<ThoraxMRTDbContext>(configuration.GetConnectionString("RadioReport_ThoraxMRT"), "ThoraxMRT");
            }

            if (string.IsNullOrEmpty(moduleName) || moduleName.Equals(ReportTypeNames.HeadMRT, StringComparison.InvariantCulture))
            {
                migrateDatabase<HeadMRTDbContext>(configuration.GetConnectionString("RadioReport_HeadMRT"), "HeadMRT");
            }

            if (string.IsNullOrEmpty(moduleName) || moduleName.Equals(ReportTypeNames.AngiographyCT, StringComparison.InvariantCulture))
            {
                migrateDatabase<AngiographyCTDbContext>(configuration.GetConnectionString("RadioReport_AngiographyCT"), "AngiographyCT");
            }

            if (string.IsNullOrEmpty(moduleName) || moduleName.Equals(ReportTypeNames.HeadCT, StringComparison.InvariantCulture))
            {
                migrateDatabase<HeadCTDbContext>(configuration.GetConnectionString("RadioReport_HeadCT"), "HeadCT");
            }
            
            if (string.IsNullOrEmpty(moduleName) || moduleName.Equals(ReportTypeNames.AbdomenCT, StringComparison.InvariantCulture))
            {
                migrateDatabase<AbdomenCTDbContext>(configuration.GetConnectionString("RadioReport_AbdomenCT"), "AbdomenCT");
            }

            if (_wasException)
            {
                Console.WriteLine($"{DateTime.Now}: NOT all databases are up to date! One or more db was not updated successfully");
                throw new Exception();
            }
            Console.WriteLine($"{DateTime.Now}: All databases are up to date!");
        }

        private static void migrateDatabase<T>(string connectionString, string microserviceName) where T : DbContext
        {
            try
            {
                Console.WriteLine(string.Format(CultureInfo.InvariantCulture, "Creating/updating database for {0} microservice under connection string {1}.", microserviceName, connectionString));
                var optionsBuilder = new DbContextOptionsBuilder<T>();
                optionsBuilder.UseSqlServer(connectionString);

                T context = (T)Activator.CreateInstance(typeof(T), optionsBuilder.Options);

                bool shouldMigrateDatabase;

                if (_databaseDeleteBehavior == DatabaseDeleteBehavior.DeleteAll ||
                    _databaseDeleteBehavior == DatabaseDeleteBehavior.DeleteAllButCore && !typeof(T).Namespace.Contains("RadioReport.Core", StringComparison.InvariantCulture))
                {
                    shouldMigrateDatabase = true;
                }
                else
                {
                    var canConnect = context.Database.CanConnect();
                    if (canConnect)
                    {
                        var migrationsToApply = context.Database.GetPendingMigrations();
                        shouldMigrateDatabase = migrationsToApply.Any();
                    }
                    else
                    {
                        shouldMigrateDatabase = true;
                    }
                }

                if (shouldMigrateDatabase)
                {
                    try // case when standard use of migration i.e. "Iterative"
                    {
                        context.Database.Migrate();
                    }
                    catch (SqlException) // case when new Initial migration
                    {
                        context.Database.EnsureDeleted();
                        context.Database.Migrate();
                    }
                }

                Console.WriteLine(string.Format(CultureInfo.InvariantCulture, "Creating/updating database for {0} DONE", microserviceName));
            }
            catch (Exception e)
            {
                Console.WriteLine(string.Format(CultureInfo.InvariantCulture, "Something went wrong during migration {0} ", microserviceName));
                Console.WriteLine(string.Format(CultureInfo.InvariantCulture, "Error message: {0} ", e.Message));
                Console.WriteLine(e);
                _wasException = true;
            }
        }

    }
}