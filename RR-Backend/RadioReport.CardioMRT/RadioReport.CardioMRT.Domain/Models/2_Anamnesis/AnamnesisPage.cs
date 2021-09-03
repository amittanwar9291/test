using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.CardioMRT.Domain.Enums.Anamnesis;
using System.Collections.Generic;
using RadioReport.CardioMRT.Domain.Models.Anamnesis;

namespace RadioReport.CardioMRT.Domain.Models
{
    [GeneratedControllerPageModel("CardioMRT/Anamnesis")]
	public class AnamnesisPage : PageModelBase<AnamnesisPage>
	{

		[RadioReportId("car_m_020503")]
		public bool IsMRIPreExamination { get; set; }

		[RadioReportId("car_m_020504")]
		public byte? MonthOfMRIPreExamination { get; set; }

		[RadioReportId("car_m_020505")]
		public int? YearOfMRIPreExamination { get; set; }

		public IEnumerable<IndicationFinding> IndicationFindings { get; set; }

		public IEnumerable<InterventionOrPreOpsFinding> InterventionOrPreOpsFindings { get; set; }

		[RadioReportId("car_m_020112")]
		public bool IsLaboratoryParameters { get; set; }

		public UnitType UnitType { get; set; }

		[RadioReportId("car_m_020116")]
		public int? TotalCholesterolAmount { get; set; }

		[RadioReportId("car_m_020118")]
		public int? HDLCholesterolAmount { get; set; }

		[RadioReportId("car_m_020120")]
		public int? LDLCholesterolAmount { get; set; }

		[RadioReportId("car_m_020122")]
		public int? TriglyceridesAmount { get; set; }

		[RadioReportId("car_m_020124")]
		public byte? HematocritInPercent { get; set; }

		[RadioReportId("car_m_020227")]
		public bool IsNicotineAbuse { get; set; }

		[RadioReportId("car_m_020228")]
		public bool IsDiabetesMellitus { get; set; }

		[RadioReportId("car_m_020229")]
		public bool IsRenalInsufficiency { get; set; }

		[RadioReportId("car_m_020231")]
		public int? EGFRInMlMin { get; set; }

		[RadioReportId("car_m_020233")]
		public bool IsPositiveFamilyHistory { get; set; }

		[RadioReportId("car_m_020234")]
		public bool IsArterialHypertension { get; set; }

		[RadioReportId("car_m_020238")]
		public bool IsCurrentAntihypertensiveTherapy { get; set; }

		[RadioReportId("car_m_020236")]
		public int? SystolicbloodpressureInMmHg { get; set; }

		[RadioReportId("car_m_020310")]
		public bool IsEscScore { get; set; }

		[RadioReportId("car_m_020307")]
		public byte? EscScore { get; set; }

		[RadioReportId("car_m_020309")]
		public EscScoreType EscScoreType { get; set; }

		[RadioReportId("car_m_020416")]
		public bool IsProcamScore { get; set; }

		[RadioReportId("car_m_020418")]
		public float? ProcamScore { get; set; }

		public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.CardioMrtAnamnesis;
	}
}
