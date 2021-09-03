using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum NonEnhancingFindingsType : byte
    {
        None = 0,

        [RadioReportId("mam_m_050510")]
        HighNativeIntraDuctalSignalInT1w = 1,

        [RadioReportId("mam_m_050511")]
        PostSurgicalFluidCollections = 2,

        [RadioReportId("mam_m_050512")]
        PosttherapeuticTrabecularThickening = 3,

        [RadioReportId("mam_m_050513")]
        ArchitecturalDistorsion = 4
    }
}
