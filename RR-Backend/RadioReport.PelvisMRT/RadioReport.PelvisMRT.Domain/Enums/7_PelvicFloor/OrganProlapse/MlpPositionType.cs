using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Enums.PelvicFloor
{
    public enum MlpPositionType : byte
    {
        None = 0,

        [RadioReportId("pel_m_070323", InstanceName = nameof(PelvicFloorFinding.CraniocaudalExtensionInReferenceToMplType))]
        [RadioReportId("pel_m_0703104", InstanceName = nameof(PelvicFloorFinding.MiddleCraniocoudalExtensionMlpPositionType))]
        AboveTheMPL = 1,

        [RadioReportId("pel_m_070324", InstanceName = nameof(PelvicFloorFinding.CraniocaudalExtensionInReferenceToMplType))]
        [RadioReportId("pel_m_0703105", InstanceName = nameof(PelvicFloorFinding.MiddleCraniocoudalExtensionMlpPositionType))]
        BelowTheMPL = 2,

        [RadioReportId("pel_m_070325", InstanceName = nameof(PelvicFloorFinding.CraniocaudalExtensionInReferenceToMplType))]
        [RadioReportId("pel_m_0703106", InstanceName = nameof(PelvicFloorFinding.MiddleCraniocoudalExtensionMlpPositionType))]
        OrganEversion = 3

    }
}