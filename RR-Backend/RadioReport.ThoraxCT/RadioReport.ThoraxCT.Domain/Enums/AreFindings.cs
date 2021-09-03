using RadioReport.Common.Logic.Attributes;
using RadioReport.ThoraxCT.Domain.Constants;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum AreFindings : byte
    {
        None = 0,

        [RadioReportId("tho_c_040104", InstanceName = InstanceNames.Mediastinum)]
        [RadioReportId("tho_c_050104", InstanceName = InstanceNames.LungParenchyma)]
        [RadioReportId("tho_c_070104", InstanceName = InstanceNames.SoftParts)]
        [RadioReportId("tho_c_080104", InstanceName = InstanceNames.Bones)]
        False = 1,

        [RadioReportId("tho_c_040105", InstanceName = InstanceNames.Mediastinum)]
        [RadioReportId("tho_c_050105", InstanceName = InstanceNames.LungParenchyma)]
        [RadioReportId("tho_c_070105", InstanceName = InstanceNames.SoftParts)]
        [RadioReportId("tho_c_080105", InstanceName = InstanceNames.Bones)]
        True = 2
    }
}