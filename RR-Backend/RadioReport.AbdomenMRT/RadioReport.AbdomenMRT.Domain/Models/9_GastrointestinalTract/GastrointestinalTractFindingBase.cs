using System;
using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    public class GastrointestinalTractFindingBase : FindingBase
    {

        public override string InstanceName => FindingType.ToString();

		[RadioReportId("abd_m_090106")]
        public GastrointestinalTractFindingType FindingType { get; set; }

		#region Common

		[RadioReportId("abd_m_090204", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090272", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public GastrointestinalDifferentialDiagnosisType DifferentialDiagnosisType { get; set; }

		public FormType FormType { get; set; }

		[RadioReportId("abd_m_090314", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090550", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsInvasive { get; set; }

		[RadioReportId("abd_m_090316", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090551", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsDisplacing { get; set; }

		[RadioReportId("abd_m_090317", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090552", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsOcclusive { get; set; }

		[RadioReportId("abd_m_090318", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090553", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsTransmuralSpread { get; set; }

		[RadioReportId("abd_m_090533", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_0905108", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		[RadioReportId("abd_m_090481", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public bool IsLymphadenopathy { get; set; }

		public MarginType MarginType { get; set; }

		public ContrastEnhancementQuantitativeType ContrastEnhancementQuantitativeType { get; set; }

		[RadioReportId("abd_m_09xxx1-l", InstanceName = nameof(GastrointestinalTractFinding.HomogeneityType), IsExportable = false)]
		public GastrointestinalHomogeneityType HomogeneityType { get; set; }

		[RadioReportId("abd_m_090209", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090524", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090383", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public SignalTypeExtended T1WSignalType { get; set; }

		[RadioReportId("abd_m_090211", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090526", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090385", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public SignalTypeExtended T2WSignalType { get; set; }

		#endregion

		#region GastricMass

		[RadioReportId("abd_m_090416", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		public bool IsUlceratingFinding { get; set; }

		[RadioReportId("abd_m_090417", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		public bool IsLocoregionalLymphadenopathy { get; set; }

		#endregion

		#region IntestinalMass

		public IntestinalMassExtensionType IntestinalMassExtensionType { get; set; }

		[RadioReportId("abd_m_090287", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsAdjacentFatTissue { get; set; }

		#endregion
    }
}