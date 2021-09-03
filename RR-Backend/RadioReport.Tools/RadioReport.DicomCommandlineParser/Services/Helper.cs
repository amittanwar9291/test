using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using Dicom;
using Dicom.Network;
using Dicom.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using RadioReport.Common.Extensions;
using RadioReport.DicomCommandlineParser.Models;

namespace RadioReport.DicomCommandlineParser.Services
{
    public static class Helper
    {
        public static void ValidateOptions(Options options)
        {
            if (string.IsNullOrEmpty(options.Host))
            {
                Console.Error.WriteLine("PACS address is empty");
                Environment.Exit(1);
            }

            if (options.Port < 0 || options.Port > 65535)
            {
                Console.Error.WriteLine("PACS port not valid");
                Environment.Exit(1);
            }

            if (options.ScpPort < 0 || options.ScpPort > 65535)
            {
                Console.Error.WriteLine("Scp port not valid");
                Environment.Exit(1);
            }

            if (options.QueryFields.IsNullOrEmpty())
            {
                Console.Error.WriteLine("No query parameter provided");
                Environment.Exit(1);
            }
        }

        public static QueryData ParseQueryFields(IEnumerable<string> queryFields)
        {
            var studyQueryData = new QueryData();
            var studyQueryDataProperties = typeof(QueryData).GetProperties();
            foreach (var property in studyQueryDataProperties)
            {
                foreach (var queryField in queryFields)
                {
                    var split = queryField.Split(':');
                    if (split.Length != 2) continue;

                    if (property.Name.Equals(split[0], StringComparison.OrdinalIgnoreCase))
                    {
                        property.SetValue(studyQueryData, split[1]);
                    }
                }
            }

            if (studyQueryDataProperties
                .Select(property => property.GetValue(studyQueryData))
                .Any(value => value != null)) return studyQueryData;

            Console.Error.WriteLine("No query fields provided");
            Environment.Exit(1);

            return studyQueryData;
        }

        public static void AddRequestedFields(DicomMessage request, IEnumerable<string> requestedFields)
        {
            var dicomTagProvider = new DicomTagProvider();
            var errorList = new List<string>();
            foreach (var keywordOrHexCode in requestedFields.Select(r => r.Trim()).Where(r => !r.IsNullOrEmpty()))
            {
                dicomTagProvider.ProvideDicomTag(keywordOrHexCode)
                    .OnSuccess(dicomTag => AddDicomTag(request, dicomTag))
                    .OnFailure(() => errorList.Add($"Requested tag name {keywordOrHexCode} is unknown"))
                    .OnException(exception =>
                    {
                        errorList.Add(exception.ToString());
                        errorList.Add($"Adding {keywordOrHexCode} to dataset failed");
                    });
            }

            if (errorList.Count <= 0) return;

            Console.Error.WriteLine(string.Join("\n", errorList));
            Environment.Exit(1);
        }

        public static void PrintAndExit()
        {
            Program.ResultDatasets.RemoveAll(dataset => dataset == null);
            var datasetJsonKeywords = JsonConvert.SerializeObject(Program.ResultDatasets, Formatting.Indented, new JsonDicomConverter(true));
            var datasetJsonHex = JsonConvert.SerializeObject(Program.ResultDatasets, Formatting.Indented, new JsonDicomConverter());
            var logs = JsonConvert.SerializeObject(Program.Logs, Formatting.Indented);
            var jsonObject = new JObject
            {
                { "keywords", JToken.Parse(datasetJsonKeywords) },
                { "hex", JToken.Parse(datasetJsonHex) },
                { "logs", JToken.Parse(logs) }
            };
            Console.OutputEncoding = Encoding.UTF8;
            Console.WriteLine(jsonObject.ToString());
            Environment.Exit(0);
        }

        private static void AddDicomTag(DicomMessage request, DicomTag tag)
        {
            if (request.Dataset.Contains(tag)) return;

            var accordingEntry = DicomDictionary.Default.FirstOrDefault(_ => _.Tag == tag);
            var vr = accordingEntry?.ValueRepresentations.First();
            if (vr?.ValueType == null) return;

            var addMethod = typeof(Helper).GetMethod(nameof(DatasetAddGeneric), BindingFlags.Static | BindingFlags.NonPublic)?.MakeGenericMethod(vr.ValueType);
            addMethod?.Invoke(null, new object[] { request, tag });
            Program.RequestedDicomTags.Add(tag);
        }

        private static void DatasetAddGeneric<T>(DicomMessage findRequest, DicomTag tag) => findRequest.Dataset.AddOrUpdate<T>(tag);
    }
}
