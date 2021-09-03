using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Examination
{
    public enum HeadacheCourseType : byte
    {
        None = 0,

        [RadioReportId("hea_c_0105115", InstanceName = nameof(ExaminationFindingType.Headache))]
        NewOnset = 1,

        [RadioReportId("hea_c_0105116", InstanceName = nameof(ExaminationFindingType.Headache))]
        Progressive = 2
    }
}