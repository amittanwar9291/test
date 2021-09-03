using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.PelvisMRT.Domain.Enums.LymphNodes;

namespace RadioReport.PelvisMRT.Domain.Models
{
    public class LymphNodesFinding : FindingWithImageBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("pel_m_110106")]
        public LymphNodesFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("pel_m_110203")]
        public LocalizationTypes LocalizationType { get; set; }

        [RadioReportId("pel_m_110205")]
        public bool Is12to2 { get; set; }

        [RadioReportId("pel_m_110206")]
        public bool Is2to4oclock { get; set; }

        [RadioReportId("pel_m_110207")]
        public bool Is4to6oclock { get; set; }

        [RadioReportId("pel_m_110208")]
        public bool Is6to8oclock { get; set; }

        [RadioReportId("pel_m_110209")]
        public bool Is8to10oclock { get; set; }

        [RadioReportId("pel_m_110210")]
        public bool Is10to12oclock { get; set; }

        public FormType FormType { get; set; }

        [RadioReportId("pel_m_110305")]
        public int? MaxShortAxisDiameter { get; set; }

        [RadioReportId("uni_11_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_11_005")]
        public string PictureNumber { get; set; }

        [RadioReportId("uni_11_007", InstanceName = "PelvisMRT.LymphNodesFinding", IsExportable = false)]
        public override ImageFile UploadedImageFile { get; set; }

        #endregion

        #region Pathological

        public LimitationType LimitationType { get; set; }

        #endregion
    }
}
