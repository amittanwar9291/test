using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HipMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.HipMRT.Domain.Models
{
    [GeneratedControllerPageModel("HipMRT/Anamnesis")]
    public class AnamnesisPage : PageModelBase<AnamnesisPage>
    {
        public IEnumerable<AnamnesisFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HipMrtAnamnesis;

        #region General

        [RadioReportId("hip_m_020303")]
        public bool IsEndoprosthesis { get; set; }

        [RadioReportId("hip_m_020304")]
        public bool IsEndoprosthesisRight { get; set; }

        [RadioReportId("hip_m_020305")]
        public bool IsEndoprosthesisLeft { get; set; }

        [RadioReportId("hip_m_020306")]
        public bool IsLabralSurgery { get; set; }

        [RadioReportId("hip_m_020307")]
        public bool IsLabralSurgeryRight { get; set; }

        [RadioReportId("hip_m_020308")]
        public bool IsLabralSurgeryLeft { get; set; }

        [RadioReportId("hip_m_020309")]
        public bool IsOffsetCorrection { get; set; }

        [RadioReportId("hip_m_020310")]
        public bool IsOffsetCorrectionRight { get; set; }

        [RadioReportId("hip_m_020311")]
        public bool IsOffsetCorrectionLeft { get; set; }

        [RadioReportId("hip_m_020312")]
        public bool IsCartilageTransplantation { get; set; }

        public CartilageTransplantationType CartilageTransplantationType { get; set; }

        [RadioReportId("hip_m_020316")]
        public bool IsCartilageTransplantationSideRight { get; set; }

        [RadioReportId("hip_m_020317")]
        public bool IsCartilageTransplantationSideLeft { get; set; }

        [RadioReportId("hip_m_020407")]
        public bool IsXRay { get; set; }

        [RadioReportId("hip_m_020409")]
        public int? YearOfXRay { get; set; }

        [RadioReportId("hip_m_020410")]
        public int? MonthOfXRay { get; set; }

        [RadioReportId("hip_m_020411")]
        public bool IsCT { get; set; }

        [RadioReportId("hip_m_020413")]
        public int? YearOfCT { get; set; }

        [RadioReportId("hip_m_020414")]
        public int? MonthOfCT { get; set; }

        [RadioReportId("hip_m_020415")]
        public bool IsMRI { get; set; }

        [RadioReportId("hip_m_020417")]
        public int? YearOfMRI { get; set; }

        [RadioReportId("hip_m_020418")]
        public int? MonthOfMRI { get; set; }

        #endregion
    }
}
