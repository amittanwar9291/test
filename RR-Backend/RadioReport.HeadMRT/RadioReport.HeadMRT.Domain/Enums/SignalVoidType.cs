using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadMRT.Domain.Constants;
using RadioReport.HeadMRT.Domain.Enums.CerebrospinalFluidSpace;
using RadioReport.HeadMRT.Domain.Enums.Cortex;
using RadioReport.HeadMRT.Domain.Enums.FacialSkull;
using RadioReport.HeadMRT.Domain.Enums.Meninges;

namespace RadioReport.HeadMRT.Domain.Enums
{
    public enum SignalVoidType : byte
    {
        None = 0,

        [RadioReportId("hea_m_0505202", InstanceName = nameof(InstanceNames.Meninges), CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050522", InstanceName = nameof(InstanceNames.Meninges), CustomConditionName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_m_060507", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060454", InstanceName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_m_070416", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_m_080428", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_m_090532", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_090480", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        [RadioReportId("hea_m_100416", InstanceName = InstanceNames.SellarRegion)]
        [RadioReportId("hea_m_110517", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110542", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110570", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1105116", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1105144", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1105180", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1105193", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        Calcification = 1,

        [RadioReportId("hea_m_0505203", InstanceName = nameof(InstanceNames.Meninges), CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050523", InstanceName = nameof(InstanceNames.Meninges), CustomConditionName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_m_060508", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060455", InstanceName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_m_070417", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_m_080429", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_m_090533", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_090481", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        [RadioReportId("hea_m_100417", InstanceName = InstanceNames.SellarRegion)]
        [RadioReportId("hea_m_110518", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110543", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110571", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1105117", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1105145", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1105181", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1105194", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        Blood = 2
    }
}
