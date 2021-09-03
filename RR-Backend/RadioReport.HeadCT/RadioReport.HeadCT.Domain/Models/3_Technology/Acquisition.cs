using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Technology;

namespace RadioReport.HeadCT.Domain.Models
{
    public class Acquisition : AcquisitionBase<Reconstruction>
    {
        [RadioReportId("hea_c_030401")]
        public bool IsCTMyelography { get; set; }

        [RadioReportId("hea_c_030402")]
        public bool IsPerfusionCT { get; set; }
    }
}
