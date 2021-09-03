using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.MammaMX.Domain.Enums;
using System;

namespace RadioReport.MammaMX.Domain.Models
{
    public class LymphNodesFinding : FindingBase
    {
        [RadioReportId("mam_mx_080106")]
        public LymphNodesFindingType FindingType { get; set; }

		[RadioReportId("mam_mx_080203")]
		public bool IsRight { get; set; }

		[RadioReportId("mam_mx_080312", InstanceName = nameof(LymphNodesFindingType.IntramammaryLymphNode))]
        [RadioReportId("mam_mx_080401")]
        public bool IsLeft { get; set; }

        public Guid? LeftLymphNodeDetailsId { get; set; }

        [RadioReportId("mam_mx_080401l", InstanceName = nameof(LeftLymphNodeDetails), IsExportable = false)]
        public LymphNodeDetails LeftLymphNodeDetails { get; set; }

        public Guid? RightLymphNodeDetailsId { get; set; }

        [RadioReportId("mam_mx_080203l", InstanceName = nameof(RightLymphNodeDetails), IsExportable = false)]
        public LymphNodeDetails RightLymphNodeDetails { get; set; }

        public override string InstanceName => FindingType.ToString();
    }
}
