using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.SoftTissue
{
    public enum AbdominalLocalizationType : byte
    {
        None = 0,

        [RadioReportId("ang_c_100375", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        Liver = 1,

        [RadioReportId("ang_c_100376", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        Spleen = 2,

        [RadioReportId("ang_c_100377", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        AdrenalGlands = 3,

        [RadioReportId("ang_c_100378", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        Kidneys = 4,

        [RadioReportId("ang_c_100379", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        Pancreas = 5,

        [RadioReportId("ang_c_100380", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        Peritoneum = 6,

        [RadioReportId("ang_c_100381", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        Retroperitoneum = 7,

        [RadioReportId("ang_c_100382", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        AbdominalWall = 8,

        [RadioReportId("ang_c_100383", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        Spine = 9,

        [RadioReportId("ang_c_100384", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        Uterus = 10,

        [RadioReportId("ang_c_100385", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        Ovaries = 11,

        [RadioReportId("ang_c_100386", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        Prostate = 12,

        [RadioReportId("ang_c_100387", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        UrinaryBladder = 13,
    }
}