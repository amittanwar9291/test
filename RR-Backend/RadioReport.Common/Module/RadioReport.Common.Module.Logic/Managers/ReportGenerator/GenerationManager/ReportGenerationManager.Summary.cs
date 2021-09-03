using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using static MoreLinq.Extensions.ForEachExtension;

namespace RadioReport.Common.Module.Logic.Managers.ReportGenerator
{
    public partial class ReportGenerationManager
    {
        private void PrepareReportSummary(ReportSchema reportSchema, ReportResult reportResult)
        {
            GenerateSummary(reportSchema, reportResult);
        }

        private void GenerateSummary(ReportSchema reportSchema, ReportResult reportResult)
        {
            var newSummary = _documentGenerator.GenerateReportSummary(reportSchema, reportResult);

            if (reportResult.ReportSummary is null)
            {
                reportResult.ReportSummary = new List<ReportSummaryModel>();
                reportResult.ReportSummary.AddRange(newSummary);
            }
            else if (CompareSummaryChanges(reportResult, newSummary))
            {
                var manualSummary = GetManualSummaryBackup(reportResult);
                reportResult.ReportSummary.Clear();
                reportResult.ReportSummary.AddRange(newSummary);
                RestoreManualSummaryBackup(manualSummary, reportResult);
            }
            else
            {
                UpdateSummaryTextOnly(reportResult, newSummary);
            }

            var order = 0;
            reportResult.ReportSummary.ForEach(s => s.Order = ++order);
        }

        private static bool CompareSummaryChanges(ReportResult reportResult, IEnumerable<ReportSummaryModel> newSummary)
        {
            return !newSummary.All(ns => reportResult.ReportSummary.Any(s => !s.IsAddedByUser && s.Priority == ns.Priority));
        }

        private static IEnumerable<ReportSummaryModel> GetManualSummaryBackup(ReportResult reportResult)
        {
            var manualSummary = reportResult.ReportSummary.Where(s => s.IsAddedByUser).ToList();

            var defaultElems = reportResult.ReportSummary.Where(s => !s.IsAddedByUser);
            if (defaultElems.Any() && defaultElems.Count() < reportResult.ReportSummary.Count)
            {
                var rangeStart = defaultElems.First().Order - 1;

                manualSummary.Where(m => m.Order < rangeStart + 1).ForEach(m => m.Priority = "first");

                foreach (var elem in defaultElems)
                {
                    if (elem.Order == rangeStart + 1)
                    {
                        rangeStart = elem.Order;
                    }
                    else
                    {
                        manualSummary.Where(m => m.Order > rangeStart && m.Order < elem.Order)
                            .ForEach(m => m.Priority = defaultElems.First(e => e.Order == rangeStart).Priority?.ToString());
                    }
                }

                manualSummary.Where(m => m.Order > defaultElems.Last().Order).ForEach(m => m.Priority = $"last");
            }
            return manualSummary;
        }

        private static void RestoreManualSummaryBackup(IEnumerable<ReportSummaryModel> manualSummary, ReportResult reportResult)
        {
            foreach (var manualGroup in manualSummary.GroupBy(m => m.Priority))
            {
                if (manualGroup.Key is null || manualGroup.Key == "last")
                {
                    reportResult.ReportSummary.AddRange(manualGroup);
                }
                else if (manualGroup.Key == "first")
                {
                    reportResult.ReportSummary.InsertRange(0, manualGroup);
                }
                else
                {
                    var samePriority = reportResult.ReportSummary.LastOrDefault(s => s.Priority == manualGroup.Key);
                    if (samePriority != null)
                    {
                        reportResult.ReportSummary.InsertRange(reportResult.ReportSummary.IndexOf(samePriority) + 1, manualGroup);
                    }
                    else
                    {
                        var lastSmallerIndex = reportResult.ReportSummary.FindLastIndex(s => CompareSmallerPriority(s.Priority, manualGroup.Key));
                        if (lastSmallerIndex >= 0)
                        {
                            reportResult.ReportSummary.InsertRange(lastSmallerIndex + 1, manualGroup);
                        }
                        else
                        {
                            lastSmallerIndex = reportResult.ReportSummary.FindLastIndex(s => s.Priority == "first");
                            if (lastSmallerIndex >= 0)
                            {
                                reportResult.ReportSummary.InsertRange(lastSmallerIndex + 1, manualGroup);
                            }
                            else
                            {
                                reportResult.ReportSummary.InsertRange(0, manualGroup);
                            }
                        }
                    }
                }
            }

            manualSummary.ForEach(m => m.Priority = null);
        }

        private static bool CompareSmallerPriority(string currentPriority, string priority)
        {
            try
            {
                if (currentPriority is null || currentPriority == "first" || currentPriority == "last") return false;
                
                var currentPriorityElems = SplitPriorityElems(currentPriority);
                var rangeStartElems = SplitPriorityElems(priority);

                if (currentPriorityElems.Length != 4 || rangeStartElems.Length != 4) return false;

                return currentPriorityElems[0] <= rangeStartElems[0] 
                    && currentPriorityElems[1] <= rangeStartElems[1] 
                    && currentPriorityElems[2] <= rangeStartElems[2]
                    && currentPriorityElems[3] <= rangeStartElems[3];
            }
            catch
            {
                return false;
            }
        }

        private static int[] SplitPriorityElems(string priority)
        {
            return priority.Split('_').Select(e => int.Parse(e, CultureInfo.InvariantCulture)).ToArray();
        }

        private static void UpdateSummaryTextOnly(ReportResult reportResult, IEnumerable<ReportSummaryModel> newSummary)
        {
            foreach (var entry in reportResult.ReportSummary.Where(s => !s.IsAddedByUser).ToList())
            {
                var newVersion = newSummary.FirstOrDefault(ns => ns.Priority == entry.Priority);
                if (newVersion is null)
                {
                    reportResult.ReportSummary.Remove(entry);
                }
                else
                {
                    entry.Translations = newVersion.Translations;
                }
            }
        }
    }
}
