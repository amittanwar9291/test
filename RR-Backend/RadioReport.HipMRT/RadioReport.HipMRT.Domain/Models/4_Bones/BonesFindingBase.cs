using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HipMRT.Bones.Domain.Enums;

namespace RadioReport.HipMRT.Domain.Models.Bones
{
    public class BonesFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        #region common
        [RadioReportId("hip_m_040106")]
        public BonesFindingType FindingType { get; set; }

        [RadioReportId("hip_m_040444", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        [RadioReportId("hip_m_0405118", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("hip_m_0405132", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsSoftTissueEdema { get; set; }

        [RadioReportId("hip_m_040341", InstanceName = nameof(BonesFindingType.StressFracture))]
        [RadioReportId("hip_m_040354", InstanceName = nameof(BonesFindingType.SubchondralInsufficiencyFracture))]
        [RadioReportId("hip_m_040373", InstanceName = nameof(BonesFindingType.TransientBoneMarrowEdema))]
        [RadioReportId("hip_m_0403102", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("hip_m_040388", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        [RadioReportId("hip_m_0405133", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsBoneMarrowEdema { get; set; }
        #endregion

        #region MassOrOsteolysis
        #region tab1
        [RadioReportId("hip_m_040248", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public MassOsteolysisDifferentialDiagnosisType MainDiagnosisType { get; set; }

        [RadioReportId("hip_m_0403125", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsEpiphysis { get; set; }

        [RadioReportId("hip_m_0403126", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsMetaphysis { get; set; }

        [RadioReportId("hip_m_0403127", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsDiaphysis { get; set; }
        #endregion

        #region tab2
        public MarginType MarginType { get; set; }

        [RadioReportId("hip_m_040256l", IsExportable = false, InstanceName = nameof(HomogeneityType))]
        public HomogeneityType HomogeneityType { get; set; }

        public MassOrOsteolysisCorticalBoneType MassOrOsteolysisCorticalBoneType { get; set; }

        [RadioReportId("hip_m_0403130", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public SignalTypeExtended T1w { get; set; }

        [RadioReportId("hip_m_0403133", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public SignalTypeExtended T2w { get; set; }

        public ContrastEnhancementQuantitativeType ContrastEnhancementQuantitativeType { get; set; }

        [RadioReportId("hip_m_040499l", IsExportable = false, InstanceName = nameof(PronouncedHomogeneityType))]
        public HomogeneityType PronouncedHomogeneityType { get; set; }

        public ContrastEnhancementDistributionType ContrastEnhancementDistributionType { get; set; }

        [RadioReportId("hip_m_0405125", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsRound { get; set; }

        [RadioReportId("hip_m_0405126", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsLobulated { get; set; }

        [RadioReportId("hip_m_0405127", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsGeographic { get; set; }

        [RadioReportId("hip_m_0405128", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsSessile { get; set; }

        [RadioReportId("hip_m_0405129", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsPedunculated { get; set; }

        [RadioReportId("hip_m_0405130", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsOrientationFacingAwayFrom { get; set; }
        #endregion

        #region tab3
        [RadioReportId("hip_m_040265", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsSeptated { get; set; }

        [RadioReportId("hip_m_040266", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsFluidLevel { get; set; }

        [RadioReportId("hip_m_040267", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsCalcification { get; set; }

        [RadioReportId("hip_m_040268", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsCentral { get; set; }

        [RadioReportId("hip_m_040269", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsDiffuse { get; set; }

        [RadioReportId("hip_m_040270", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsNidus { get; set; }

        [RadioReportId("hip_m_040271", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsT2wHyperintense { get; set; }

        [RadioReportId("hip_m_040272", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsOsteoidMatrix { get; set; }

        [RadioReportId("hip_m_040273", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsFatSignal { get; set; }

        [RadioReportId("hip_m_0403135", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsPeriostealReactionsunBurst { get; set; }

        [RadioReportId("hip_m_0403136", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsPeriostealSpurCodmanSpur { get; set; }

        [RadioReportId("hip_m_0403137", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsCartilageCap { get; set; }



        [RadioReportId("hip_m_0403141", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsCapT2wHyperintense { get; set; }

        [RadioReportId("hip_m_0403142", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsScleroticMargin { get; set; }

        [RadioReportId("hip_m_0403143", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsLowSignalPerichondriumOver { get; set; }

        [RadioReportId("hip_m_0404109", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsExpansile { get; set; }

        [RadioReportId("hip_m_0404110", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsOsteolytic { get; set; }

        [RadioReportId("hip_m_0404111", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsOsteoblastic { get; set; }

        [RadioReportId("hip_m_0404112", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsSclerotic { get; set; }

        [RadioReportId("hip_m_0404113", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsSoftTissueInfiltration { get; set; }


        #endregion
        #endregion
    }
}
