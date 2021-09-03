using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum FractureSubType : int
    {
        None = 0,

        [RadioReportId("tho_m_070306", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        Extraarticular15_1A = 1,

        [RadioReportId("tho_m_070307", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        PartialArticular15_1B = 2,

        [RadioReportId("tho_m_070308", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        CompleteArticular15_1C = 3,

        [RadioReportId("tho_m_070311", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        Simple15_2A = 4,

        [RadioReportId("tho_m_070312", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        Wedge15_2B = 5,

        [RadioReportId("tho_m_070313", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        Multifragmentary15_2C = 6,

        [RadioReportId("tho_m_070403", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        Extraarticular15_3A = 7,

        [RadioReportId("tho_m_070404", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        PartialArticular15_3B = 8,

        [RadioReportId("tho_m_070405", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        CompleteArticular15_3C = 9,

        [RadioReportId("tho_m_070317", InstanceName = nameof(BonesFindingType.ScapularFracture))]
        CoracoidProcess14A1 = 10,

        [RadioReportId("tho_m_070318", InstanceName = nameof(BonesFindingType.ScapularFracture))]
        Acromion14A2 = 11,

        [RadioReportId("tho_m_070319", InstanceName = nameof(BonesFindingType.ScapularFracture))]
        Spine14A3 = 12,

        [RadioReportId("tho_m_070322", InstanceName = nameof(BonesFindingType.ScapularFracture))]
        ExitsTheBodyAt2OrLessPoints14B1 = 13,

        [RadioReportId("tho_m_070323", InstanceName = nameof(BonesFindingType.ScapularFracture))]
        ExitsTheBodyAt3OrMorePoints14B2 = 14,

        [RadioReportId("tho_m_070411", InstanceName = nameof(BonesFindingType.ScapularFracture))]
        Extraarticular14F0 = 15,

        [RadioReportId("tho_m_070412", InstanceName = nameof(BonesFindingType.ScapularFracture))]
        SimpleArticular14F1 = 16,

        [RadioReportId("tho_m_070413", InstanceName = nameof(BonesFindingType.ScapularFracture))]
        MultifragmentaryArticular14F2 = 17,

        [RadioReportId("tho_m_070328", InstanceName = nameof(BonesFindingType.RibFracture))]
        Extraarticular16_1A = 18,

        [RadioReportId("tho_m_070329", InstanceName = nameof(BonesFindingType.RibFracture))]
        PartialCostotransverseDisruption16_1B = 19,

        [RadioReportId("tho_m_070330", InstanceName = nameof(BonesFindingType.RibFracture))]
        CompleteCostotransverseDisruption16_1C = 20,

        [RadioReportId("tho_m_070419", InstanceName = nameof(BonesFindingType.RibFracture))]
        SimpleFracture16_2A = 21,

        [RadioReportId("tho_m_070420", InstanceName = nameof(BonesFindingType.RibFracture))]
        MultifragmentaryWedgeFracture16_2B = 22,

        [RadioReportId("tho_m_070421", InstanceName = nameof(BonesFindingType.RibFracture))]
        MultifragmentarySegmentalFracture16_2C = 23,

        [RadioReportId("tho_m_070424", InstanceName = nameof(BonesFindingType.RibFracture))]
        SimpleFracture16_3A = 24,

        [RadioReportId("tho_m_070425", InstanceName = nameof(BonesFindingType.RibFracture))]
        WedgeFracture16_3B = 25,

        [RadioReportId("tho_m_070426", InstanceName = nameof(BonesFindingType.RibFracture))]
        MultifragmentaryFracture16_3C = 26,

        [RadioReportId("tho_m_070217", InstanceName = nameof(BonesFindingType.SternalFracture))]
        TransverseFracture16_3_1_A = 27,

        [RadioReportId("tho_m_070218", InstanceName = nameof(BonesFindingType.SternalFracture))]
        ObliqueFracture16_3_1_B= 28,

        [RadioReportId("tho_m_070219", InstanceName = nameof(BonesFindingType.SternalFracture))]
        MultifragmentaryFracture16_3_1_C = 29,

        [RadioReportId("tho_m_070222", InstanceName = nameof(BonesFindingType.SternalFracture))]
        TransverseFracture16_3_2_A = 30,

        [RadioReportId("tho_m_070223", InstanceName = nameof(BonesFindingType.SternalFracture))]
        ObliqueFracture16_3_2_B= 31,

        [RadioReportId("tho_m_070224", InstanceName = nameof(BonesFindingType.SternalFracture))]
        MultifragmentaryFracture16_3_2_C = 32,

        [RadioReportId("tho_m_070333", InstanceName = nameof(BonesFindingType.SternalFracture))]
        TransverseFracture16_3_3_A = 33,

        [RadioReportId("tho_m_070334", InstanceName = nameof(BonesFindingType.SternalFracture))]
        ObliqueFracture16_3_3_B = 34,

        [RadioReportId("tho_m_070335", InstanceName = nameof(BonesFindingType.SternalFracture))]
        MultifragmentaryFracture16_3_3_C = 35,

        [RadioReportId("tho_m_070342", InstanceName = nameof(BonesFindingType.SpinalFracture))]
        MinorNonStructuralFractureA0 = 36,

        [RadioReportId("tho_m_070343", InstanceName = nameof(BonesFindingType.SpinalFracture))]
        SingleEndplateA1 = 37,

        [RadioReportId("tho_m_070344", InstanceName = nameof(BonesFindingType.SpinalFracture))]
        CoronalSplitA2 = 38,

        [RadioReportId("tho_m_070345", InstanceName = nameof(BonesFindingType.SpinalFracture))]
        BurstFractureIncompleteA3 = 39,

        [RadioReportId("tho_m_070346", InstanceName = nameof(BonesFindingType.SpinalFracture))]
        BurstFractureCompleteA4 = 40,

        [RadioReportId("tho_m_070458", InstanceName = nameof(BonesFindingType.SpinalFracture))]
        MonosegmentalOsseousFailureB1 = 41,

        [RadioReportId("tho_m_070459", InstanceName = nameof(BonesFindingType.SpinalFracture))]
        DisruptionOfPostTensionBandB2 = 42,

        [RadioReportId("tho_m_070460", InstanceName = nameof(BonesFindingType.SpinalFracture))]
        DestructionOfTheIntervertebralDiscB3 = 43
    }
}
