using System.ComponentModel.DataAnnotations;
using RadioReport.CardioMRT.Domain.Enums.LeftVentricle;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;

namespace RadioReport.CardioMRT.Domain.Models
{
	public class RelaxingTimeLocalizer : ModelBase
    {
        public MeasureType MeasureType { get; set; }

        public RelaxationTimeType QualitativeType { get; set; }

        [RadioReportId("car_m_0601105", InstanceName = nameof(LeftVentriclePage.T1Localizer))]
        [RadioReportId("car_m_0602105", InstanceName = nameof(LeftVentriclePage.T2Localizer))]
        [RadioReportId("car_m_0603105", InstanceName = nameof(LeftVentriclePage.T1GdLocalizer))]
        public SeverityType SeverityType { get; set; }

        [RadioReportId("car_m_060128", InstanceName = nameof(LeftVentriclePage.T1Localizer))]
        [RadioReportId("car_m_060228", InstanceName = nameof(LeftVentriclePage.T2Localizer))]
        [RadioReportId("car_m_060437", InstanceName = nameof(LeftVentriclePage.T1GdLocalizer))]
        public int? ValueMyocardiumInMs { get; set; }

        [RadioReportId("car_m_060133", InstanceName = nameof(LeftVentriclePage.T1Localizer))]
        [RadioReportId("car_m_060233", InstanceName = nameof(LeftVentriclePage.T2Localizer))]
        [RadioReportId("car_m_060441", InstanceName = nameof(LeftVentriclePage.T1GdLocalizer))]
        public int? ReferenceValueMyocardiumInMs { get; set; }

        [RadioReportId("car_m_060138", InstanceName = nameof(LeftVentriclePage.T1Localizer))]
        [RadioReportId("car_m_0603205", InstanceName = nameof(LeftVentriclePage.T1GdLocalizer))]
        public int? ValueBloodInMs { get; set; }

        [RadioReportId("car_m_0603207", InstanceName = nameof(LeftVentriclePage.T1GdLocalizer))]
        [DataType("decimal(18,1)")]
        public float? ECV { get; set; }

        [RadioReportId("car_m_0601103", InstanceName = nameof(LeftVentriclePage.T1Localizer))]
        [RadioReportId("car_m_0602103", InstanceName = nameof(LeftVentriclePage.T2Localizer))]
        [RadioReportId("car_m_0603103", InstanceName = nameof(LeftVentriclePage.T1GdLocalizer))]
        public bool IsLVTotal { get; set; }

		[RadioReportId("car_m_060509", InstanceName = nameof(LeftVentriclePage.T1Localizer))]
		[RadioReportId("car_m_060510", InstanceName = nameof(LeftVentriclePage.T2Localizer))]
		[RadioReportId("car_m_060512", InstanceName = nameof(LeftVentriclePage.T1GdLocalizer))]
		public VentricleAreaLocalizers Localizer { get; set; }
	}
}
