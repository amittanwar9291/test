using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.NeckMRT.Domain.Enums.Indication;

namespace RadioReport.NeckMRT.Domain.Models
{
    public class PreviousTherapy : FindingBase
    {
        public override string InstanceName => PreviousTherapyType.ToString();

        [RadioReportId("nec_m_020303")]
        public PreviousTherapyType PreviousTherapyType { get; set; }

        #region Common
        
		[RadioReportId("nec_m_020403", InstanceName = nameof(PreviousTherapyType.Tonsillectomy))]
		[RadioReportId("nec_m_020403", InstanceName = nameof(PreviousTherapyType.Laryngectomy))]
		[RadioReportId("nec_m_020403", InstanceName = nameof(PreviousTherapyType.Laryngostoma))]
		[RadioReportId("nec_m_020403", InstanceName = nameof(PreviousTherapyType.TracheostomyTube))]
		[RadioReportId("nec_m_020414", InstanceName = nameof(PreviousTherapyType.Thryoidectomy))]
		[RadioReportId("nec_m_020429", InstanceName = nameof(PreviousTherapyType.NeckDissection))]
        public byte MonthOfPreviousTherapy { get; set; }
		
		[RadioReportId("nec_m_020404", InstanceName = nameof(PreviousTherapyType.Tonsillectomy))]
		[RadioReportId("nec_m_020404", InstanceName = nameof(PreviousTherapyType.Laryngectomy))]
		[RadioReportId("nec_m_020404", InstanceName = nameof(PreviousTherapyType.Laryngostoma))]
		[RadioReportId("nec_m_020404", InstanceName = nameof(PreviousTherapyType.TracheostomyTube))]
		[RadioReportId("nec_m_020415", InstanceName = nameof(PreviousTherapyType.Thryoidectomy))]
		[RadioReportId("nec_m_020430", InstanceName = nameof(PreviousTherapyType.NeckDissection))]
        public int YearOfPreviousTherapy { get; set; }
        
        #endregion
        
        #region Thryoidectomy

        public ThryoidectomyType ThryoidectomyType { get; set; }
        
        public SideType SideType { get; set; }

        #endregion

        #region NeckDissection

        [RadioReportId("nec_m_020418", InstanceName = nameof(PreviousTherapyType.NeckDissection))]
        public bool IsNeckDissectionRight { get; set; }
        
        [RadioReportId("nec_m_020418-l", InstanceName = nameof(PreviousTherapy.NeckDissectionTypeRight), IsExportable = false)]
        public NeckDissectionType NeckDissectionTypeRight { get; set; }

        [RadioReportId("nec_m_020423", InstanceName = nameof(PreviousTherapyType.NeckDissection))]
        public bool IsNeckDissectionLeft { get; set; }

        [RadioReportId("nec_m_020423-l", InstanceName = nameof(PreviousTherapy.NeckDissectionTypeLeft), IsExportable = false)]
        public NeckDissectionType NeckDissectionTypeLeft { get; set; }

        #endregion

    }
}