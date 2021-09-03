using RadioReport.Common.Logic.Attributes;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Domain.Enums.Pharynx
{
    public enum HomogeneityType : byte
    {
        None = 0,

        [RadioReportId("nec_m_040405", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        [RadioReportId("nec_m_040511", InstanceName = nameof(PharynxFindingBase.MassHomogeneityType))]
        [RadioReportId("nec_m_040522", InstanceName = nameof(PharynxFindingType.Mass))]
        Homogeneous = 1,

        [RadioReportId("nec_m_040406", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        [RadioReportId("nec_m_040512", InstanceName = nameof(PharynxFindingBase.MassHomogeneityType))]
        [RadioReportId("nec_m_040523", InstanceName = nameof(PharynxFindingType.Mass))]
        Heterogeneous = 2
    }
}
