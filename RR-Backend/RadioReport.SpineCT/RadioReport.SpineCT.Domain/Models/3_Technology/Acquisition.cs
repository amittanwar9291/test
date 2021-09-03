using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Technology;

namespace RadioReport.SpineCT.Domain.Models
{
    public class Acquisition : AcquisitionBase<Reconstruction>
    {
        [RadioReportId("spi_c_030401")]
        public bool IsCTMyelography { get; set; }
    }
}
