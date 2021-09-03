using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum EvaluationInterdisciplinaryBoardType : byte
    {
        None = 0,

        [RadioReportId("tho_c_090115")]
        TumorBoardReview = 1,

        [RadioReportId("tho_c_090116")]
        InterstitialLungDisease = 2
    }
}
