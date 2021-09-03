using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Anamnesis
{
    public enum AnastomosisOrganRegionType : byte
    {
        None = 0,
		
        [RadioReportId("abd_m_020337", InstanceName = nameof(AnamnesisIndicationType.AnastomoticInsufficiency))]
        GastrointestinalTract = 1,
		
        [RadioReportId("abd_m_020338", InstanceName = nameof(AnamnesisIndicationType.AnastomoticInsufficiency))]
        Urether = 2
    }
}
