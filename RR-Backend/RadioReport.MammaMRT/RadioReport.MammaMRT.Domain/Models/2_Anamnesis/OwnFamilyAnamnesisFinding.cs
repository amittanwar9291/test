using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.MammaMRT.Domain.Enums;

namespace RadioReport.MammaMRT.Domain.Models
{
    public class OwnFamilyAnamnesisFinding : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("mam_m_020106")]
        public OwnFamilyAnamnesisType FindingType { get; set; }

        #region Family member
        [RadioReportId("mam_m_020203")]
        public bool IsBreastCancer { get; set; }

        [RadioReportId("mam_m_020204")]
        public BreastCarcinomaType BreastCarcinomaType { get; set; }

        [RadioReportId("mam_m_020206")]
        public int? BreastCarcinomaAge { get; set; }

        [RadioReportId("mam_m_020207")]
        public bool IsOvarianCancer { get; set; }

        [RadioReportId("mam_m_020209")]
        public int? OvarianCancerAge { get; set; }
        #endregion

        [RadioReportId("mam_m_020211", InstanceName = nameof(OwnFamilyAnamnesisType.BreastCarcinoma))]
        [RadioReportId("mam_m_020211", InstanceName = nameof(OwnFamilyAnamnesisType.BenignMammaryLesion))]
        public byte? OwnAnamnesisMonth { get; set; }

        [RadioReportId("mam_m_020212", InstanceName = nameof(OwnFamilyAnamnesisType.BreastCarcinoma))]
        [RadioReportId("mam_m_020212", InstanceName = nameof(OwnFamilyAnamnesisType.BenignMammaryLesion))]
        public int? OwnAnamnesisYear { get; set; }

        [RadioReportId("mam_m_020213", InstanceName = nameof(OwnFamilyAnamnesisType.BreastCarcinoma), IsExportable = false)]
        public MenopauseType MenopauseType { get; set; }

        [RadioReportId("mam_m_020218", InstanceName = nameof(OwnFamilyAnamnesisType.BreastCarcinoma))]
        [RadioReportId("mam_m_020218", InstanceName = nameof(OwnFamilyAnamnesisType.BenignMammaryLesion))]
        public BreastLocations BreastLocation { get; set; }
    }
}
