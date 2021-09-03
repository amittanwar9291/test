using RadioReport.CardioMRT.Domain.Enums.Technology;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Models.Technology;

namespace RadioReport.CardioMRT.Domain.Models
{
    [GeneratedControllerPageModel("CardioMRT/Technology")]
	public class TechnologyPage : TechnologyMRTPageBase<CMSideEffect, Sequence, TechnologyPage>
	{
		#region CM Reinforced
		[RadioReportId("uni_y_030212")]
		public FractionationType FractionationType { get; set; }
		#endregion

		#region Sequence
		public MagneticFieldStrengthType MagneticFieldStrengthType { get; set; }

		public PharmacologicalStressType PharmacologicalStressType { get; set; }

		[RadioReportId("car_m_030505")]
		public int? DobutamineInfusionDose { get; set; }

		[RadioReportId("uni_y_030502")]
		public bool IsSusceptibilityArtifacts { get; set; }

		[RadioReportId("uni_x_030525")]
		public bool IsDarkRimArtifact { get; set; }

		[RadioReportId("uni_x_030524")]
		public ImageQualityType ImageQualityType { get; set; }
        #endregion

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.CardioMrtTechnology;
	}
}
