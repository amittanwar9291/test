using RadioReport.ThoraxCT.Domain.Enums;

namespace RadioReport.ThoraxCT.Domain.Models
{
    public class LungParenchymaFindingPresetRequest
    {
        public LungParenchymaFindingType FindingType { get; set; }

        public LungParenchymaDiagnosisType MainCharacteristicsDifferentialDiagnosis01 { get; set; }
    }
}
