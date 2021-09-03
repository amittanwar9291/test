using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.MammaMX.Domain.Enums;

namespace RadioReport.MammaMX.Domain.Models
{
    public class LymphNodeDetails : ModelBase, IRadioReportIdConditionEvaluator, IDeletableItem
    {
		private const string _other = "other";

		public bool IsDeleted { get; set; }
		
		// Set from parent in manager, used to conditionally set rrid depending on finding type
		public LymphNodesFindingType FindingType { get; set; }

		[RadioReportId("mam_mx_080205l", InstanceName = nameof(LymphNodesFinding.RightLymphNodeDetails), CustomConditionName = _other, IsExportable = false)]
		[RadioReportId("mam_mx_080403l", InstanceName = nameof(LymphNodesFinding.LeftLymphNodeDetails), CustomConditionName = _other, IsExportable = false)]
		public ClassificationType ClassificationType { get; set; }

		[RadioReportId("mam_mx_080211", InstanceName = nameof(LymphNodesFinding.RightLymphNodeDetails), CustomConditionName = nameof(LymphNodesFindingType.IntramammaryLymphNode))]
		[RadioReportId("mam_mx_080302", InstanceName = nameof(LymphNodesFinding.LeftLymphNodeDetails), CustomConditionName = nameof(LymphNodesFindingType.IntramammaryLymphNode))]
		[RadioReportId("mam_mx_080302", InstanceName = nameof(LymphNodesFinding.RightLymphNodeDetails), CustomConditionName = _other)]
		[RadioReportId("mam_mx_080502", InstanceName = nameof(LymphNodesFinding.LeftLymphNodeDetails), CustomConditionName = _other)]
		public int? ShortAxisDiameterInMm { get; set; }

		[RadioReportId("mam_mx_080213", InstanceName = nameof(LymphNodesFinding.RightLymphNodeDetails), CustomConditionName = nameof(LymphNodesFindingType.IntramammaryLymphNode))]
		[RadioReportId("mam_mx_080304", InstanceName = nameof(LymphNodesFinding.LeftLymphNodeDetails), CustomConditionName = nameof(LymphNodesFindingType.IntramammaryLymphNode))]
		[RadioReportId("mam_mx_080304", InstanceName = nameof(LymphNodesFinding.RightLymphNodeDetails), CustomConditionName = _other)]
		[RadioReportId("mam_mx_080504", InstanceName = nameof(LymphNodesFinding.LeftLymphNodeDetails), CustomConditionName = _other)]
		public int? LongitudinalDiameterInMm { get; set; }

		[RadioReportId("mam_mx_080215", InstanceName = nameof(LymphNodesFinding.RightLymphNodeDetails), CustomConditionName = nameof(LymphNodesFindingType.IntramammaryLymphNode))]
		[RadioReportId("mam_mx_080306", InstanceName = nameof(LymphNodesFinding.LeftLymphNodeDetails), CustomConditionName = nameof(LymphNodesFindingType.IntramammaryLymphNode))]
		[RadioReportId("mam_mx_080306", InstanceName = nameof(LymphNodesFinding.RightLymphNodeDetails), CustomConditionName = _other)]
		[RadioReportId("mam_mx_080506", InstanceName = nameof(LymphNodesFinding.LeftLymphNodeDetails), CustomConditionName = _other)]
		public bool IsDisturbedInternalArchitecture { get; set; }

		[RadioReportId("mam_mx_080216", InstanceName = nameof(LymphNodesFinding.RightLymphNodeDetails), CustomConditionName = nameof(LymphNodesFindingType.IntramammaryLymphNode))]
		[RadioReportId("mam_mx_080307", InstanceName = nameof(LymphNodesFinding.LeftLymphNodeDetails), CustomConditionName = nameof(LymphNodesFindingType.IntramammaryLymphNode))]
		[RadioReportId("mam_mx_080307", InstanceName = nameof(LymphNodesFinding.RightLymphNodeDetails), CustomConditionName = _other)]
		[RadioReportId("mam_mx_080507", InstanceName = nameof(LymphNodesFinding.LeftLymphNodeDetails), CustomConditionName = _other)]
		public bool IsHilarObliteration { get; set; }

		[RadioReportId("mam_mx_080217", InstanceName = nameof(LymphNodesFinding.RightLymphNodeDetails), CustomConditionName = nameof(LymphNodesFindingType.IntramammaryLymphNode))]
		[RadioReportId("mam_mx_080308", InstanceName = nameof(LymphNodesFinding.LeftLymphNodeDetails), CustomConditionName = nameof(LymphNodesFindingType.IntramammaryLymphNode))]
		[RadioReportId("mam_mx_080308", InstanceName = nameof(LymphNodesFinding.RightLymphNodeDetails), CustomConditionName = _other)]
		[RadioReportId("mam_mx_080508", InstanceName = nameof(LymphNodesFinding.LeftLymphNodeDetails), CustomConditionName = _other)]
		public bool IsIrregularCorticalWidth { get; set; }

		[RadioReportId("mam_mx_080218", InstanceName = nameof(LymphNodesFinding.RightLymphNodeDetails), CustomConditionName = nameof(LymphNodesFindingType.IntramammaryLymphNode))]
		[RadioReportId("mam_mx_080309", InstanceName = nameof(LymphNodesFinding.LeftLymphNodeDetails), CustomConditionName = nameof(LymphNodesFindingType.IntramammaryLymphNode))]
		[RadioReportId("mam_mx_080309", InstanceName = nameof(LymphNodesFinding.RightLymphNodeDetails), CustomConditionName = _other)]
		[RadioReportId("mam_mx_080509", InstanceName = nameof(LymphNodesFinding.LeftLymphNodeDetails), CustomConditionName = _other)]
		public bool IsIncreasedVascularization { get; set; }

		[RadioReportId("mam_mx_080219", InstanceName = nameof(LymphNodesFinding.RightLymphNodeDetails), CustomConditionName = nameof(LymphNodesFindingType.IntramammaryLymphNode))]
		[RadioReportId("mam_mx_080310", InstanceName = nameof(LymphNodesFinding.LeftLymphNodeDetails), CustomConditionName = nameof(LymphNodesFindingType.IntramammaryLymphNode))]
		[RadioReportId("mam_mx_080310", InstanceName = nameof(LymphNodesFinding.RightLymphNodeDetails), CustomConditionName = _other)]
		[RadioReportId("mam_mx_080510", InstanceName = nameof(LymphNodesFinding.LeftLymphNodeDetails), CustomConditionName = _other)]
		public bool IsCapsularInfiltration { get; set; }

		[RadioReportId("mam_mx_080220", InstanceName = nameof(LymphNodesFinding.RightLymphNodeDetails), CustomConditionName = nameof(LymphNodesFindingType.IntramammaryLymphNode))]
		[RadioReportId("mam_mx_080311", InstanceName = nameof(LymphNodesFinding.LeftLymphNodeDetails), CustomConditionName = nameof(LymphNodesFindingType.IntramammaryLymphNode))]
		[RadioReportId("mam_mx_080311", InstanceName = nameof(LymphNodesFinding.RightLymphNodeDetails), CustomConditionName = _other)]
		[RadioReportId("mam_mx_080511", InstanceName = nameof(LymphNodesFinding.LeftLymphNodeDetails), CustomConditionName = _other)]
		public bool IsLesion { get; set; }

		public bool CheckCondition(string customConditionId) =>
			customConditionId switch
			{
				nameof(LymphNodesFindingType.IntramammaryLymphNode) => FindingType == LymphNodesFindingType.IntramammaryLymphNode,
				_other => FindingType != LymphNodesFindingType.IntramammaryLymphNode && FindingType != LymphNodesFindingType.None,
				_ => false
			};
        
    }
}
