using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.HandMRT.Domain.Enums.Anamnesis;

namespace RadioReport.HandMRT.Domain.Models
{
    public class AnamnesisIndication : FindingBase
    {
        public override string InstanceName => IndicationType.ToString();

        [RadioReportId("han_m_020105")]
        public IndicationType IndicationType { get; set; }

        #region Common
        
        public DetailsType DetailsType { get; set; }
		
        #endregion
        
        #region Trauma

		[RadioReportId("han_m_020203", InstanceName = nameof(IndicationType.Trauma))]
        public byte MonthOfTrauma { get; set; }
		
		[RadioReportId("han_m_020204", InstanceName = nameof(IndicationType.Trauma))]
        public int YearOfTrauma { get; set; }
		
		#endregion
        
        #region Fracture

        [RadioReportId("han_m_020208", InstanceName = nameof(IndicationType.Fracture))]
        public bool IsOccult { get; set; }
		
		[RadioReportId("han_m_020210", InstanceName = nameof(IndicationType.Fracture))]
        public bool IsRadius { get; set; }
		
		[RadioReportId("han_m_020211", InstanceName = nameof(IndicationType.Fracture))]
        public bool IsUlna { get; set; }
		
		[RadioReportId("han_m_020212", InstanceName = nameof(IndicationType.Fracture))]
        public bool IsCarpalia { get; set; }

		[RadioReportId("han_m_020213", InstanceName = nameof(IndicationType.Fracture))]
        public bool IsMetacarpaliaPhalanges { get; set; }

        #endregion
        
        #region LesionOfTendonsLigaments
		
        [RadioReportId("han_m_020218", InstanceName = nameof(IndicationType.LesionOfTendonsLigaments))]
        public bool IsTfccRuptureDegeneration { get; set; }

		[RadioReportId("han_m_020219", InstanceName = nameof(IndicationType.LesionOfTendonsLigaments))]
        public bool IsSlDissociation { get; set; }

		[RadioReportId("han_m_020220", InstanceName = nameof(IndicationType.LesionOfTendonsLigaments))]
        public bool IsLtDissociation { get; set; }

		[RadioReportId("han_m_020221", InstanceName = nameof(IndicationType.LesionOfTendonsLigaments))]
        public bool IsRingbandRupture { get; set; }

		[RadioReportId("han_m_020222", InstanceName = nameof(IndicationType.LesionOfTendonsLigaments))]
        public bool IsTendonRuptureOfThePhalanges { get; set; }

        #endregion
    }
}