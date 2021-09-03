using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.HandMRT.Domain.Enums;

namespace RadioReport.HandMRT.Domain.Models
{
	public class NerveCompressionFinding : FindingBase, Common.Logic.Interfaces.IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

		#region Common
		[RadioReportId("han_m_070106")]
		public NerveCompressionFindingType FindingType { get; set; }

		public PathogenesisType PathogenesisType { get; set; }

		public SecondaryPathogenesisDetailsType SecondaryPathogenesisDetailsType { get; set; }

        [RadioReportId("han_m_070405", InstanceName = nameof(NerveCompressionFindingType.CarpalTunnelSyndrome))]
        [RadioReportId("han_m_070422", InstanceName = nameof(NerveCompressionFindingType.UlnarTunnelSyndrome))]
        public bool IsOsHamatum { get; set; }

		public OsseousCauseType OsseousCauseType { get; set; }

        [RadioReportId("han_m_070504", InstanceName = nameof(NerveCompressionFindingType.CarpalTunnelSyndrome))]
        [RadioReportId("han_m_070520", InstanceName = nameof(NerveCompressionFindingType.UlnarTunnelSyndrome))]
        public bool IsHypertrophicOsteophytes { get; set; }

        public SynovialOriginType SynovialOriginType { get; set; }

        [RadioReportId("han_m_070507", InstanceName = nameof(NerveCompressionFindingType.CarpalTunnelSyndrome))]
        [RadioReportId("han_m_070523", InstanceName = nameof(NerveCompressionFindingType.UlnarTunnelSyndrome), CustomConditionName = nameof(SecondaryPathogenesisDetailsType.SynovialOrigin))]
        [RadioReportId("han_m_070532", InstanceName = nameof(NerveCompressionFindingType.UlnarTunnelSyndrome), CustomConditionName = nameof(SecondaryPathogenesisDetailsType.NeurogenicvascularOrigin))]
        public int? MaxDiameter { get; set; }

        [RadioReportId("han_m_070510", InstanceName = nameof(NerveCompressionFindingType.CarpalTunnelSyndrome))]
        [RadioReportId("han_m_070526", InstanceName = nameof(NerveCompressionFindingType.UlnarTunnelSyndrome))]
        public int? SecondLevel { get; set; }

        [RadioReportId("han_m_070513", InstanceName = nameof(NerveCompressionFindingType.CarpalTunnelSyndrome))]
        [RadioReportId("han_m_070529", InstanceName = nameof(NerveCompressionFindingType.UlnarTunnelSyndrome))]
        public int? ThirdLevel { get; set; }

        [RadioReportId("han_m_070535")]
        public int? Length { get; set; }

        public NeurogeneOriginType NeurogeneOriginType { get; set; }

        public SoftTissueOriginType SoftTissueSpaceRequirementType { get; set; }
        #endregion

        #region CarpalTunnelSyndrome
        [RadioReportId("han_m_070203")]
		public bool IsDistalFlatteningOfTheMedianNerve { get; set; } 

        [RadioReportId("han_m_070204")]
        public bool IsProminenceOfTheLigCarpiTransversum { get; set; }

        [RadioReportId("han_m_070205")]
        public bool IsCarpalTunnelEffusion { get; set; }

        [RadioReportId("han_m_070206")]
        public bool IsThickeningOfTendonSheaths { get; set; }

        [RadioReportId("han_m_070207")]
        public bool IsIncreasedT2wSignal { get; set; }

        [RadioReportId("han_m_070208")]
        public bool IsProlapseOfFlexorTendons { get; set; }

        [RadioReportId("han_m_070402")]
        public bool IsOsTrapezium { get; set; }

        [RadioReportId("han_m_070403")]
        public bool IsOsTrapezoid { get; set; }

        [RadioReportId("han_m_070404")]
        public bool IsOsCapitatum{ get; set; }

        public PostoperativePathogenesisDetailsType PostoperativePathogenesisDetailsType { get; set; }

        [RadioReportId("han_m_070417")]
        public bool IsCompleteCut { get; set; }
        #endregion

        #region UlnarTunnelSyndrome
        [RadioReportId("han_m_070210")]
        public bool IsUlnarNerveFlattening { get; set; }

        [RadioReportId("han_m_070211")]
        public bool IsIncreasedT2wSignalUlnarNerve { get; set; }

        [RadioReportId("han_m_070212")]
        public bool IsProtrusionOfCarpalLigament { get; set; }

        [RadioReportId("han_m_070213")]
        public bool IsPeritendinousCarpiTendon { get; set; }

        [RadioReportId("han_m_070214")]
        public bool IsThickeningTendonSheat { get; set; }

        [RadioReportId("han_m_070420")]
        public bool IsOsTriquetrum { get; set; }

        [RadioReportId("han_m_070421")]
        public bool IsOsPisiforme { get; set; }

        [RadioReportId("han_m_070516")]
        public bool IsHypertrophicFormation { get; set; }

        [RadioReportId("han_m_070517")]
        public bool IsPseudarthrosis { get; set; }
        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(SecondaryPathogenesisDetailsType.SynovialOrigin) => SecondaryPathogenesisDetailsType.ToString() == customConditionId,
                nameof(SecondaryPathogenesisDetailsType.NeurogenicvascularOrigin) => SecondaryPathogenesisDetailsType.ToString() == customConditionId,
                _ => false
            };
    }
}
