using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Bones
{
    public enum HistologyConfirmedType : byte
    {
        None = 0,
        
        [RadioReportId("elb_m_0402130", InstanceName = nameof(BonesFindingType.Mass))]
        Benign = 1,

        [RadioReportId("elb_m_0402131", InstanceName = nameof(BonesFindingType.Mass))]
        Malignant = 2
    }
}