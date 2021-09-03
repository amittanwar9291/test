using RadioReport.Common.Logic.Interfaces;
using System;

namespace RadioReport.Common.Logic.Models
{
    /// <summary>
    /// Base finding model entity class. From it should derive all finding models in RR project
    /// </summary>
    public abstract class FindingBase : ModelBase, ICollectionItem
    {
        public virtual byte Number { get; set; }

        public abstract string InstanceName { get; }

        public virtual bool IsDeleted { get; set; }

        public virtual byte? ParentNumber { get; set; }

        public Guid? ScopeId
        {
            get => scopeId.HasValue ? scopeId : Id;
            set => scopeId = value;
        }

        private Guid? scopeId;
    }
}
