using RadioReport.AbdomenMRT.Domain.Enums.LymphaticSystem;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    public class LymphNodeStationsFinding : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("abd_m_110303")]
        public LymphNodeStationsType FindingType { get; set; }

        #region InternalMammary

        [RadioReportId("abd_m_110403", InstanceName = nameof(LymphNodeStationsType.InternalMammary))]
		public bool IsInternalMammaryRight { get; set; }

		[RadioReportId("abd_m_110404", InstanceName = nameof(LymphNodeStationsType.InternalMammary))]
		public bool IsInternalMammaryLeft { get; set; }

        #endregion

        #region Diaphragmatic

		[RadioReportId("abd_m_110406", InstanceName = nameof(LymphNodeStationsType.Diaphragmatic))]
		public bool IsDiaphragmaticRight { get; set; }

		[RadioReportId("abd_m_110407", InstanceName = nameof(LymphNodeStationsType.Diaphragmatic))]
		public bool IsDiaphragmaticLeft { get; set; }

		[RadioReportId("abd_m_110503", InstanceName = nameof(LymphNodeStationsType.Diaphragmatic))]
		public bool IsRetrocrural { get; set; }

		[RadioReportId("abd_m_110504", InstanceName = nameof(LymphNodeStationsType.Diaphragmatic))]
		public bool IsInferior { get; set; }

		[RadioReportId("abd_m_110505", InstanceName = nameof(LymphNodeStationsType.Diaphragmatic))]
		public bool IsAnterior { get; set; }

		[RadioReportId("abd_m_110506", InstanceName = nameof(LymphNodeStationsType.Diaphragmatic))]
		public bool IsMiddle { get; set; }

		[RadioReportId("abd_m_110507", InstanceName = nameof(LymphNodeStationsType.Diaphragmatic))]
		public bool IsGastroesophageal { get; set; }

        #endregion

        #region Gastric

        [RadioReportId("abd_m_110409", InstanceName = nameof(LymphNodeStationsType.Gastric))]
		public bool IsGreaterCurvature { get; set; }

		[RadioReportId("abd_m_110411", InstanceName = nameof(LymphNodeStationsType.Gastric))]
		public bool IsGreaterOmentum { get; set; }

		[RadioReportId("abd_m_110412", InstanceName = nameof(LymphNodeStationsType.Gastric))]
		public bool IsGastroduodenal { get; set; }

		[RadioReportId("abd_m_110413", InstanceName = nameof(LymphNodeStationsType.Gastric))]
		public bool IsGastroepiploic { get; set; }

		[RadioReportId("abd_m_110414", InstanceName = nameof(LymphNodeStationsType.Gastric))]
		public bool IsPyloric { get; set; }

		[RadioReportId("abd_m_110508", InstanceName = nameof(LymphNodeStationsType.Gastric))]
		public bool IsLesserCurvature { get; set; }

		[RadioReportId("abd_m_110510", InstanceName = nameof(LymphNodeStationsType.Gastric))]
		public bool IsLesserOmentum { get; set; }

		[RadioReportId("abd_m_110511", InstanceName = nameof(LymphNodeStationsType.Gastric))]
		public bool IsLeftGastric { get; set; }

		[RadioReportId("abd_m_110512", InstanceName = nameof(LymphNodeStationsType.Gastric))]
		public bool IsCardioesophageal { get; set; }

		[RadioReportId("abd_m_110513", InstanceName = nameof(LymphNodeStationsType.Gastric))]
		public bool IsCommonHepaticArtery { get; set; }

		[RadioReportId("abd_m_110514", InstanceName = nameof(LymphNodeStationsType.Gastric))]
		public bool IsHepatoduodenalLigament { get; set; }

        #endregion

        #region Pancreatic

		[RadioReportId("abd_m_110416", InstanceName = nameof(LymphNodeStationsType.Pancreatic))]
		public bool IsPeripancreatic { get; set; }

		[RadioReportId("abd_m_110417", InstanceName = nameof(LymphNodeStationsType.Pancreatic))]
		public bool IsPancreaticolienal { get; set; }

		[RadioReportId("abd_m_110418", InstanceName = nameof(LymphNodeStationsType.Pancreatic))]
		public bool IsPancreaticoduodenal { get; set; }

        #endregion
    }
}