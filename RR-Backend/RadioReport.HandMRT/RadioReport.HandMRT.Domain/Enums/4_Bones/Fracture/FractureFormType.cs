using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
	public enum FractureFormType : byte
	{
		None = 0,

        // Radius - Extra articular
        [RadioReportId("han_m_040423", InstanceName = nameof(BonesFindingType.Fracture))]
        AvulsionOfStyloid2R3A1 = 1,
        
        [RadioReportId("han_m_040424", InstanceName = nameof(BonesFindingType.Fracture))]
        Simple2R3A2 = 2,

        [RadioReportId("han_m_040425", InstanceName = nameof(BonesFindingType.Fracture))]
        WedgeFracture2R3A3 = 3,

        // Radius - Partialy articular
        [RadioReportId("han_m_040426", InstanceName = nameof(BonesFindingType.Fracture))]
        SagittalFracture2R3B1 = 4,

        [RadioReportId("han_m_040427", InstanceName = nameof(BonesFindingType.Fracture))]
        DorsalRim2R3B2 = 5,

        [RadioReportId("han_m_040428", InstanceName = nameof(BonesFindingType.Fracture))]
        VolarRim2R3B3 = 6,

        // Radius - Articular
        [RadioReportId("han_m_040429", InstanceName = nameof(BonesFindingType.Fracture))]
        SimpleArticularMetaphyseal2R3C1 = 7,

        [RadioReportId("han_m_040430", InstanceName = nameof(BonesFindingType.Fracture))]
        SimpleArticularMultifragmentary2R3C2 = 8,

        [RadioReportId("han_m_040431", InstanceName = nameof(BonesFindingType.Fracture))]
        ArticularMultifragmentary2R3C3 = 9,

        // Ulna - Extra articular
        [RadioReportId("han_m_040432", InstanceName = nameof(BonesFindingType.Fracture))]
        UlnarStyloidProcess2U3A1 = 10,

        [RadioReportId("han_m_040433", InstanceName = nameof(BonesFindingType.Fracture))]
        Simple2U3A2 = 11,

        [RadioReportId("han_m_040434", InstanceName = nameof(BonesFindingType.Fracture))]
        Multifragmentary2U3A3 = 12,

        // Matacarpal - Proximal
        [RadioReportId("han_m_040439", InstanceName = nameof(BonesFindingType.Fracture))]
        Extraarticular77X1A = 13,

        [RadioReportId("han_m_040440", InstanceName = nameof(BonesFindingType.Fracture))]
        Partialarticular77X1B = 14,

        [RadioReportId("han_m_040441", InstanceName = nameof(BonesFindingType.Fracture))]
        Articular77X1C = 15,

        // Matacarpal - Diaphyseal
        [RadioReportId("han_m_0404102", InstanceName = nameof(BonesFindingType.Fracture))]
        Simple77X2A = 16,

        [RadioReportId("han_m_0404103", InstanceName = nameof(BonesFindingType.Fracture))]
        WedgeFracture77X2B = 17,

        [RadioReportId("han_m_0404104", InstanceName = nameof(BonesFindingType.Fracture))]
        Multifragmentary77X2C = 18,

        // Matacarpal - Distal
        [RadioReportId("han_m_0404105", InstanceName = nameof(BonesFindingType.Fracture))]
        Extraarticular77X3A = 19,

        [RadioReportId("han_m_0404106", InstanceName = nameof(BonesFindingType.Fracture))]
        Partialarticular77X3B = 20,

        [RadioReportId("han_m_0404107", InstanceName = nameof(BonesFindingType.Fracture))]
        Articular77X3C = 21,

        // Phalanges - Proximal
        [RadioReportId("han_m_040445", InstanceName = nameof(BonesFindingType.Fracture))]
        Extraarticular78X1A = 22,

        [RadioReportId("han_m_040446", InstanceName = nameof(BonesFindingType.Fracture))]
        Partialarticular78X1B = 23,

        [RadioReportId("han_m_040447", InstanceName = nameof(BonesFindingType.Fracture))]
        Articular78X1C = 24,

        // Phalanges - Diaphyseal
        [RadioReportId("han_m_040448", InstanceName = nameof(BonesFindingType.Fracture))]
        Simple78X2A = 25,

        [RadioReportId("han_m_040449", InstanceName = nameof(BonesFindingType.Fracture))]
        WedgeFracture78X2B = 26,

        [RadioReportId("han_m_040450", InstanceName = nameof(BonesFindingType.Fracture))]
        Multifragmentary78X2C = 27,

        // Phalanges - Distal
        [RadioReportId("han_m_040451", InstanceName = nameof(BonesFindingType.Fracture))]
        Extraarticular78X3A = 28,

        [RadioReportId("han_m_040452", InstanceName = nameof(BonesFindingType.Fracture))]
        Partialarticular78X3B = 29,

        [RadioReportId("han_m_040453", InstanceName = nameof(BonesFindingType.Fracture))]
        Articular78X3C = 30,
    }
}
