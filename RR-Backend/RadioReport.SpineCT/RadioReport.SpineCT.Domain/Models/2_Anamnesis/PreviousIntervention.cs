using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.SpineCT.Domain.Enums;
using RadioReport.SpineCT.Domain.Enums.Anamnesis;

namespace RadioReport.SpineCT.Domain.Models
{
    public class PreviousIntervention : FindingBase
	{
		public override string InstanceName => PreviousInterventionType.ToString();

		[RadioReportId("spi_c_020303")]
		public PreviousInterventionType PreviousInterventionType { get; set; }

        #region Common

        [RadioReportId("spi_c_020403", InstanceName = nameof(PreviousInterventionType.Spondylodesis))]
        [RadioReportId("spi_c_020409", InstanceName = nameof(PreviousInterventionType.Laminectomy))]
        [RadioReportId("spi_c_020415", InstanceName = nameof(PreviousInterventionType.IntervertebralDiscReplacement))]
        [RadioReportId("spi_c_020409", InstanceName = nameof(PreviousInterventionType.VertebralBodyReplacement))]
        [RadioReportId("spi_c_020409", InstanceName = nameof(PreviousInterventionType.StatusPostBoneCementImplantation))]
        [RadioReportId("spi_c_020403", InstanceName = nameof(PreviousInterventionType.InterspinousSpacer))]
        public SpineLocations SpineLocation { get; set; }

        [RadioReportId("spi_c_020405", InstanceName = nameof(PreviousInterventionType.Spondylodesis))]
        [RadioReportId("spi_c_020411", InstanceName = nameof(PreviousInterventionType.Laminectomy))]
        [RadioReportId("spi_c_020405", InstanceName = nameof(PreviousInterventionType.InterspinousSpacer))]
        public bool IsRight { get; set; }

        [RadioReportId("spi_c_020406", InstanceName = nameof(PreviousInterventionType.Spondylodesis))]
        [RadioReportId("spi_c_020412", InstanceName = nameof(PreviousInterventionType.Laminectomy))]
        [RadioReportId("spi_c_020406", InstanceName = nameof(PreviousInterventionType.InterspinousSpacer))]
        public bool IsLeft { get; set; }

        #endregion

        #region StatusPostBoneCementImplantation

        public DetailsInterventionType DetailsInterventionType { get; set; }

        #endregion

        #region LumbarPuncture

        [RadioReportId("spi_c_020425", InstanceName = nameof(PreviousInterventionType.LumbarPuncture))]
        public byte MonthOfLumbarPuncture { get; set; }

        [RadioReportId("spi_c_020426", InstanceName = nameof(PreviousInterventionType.LumbarPuncture))]
        public int YearOfLumbarPuncture { get; set; }

        #endregion
    }
}
