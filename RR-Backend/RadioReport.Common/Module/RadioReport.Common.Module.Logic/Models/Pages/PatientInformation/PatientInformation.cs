using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Models;

namespace RadioReport.Common.Module.Logic.Models.Pages
{
    public class PatientInformation: ModelBase
    {
        [RadioReportId("uni_01_002")]
        public int Weight { get; set; }

        [RadioReportId("uni_01_003")]
        public int Height { get; set; }

        public BMI BMI
        {
            get { return new BMI(Weight, Height); }
        }

        public Gender Gender { get; set; }

        [RadioReportId("uni_01_009")]
        public byte? Age { get; set; }
    }
}
