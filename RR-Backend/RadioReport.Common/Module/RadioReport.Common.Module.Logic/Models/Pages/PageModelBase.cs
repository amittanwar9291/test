using RadioReport.Common.Logic.Models;
using System;

namespace RadioReport.Common.Module.Logic.Models.Pages
{
    public abstract class PageModelBase : ModelBase
    {
        public Guid ReportId { get; set; }
        public abstract string PageTypeName { get; }
        public bool IsActive { get; set; }
    }

    public abstract class PageModelBase<T> : PageModelBase where T : new()
    {
        public static T GetEmpty() => new T();
    }
}
