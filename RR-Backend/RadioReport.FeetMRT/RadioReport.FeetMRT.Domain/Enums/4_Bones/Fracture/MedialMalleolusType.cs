using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
    public enum MedialMalleolusType : byte
    {
        None = 0,

        [RadioReportId("anc_m_040560", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SimpleDiaphysealFibulaFracture44C1))]
        [RadioReportId("anc_m_0405346", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WedgeMultifragmentaryDiaphysealFibulaFracture44C2))]
        StableSyndesmosis = 1,

        [RadioReportId("anc_m_0405344", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SimpleDiaphysealFibulaFracture44C1))]
        [RadioReportId("anc_m_0405347", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WedgeMultifragmentaryDiaphysealFibulaFracture44C2))]
        SyndesmosisUnstable = 2
    }
}