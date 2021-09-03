using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum CardiovascularPulmonaryDiagnosisType : byte
    {
        None = 0,

        [RadioReportId("tho_c_040224", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        AcutePulmonaryEmbolism = 1,

        [RadioReportId("tho_c_040228", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        ChronicPulmonaryEmbolism = 2,

        [RadioReportId("tho_c_040229", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        PulmonaryHypertension = 3
    }
}
