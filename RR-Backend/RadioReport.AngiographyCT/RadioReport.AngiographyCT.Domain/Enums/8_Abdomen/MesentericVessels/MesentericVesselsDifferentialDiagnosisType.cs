using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Abdomen
{
    public enum MesentericVesselsDifferentialDiagnosisType : byte
    {
        None = 0,

        [RadioReportId("ang_c_080444", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        FibromuscularDysplasia = 1,

        [RadioReportId("ang_c_080479", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        Pseudoaneurysm = 2,
    }
}
