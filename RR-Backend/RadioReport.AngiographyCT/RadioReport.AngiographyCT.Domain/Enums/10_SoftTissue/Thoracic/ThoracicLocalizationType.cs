using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.SoftTissue
{
    public enum ThoracicLocalizationType : byte
    {
        None = 0,

        [RadioReportId("ang_c_100351", InstanceName = nameof(SoftTissueFindingType.Thoracic),
            CustomConditionName = nameof(ThoracicType) + nameof(ThoracicType.Mass))]
        [RadioReportId("ang_c_100365", InstanceName = nameof(SoftTissueFindingType.Thoracic),
            CustomConditionName = nameof(ThoracicType) + nameof(ThoracicType.Fracture))]
        Spine = 1,

        [RadioReportId("ang_c_100352", InstanceName = nameof(SoftTissueFindingType.Thoracic),
            CustomConditionName = nameof(ThoracicType) + nameof(ThoracicType.Mass))]
        [RadioReportId("ang_c_100366", InstanceName = nameof(SoftTissueFindingType.Thoracic),
            CustomConditionName = nameof(ThoracicType) + nameof(ThoracicType.Fracture))]
        Ribs = 2,

        [RadioReportId("ang_c_100353", InstanceName = nameof(SoftTissueFindingType.Thoracic),
            CustomConditionName = nameof(ThoracicType) + nameof(ThoracicType.Mass))]
        [RadioReportId("ang_c_100367", InstanceName = nameof(SoftTissueFindingType.Thoracic),
            CustomConditionName = nameof(ThoracicType) + nameof(ThoracicType.Fracture))]
        Clavicle = 3,

        [RadioReportId("ang_c_100354", InstanceName = nameof(SoftTissueFindingType.Thoracic),
            CustomConditionName = nameof(ThoracicType) + nameof(ThoracicType.Mass))]
        [RadioReportId("ang_c_100368", InstanceName = nameof(SoftTissueFindingType.Thoracic),
            CustomConditionName = nameof(ThoracicType) + nameof(ThoracicType.Fracture))]
        Sternum = 4,

        [RadioReportId("ang_c_100355", InstanceName = nameof(SoftTissueFindingType.Thoracic),
            CustomConditionName = nameof(ThoracicType) + nameof(ThoracicType.Mass))]
        [RadioReportId("ang_c_100369", InstanceName = nameof(SoftTissueFindingType.Thoracic),
            CustomConditionName = nameof(ThoracicType) + nameof(ThoracicType.Fracture))]
        Scapula = 5,

        [RadioReportId("ang_c_100356", InstanceName = nameof(SoftTissueFindingType.Thoracic),
            CustomConditionName = nameof(ThoracicType) + nameof(ThoracicType.Mass))]
        [RadioReportId("ang_c_100370", InstanceName = nameof(SoftTissueFindingType.Thoracic),
            CustomConditionName = nameof(ThoracicType) + nameof(ThoracicType.Fracture))]
        ProximalHumerus = 6,

        [RadioReportId("ang_c_100357", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        ThoracicWall = 7,

        [RadioReportId("ang_c_100358", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        Pulmonary = 8,

        [RadioReportId("ang_c_100359", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        Mediastinal = 9,
    }
}