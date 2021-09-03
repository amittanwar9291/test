using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ShoulderMRT.Domain.Enums;

namespace RadioReport.ShoulderMRT.Domain.Models
{
    public class JointAndBursaeFinding : FindingWithImageBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("sho_m_070106")]
        public JointAndBursaeFindingType FindingType { get; set; }

        #region Capsule
        public JointAndBursaePathologyType PathologyType { get; set; }

        [RadioReportId("sho_m_070301", InstanceName = nameof(JointAndBursaeFindingType.Capsule))]
        public bool IsThickeningJointCapsule { get; set; }

        [RadioReportId("sho_m_070302", InstanceName = nameof(JointAndBursaeFindingType.Capsule))]
        public bool IsThickeningLigCoracohumeraleMoreThan3 { get; set; }

        [RadioReportId("sho_m_070303", InstanceName = nameof(JointAndBursaeFindingType.Capsule))]
        public bool IsPericapsularEdema { get; set; }

        [RadioReportId("sho_m_070304", InstanceName = nameof(JointAndBursaeFindingType.Capsule))]
        public bool IsEdemaAroundRotatorInterval { get; set; }

        [RadioReportId("sho_m_070305", InstanceName = nameof(JointAndBursaeFindingType.Capsule))]
        public bool IsIncreasedCAEnhancementByRotator { get; set; }

        [RadioReportId("sho_m_070306", InstanceName = nameof(JointAndBursaeFindingType.Capsule))]
        public bool IsIncreasedCAEnhancementOfTheCapsule { get; set; }

        [RadioReportId("sho_m_070307", InstanceName = nameof(JointAndBursaeFindingType.Capsule))]
        public bool IsObliterationOfTheTriangular { get; set; }

        [RadioReportId("sho_m_070308", InstanceName = nameof(JointAndBursaeFindingType.Capsule))]
        public bool IsProliferations { get; set; }

        [RadioReportId("sho_m_070402", InstanceName = nameof(JointAndBursaeFindingType.Capsule))]
        public bool IsInsertionAnteriorJointCapsule { get; set; }

        public InsertionAnteriorType InsertionPosteriorType { get; set; }
        #endregion

        #region ArticularEffusion
        public ArticularEffusionType ArticularEffusionType { get; set; }
        #endregion

        #region Bursitis
        [RadioReportId("sho_m_070219", InstanceName = nameof(JointAndBursaeFindingType.Bursitis))]
        public bool IsBursitisSubacromial { get; set; }

        [RadioReportId("sho_m_070220", InstanceName = nameof(JointAndBursaeFindingType.Bursitis))]
        public bool IsBursitisSubdeltoide { get; set; }

        [RadioReportId("sho_m_070221", InstanceName = nameof(JointAndBursaeFindingType.Bursitis))]
        public bool IsBursitisSubscapular { get; set; }

        [RadioReportId("sho_m_070222", InstanceName = nameof(JointAndBursaeFindingType.Bursitis))]
        public bool IsSubcoracoid { get; set; }
        #endregion

        #region FreeJointBody
        [RadioReportId("sho_m_070226", InstanceName = nameof(JointAndBursaeFindingType.FreeJointBody))]
        public int? DiameterInMm { get; set; }

        [RadioReportId("uni_07_003", InstanceName = nameof(JointAndBursaeFindingType.FreeJointBody))]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_07_005", InstanceName = nameof(JointAndBursaeFindingType.FreeJointBody))]
        public string PictureNumber { get; set; }

        [RadioReportId("uni_07_007l", InstanceName = "ShoulderMRT.JointAndBursaeFinding.FreeJointBody", IsExportable = false, CustomConditionName = nameof(JointAndBursaeFindingType.FreeJointBody))]
        public override ImageFile UploadedImageFile { get; set; }

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(JointAndBursaeFindingType.FreeJointBody) => FindingType == JointAndBursaeFindingType.FreeJointBody,
                _ => false
            };

        #endregion


    }
}
