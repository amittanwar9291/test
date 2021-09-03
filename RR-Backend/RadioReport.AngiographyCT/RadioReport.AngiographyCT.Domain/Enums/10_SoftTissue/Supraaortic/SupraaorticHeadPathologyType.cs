using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.SoftTissue
{
    public enum SupraaorticHeadPathologyType : byte
    {
        None = 0,

        [RadioReportId("ang_c_100302", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        Fracture = 1,

        [RadioReportId("ang_c_100303", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        Mass = 2,

        [RadioReportId("ang_c_100304", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        IntracranialHemorrhage = 3,

        [RadioReportId("ang_c_100305", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        CerebralEdema = 4,

        [RadioReportId("ang_c_100306", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        Hydrocephalus = 5,

        [RadioReportId("ang_c_100307", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        FluidInMastoidCells = 6,

        [RadioReportId("ang_c_100308", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        MucosalSwellingParanasalSinus = 7,
    }
}