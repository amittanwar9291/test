using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.MammaMRT.Domain.Enums;

namespace RadioReport.MammaMRT.Domain.Models
{
    public class BonesFinding : FindingBase
    {
        [RadioReportId("mam_m_080106")]
        public BonesFindingType FindingType { get; set; }

        public BoneLocalization BoneLocalization { get; set; }

        [RadioReportId("mam_m_080205")]
        public int? MaxDiameterInMm { get; set; }

        [RadioReportId("mam_m_080208")]
        public LesionType LesionType { get; set; }

        [RadioReportId("mam_m_080209", InstanceName = nameof(BonesFindingType.VertebralBody))]
        [RadioReportId("mam_m_080221", InstanceName = nameof(BonesFindingType.Rib))]
        public bool IsTVB1 { get; set; }

        [RadioReportId("mam_m_080210", InstanceName = nameof(BonesFindingType.VertebralBody))]
        [RadioReportId("mam_m_080222", InstanceName = nameof(BonesFindingType.Rib))]
        public bool IsTVB2 { get; set; }

        [RadioReportId("mam_m_080211", InstanceName = nameof(BonesFindingType.VertebralBody))]
        [RadioReportId("mam_m_080223", InstanceName = nameof(BonesFindingType.Rib))]
        public bool IsTVB3 { get; set; }

        [RadioReportId("mam_m_080212", InstanceName = nameof(BonesFindingType.VertebralBody))]
        [RadioReportId("mam_m_080224", InstanceName = nameof(BonesFindingType.Rib))]
        public bool IsTVB4 { get; set; }

        [RadioReportId("mam_m_080213", InstanceName = nameof(BonesFindingType.VertebralBody))]
        [RadioReportId("mam_m_080225", InstanceName = nameof(BonesFindingType.Rib))]
        public bool IsTVB5 { get; set; }

        [RadioReportId("mam_m_080214", InstanceName = nameof(BonesFindingType.VertebralBody))]
        [RadioReportId("mam_m_080226", InstanceName = nameof(BonesFindingType.Rib))]
        public bool IsTVB6 { get; set; }

        [RadioReportId("mam_m_080215", InstanceName = nameof(BonesFindingType.VertebralBody))]
        [RadioReportId("mam_m_080227", InstanceName = nameof(BonesFindingType.Rib))]
        public bool IsTVB7 { get; set; }

        [RadioReportId("mam_m_080216", InstanceName = nameof(BonesFindingType.VertebralBody))]
        [RadioReportId("mam_m_080228", InstanceName = nameof(BonesFindingType.Rib))]
        public bool IsTVB8 { get; set; }

        [RadioReportId("mam_m_080217", InstanceName = nameof(BonesFindingType.VertebralBody))]
        [RadioReportId("mam_m_080229", InstanceName = nameof(BonesFindingType.Rib))]
        public bool IsTVB9 { get; set; }

        [RadioReportId("mam_m_080218", InstanceName = nameof(BonesFindingType.VertebralBody))]
        [RadioReportId("mam_m_080230", InstanceName = nameof(BonesFindingType.Rib))]
        public bool IsTVB10 { get; set; }

        [RadioReportId("mam_m_080219", InstanceName = nameof(BonesFindingType.VertebralBody))]
        [RadioReportId("mam_m_080231", InstanceName = nameof(BonesFindingType.Rib))]
        public bool IsTVB11 { get; set; }

        [RadioReportId("mam_m_080220", InstanceName = nameof(BonesFindingType.VertebralBody))]
        [RadioReportId("mam_m_080232", InstanceName = nameof(BonesFindingType.Rib))]
        public bool IsTVB12 { get; set; }

        public override string InstanceName => FindingType.ToString();
    }
}
