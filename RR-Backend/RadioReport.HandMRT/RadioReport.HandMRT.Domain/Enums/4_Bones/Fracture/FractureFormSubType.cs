using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
	public enum FractureFormSubType : byte
	{
		None = 0,

        [RadioReportId("han_m_040501", InstanceName = nameof(BonesFindingType.Fracture))]
        TransverseFracture2R3A21 = 1,

        [RadioReportId("han_m_040502", InstanceName = nameof(BonesFindingType.Fracture))]
        DorsalTilt2R3A22 = 2,

        [RadioReportId("han_m_040503", InstanceName = nameof(BonesFindingType.Fracture))]
        VolarTilt2R3A23 = 3,

        [RadioReportId("han_m_040504", InstanceName = nameof(BonesFindingType.Fracture))]
        ItactWedgeFracture2R3A31 = 4,

        [RadioReportId("han_m_040505", InstanceName = nameof(BonesFindingType.Fracture))]
        FragmentaryWedgeFracture2R3A32 = 5,

        [RadioReportId("han_m_040506", InstanceName = nameof(BonesFindingType.Fracture))]
        MultifragmentaryFracture2R3A33 = 6,

        [RadioReportId("han_m_040507", InstanceName = nameof(BonesFindingType.Fracture))]
        InvolvingScaphoidFossa2R3B11 = 7,

        [RadioReportId("han_m_040508", InstanceName = nameof(BonesFindingType.Fracture))]
        InvolvingLunateFossa2R3B13 = 8,

        [RadioReportId("han_m_040509", InstanceName = nameof(BonesFindingType.Fracture))]
        Simple2R3B21 = 9,

        [RadioReportId("han_m_040510", InstanceName = nameof(BonesFindingType.Fracture))]
        Fragmentary2R3B22 = 10,

        [RadioReportId("han_m_040511", InstanceName = nameof(BonesFindingType.Fracture))]
        DorsalDislocation2R3B23 = 11,

        [RadioReportId("han_m_040512", InstanceName = nameof(BonesFindingType.Fracture))]
        Simple2R3B31 = 12,

        [RadioReportId("han_m_040513", InstanceName = nameof(BonesFindingType.Fracture))]
        Fragmentary2R3B33 = 13,

        [RadioReportId("han_m_040514", InstanceName = nameof(BonesFindingType.Fracture))]
        Dorsomedial2R3C11 = 14,

        [RadioReportId("han_m_040515", InstanceName = nameof(BonesFindingType.Fracture))]
        Sagittal2R3C12 = 15,

        [RadioReportId("han_m_040516", InstanceName = nameof(BonesFindingType.Fracture))]
        FrontalCoronal2R3C13 = 16,

        [RadioReportId("han_m_040517", InstanceName = nameof(BonesFindingType.Fracture))]
        Sagittal2R3C21 = 17,

        [RadioReportId("han_m_040518", InstanceName = nameof(BonesFindingType.Fracture))]
        FrontalCoronal2R3C22 = 18,

        [RadioReportId("han_m_040519", InstanceName = nameof(BonesFindingType.Fracture))]
        ExtendingIntoDiaphysis2R3C23 = 19,

        [RadioReportId("han_m_040520", InstanceName = nameof(BonesFindingType.Fracture))]
        SimpleMetaphyseal2R3C31 = 20,

        [RadioReportId("han_m_040521", InstanceName = nameof(BonesFindingType.Fracture))]
        MetaphysealMultifragmentary2R3C32 = 21,

        [RadioReportId("han_m_040522", InstanceName = nameof(BonesFindingType.Fracture))]
        ExtendingIntoDiaphysis2R3C33 = 22,

        [RadioReportId("han_m_040523", InstanceName = nameof(BonesFindingType.Fracture))]
        TipOfStyloid2U3A11 = 23,

        [RadioReportId("han_m_040524", InstanceName = nameof(BonesFindingType.Fracture))]
        BaseOfStyloid2U3A12 = 24,

        [RadioReportId("han_m_040525", InstanceName = nameof(BonesFindingType.Fracture))]
        Spiral2U3A21 = 25,

        [RadioReportId("han_m_040526", InstanceName = nameof(BonesFindingType.Fracture))]
        Oblique2U3A22 = 26,
        
        [RadioReportId("han_m_040527", InstanceName = nameof(BonesFindingType.Fracture))]
        Transverse2U3A23 = 27
    }
}
