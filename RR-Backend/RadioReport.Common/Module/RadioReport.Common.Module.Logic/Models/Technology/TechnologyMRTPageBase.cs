using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Logic.Enums.Technology;
using System.Collections.Generic;

namespace RadioReport.Common.Module.Logic.Models.Technology
{
    public abstract class TechnologyMRTPageBase<TCmSideEffect, TSequence, TModel> : PageModelBase<TModel> where TModel : new()
        where TCmSideEffect : CMSideEffectBase
        where TSequence : SequenceBase
    {
        public CMReinforcedType CMReinforcedType { get; set; }

        public SequencesType SequencesType { get; set; }

        #region CMReinforced
        public IEnumerable<TCmSideEffect> CMSideEffects { get; set; }

        [RadioReportId("uni_x_030203")]
        public ContrastMediumType ContrastMediumType { get; set; }

        [RadioReportId("uni_x_030204", DecimalPlaces = 1)]
        public decimal? ContrastQuantity { get; set; }

        [RadioReportId("uni_x_030301")]
        public bool IsCMSideEffect { get; set; }

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

        #region Sequence
        [RadioReportId("uni_x_030216")]
        public string SetName { get; set; }

        public IEnumerable<TSequence> Sequences { get; set; }

        [RadioReportId("uni_x_030509")]
        public bool IsMotion { get; set; }

        [RadioReportId("uni_x_030510")]
        public bool IsMetalArtifacts { get; set; }

        [RadioReportId("uni_x_030521")]
        public bool IsOther { get; set; }
        #endregion
    }
}
