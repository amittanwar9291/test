using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadCT.Domain.Constants;
using RadioReport.HeadCT.Domain.Enums.Meninges;

namespace RadioReport.HeadCT.Domain.Enums
{
    public enum MidlineShiftSideType : byte
    {
        None = 0,

        [RadioReportId("hea_c_050364", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_c_070342", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_c_100323", InstanceName = InstanceNames.SellarRegion)]
        ToTheRight = 1,

        [RadioReportId("hea_c_050365", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_c_070343", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_c_100324", InstanceName = InstanceNames.SellarRegion)]
        ToTheLeft = 2
    }
}