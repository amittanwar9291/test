using System.Collections.Generic;
using CommandLine;

namespace RadioReport.DicomCommandlineParser
{
    public class Options
    {
        [Option('h', "host", Required = true, HelpText = "Enter the ip address to the PACS server")]
        public string Host { get; set; }

        [Option('p', "port", Required = true, HelpText = "Enter the port to the PACS server")]
        public int Port { get; set; }

        [Option('a', "callingae", Required = false, HelpText = "Enter the calling AE title (client)")]
        public string CallingAe { get; set; }

        [Option('c', "calledae", Required = true, HelpText = "Enter the called AE title (PACS server)")]
        public string CalledAe { get; set; }

        [Option('f', "function", Required = false,
            HelpText = "Enter the function name to be executed. 'standardStudy' (default) -> standard query, 'custom' -> custom query")]
        public string Function { get; set; }

        [Option('t', "request", Required = false, HelpText = "Enter the type of request to be sent. 'cfind', 'cget' or 'cmove'")]
        public string Request { get; set; }

        [Option('s', "scpport", Required = false, HelpText = "Enter the scp port for store requests reception")]
        public int ScpPort { get; set; }

        [Option('q', "queryFields", Required = true,
            HelpText = "Enter a list of space separated terms that should be queried for. E.g.: StudyInstanceUid:12345")]
        public IEnumerable<string> QueryFields { get; set; }

        [Option('r', "requestedFields", Required = false,
            HelpText =
                "Enter a list of space separated dicom tags to be gathered, either using the tag name (e.g. 'PatientName') or hex code (e.g. '0010:0010'). " +
                "This is only considered when using custom Function")]
        public IEnumerable<string> RequestedFields { get; set; }
    }
}
