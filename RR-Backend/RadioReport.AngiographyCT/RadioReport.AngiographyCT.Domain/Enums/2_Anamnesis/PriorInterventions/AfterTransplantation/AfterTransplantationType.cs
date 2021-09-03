using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums
{
    public enum AfterTransplantationType: byte
    {
        None = 0,
        
        [RadioReportId("ang_c_020275", InstanceName = nameof(PriorInterventionsFindingType.AfterTransplantation))]
        Liver = 1,

        [RadioReportId("ang_c_020276", InstanceName = nameof(PriorInterventionsFindingType.AfterTransplantation))]
        Kidney = 2
    }
}
