using RadioReport.TestDataGenerator.Common;
using RadioReport.TestDataGenerator.Generators;
using Microsoft.Extensions.Configuration;
using Serilog;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models.ReportModels;
using static System.Console;

namespace RadioReport.TestDataGenerator
{
    /// <summary>
    /// If we want to skip some module, just delete url entry from appsettings.json file
    /// </summary>
    class Program
    {
        private const int defaultReportsCount = 1;
        private const string reportsCountKey = "Reports_Count";
        static async Task Main(string[] args)
        {
            var date = DateTime.Now.ToString("HH.mm_dd.MM.yy", CultureInfo.InvariantCulture);
            Log.Logger = new LoggerConfiguration().WriteTo.File(date + "_benchlog.log").CreateLogger();
            var logger = Log.Logger;

            var stopwatch = new Stopwatch();
            using var httpClient = new DataGeneratorHttpClientWrapper();
            var builder = new ConfigurationBuilder();
            builder.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
            IConfigurationRoot configuration = builder.Build();

            if (!int.TryParse(configuration.GetSection(reportsCountKey)?.Value, out int numberOfReports))
            {
                numberOfReports = defaultReportsCount;
            }

            var spammerTuples = new List<(string, IDataSpammer)>
            {
                 (configuration.GetSection("MammaMRT_Report").Value, new DataSpammer<Report>(new MammaMRTDataGenerator(), logger)),
                 (configuration.GetSection("KneeMRT_Report").Value, new DataSpammer<Report>(new KneeMRTDataGenerator(), logger)),
                 (configuration.GetSection("ThoraxCT_Report").Value, new DataSpammer<Report>(new ThoraxCTDataGenerator(), logger)),
                 (configuration.GetSection("CardioMRT_Report").Value, new DataSpammer<Report>(new CardioMRTDataGenerator(), logger)),
                 (configuration.GetSection("AngiographyMRT_Report").Value, new DataSpammer<Report>(new AngiographyMRTDataGenerator(), logger)),
                 (configuration.GetSection("ElbowMRT_Report").Value, new DataSpammer<Report>(new ElbowMRTDataGenerator(), logger)),
                 (configuration.GetSection("HandMRT_Report").Value, new DataSpammer<Report>(new HandMRTDataGenerator(), logger)),
                 (configuration.GetSection("HipMRT_Report").Value, new DataSpammer<Report>(new HipMRTDataGenerator(), logger)),
                 (configuration.GetSection("ShoulderMRT_Report").Value,  new DataSpammer<Report>(new ShoulderMRTDataGenerator(), logger)),
                 (configuration.GetSection("SpineCT_Report").Value, new DataSpammer<Report>(new SpineCTDataGenerator(), logger)),
                 (configuration.GetSection("SpineMRT_Report").Value, new DataSpammer<Report>(new SpineMRTDataGenerator(), logger)),
                 (configuration.GetSection("PelvisMRT_Report").Value,  new DataSpammer<Report>(new PelvisMRTDataGenerator(), logger)),
                 (configuration.GetSection("FeetMRT_Report").Value, new DataSpammer<Report>(new FeetMRTDataGenerator(), logger)),
                 (configuration.GetSection("ThoraxMRT_Report").Value, new DataSpammer<Report>(new ThoraxMRTDataGenerator(), logger)),
                 (configuration.GetSection("AbdomenMRT_Report").Value, new DataSpammer<Report>(new AbdomenMRTDataGenerator(), logger)),
                 (configuration.GetSection("NeckMRT_Report").Value, new DataSpammer<Report>(new NeckMRTDataGenerator(), logger)),
                 (configuration.GetSection("HeadkMRT_Report").Value, new DataSpammer<Report>(new HeadMRTDataGenerator(), logger))
            };

            var tasks = new List<Task>();
            WriteLine($"{DateTime.Now} Start: ");
            logger.Information("BenchStarted");
            stopwatch.Start();

            spammerTuples.ForEach(t =>
            {
                if (!string.IsNullOrEmpty(t.Item1))
                {
                    tasks.Add(Task.Run(() => t.Item2.SeedReportsAndPages(httpClient, t.Item1, numberOfReports)));
                }
            });

            WriteLine($"{ DateTime.Now} All started!");
            await Task.WhenAll(tasks);
            stopwatch.Stop();
            var time = stopwatch.ElapsedMilliseconds;
            WriteLine(time / 1000);
            logger.Information($"BenchFinished, time:{time/1000}");
            ReadKey();
        }
    }
}
