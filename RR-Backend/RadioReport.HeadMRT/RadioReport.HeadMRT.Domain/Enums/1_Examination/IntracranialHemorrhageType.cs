using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Examination
{
	public enum IntracranialHemorrhageType : byte
	{
		None = 0,

        [RadioReportId("hea_m_010518", InstanceName = nameof(ExaminationFindingType.IntracranialHemorrhage))]
        SubduralHematoma = 1,

        [RadioReportId("hea_m_010519", InstanceName = nameof(ExaminationFindingType.IntracranialHemorrhage))]
        IntraparenchymalHemorrhage = 2,

        [RadioReportId("hea_m_010520", InstanceName = nameof(ExaminationFindingType.IntracranialHemorrhage))]
        SubarachnoidHemorrhageSah = 3,

        [RadioReportId("hea_m_010523", InstanceName = nameof(ExaminationFindingType.IntracranialHemorrhage))]
        EpiduralHematoma = 4


    }
}
