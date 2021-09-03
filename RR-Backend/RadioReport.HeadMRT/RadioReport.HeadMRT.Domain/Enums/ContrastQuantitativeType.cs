using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadMRT.Domain.Constants;
using RadioReport.HeadMRT.Domain.Enums.CerebrospinalFluidSpace;
using RadioReport.HeadMRT.Domain.Enums.Cortex;
using RadioReport.HeadMRT.Domain.Enums.FacialSkull;
using RadioReport.HeadMRT.Domain.Enums.Meninges;

namespace RadioReport.HeadMRT.Domain.Enums
{
    public enum ContrastQuantitativeType : byte
    {
        None = 0,

        [RadioReportId("hea_m_050429", InstanceName = nameof(InstanceNames.Meninges), CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_0505211", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_m_060516", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_0605206", InstanceName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_m_080519", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_m_090439", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_100534", InstanceName = InstanceNames.SellarRegion)]
        [RadioReportId("hea_m_110522", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110547", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110575", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103162", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102218", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102275", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1105198", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        No = 1,

        [RadioReportId("hea_m_050430", InstanceName = nameof(InstanceNames.Meninges), CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_0505212", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_m_060517", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_0605207", InstanceName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_m_080520", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_m_090440", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_100535", InstanceName = InstanceNames.SellarRegion)]
        [RadioReportId("hea_m_110523", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110548", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110576", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103163", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102219", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102276", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1105199", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        Weak = 2,

        [RadioReportId("hea_m_050431", InstanceName = nameof(InstanceNames.Meninges), CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_0505213", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_m_060518", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_0605208", InstanceName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_m_080521", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_m_090441", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_100523", InstanceName = InstanceNames.SellarRegion)]
        [RadioReportId("hea_m_110524", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110549", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110577", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103164", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102220", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102277", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1105200", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        Significant = 3
    }
}
