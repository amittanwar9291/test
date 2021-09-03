using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadCT.Domain.Constants;
using RadioReport.HeadCT.Domain.Models;

namespace RadioReport.HeadCT.Domain.Enums
{
    public enum ContrastDistributionType : byte
    {
        None = 0,

        [RadioReportId("hea_c_0605212", InstanceName = nameof(CortexFinding) + nameof(CortexFinding.ContrastEnhancementDistributionType))]
        [RadioReportId("hea_c_050435", InstanceName = InstanceNames.Meninges)]
        [RadioReportId("hea_c_070543", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_c_080525", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_c_0903112", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100433", InstanceName = InstanceNames.SellarRegion)]
        Peripheral = 1,

        [RadioReportId("hea_c_080526", InstanceName = InstanceNames.BrainstemCranialNerves)]
        RimEnhancement = 2,

        [RadioReportId("hea_c_0605214", InstanceName = nameof(CortexFinding) + nameof(CortexFinding.ContrastEnhancementDistributionType))]
        [RadioReportId("hea_c_050436", InstanceName = InstanceNames.Meninges)]
        [RadioReportId("hea_c_070545", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_c_080527", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_c_0903113", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100434", InstanceName = InstanceNames.SellarRegion)]
        EntireLesion = 3,

        [RadioReportId("hea_c_0605213", InstanceName = nameof(CortexFinding) + nameof(CortexFinding.ContrastEnhancementDistributionType))]
        [RadioReportId("hea_c_050437", InstanceName = InstanceNames.Meninges)]
        [RadioReportId("hea_c_070546", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_c_080528", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_c_0903114", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100435", InstanceName = InstanceNames.SellarRegion)]
        Central = 4,

        [RadioReportId("hea_c_0605215", InstanceName = nameof(CortexFinding) + nameof(CortexFinding.ContrastEnhancementDistributionType))]
        [RadioReportId("hea_c_050438", InstanceName = InstanceNames.Meninges)]
        [RadioReportId("hea_c_070547", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_c_080529", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_c_0903115", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100436", InstanceName = InstanceNames.SellarRegion)]
        Septal = 5,

        [RadioReportId("hea_c_100437", InstanceName = nameof(InstanceNames.SellarRegion))]
        InNidus = 6,

        [RadioReportId("hea_c_070544", InstanceName = InstanceNames.BasalNuclei)]
        RingShaped = 7,

        [RadioReportId("hea_c_0903116", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace))]
        Nodular = 8,

        [RadioReportId("hea_c_0903117", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace))]
        Multinodular = 9
    }
}
