using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
    public enum MusclesAndTendonsLocalizationType : byte
    {
        None = 0,

        [RadioReportId("hip_m_070228", InstanceName = "Tendons")]
        TractusIliotibialis = 1,

        [RadioReportId("hip_m_070230", InstanceName = "Tendons")]
        RectusFemoris = 2,

        [RadioReportId("hip_m_070231", InstanceName = "Tendons")]
        GluteusMinimus = 3,

        [RadioReportId("hip_m_070232", InstanceName = "Tendons")]
        GluteusMedius = 4,

        [RadioReportId("hip_m_070237", InstanceName = "Bursitis")]
        BursaTrochanterica = 5,

        [RadioReportId("hip_m_070238", InstanceName = "Bursitis")]
        BursaIliopsoas = 6,

        [RadioReportId("hip_m_070239", InstanceName = "Bursitis")]
        BursaIschiadica = 7,

        [RadioReportId("hip_m_070240", InstanceName = "Bursitis")]
        BursaObturatorExternus = 8,

        [RadioReportId("hip_m_070241", InstanceName = "Bursitis")]
        BursaQuadratusFemoris = 9,

        [RadioReportId("hip_m_070242", InstanceName = "Bursitis")]
        SubglutealBursae = 10

    }
}
