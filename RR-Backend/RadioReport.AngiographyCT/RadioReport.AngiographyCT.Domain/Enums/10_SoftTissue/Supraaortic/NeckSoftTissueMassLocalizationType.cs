using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.SoftTissue
{
    public enum NeckSoftTissueMassLocalizationType : byte
    {
        None = 0,

        [RadioReportId("ang_c_100502", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        MusculatureOfTheFloorOfTheMouth = 1,

        [RadioReportId("ang_c_100503", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        ParotidGland = 2,

        [RadioReportId("ang_c_100504", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        SubmandibularGland = 3,

        [RadioReportId("ang_c_100505", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        Pharynx = 4,

        [RadioReportId("ang_c_100506", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        Larynx = 5,

        [RadioReportId("ang_c_100507", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        ThyroidGland = 6,

        [RadioReportId("ang_c_100508", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        CervicalSpine = 7,

        [RadioReportId("ang_c_100509", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        CervicalMuscles = 8,
    }
}