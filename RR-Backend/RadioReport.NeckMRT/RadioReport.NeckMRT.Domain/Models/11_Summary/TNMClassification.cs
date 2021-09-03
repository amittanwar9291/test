using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.NeckMRT.Domain.Enums.Summary;

namespace RadioReport.NeckMRT.Domain.Models
{
    public class TNMClassification: FindingBase
    {
        [RadioReportId("nec_m_110402")]
        public TNMClassificationType ClassificationType { get; set; }

        public override string InstanceName => ClassificationType.ToString();

		[RadioReportId("nec_m_110503", InstanceName = nameof(TNMClassificationType.NasopharyngealCarcinoma))]
		[RadioReportId("nec_m_110509", InstanceName = nameof(TNMClassificationType.OropharyngealCarcinoma))]
		[RadioReportId("nec_m_110513", InstanceName = nameof(TNMClassificationType.OropharyngealCarcinomaHpv))]
		[RadioReportId("nec_m_110540", InstanceName = nameof(TNMClassificationType.HypopharyngealCarcinoma))]
		[RadioReportId("nec_m_110517", InstanceName = nameof(TNMClassificationType.LaryngealCarcinoma))]
		[RadioReportId("nec_m_110521", InstanceName = nameof(TNMClassificationType.MajorSalivaryGlands))]
		[RadioReportId("nec_m_110525", InstanceName = nameof(TNMClassificationType.LipsOralCavityMinorSalivaryGlands))]
		[RadioReportId("nec_m_110529", InstanceName = nameof(TNMClassificationType.ThyroidCarcinoma))]
        public TStageType TStageType { get; set; }
        
		[RadioReportId("nec_m_110505", InstanceName = nameof(TNMClassificationType.NasopharyngealCarcinoma))]
		[RadioReportId("nec_m_110510", InstanceName = nameof(TNMClassificationType.OropharyngealCarcinoma))]
		[RadioReportId("nec_m_110514", InstanceName = nameof(TNMClassificationType.OropharyngealCarcinomaHpv))]
		[RadioReportId("nec_m_110541", InstanceName = nameof(TNMClassificationType.HypopharyngealCarcinoma))]
		[RadioReportId("nec_m_110518", InstanceName = nameof(TNMClassificationType.LaryngealCarcinoma))]
		[RadioReportId("nec_m_110522", InstanceName = nameof(TNMClassificationType.MajorSalivaryGlands))]
		[RadioReportId("nec_m_110526", InstanceName = nameof(TNMClassificationType.LipsOralCavityMinorSalivaryGlands))]
		[RadioReportId("nec_m_110530", InstanceName = nameof(TNMClassificationType.ThyroidCarcinoma))]
        public NStageType NStageType { get; set; }

		[RadioReportId("nec_m_110507", InstanceName = nameof(TNMClassificationType.NasopharyngealCarcinoma))]        
		[RadioReportId("nec_m_110511", InstanceName = nameof(TNMClassificationType.OropharyngealCarcinoma))]        
		[RadioReportId("nec_m_110515", InstanceName = nameof(TNMClassificationType.OropharyngealCarcinomaHpv))]        
		[RadioReportId("nec_m_110542", InstanceName = nameof(TNMClassificationType.HypopharyngealCarcinoma))]        
		[RadioReportId("nec_m_110519", InstanceName = nameof(TNMClassificationType.LaryngealCarcinoma))]        
		[RadioReportId("nec_m_110523", InstanceName = nameof(TNMClassificationType.MajorSalivaryGlands))]        
		[RadioReportId("nec_m_110527", InstanceName = nameof(TNMClassificationType.LipsOralCavityMinorSalivaryGlands))]        
		[RadioReportId("nec_m_110531", InstanceName = nameof(TNMClassificationType.ThyroidCarcinoma))]        
		[RadioReportId("nec_m_110538", InstanceName = nameof(TNMClassificationType.CervicalLNsInCupSyndrome))]        
        public MStageType MStageType { get; set; }
        
		[RadioReportId("nec_m_110535", InstanceName = nameof(TNMClassificationType.CervicalLNsInCupSyndrome))]        
        public NStageHPVMinusType NStageHPVMinusType { get; set; }
        
		[RadioReportId("nec_m_110537", InstanceName = nameof(TNMClassificationType.CervicalLNsInCupSyndrome))]        
        public NStageHPVPlusType NStageHPVPlusType { get; set; }

		[RadioReportId("nec_m_110533", InstanceName = nameof(TNMClassificationType.CervicalLNsInCupSyndrome))]
		public bool IsT0 { get; set; }
    }
}