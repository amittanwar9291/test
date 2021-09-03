using RadioReport.CardioMRT.Domain.Enums.Technology;
using RadioReport.Common.Module.Logic.Models.Technology;
using OrientationType = RadioReport.Core.CenterSpecificSettings.Domain.Enums.OrientationType;
using SequenceType = RadioReport.Core.CenterSpecificSettings.Domain.Enums.SequenceType;
using RadioReport.AngiographyMRT.Domain.Enums.Technology;
using RadioReport.HeadMRT.Domain.Enums;

namespace RadioReport.Core.CenterSpecificSettings.Domain.Models
{
    public class Sequence : SequenceBase
    {
        public override string InstanceName => SequenceType.ToString();

        #region Common
        public SequenceType SequenceType { get; set; }

        public new OrientationType OrientationType { get; set; }

        public bool IsPostContrast { get; set; }

        public bool IsSubtraction { get; set; }

        public bool IsECGTriggering { get; set; }

        public bool IsB0 { get; set; }

        public bool IsB50 { get; set; }

        public bool IsB100 { get; set; }

        public bool IsB800 { get; set; }

        public bool IsB1000 { get; set; }

        public bool IsB1400 { get; set; }

        public bool IsCalculated { get; set; }

        public bool IsADCMap { get; set; }
        #endregion

        #region MammaMRT
        public bool SiliconeSensitive { get; set; }

        // Silicone suppressed
        public bool SiliconeSuppressing { get; set; }

        // Dynamics after contrast injection
        public bool IsDynamicsFollowingGdApplication { get; set; }

        // Delayed phase
        public bool IsLateStage { get; set; }
        #endregion

        #region CardioMRT
        public ExaminationTechniqueType ExaminationTechniqueType { get; set; }
        #endregion

        #region PelvisMRT
        public bool IsCineImaging { get; set; }

        public bool IsHighResolution { get; set; }

        public bool IsDefaecography { get; set; }
        #endregion

        #region AbdomenMRT
        public bool IsChemicalShiftImaging { get; set; }

        public bool IsMrcp { get; set; }
        #endregion

        #region AngiographyMRT
        public MethodType MethodType { get; set; }

        public NonContrastEnhancedMRAngiographyType NonContrastEnhancedMRAngiographyType { get; set; }

        public ContrastEnhancedMRAngiographyType ContrastEnhancedMRAngiographyType { get; set; }

        public bool IsMIP { get; set; }

        public bool IsMPR { get; set; }

        public bool IsVRT { get; set; }
        #endregion

        #region ThoraxMRT
        public bool IsRespiratoryTriggering { get; set; }
        #endregion

        #region NeckMRT

        public bool IsPostContrastSubtraction { get; set; }

        public bool IsPostContrastPerfusion { get; set; }

        public bool IsBreathHoldingTechnique { get; set; }

        public bool IsSedation { get; set; }

        #endregion

        #region HeadMRT
        
        public OtherApplicationsType OtherApplicationsType { get; set; }

        public bool IsCompressedSense { get; set; }

        public bool IsDynamicsAfterContrastInjection { get; set; }

        public bool IsEpiDwi { get; set; }

        public bool IsHasteNonEpiDwi { get; set; }

        #endregion
    }
}
