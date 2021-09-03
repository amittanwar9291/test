using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadMRT.Domain.Constants;
using RadioReport.HeadMRT.Domain.Enums.CerebrospinalFluidSpace;
using RadioReport.HeadMRT.Domain.Enums.Cortex;
using RadioReport.HeadMRT.Domain.Enums.FacialSkull;
using RadioReport.HeadMRT.Domain.Enums.Meninges;

namespace RadioReport.HeadMRT.Domain.Enums
{
    public enum MarginType : byte
    {
        None = 0,

        [RadioReportId("hea_m_050223", InstanceName = nameof(InstanceNames.Meninges), CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_060227", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060261", InstanceName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_m_070314", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_m_080321", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_m_090337", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_100206", InstanceName = InstanceNames.SellarRegion)]
        [RadioReportId("hea_m_110314", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110340", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110374", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103140", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1103180", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1103264", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1102305", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        Circumscribed = 1,

        [RadioReportId("hea_m_050224", InstanceName = nameof(InstanceNames.Meninges), CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_060228", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060262", InstanceName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_m_070315", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_m_080322", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_m_090338", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_100207", InstanceName = InstanceNames.SellarRegion)]
        [RadioReportId("hea_m_110315", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110341", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110375", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103141", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1103181", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1103265", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1102306", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        NonCircumscribed = 2,

        [RadioReportId("hea_m_050225", InstanceName = nameof(InstanceNames.Meninges), CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_060229", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_100217", InstanceName = InstanceNames.SellarRegion)]
        [RadioReportId("hea_m_110316", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110342", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110376", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103142", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1103182", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1103266", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1102307", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        Nodular = 3,

        [RadioReportId("hea_m_050226", InstanceName = nameof(InstanceNames.Meninges), CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_060230", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_100218", InstanceName = InstanceNames.SellarRegion)]
        [RadioReportId("hea_m_110317", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110343", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110377", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103143", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1103183", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1103267", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1102308", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        Multinodular = 4
    }
}
