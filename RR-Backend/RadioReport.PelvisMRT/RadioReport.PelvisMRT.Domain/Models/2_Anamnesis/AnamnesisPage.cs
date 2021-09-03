using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.PelvisMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.PelvisMRT.Domain.Models
{
    [GeneratedControllerPageModel("PelvisMRT/Anamnesis")]
    public class AnamnesisPage : PageModelBase<AnamnesisPage>
    {
        #region Anamnesis tab

        // Column one
        [RadioReportId("pel_m_020108", DecimalPlaces = 1)]
        public decimal? PSALevel { get; set; }

        [RadioReportId("pel_m_020111")]
        public byte? PSALevelTestMonth { get; set; }

        [RadioReportId("pel_m_020112")]
        public int? PSALevelTestYear { get; set; }

        [RadioReportId("pel_m_020114")]
        public byte? BiopsyMonth { get; set; }

        [RadioReportId("pel_m_020115")]
        public int? BiopsyYear { get; set; }

        // Column two
        [RadioReportId("pel_m_020202")]
        public bool IsTherapy { get; set; }

        [RadioReportId("pel_m_020203")]
        public bool IsRadiotherapy { get; set; }

        [RadioReportId("pel_m_020208")]
        public bool IsHormoneAblative { get; set; }

        [RadioReportId("pel_m_020203-l", InstanceName = nameof(RadiotherapyContinueType), IsExportable = false)]
        public TherapieContinueType RadiotherapyContinueType { get; set; }

        [RadioReportId("pel_m_020206")]
        public byte? RadiotherapyMonth { get; set; }
        
        [RadioReportId("pel_m_020207")]
        public int? RadiotherapyYear { get; set; }

        [RadioReportId("pel_m_020208-l", InstanceName = nameof(HormoneAblativeContinueType), IsExportable = false)]
        public TherapieContinueType HormoneAblativeContinueType { get; set; }

        [RadioReportId("pel_m_020211")]
        public byte? HormoneAblativeMonth { get; set; }

        [RadioReportId("pel_m_020212")]
        public int? HormoneAblativeYear { get; set; }

        // Column three
        [RadioReportId("pel_m_020302")]
        public bool IsNeoadjuvantTherapy { get; set; }

        [RadioReportId("pel_m_020302-l", InstanceName = nameof(NeoadjuvantTherapyContinueType), IsExportable = false)]
        public TherapieContinueType NeoadjuvantTherapyContinueType { get; set; }

        [RadioReportId("pel_m_020305")]
        public byte? NeoadjuvantTherapyMonth { get; set; }

        [RadioReportId("pel_m_020306")]
        public int? NeoadjuvantTherapyYear { get; set; }

        [RadioReportId("pel_m_020307")]
        public bool IsNeoadjuvantTherapyRadiotherapy { get; set; }

        [RadioReportId("pel_m_020308")]
        public bool IsNeoadjuvantTherapyChemotherapy { get; set; }

        // Column four
        public ParityType ParityType { get; set; }

        [RadioReportId("pel_m_020407")]
        public bool IsHypermenorrhea { get; set; }

        [RadioReportId("pel_m_020408")]
        public bool IsMenorrhagia { get; set; }

        [RadioReportId("pel_m_020409")]
        public bool IsMetrorrhagia { get; set; }

        // Column five
        [RadioReportId("pel_m_020502")]
        public bool IsCryptorchidismRight { get; set; }

        [RadioReportId("pel_m_020503")]
        public bool IsCryptorchidismLeft { get; set; }

        [RadioReportId("pel_m_020504")]
        public bool IsWeightChange { get; set; }

        public WeightChangeType WeightChangeType { get; set; }

        #endregion Anamnesis tab

        #region Common
        public IEnumerable<ClinicFinding> ClinicFindings { get; set; }

        public IEnumerable<PreviousOperationFinding> PreviousOperationFindings { get; set; }

        [RadioReportId("pel_m_020509")]
        public byte? PrevExaminationMonth { get; set; }

        [RadioReportId("pel_m_020510")]
        public int? PrevExaminationYear { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.PelvisMrtAnamnesis;
        #endregion
    }
}
