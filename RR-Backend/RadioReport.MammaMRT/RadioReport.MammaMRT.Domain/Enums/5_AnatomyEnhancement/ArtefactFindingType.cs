using RadioReport.Common.Logic.Attributes;
using RadioReport.MammaMRT.Domain.Models;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum ArtefactFindingType:byte
    {
        None = 0,

        [RadioReportId("mam_m_050204-1", InstanceName = nameof(AnatomyEnhancementPage.ArtefactFinding1))]
        [RadioReportId("mam_m_050204-2", InstanceName = nameof(AnatomyEnhancementPage.ArtefactFinding2))]
        Marker = 1,

        [RadioReportId("mam_m_050205-1", InstanceName = nameof(AnatomyEnhancementPage.ArtefactFinding1))]
        [RadioReportId("mam_m_050205-2", InstanceName = nameof(AnatomyEnhancementPage.ArtefactFinding2))]
        Postoperativ = 2
    }
}
