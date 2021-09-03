using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.HandMRT.Domain.Enums.Anamnesis;

namespace RadioReport.HandMRT.Domain.Models
{
    public class AnamnesisPreviousSurgeries : FindingBase
    {
        public override string InstanceName => PreviousSurgeriesType.ToString();

        [RadioReportId("han_m_020303")]
        public PreviousSurgeriesType PreviousSurgeriesType { get; set; }

        #region Common

		[RadioReportId("han_m_020403", InstanceName = nameof(PreviousSurgeriesType.RingbandPlastic))]
		[RadioReportId("han_m_020403", InstanceName = nameof(PreviousSurgeriesType.Tendinoplasty))]
		[RadioReportId("han_m_020403", InstanceName = nameof(PreviousSurgeriesType.Arthrodesis))]
		[RadioReportId("han_m_020403", InstanceName = nameof(PreviousSurgeriesType.InsertionOfAnEndoprosthesis))]
		[RadioReportId("han_m_020410", InstanceName = nameof(PreviousSurgeriesType.Arthroplasty))]
		[RadioReportId("han_m_020403", InstanceName = nameof(PreviousSurgeriesType.Osteosynthesis))]
        public byte MonthOfSurgery { get; set; }
		
        [RadioReportId("han_m_020404", InstanceName = nameof(PreviousSurgeriesType.RingbandPlastic))]
		[RadioReportId("han_m_020404", InstanceName = nameof(PreviousSurgeriesType.Tendinoplasty))]
		[RadioReportId("han_m_020404", InstanceName = nameof(PreviousSurgeriesType.Arthrodesis))]
		[RadioReportId("han_m_020404", InstanceName = nameof(PreviousSurgeriesType.InsertionOfAnEndoprosthesis))]
		[RadioReportId("han_m_020411", InstanceName = nameof(PreviousSurgeriesType.Arthroplasty))]
		[RadioReportId("han_m_020404", InstanceName = nameof(PreviousSurgeriesType.Osteosynthesis))]
        public int YearOfSurgery { get; set; }

        #endregion

        #region Arthroplasty
		
        [RadioReportId("han_m_020406", InstanceName = nameof(PreviousSurgeriesType.Arthroplasty))]
        public bool IsAbductorPollicisLongusTendonPlastic { get; set; }
		
        [RadioReportId("han_m_020407", InstanceName = nameof(PreviousSurgeriesType.Arthroplasty))]
        public bool IsCartilageTransplantation { get; set; }
		
        [RadioReportId("han_m_020408", InstanceName = nameof(PreviousSurgeriesType.Arthroplasty))]
        public bool IsTrapezectomy { get; set; }

        #endregion
    }
}