using RadioReport.Common.Logic.Attributes;
using RadioReport.ShoulderMRT.Domain.Models;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum FractureNotSpecifiedType : byte
    {
        None = 0,

        [RadioReportId("sho_m_0405237", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(BonesFinding.FractureHumerusAoRatingType))]
        [RadioReportId("sho_m_0404208", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(BonesFinding.FractureClaviculaEvaluationType))]
        [RadioReportId("sho_m_0404208", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(BonesFinding.FractureScapulaEvaluationType))]
        [RadioReportId("sho_m_0404208", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(BonesFinding.AOClassificationAO12Type))]
        Remodelling = 1,

        [RadioReportId("sho_m_0405238", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(BonesFinding.FractureHumerusAoRatingType))]
        [RadioReportId("sho_m_0404209", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(BonesFinding.FractureClaviculaEvaluationType))]
        [RadioReportId("sho_m_0404209", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(BonesFinding.FractureScapulaEvaluationType))]
        [RadioReportId("sho_m_0404209", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(BonesFinding.AOClassificationAO12Type))]
        Suspected = 2
    }
}
