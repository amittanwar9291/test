using System.Collections.Generic;
using RadioReport.Common.Logic.Models.InstituteModels;

namespace RadioReport.Core.InstituteManager.Domain.Models.InstituteList
{
    public class InstituteListResponse
    {
        public InstituteListInfo ListInfo { get; set; }
        public IEnumerable<Institute> Institutes { get; set; }
    }
}
