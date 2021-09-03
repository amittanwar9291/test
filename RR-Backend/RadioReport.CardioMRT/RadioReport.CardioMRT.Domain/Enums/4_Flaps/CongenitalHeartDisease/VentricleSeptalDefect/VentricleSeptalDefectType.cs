using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.Flaps
{
    public enum VentricleSeptalDefectType : byte
    {
		None = 0,

        [RadioReportId("car_m_040345", InstanceName = nameof(CongenitalHeartDiseaseFindingType.VentricleSeptalDefect))]
        Membranous = 1,

        [RadioReportId("car_m_040346", InstanceName = nameof(CongenitalHeartDiseaseFindingType.VentricleSeptalDefect))]
        Outlet = 2,

        [RadioReportId("car_m_040347", InstanceName = nameof(CongenitalHeartDiseaseFindingType.VentricleSeptalDefect))]
        Inlet = 3,

        [RadioReportId("car_m_040348", InstanceName = nameof(CongenitalHeartDiseaseFindingType.VentricleSeptalDefect))]
        Trabecular = 4
	}
}