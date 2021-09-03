using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.MammaMX.Domain.Enums;
using System;
using System.Collections.Generic;

namespace RadioReport.MammaMX.Domain.Models
{
    [GeneratedControllerPageModel("MammaMX/MedicalHistory")]
    public class MedicalHistoryPage : PageModelBase<MedicalHistoryPage>
    {
        public OwnFamilyAnamnesisPresentType OwnFamilyAnamnesisPresent { get; set; }

        public IEnumerable<OwnFamilyAnamnesisFinding> OwnFamilyAnamnesisFindings { get; set; }

        public MenstruationType MenstruationType { get; set; }

        [RadioReportId("mam_mx_020306")]
        public DateTime? Calendar { get; set; }

        [RadioReportId("mam_mx_020309", AlternativeTranslationSuffix = "PregnanciesQuantity")]
        public int? PregnanciesQuantity { get; set; }

        public ArePreviousTherapies ArePreviousTherapies { get; set; }

        public IEnumerable<PreviousTherapiesFinding> PreviousTherapiesFindings { get; set; }

        public override string PageTypeName => PageTypeNames.MammaMxMedicalHistory;
    }
}
