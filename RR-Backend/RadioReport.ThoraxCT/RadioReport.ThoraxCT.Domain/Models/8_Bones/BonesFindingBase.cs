using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.ThoraxCT.Domain.Enums;

namespace RadioReport.ThoraxCT.Domain.Models
{
    public class BonesFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("tho_c_080106")]
        public BonesFindingType FindingType { get; set; }

        #region Mass

        [RadioReportId("tho_c_080347")]
        public BonesDifferentialDiagnosisType BonesDifferentialDiagnosisType { get; set; }

        public MarginType MarginType { get; set; }

        public HomogeneityType HomogeneityType { get; set; }

        public CorticalBoneType CorticalBoneType { get; set; }

        public FormType FormType { get; set; }

        public DensityType DensityType { get; set; }

        public MatrixType MatrixType { get; set; }

        [RadioReportId("tho_c_0802202")]
        public bool IsCalcification { get; set; }

        public CalcificationType CalcificationType { get; set; }

        [RadioReportId("tho_c_0802206")]
        public bool IsSclerosis { get; set; }

        [RadioReportId("tho_c_0802207")]
        public bool IsSepta { get; set; }

        [RadioReportId("tho_c_0802208")]
        public bool IsNidus { get; set; }

        [RadioReportId("tho_c_0802209")]
        public bool IsPunctiformHyperintens { get; set; }

        [RadioReportId("tho_c_0802210")]
        public bool IsFatty { get; set; }

        [RadioReportId("tho_c_0802211")]
        public bool IsCystic { get; set; }

        [RadioReportId("tho_c_0802212")]
        public bool IsGroundGlassAspect { get; set; }

        [RadioReportId("tho_c_0802213")]
        public bool IsLiquidLevel { get; set; }

        [RadioReportId("tho_c_0803229")]
        public bool IsExpansion { get; set; }

        [RadioReportId("tho_c_0803230")]
        public bool IsOsteolytic { get; set; }

        [RadioReportId("tho_c_0803231")]
        public bool IsOsteoblastic { get; set; }

        [RadioReportId("tho_c_0803233")]
        public bool IsScleroticBorder { get; set; }

        [RadioReportId("tho_c_0803234")]
        public bool IsGeographic { get; set; }

        [RadioReportId("tho_c_0803235")]
        public bool IsPedunculatedGrowingFromTheEpiphysis { get; set; }

        [RadioReportId("tho_c_0803236")]
        public bool IsSubchondral { get; set; }

        [RadioReportId("tho_c_0803237")]
        public bool IsInfiltrationOfAdjacentSoftTissue { get; set; }

        public PeriostealReactionType PeriostealReactionType { get; set; }

        [RadioReportId("tho_c_080447")]
        public bool IsRemodelling { get; set; }

        [RadioReportId("tho_c_0804222")]
        public bool IsSpiculated { get; set; }

        [RadioReportId("tho_c_080451")]
        public bool IsSunburst { get; set; }

        [RadioReportId("tho_c_080452")]
        public bool IsCodmanTriangle { get; set; }

        [RadioReportId("tho_c_080522")]
        public bool IsAdjacentSclerosis { get; set; }

        public AdjacentSclerosisType AdjacentSclerosisType { get; set; }

        [RadioReportId("tho_c_080525")]
        public bool IsDestructionOfEndPlate { get; set; }

        [RadioReportId("tho_c_0805223")]
        public bool IsOsteoproliferativeReaction { get; set; }

        [RadioReportId("tho_c_0805224")]
        public bool IsBoneApposition { get; set; }

        [RadioReportId("tho_c_0805225")]
        public bool IsEdgrenVainoSign { get; set; }

        [RadioReportId("tho_c_080528")]
        public bool IsVertebralHemangioma { get; set; }

        [RadioReportId("tho_c_0803301")]
        public bool IsMoreThanOneLesion { get; set; }

        #endregion
    }
}