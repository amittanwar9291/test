using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadMRT.Domain.Models;

namespace RadioReport.HeadMRT.Domain.Enums.FacialSkull
{
    public enum ChandlerClassificationFullType : byte
    {
        None = 0,

        [RadioReportId("hea_m_1102346", InstanceName = nameof(FacialSkullFinding.ChandlerClassificationLocalizationType), CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103102", InstanceName = nameof(FacialSkullFinding.ChandlerClassificationDiagnosisType), CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        TypeIPreseptalPhlegmon = 1,

        [RadioReportId("hea_m_1102347", InstanceName = nameof(FacialSkullFinding.ChandlerClassificationLocalizationType), CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103103", InstanceName = nameof(FacialSkullFinding.ChandlerClassificationDiagnosisType), CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        TypeIIPeriorbitalEdema = 2,

        [RadioReportId("hea_m_1102343", InstanceName = nameof(FacialSkullFinding.ChandlerClassificationLocalizationType), CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103104", InstanceName = nameof(FacialSkullFinding.ChandlerClassificationDiagnosisType), CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        TypeIIISubperiostealAbscess = 3,

        [RadioReportId("hea_m_1102348", InstanceName = nameof(FacialSkullFinding.ChandlerClassificationLocalizationType), CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103105", InstanceName = nameof(FacialSkullFinding.ChandlerClassificationDiagnosisType), CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        TypeIVIntraorbitalAbscess = 4,

        [RadioReportId("hea_m_1102349", InstanceName = nameof(FacialSkullFinding.ChandlerClassificationLocalizationType), CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103106", InstanceName = nameof(FacialSkullFinding.ChandlerClassificationDiagnosisType), CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        TypeVSinusCavernosusThrombosis = 5
    }
}
