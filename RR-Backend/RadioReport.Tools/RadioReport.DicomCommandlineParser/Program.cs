using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using CommandLine;
using Dicom;
using Dicom.Network;
using RadioReport.DicomCommandlineParser.Enums;
using RadioReport.DicomCommandlineParser.Models;
using RadioReport.DicomCommandlineParser.Services;
using DicomClient = Dicom.Network.Client.DicomClient;

namespace RadioReport.DicomCommandlineParser
{
    class Program
    {
        public static readonly List<string> Logs = new List<string>();
        public static readonly List<DicomDataset> ResultDatasets = new List<DicomDataset>();
        public static readonly List<DicomTag> RequestedDicomTags = new List<DicomTag>();

        static async Task Main(string[] args)
        {
            var completionSource = new TaskCompletionSource<object>();
            await Task.Run(() =>
            {
                Parser.Default.ParseArguments<Options>(args).WithParsed(async options =>
                {
                    Helper.ValidateOptions(options);

                    if (!Enum.TryParse<QueryFunction>(options.Function, true, out var queryFunction))
                    {
                        queryFunction = QueryFunction.Study;
                    }
                    Logs.Add($"Query function {queryFunction} selected");

                    if (!Enum.TryParse<QueryRequest>(options.Request, true, out var queryRequest))
                    {
                        queryRequest = QueryRequest.CFind;
                    }
                    Logs.Add($"Request type {queryRequest} selected");

                    try
                    {
                        var queryData = Helper.ParseQueryFields(options.QueryFields);
                        var pacsConfig = GetPacsConfig(options);
                        var retrieveLevel = GetRetrieveLevel(queryFunction);
                        var dicomRequest = DicomRequestFactory.CreateRequest(queryRequest, retrieveLevel, queryData, pacsConfig, options.RequestedFields);
                        var client = DicomClientFactory.CreateClient(queryRequest, pacsConfig);

                        switch (queryRequest)
                        {
                            case QueryRequest.CFind:
                            case QueryRequest.CGet:
                                await client.AddRequestAsync(dicomRequest);
                                await client.SendAsync();
                                break;
                            case QueryRequest.CMove:
                                await SendCMoveRequest(dicomRequest, client, pacsConfig);
                                break;
                            default:
                                await Console.Error.WriteLineAsync($"Unknown request {queryRequest}");
                                Environment.Exit(1);
                                break;
                        }
                    }
                    catch (Exception exception)
                    {
                        await Console.Error.WriteLineAsync(exception.ToString());
                        Environment.Exit(2);
                    }
                });

                return completionSource.Task;
            });
        }

        private static async Task SendCMoveRequest(DicomRequest request, DicomClient client, PacsConfig pacsConfig)
        {
            var completionSource = new TaskCompletionSource<object>();
            try
            {
                var timeoutToken = new CancellationTokenSource(TimeSpan.FromSeconds(Consts.CMoveRequestTimeoutSeconds));
                Task.Run(async () =>
                {
                    using var scpServer = DicomServer.Create<CStoreScp>(pacsConfig.ScpPort);
                    completionSource.SetResult(null);
                    await Task.Delay(-1, timeoutToken.Token);
                }, timeoutToken.Token);
            }
            catch (TaskCanceledException)
            {
                await Console.Error.WriteLineAsync("Scp server has been timed out");
                Environment.Exit(1);
            }
            catch (Exception exception)
            {
                await Console.Error.WriteLineAsync("Error during scp server creation: " + exception.Message);
                Environment.Exit(1);
            }

            await completionSource.Task;
            await client.AddRequestAsync(request);
            await client.SendAsync();
        }

        private static PacsConfig GetPacsConfig(Options options) =>
            new PacsConfig
            {
                Host = options.Host,
                Port = options.Port,
                CallingAe = options.CallingAe,
                CalledAe = options.CalledAe,
                ScpPort = options.ScpPort == default ? 104 : options.ScpPort
            };

        private static DicomQueryRetrieveLevel GetRetrieveLevel(QueryFunction queryFunction) =>
            queryFunction switch
            {
                QueryFunction.Patient => DicomQueryRetrieveLevel.Patient,
                QueryFunction.Study => DicomQueryRetrieveLevel.Study,
                QueryFunction.Series => DicomQueryRetrieveLevel.Series,
                _ => throw new ArgumentOutOfRangeException($"Invalid query function {queryFunction}")
            };
    }
}
