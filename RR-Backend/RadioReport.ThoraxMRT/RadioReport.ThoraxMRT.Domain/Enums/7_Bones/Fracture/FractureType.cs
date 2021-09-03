using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum FractureType : int
    {
        None = 0,

        [RadioReportId("tho_m_070304", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        MedialEndSegment15_1 = 1,

        [RadioReportId("tho_m_070309", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        DiaphysealSegment15_2 = 2,

        [RadioReportId("tho_m_070401", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        LateralEndSegment15_3 = 3,

        [RadioReportId("tho_m_070406", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        NotFurtherSpecified15 = 4,

        [RadioReportId("tho_m_070315", InstanceName = nameof(BonesFindingType.ScapularFracture))]
        Process14A = 5,

        [RadioReportId("tho_m_070320", InstanceName = nameof(BonesFindingType.ScapularFracture))]
        Body14B = 6,

        [RadioReportId("tho_m_070409", InstanceName = nameof(BonesFindingType.ScapularFracture))]
        GlenoidFossa14F = 7,

        [RadioReportId("tho_m_070414", InstanceName = nameof(BonesFindingType.ScapularFracture))]
        NotFurtherSpecified14 = 8,

        [RadioReportId("tho_m_070326", InstanceName = nameof(BonesFindingType.RibFracture))]
        PosteriorSegment16_1 = 9,

        [RadioReportId("tho_m_070417", InstanceName = nameof(BonesFindingType.RibFracture))]
        Shaft16_2 = 10,

        [RadioReportId("tho_m_070422", InstanceName = nameof(BonesFindingType.RibFracture))]
        AnteriorEndSegment16_3 = 11,

        [RadioReportId("tho_m_070514", InstanceName = nameof(BonesFindingType.RibFracture))]
        NotFurtherSpecified16 = 12,

        [RadioReportId("tho_m_070215", InstanceName = nameof(BonesFindingType.SternalFracture))]
        SternalManubrium16_3_1 = 13,

        [RadioReportId("tho_m_070220", InstanceName = nameof(BonesFindingType.SternalFracture))]
        SternalBody16_3_2 = 14,

        [RadioReportId("tho_m_070331", InstanceName = nameof(BonesFindingType.SternalFracture))]
        XiphoidProcess16_3_3 = 15,

        [RadioReportId("tho_m_070336", InstanceName = nameof(BonesFindingType.SternalFracture))]
        NotFurtherSpecified16_3 = 16,

        [RadioReportId("tho_m_070341", InstanceName = nameof(BonesFindingType.SpinalFracture))]
        CompressionInjuryA = 17,

        [RadioReportId("tho_m_070457", InstanceName = nameof(BonesFindingType.SpinalFracture))]
        TensionBandInjuryB = 18,

        [RadioReportId("tho_m_070461", InstanceName = nameof(BonesFindingType.SpinalFracture))]
        TranslationalInjuryC = 19,

        [RadioReportId("tho_m_070517", InstanceName = nameof(BonesFindingType.SpinalFracture))]
        NotFurtherDefined = 20,

        [RadioReportId("tho_m_070520", InstanceName = nameof(BonesFindingType.SpinalFracture))]
        PathologyNoFracture = 21
    }
}
