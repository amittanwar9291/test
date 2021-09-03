using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;

namespace RadioReport.Common.Module.Logic.Models.Technology
{
    public abstract class TechnologyCTPageBase<TCmSideEffect, TAcquisition, TReconstruction, TModel> : PageModelBase<TModel> where TModel : new()
        where TCmSideEffect : CMSideEffectBase
        where TAcquisition : AcquisitionBase<TReconstruction>
        where TReconstruction : ReconstructionBase
    {
        public CMReinforcedType CMReinforcedType { get; set; }

        public SequencesType SequencesType { get; set; }

        #region CMReinforced
        [RadioReportId("uni_xc_030202")]
        public IodineConcentrationType IodineConcentrationType { get; set; }

        [RadioReportId("uni_xc_030204")]
        public int? ContrastVolumeInMl { get; set; }

        [RadioReportId("uni_x_030301")]
        public bool IsCMSideEffect { get; set; }

        public IEnumerable<TCmSideEffect> CMSideEffects { get; set; }

        [RadioReportId("uni_x_030514")]
        public bool IsH1BlockerIV { get; set; }

        [RadioReportId("uni_x_030515")]
        public bool IsH2BlockerIV { get; set; }

        [RadioReportId("uni_x_030516")]
        public bool IsCortisoneIV { get; set; }

        [RadioReportId("uni_x_030517")]
        public bool IsO2Administration { get; set; }

        [RadioReportId("uni_x_030518")]
        public bool IsSubcutaneousEpinephrine { get; set; }

        [RadioReportId("uni_x_030519")]
        public bool IsNotFurtherSpecified { get; set; }

        [RadioReportId("uni_x_030507")]
        public string BarcodeCMCharge { get; set; }
        #endregion

        #region Sequences
        [RadioReportId("uni_x_030216")]
        public string SetName { get; set; }

        public IEnumerable<TAcquisition> Acquisitions { get; set; }

        [RadioReportId("uni_x_030509")]
        public bool IsMotion { get; set; }

        [RadioReportId("uni_xc_030501")]
        public bool IsRespiratoryArtifacts { get; set; }

        [RadioReportId("uni_xc_030502")]
        public bool IsPulsationArtifacts { get; set; }

        [RadioReportId("uni_xc_030503")]
        public bool IsMetalArtifacts { get; set; }

        [RadioReportId("uni_x_030521")]
        public bool IsOther { get; set; }
        #endregion
    }
}
