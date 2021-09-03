using System.Collections.Generic;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator.Localizers
{
    public class MultiLocalizer
    {
        public string LocalizerId { get; set; }
        public IEnumerable<MultiLocalizerItem> Items { get; set; }
        public string NoneValue { get; set; } = "_None";
    }
}
