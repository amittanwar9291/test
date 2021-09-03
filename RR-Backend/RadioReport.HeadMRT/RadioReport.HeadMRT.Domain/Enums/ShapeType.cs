using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadMRT.Domain.Constants;
using RadioReport.HeadMRT.Domain.Enums.CerebrospinalFluidSpace;
using RadioReport.HeadMRT.Domain.Enums.Cortex;
using RadioReport.HeadMRT.Domain.Enums.FacialSkull;
using RadioReport.HeadMRT.Domain.Enums.Meninges;

namespace RadioReport.HeadMRT.Domain.Enums
{
    public enum ShapeType : byte
    {
        None = 0,

        [RadioReportId("hea_m_050312", InstanceName = nameof(InstanceNames.Meninges), CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_060318", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060267", InstanceName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_m_080327", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_m_090343", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_100212", InstanceName = InstanceNames.SellarRegion)]
        [RadioReportId("hea_m_110322", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110348", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110382", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103147", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1103188", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1103272", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1103302", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        Round = 1,

        [RadioReportId("hea_m_060319", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060268", InstanceName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_m_080328", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_m_090344", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_100213", InstanceName = InstanceNames.SellarRegion)]
        [RadioReportId("hea_m_110323", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110349", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110383", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103148", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1103189", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1103273", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1103303", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        Oval = 2,

        [RadioReportId("hea_m_060320", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060269", InstanceName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_m_080329", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_m_090346", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_100215", InstanceName = InstanceNames.SellarRegion)]
        [RadioReportId("hea_m_110324", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110350", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110384", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103149", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1103190", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1103274", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1103304", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        Patchy = 3,

        [RadioReportId("hea_m_050313", InstanceName = nameof(InstanceNames.Meninges), CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_060321", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_090345", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_100214", InstanceName = InstanceNames.SellarRegion)]
        [RadioReportId("hea_m_110326", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110352", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110386", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103151", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1103192", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1103276", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1103306", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        Lobulated = 4,

        [RadioReportId("hea_m_060322", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_080330", InstanceName = InstanceNames.BrainstemCranialNerves)]
        Triangular = 5,

        [RadioReportId("hea_m_060323", InstanceName = nameof(CortexFindingType.Focal))]
        Tubular = 6,

        [RadioReportId("hea_m_060324", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060270", InstanceName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_m_080331", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_m_100216", InstanceName = InstanceNames.SellarRegion)]
        [RadioReportId("hea_m_110325", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110351", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110385", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103150", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1103191", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1103275", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1103305", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        Areal = 7,

        [RadioReportId("hea_m_050314", InstanceName = nameof(InstanceNames.Meninges), CustomConditionName = nameof(MeningesFindingType.Mass))]
        Nodular = 8,

        [RadioReportId("hea_m_050315", InstanceName = nameof(InstanceNames.Meninges), CustomConditionName = nameof(MeningesFindingType.Mass))]
        Multinodular = 9,

        [RadioReportId("hea_m_090347", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        Flat = 10,

        [RadioReportId("hea_m_1103307", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        Convex = 11,

        [RadioReportId("hea_m_1103308", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        Biconvex = 12,
    }
}
