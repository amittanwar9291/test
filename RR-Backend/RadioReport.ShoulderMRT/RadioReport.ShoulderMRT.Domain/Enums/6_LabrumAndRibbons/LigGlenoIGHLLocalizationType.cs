using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum LigGlenoIGHLLocalizationType: byte
    {
        None = 0,

        [RadioReportId("sho_m_060314", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        HumeralHAGLLesion = 1,

        [RadioReportId("sho_m_060315", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        GlenoidalGAGLLesion = 2
    }
}
