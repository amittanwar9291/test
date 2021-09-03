using RadioReport.Common.Module.Logic.Models.Technology;

namespace RadioReport.Core.CenterSpecificSettings.Domain.Models
{
    public class Acquisition : AcquisitionBase<Reconstruction>
    {
        #region Common

        public bool IsCTMyelography { get; set; }

        #endregion

        #region HeadCT

        public bool IsPerfusionCT { get; set; }

        #endregion
    }
}
