using System;
using System.IO;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using CommandLine;

namespace RadioReport.DicomCommandlineParserMock
{
    class Program
    {
        static void Main(string[] args)
        {
            Parser.Default.ParseArguments<Options>(args).WithParsed(options =>
            {
                if (!Enum.TryParse<QueryFunction>(options.Function, true, out var queryFunction))
                {
                    Console.Error.WriteLine("Invalid Function requested");
                    Environment.Exit(1);
                }

                var fileName = string.Empty;
                switch (queryFunction)
                {
                    case QueryFunction.StandardStudy:
                        fileName = "studies_of_patient.json";
                        break;
                    case QueryFunction.StandardPatient:
                        fileName = "patient.json";
                        break;
                    case QueryFunction.CustomStudy:
                        fileName = "study.json";
                        break;
                    case QueryFunction.CustomSeries:
                        fileName = "series.json";
                        break;
                }

                if (string.IsNullOrEmpty(fileName))
                {
                    Console.Error.WriteLine("No matching query function");
                    Environment.Exit(1);
                }

                var filePath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "mockfiles", fileName);
                if (!File.Exists(filePath))
                {
                    Console.Error.WriteLine("File does not exist");
                    Environment.Exit(1);
                }

                var json = File.ReadAllText(filePath, Encoding.UTF8);
                if (string.IsNullOrEmpty(json))
                {
                    Console.Error.WriteLine("Empty json after read");
                    Environment.Exit(1);
                }

                Console.OutputEncoding = Encoding.UTF8;
                Console.WriteLine(json);
                Environment.Exit(0);
            });
            while (true)
            {
                Task.Delay(1000);
            }
        }
    }
}
