using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum FractureClassificationType : byte
    {
        None = 0,

        // Radius
        [RadioReportId("han_m_040333", InstanceName = nameof(BonesFindingType.Fracture))]
        Extraarticular2R3A = 1,

        [RadioReportId("han_m_040334", InstanceName = nameof(BonesFindingType.Fracture))]
        PartialArticularAO2R3B = 2,

        [RadioReportId("han_m_040335", InstanceName = nameof(BonesFindingType.Fracture))]
        Articular2R3C = 3,

        [RadioReportId("han_m_040336", InstanceName = nameof(BonesFindingType.Fracture))]
        NotFurtherSpecified2R3C = 4,

        // Ulna
        [RadioReportId("han_m_040340", InstanceName = nameof(BonesFindingType.Fracture))]
        Extraarticular2U3A = 5,

        [RadioReportId("han_m_040341", InstanceName = nameof(BonesFindingType.Fracture))]
        PartialArticula2U3B = 6,

        [RadioReportId("han_m_040342", InstanceName = nameof(BonesFindingType.Fracture))]
        Articular2U3C = 7,

        [RadioReportId("han_m_040343", InstanceName = nameof(BonesFindingType.Fracture))]
        NotFurtherSpecified2U3 = 8,

        // Os lunatum
        [RadioReportId("han_m_040345", InstanceName = nameof(BonesFindingType.Fracture))]
        Avulsion71A = 9,

        [RadioReportId("han_m_040346", InstanceName = nameof(BonesFindingType.Fracture))]
        Simple71B = 10,

        [RadioReportId("han_m_040347", InstanceName = nameof(BonesFindingType.Fracture))]
        Multifragmentary71C = 11,

        [RadioReportId("han_m_040348", InstanceName = nameof(BonesFindingType.Fracture))]
        NotFurtherSpecified71 = 12,

        // Os scaphoideum
        [RadioReportId("han_m_040350", InstanceName = nameof(BonesFindingType.Fracture))]
        Avulsion72A = 13,

        [RadioReportId("han_m_040351", InstanceName = nameof(BonesFindingType.Fracture))]
        Simple72B = 14,

        [RadioReportId("han_m_040352", InstanceName = nameof(BonesFindingType.Fracture))]
        Multifragmentary72C = 15,

        [RadioReportId("han_m_040353", InstanceName = nameof(BonesFindingType.Fracture))]
        NotFurtherSpecified72 = 16,

        // Os capitatum
        [RadioReportId("han_m_040355", InstanceName = nameof(BonesFindingType.Fracture))]
        Avulsion73A = 17,

        [RadioReportId("han_m_040356", InstanceName = nameof(BonesFindingType.Fracture))]
        Simple73B = 18,

        [RadioReportId("han_m_040357", InstanceName = nameof(BonesFindingType.Fracture))]
        Multifragmentary73C = 19,

        [RadioReportId("han_m_0403212", InstanceName = nameof(BonesFindingType.Fracture))]
        NotFurtherSpecified73 = 20,

        // Os hamatum
        [RadioReportId("han_m_040358", InstanceName = nameof(BonesFindingType.Fracture))]
        HookFracture74A = 21,

        [RadioReportId("han_m_040359", InstanceName = nameof(BonesFindingType.Fracture))]
        Simple74B = 22,

        [RadioReportId("han_m_040360", InstanceName = nameof(BonesFindingType.Fracture))]
        Multifragmentary74C = 23,

        [RadioReportId("han_m_0403215", InstanceName = nameof(BonesFindingType.Fracture))]
        NotFurtherSpecified74 = 24,

        // Os trapezium
        [RadioReportId("han_m_040361", InstanceName = nameof(BonesFindingType.Fracture))]
        Avulsion75A = 25,

        [RadioReportId("han_m_040362", InstanceName = nameof(BonesFindingType.Fracture))]
        Simple75B = 26,

        [RadioReportId("han_m_040363", InstanceName = nameof(BonesFindingType.Fracture))]
        Multifragmentary75C = 27,

        [RadioReportId("han_m_0403218", InstanceName = nameof(BonesFindingType.Fracture))]
        NotFurtherSpecified75 = 28,

        // Os pisiforme
        [RadioReportId("han_m_040364", InstanceName = nameof(BonesFindingType.Fracture))]
        Avulsion761A = 29,

        [RadioReportId("han_m_040365", InstanceName = nameof(BonesFindingType.Fracture))]
        Simple761B = 30,

        [RadioReportId("han_m_040366", InstanceName = nameof(BonesFindingType.Fracture))]
        Multifragmentary761C = 31,

        [RadioReportId("han_m_0403221", InstanceName = nameof(BonesFindingType.Fracture))]
        NotFurtherSpecified761 = 32,
               
        // Os triquetrum
        [RadioReportId("han_m_040367", InstanceName = nameof(BonesFindingType.Fracture))]
        Avulsion762A = 33,

        [RadioReportId("han_m_040368", InstanceName = nameof(BonesFindingType.Fracture))]
        Simple762B = 34,

        [RadioReportId("han_m_040369", InstanceName = nameof(BonesFindingType.Fracture))]
        Multifragmentary762C = 35,

        [RadioReportId("han_m_0403224", InstanceName = nameof(BonesFindingType.Fracture))]
        NotFurtherSpecified762 = 36,

        // Os trapezoideum
        [RadioReportId("han_m_040370", InstanceName = nameof(BonesFindingType.Fracture))]
        Avulsion763A = 37,

        [RadioReportId("han_m_040371", InstanceName = nameof(BonesFindingType.Fracture))]
        Simple763B = 38,

        [RadioReportId("han_m_040372", InstanceName = nameof(BonesFindingType.Fracture))]
        Multifragmentary763C = 39,

        [RadioReportId("han_m_0403227", InstanceName = nameof(BonesFindingType.Fracture))]
        NotFurtherSpecified763 = 40,

        // Os metacarpal
        [RadioReportId("han_m_040373", InstanceName = nameof(BonesFindingType.Fracture))]
        Proximal77X1 = 41,

        [RadioReportId("han_m_040374", InstanceName = nameof(BonesFindingType.Fracture))]
        Diaphyseal77X2 = 42,

        [RadioReportId("han_m_040375", InstanceName = nameof(BonesFindingType.Fracture))]
        Disatal77X3 = 43,

        [RadioReportId("han_m_040376", InstanceName = nameof(BonesFindingType.Fracture))]
        NotFurtherSpecified77X = 44,

        // Os phalanges
        [RadioReportId("han_m_040378", InstanceName = nameof(BonesFindingType.Fracture))]
        Proximal78X1 = 45,

        [RadioReportId("han_m_040379", InstanceName = nameof(BonesFindingType.Fracture))]
        Diaphyseal78X2 = 46,

        [RadioReportId("han_m_040380", InstanceName = nameof(BonesFindingType.Fracture))]
        Disatal78X3 = 47,

        [RadioReportId("han_m_040381", InstanceName = nameof(BonesFindingType.Fracture))]
        NotFurtherSpecified78X = 48,
    }
}
