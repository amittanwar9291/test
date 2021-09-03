using RadioReport.CardioMRT.Domain.Enums.Flaps;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;

namespace RadioReport.CardioMRT.Domain.Models
{
    public class HeartValve : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("car_m_040222")]
        public HeartValveFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("car_m_040319", InstanceName = nameof(HeartValveFindingType.AorticValve))]
        [RadioReportId("car_m_040327", InstanceName = nameof(HeartValveFindingType.MitralValve))]
        [RadioReportId("car_m_040327", InstanceName = nameof(HeartValveFindingType.PulmonaryValve))]
        [RadioReportId("car_m_040327", InstanceName = nameof(HeartValveFindingType.TricuspidValve))]
        public bool IsStenosis { get; set; }

        [RadioReportId("car_m_040322", InstanceName = nameof(HeartValveFindingType.AorticValve))]
        [RadioReportId("car_m_040328", InstanceName = nameof(HeartValveFindingType.MitralValve))]
        [RadioReportId("car_m_040328", InstanceName = nameof(HeartValveFindingType.PulmonaryValve))]
        [RadioReportId("car_m_040328", InstanceName = nameof(HeartValveFindingType.TricuspidValve))]
        public bool IsInsufficiency { get; set; }

        [RadioReportId("car_m_040325", InstanceName = nameof(HeartValveFindingType.AorticValve))]
        [RadioReportId("car_m_040333", InstanceName = nameof(HeartValveFindingType.MitralValve))]
        [RadioReportId("car_m_040333", InstanceName = nameof(HeartValveFindingType.PulmonaryValve))]
        [RadioReportId("car_m_040333", InstanceName = nameof(HeartValveFindingType.TricuspidValve))]
        public bool IsCalcification { get; set; }

        #endregion

        #region ValvaAortae

        [RadioReportId("car_m_040321", InstanceName = nameof(HeartValveFindingType.AorticValve))]
        public StenosisType StenosisType { get; set; }

        [RadioReportId("car_m_040324", InstanceName = nameof(HeartValveFindingType.AorticValve))]
        public InsufficiencyType InsufficiencyType { get; set; }

        [RadioReportId("car_m_040417", InstanceName = nameof(HeartValveFindingType.AorticValve))]
        public bool IsVariant { get; set; }

        public VariantType VariantType { get; set; }

        [RadioReportId("car_m_040422", InstanceName = nameof(HeartValveFindingType.AorticValve))]
        public ClassificationType ClassificationType { get; set; }

        [RadioReportId("car_m_040424", InstanceName = nameof(HeartValveFindingType.AorticValve))]
        public ClassificationPhenotype ClassificationPhenotype { get; set; }

        #endregion

        #region ValvaMitralis

        [RadioReportId("car_m_040329", InstanceName = nameof(HeartValveFindingType.MitralValve))]
        public bool IsQuantification { get; set; }

        [RadioReportId("car_m_040330", InstanceName = nameof(HeartValveFindingType.MitralValve))]
        public int? QuantificationInMm { get; set; }

        [RadioReportId("car_m_040332", InstanceName = nameof(HeartValveFindingType.MitralValve))]
        public bool IsSAMPhenomenon { get; set; }

        [RadioReportId("car_m_040425-l", InstanceName = nameof(RegurgitationVolumeTypeInMl), IsExportable = false)]
        public RegurgitationVolumeType RegurgitationVolumeTypeInMl { get; set; }

        [RadioReportId("car_m_040429-l", InstanceName = nameof(RegurgitationVolumeTypeInPercent), IsExportable = false)]
        public RegurgitationVolumeType RegurgitationVolumeTypeInPercent { get; set; }

        #endregion


        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(HeartValveFindingType.MitralValve) => FindingType.ToString() == customConditionId,
                _ => false
            };
    }
}
