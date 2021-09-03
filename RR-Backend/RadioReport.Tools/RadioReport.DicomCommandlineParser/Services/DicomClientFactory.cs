using System;
using Dicom.Network.Client;
using Newtonsoft.Json;
using RadioReport.DicomCommandlineParser.Enums;
using RadioReport.DicomCommandlineParser.Models;

namespace RadioReport.DicomCommandlineParser.Services
{
    public static class DicomClientFactory
    {
        public static DicomClient CreateClient(QueryRequest queryRequest, PacsConfig pacsConfig)
        {
            var callingAe = string.IsNullOrEmpty(pacsConfig.CallingAe) ? GetCallingAeDefault(queryRequest) : pacsConfig.CallingAe;
            var client = new DicomClient(pacsConfig.Host, pacsConfig.Port, false, callingAe, pacsConfig.CalledAe);
            client.NegotiateAsyncOps();

            client.StateChanged += (sender, args) => Program.Logs.Add($"New state: {args.NewState}");
            client.AssociationAccepted += (sender, args) => Program.Logs.Add("Association accepted");
            client.AssociationRejected += (sender, args) =>
            {
                Console.Error.WriteLine($"Association was rejected. Rejected Reason:{args.Reason}");
                Environment.Exit(1);
            };
            client.RequestTimedOut += (sender, args) =>
            {
                Console.Error.WriteLine($"Request was timed out. Request: {JsonConvert.SerializeObject(args.Request)}, Timeout: {args.Timeout}");
                Environment.Exit(1);
            };
            client.AssociationReleased += (sender, args) =>
            {
                if (queryRequest != QueryRequest.CMove)
                {
                    Helper.PrintAndExit();
                }
            };

            return client;
        }

        private static string GetCallingAeDefault(QueryRequest queryRequest) =>
            queryRequest switch
            {
                QueryRequest.CFind => Consts.FindScu,
                QueryRequest.CGet => Consts.GetScu,
                QueryRequest.CMove => Consts.MoveScu,
                _ => throw new ArgumentOutOfRangeException($"Invalid query request {queryRequest}")
            };
    }
}
