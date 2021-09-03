using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.NeckMRT.Domain.Enums.Indication;

namespace RadioReport.NeckMRT.Domain.Models
{
    public class Indication : FindingBase
    {
        public override string InstanceName => IndicationType.ToString();

        [RadioReportId("nec_m_020105")]
        public IndicationType IndicationType { get; set; }

        #region Common

        [RadioReportId("nec_m_020209", InstanceName = nameof(IndicationType.RecurrentLaryngealNerveParalysis))]
        [RadioReportId("nec_m_020209", InstanceName = nameof(IndicationType.VenousThrombosis))]
        [RadioReportId("nec_m_020230", InstanceName = nameof(IndicationType.Mass))]

        public bool IsRight { get; set; }

        [RadioReportId("nec_m_020210", InstanceName = nameof(IndicationType.RecurrentLaryngealNerveParalysis))]
        [RadioReportId("nec_m_020210", InstanceName = nameof(IndicationType.VenousThrombosis))]
        [RadioReportId("nec_m_020231", InstanceName = nameof(IndicationType.Mass))]
        public bool IsLeft { get; set; }

        #endregion
        
        #region Dysphagia

        [RadioReportId("nec_m_020202", InstanceName = nameof(IndicationType.Dysphagia))]
        public bool IsSolidFood { get; set; }

        [RadioReportId("nec_m_020203", InstanceName = nameof(IndicationType.Dysphagia))]
        public bool IsLiquids { get; set; }

        [RadioReportId("nec_m_020204", InstanceName = nameof(IndicationType.Dysphagia))]
        public bool IsStatusPostAspiration { get; set; }

        #endregion

        #region Goiter

        public GoiterType GoiterType { get; set; }

        public MetabolismType MetabolismType { get; set; }

        #endregion
        
        #region Mass
        
        [RadioReportId("nec_m_020224", InstanceName = nameof(IndicationType.Mass))]
        public bool IsNasopharynx { get; set; }
        
        [RadioReportId("nec_m_020225", InstanceName = nameof(IndicationType.Mass))]
        public bool IsOropharynx { get; set; }
        
        [RadioReportId("nec_m_020226", InstanceName = nameof(IndicationType.Mass))]
        public bool IsHypopharynx { get; set; }
        
        [RadioReportId("nec_m_020227", InstanceName = nameof(IndicationType.Mass))]
        public bool IsLarynx { get; set; }
        
        [RadioReportId("nec_m_020228", InstanceName = nameof(IndicationType.Mass))]
        public bool IsParotidSpace { get; set; }

        [RadioReportId("nec_m_020233", InstanceName = nameof(IndicationType.Mass))]
        public TumorEntityType TumorEntityType { get; set; }

        [RadioReportId("nec_m_020235", InstanceName = nameof(IndicationType.Mass))]
        public DetailsType DetailsType { get; set; }

        #endregion
        
        #region PostoperativeImagingAndStatusPostTrauma

		[RadioReportId("nec_m_020238", InstanceName = nameof(IndicationType.PostoperativeImaging))]
		[RadioReportId("nec_m_020238", InstanceName = nameof(IndicationType.StatusPostTrauma))]
        public byte MonthOfPostoperativeImaging { get; set; }
		
		[RadioReportId("nec_m_020239", InstanceName = nameof(IndicationType.PostoperativeImaging))]
		[RadioReportId("nec_m_020239", InstanceName = nameof(IndicationType.StatusPostTrauma))]
        public int YearOfPostoperativeImaging { get; set; }

        #endregion
        
        #region Abscess

        public AbscessType AbscessType { get; set; }
        
        #endregion
        
        #region ArterialPathology

        public ArterialPathologyType ArterialPathologyType { get; set; }
        
        #endregion
    }
}