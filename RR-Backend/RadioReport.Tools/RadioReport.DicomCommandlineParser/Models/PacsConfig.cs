namespace RadioReport.DicomCommandlineParser.Models
{
    public class PacsConfig
    {
        public string Host { get; set; }
        public int Port { get; set; }
        public string CallingAe { get; set; }
        public string CalledAe { get; set; }
        public int ScpPort { get; set; }
    }
}
