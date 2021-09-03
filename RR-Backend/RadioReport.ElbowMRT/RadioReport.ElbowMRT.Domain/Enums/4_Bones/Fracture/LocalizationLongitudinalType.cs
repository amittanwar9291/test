using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Bones
{
    public enum LocalizationLongitudinalType : byte
    {
        None = 0,

        [RadioReportId("elb_m_0404105", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealRadius) + nameof(AoClassificationType.SimpleFracture))]
        [RadioReportId("elb_m_0404112", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealRadius) + nameof(AoClassificationType.WedgeFracture))]
        [RadioReportId("elb_m_0404127", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealUlna) + nameof(AoClassificationType.SimpleFracture))]
        [RadioReportId("elb_m_0404133", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealUlna) + nameof(AoClassificationType.WedgeFracture))]
        ProximalThird = 1,

        [RadioReportId("elb_m_0404106", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealRadius) + nameof(AoClassificationType.SimpleFracture))]
        [RadioReportId("elb_m_0404113", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealRadius) + nameof(AoClassificationType.WedgeFracture))]
        [RadioReportId("elb_m_0404128", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealUlna) + nameof(AoClassificationType.SimpleFracture))]
        [RadioReportId("elb_m_0404134", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealUlna) + nameof(AoClassificationType.WedgeFracture))]
        MiddleThird = 2,

        [RadioReportId("elb_m_0404107", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealRadius) + nameof(AoClassificationType.SimpleFracture))]
        [RadioReportId("elb_m_0404114", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealRadius) + nameof(AoClassificationType.WedgeFracture))]
        [RadioReportId("elb_m_0404129", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealUlna) + nameof(AoClassificationType.SimpleFracture))]
        [RadioReportId("elb_m_0404135", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealUlna) + nameof(AoClassificationType.WedgeFracture))]
        DistalThird = 3,

        [RadioReportId("elb_m_0404119", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealRadius))]
        [RadioReportId("elb_m_0404139", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealUlna))]
        ProximalDiaMetaphyseal = 4,

        [RadioReportId("elb_m_0404120", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealRadius))]
        [RadioReportId("elb_m_0404140", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealUlna))]
        Diaphyseal = 5,

        [RadioReportId("elb_m_0404121", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealRadius))]
        [RadioReportId("elb_m_0404141", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealUlna))]
        DistalDiaMetaphyseal = 6
    }
}