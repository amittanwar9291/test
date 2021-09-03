using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Vessels
{
    public enum DifferentialDiagnosisType : byte
    {
        None = 0,

        [RadioReportId("hea_c_0403140")]
        TakayasuArteritis = 1,

        [RadioReportId("hea_c_0403141")]
        GiantCellArteritis = 2,

        [RadioReportId("hea_c_0403142")]
        Collagenosis = 3
    }
}
