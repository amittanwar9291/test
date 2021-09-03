using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.SpineCT.Domain.Enums.Summary;

namespace RadioReport.SpineCT.Domain.Models
{
    [GeneratedControllerPageModel("SpineCT/Summary")]
    public class SummaryPage : PageModelBase<SummaryPage>
    {
        [RadioReportId("spi_c_100104")]
        public bool IsComplementaryImaging { get; set; }

        [RadioReportId("spi_c_100107")]
        public bool IsMRTCervicalSpine { get; set; }

        [RadioReportId("spi_c_100108")]
        public bool IsMRTThoracicSpine { get; set; }

        [RadioReportId("spi_c_100109")]
        public bool IsMRTLumbarSpine { get; set; }

        [RadioReportId("spi_c_100110")]
        public bool IsMRTSacroiliacJoint { get; set; }

        [RadioReportId("spi_c_100111")]
        public bool IsWithIVContrastAgent { get; set; }

        [RadioReportId("spi_c_100113")]
        public bool IsPETCT { get; set; }
        
        [RadioReportId("spi_c_100114")]
        public bool IsBoneScintigraphy { get; set; }

        [RadioReportId("spi_c_100201")]
        public bool IsConsultationNeurology { get; set; }

        [RadioReportId("spi_c_100202")]
        public bool IsConsultationNeurosurgery { get; set; }

        [RadioReportId("spi_c_100203")]
        public bool IsConsultationOrthopedics { get; set; }

        [RadioReportId("spi_c_100204")]
        public bool IsConsultationPainTherapist { get; set; }

        [RadioReportId("spi_c_100205")]
        public bool IsPainTherapyInterventional { get; set; }
        
        public PainTherapyInterventionalType PainTherapyInterventionalType { get; set; }

        [RadioReportId("spi_c_100211")]
        public bool IsISGInfiltrationRight { get; set; }

        [RadioReportId("spi_c_100212")]
        public bool IsISGInfiltrationLeft { get; set; }
        
        [RadioReportId("spi_c_100213")]
        public bool IsBiopsyRecommended { get; set; }

        public FindingsDynamicsType FindingsDynamicsType { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.SpineCtSummary;
    }
}
