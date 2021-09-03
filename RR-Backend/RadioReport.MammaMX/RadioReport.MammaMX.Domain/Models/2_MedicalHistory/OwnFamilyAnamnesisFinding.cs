using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.MammaMX.Domain.Enums;

namespace RadioReport.MammaMX.Domain.Models
{
    public class OwnFamilyAnamnesisFinding : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("mam_mx_020106")]
        public OwnFamilyAnamnesisType FindingType { get; set; }

        #region Family member
        [RadioReportId("mam_mx_020203")]
        public bool IsBreastCarcinoma { get; set; }

        [RadioReportId("mam_mx_020204")]
        public BreastCarcinomaType BreastCarcinomaType { get; set; }

        [RadioReportId("mam_mx_020206", AlternativeTranslationSuffix = "Age")]
        public byte? BreastCarcinomaAge { get; set; }

        [RadioReportId("mam_mx_020207")]
        public bool IsOvarianCancer { get; set; }

        [RadioReportId("mam_mx_020209", AlternativeTranslationSuffix = "Age")]
        public byte? OvarianCancerAge { get; set; }
        #endregion

        [RadioReportId("mam_mx_020211", InstanceName = nameof(OwnFamilyAnamnesisType.BreastCarcinoma))]
        [RadioReportId("mam_mx_020211", InstanceName = nameof(OwnFamilyAnamnesisType.BenignBreastLesion))]
        public byte? OwnAnamnesisMonth { get; set; }

        [RadioReportId("mam_mx_020212", InstanceName = nameof(OwnFamilyAnamnesisType.BreastCarcinoma))]
        [RadioReportId("mam_mx_020212", InstanceName = nameof(OwnFamilyAnamnesisType.BenignBreastLesion))]
        public int? OwnAnamnesisYear { get; set; }

        [RadioReportId("mam_mx_020213", InstanceName = nameof(OwnFamilyAnamnesisType.BreastCarcinoma), IsExportable = false)]
        public MenopauseType MenopauseType { get; set; }

        [RadioReportId("mam_mx_020218", InstanceName = nameof(OwnFamilyAnamnesisType.BreastCarcinoma))]
        [RadioReportId("mam_mx_020218", InstanceName = nameof(OwnFamilyAnamnesisType.BenignBreastLesion))]
        public BreastLocations BreastLocation { get; set; }
    }
}
