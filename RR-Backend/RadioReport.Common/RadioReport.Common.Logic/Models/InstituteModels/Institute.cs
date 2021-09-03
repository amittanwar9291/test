using RadioReport.Common.Enums.Models;

namespace RadioReport.Common.Logic.Models.InstituteModels
{
    public class Institute : ModelBase
    {
        public string Name { get; set; }
        public string InstituteToken { get; set; }
        public bool DuplicateExternalIdentifierAllowed { get; set; }
        public string ApiKey { get; set; }
        public ConnectionType ConnectionType { get; set; }
        public Feature Address { get; set; }
    }
}
