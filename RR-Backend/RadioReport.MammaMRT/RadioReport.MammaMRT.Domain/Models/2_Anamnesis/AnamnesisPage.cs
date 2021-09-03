using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.MammaMRT.Domain.Enums;
using System;
using System.Collections.Generic;

namespace RadioReport.MammaMRT.Domain.Models
{
    [GeneratedControllerPageModel("MammaMRT/Anamnesis")]
    public class AnamnesisPage : PageModelBase<AnamnesisPage>
    {
        public OwnFamilyAnamnesisPresentType OwnFamilyAnamnesisPresent { get; set; }

        public IEnumerable<OwnFamilyAnamnesisFinding> OwnFamilyAnamnesisFindings { get; set; }

        public MenstruationType MenstruationType { get; set; }

        [RadioReportId("mam_m_020306")]
        public DateTime? Calendar { get; set; }

        [RadioReportId("mam_m_020309")]
        public int? PregnanciesQuantity { get; set; }

        public ArePreviousTherapies ArePreviousTherapies { get; set; }

        public IEnumerable<PreviousTherapiesFinding> PreviousTherapiesFindings { get; set; }

        public override string PageTypeName => PageTypeNames.MammaMrtAnamnesis;
    }
}
