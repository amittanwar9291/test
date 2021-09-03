using System;

namespace RadioReport.Common.Logic.Interfaces
{
    public interface IDeletableItem
    {
        Guid Id { get; set; }
        bool IsDeleted { get; set; }
    }
}
