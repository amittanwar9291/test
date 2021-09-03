using System.Collections.Generic;
using CommandLine;

namespace RadioReport.DicomCommandlineParserMock
{
    public class Options
    {
        [Option('h', "host", HelpText = "Enter the adress to the PACS server")]
        public string Host { get; set; }

        [Option('p', "port", HelpText = "Enter the port to the PACS server")]
        public int Port { get; set; }

        [Option('a', "callingae", Required = false, HelpText = "Enter the calling application entity of the PACS server")]
        public string CallingAe { get; set; }

        [Option('c', "calledae", HelpText = "Enter the called application entity of the PACS server")]
        public string CalledAe { get; set; }

        [Option('f', "function", Required = false,
            HelpText = "Enter the function name to be executed. 'standardStudy' (default) -> standard query, 'custom' -> custom query")]
        public string Function { get; set; }

        [Option('q', "queryFields", HelpText = "Enter a list of space separated terms that should be queried for. E.g.: StudyInstanceUid:12345")]
        public IEnumerable<string> QueryFields { get; set; }

        [Option('r', "requestedFields", Required = false,
            HelpText =
                "Enter a list of space separated dicom tags to be gathered, either using the tag name (e.g. 'PatientName') or hex code (e.g. '0010:0010'). " +
                "This is only considered when using custom Function")]
        public IEnumerable<string> RequestedFields { get; set; }
    }
}
