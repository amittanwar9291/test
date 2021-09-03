using RadioReport.CardioMRT.Domain.Enums.Technology;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Technology;

namespace RadioReport.CardioMRT.Domain.Models
{
	public class Sequence : SequenceBase
	{
		public override string InstanceName => WeightingType.ToString();

		[RadioReportId("car_m_030302")]
		public ExaminationTechniqueType ExaminationTechniqueType { get; set; }

		[RadioReportId("uni_x_030308")]
		public SequenceType SequenceType { get; set; }
		
		[RadioReportId("uni_x_0303101")]
		public bool IsECGTriggering {get;set;}

		[RadioReportId("uni_y_030401")]
		public bool IsPostContrast { get; set; }

		[RadioReportId("uni_x_030419")]
		public bool IsSubtraction { get; set; }
	}
}
