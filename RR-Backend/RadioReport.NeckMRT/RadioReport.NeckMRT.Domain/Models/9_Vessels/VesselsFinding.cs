using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Enums.Pages.Localizers;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.NeckMRT.Domain.Enums;
using RadioReport.NeckMRT.Domain.Enums.Vessels;

namespace RadioReport.NeckMRT.Domain.Models
{
    public class VesselsFinding: FindingBase
    {
        [RadioReportId("nec_m_090106")]
        public VesselsFindingType FindingType { get; set; }

        public override string InstanceName => FindingType.ToString();

        #region Common

		public SideType SideType { get; set; }
		public PathologyType PathologyType { get; set; }
		public ExtentType ExtentType { get; set; }
		public FormType FormType { get; set; }
		public ShapeType ShapeType { get; set; }
		public SubarachnoidHemorrhageType SubarachnoidHemorrhageType { get; set; }
		public CharacterizationType CharacterizationType { get; set; }
		public DetailsVascularMalformationType DetailsVascularMalformationType { get; set; }		
		public ArteriovenousMalformationType ArteriovenousMalformationType { get; set; }
		public DifferentialDiagnosisType DifferentialDiagnosisType { get; set; }


        [RadioReportId("nec_m_090408", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090444", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090484", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_0904121", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_0904158", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		[RadioReportId("nec_m_090333", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_0904204", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_0904238", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		public int? DiameterStenosisInMm { get; set; }

		[RadioReportId("nec_m_090411", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090447", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090487", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_0904124", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_0904161", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		[RadioReportId("nec_m_090336", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_0904207", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_0904241", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		public int? DiameterDiseaseFreePoststenoticSegmentInMm { get; set; }

		[RadioReportId("nec_m_090414", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090450", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090490", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_0904127", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_0904164", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		[RadioReportId("nec_m_090339", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_0904210", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_0904244", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		public int? DegreeOfStenosisInPercent { get; set; }

		[RadioReportId("nec_m_090505", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090512", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090523", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_090533", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_090543", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		[RadioReportId("nec_m_0904190", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_090562", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_090579", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		public int? StenosisOcclusionExtentInMm { get; set; }

		[RadioReportId("nec_m_090419", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090455", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090495", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_0904132", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_0904169", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		[RadioReportId("nec_m_090344", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_0904215", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_0904249", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		public int? DissectionExtentInMm { get; set; }

		[RadioReportId("nec_m_090353", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_0904224", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_0904258", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		public int? AneurysmExtentInMm { get; set; }
        
		[RadioReportId("nec_m_090435", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090472", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_0904112", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_0904149", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_0904181", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		[RadioReportId("nec_m_090350", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_0904221", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_0904255", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		public int? MaxDiameterInMm { get; set; }

		[RadioReportId("nec_m_090406", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090442", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090482", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_0904119", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_0904156", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		[RadioReportId("nec_m_090331", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_0904202", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_0904236", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		public bool IsHemodynamicallyRelevant { get; set; }

		[RadioReportId("nec_m_090507", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090514", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090525", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_090535", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_090545", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		[RadioReportId("nec_m_0904192", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_090564", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_090581", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		public bool IsShortLength { get; set; }

		[RadioReportId("nec_m_090417", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090453", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090493", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_0904130", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_0904167", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		[RadioReportId("nec_m_090342", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_0904213", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_0904247", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		public bool IsWallHematomaHyperintenseInUnenhancedT1W { get; set; }

		[RadioReportId("nec_m_090421", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090458", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090498", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_0904135", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_0904172", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		public bool IsContrastEnhancementOfTheVesselWall { get; set; }

		[RadioReportId("nec_m_090422", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090459", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090499", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_0904136", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_0904173", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		public bool IsT2WHyperintensityOfTheVesselWallEdema { get; set; }

		[RadioReportId("nec_m_090423", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090460", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_0904100", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_0904137", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_0904174", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		public bool IsIrregularVesselCaliber { get; set; }

		[RadioReportId("nec_m_090428", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090465", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_0904105", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_0904142", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		public bool IsPanarteritisNodosa { get; set; }

		[RadioReportId("nec_m_090516", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090527", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		public bool IsBranchesOfTheExternalCarotidArteryToTheOphthalmicArtery { get; set; }

		[RadioReportId("nec_m_090517", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090528", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_090537", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_090547", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		public bool IsCircleOfWillis { get; set; }

		[RadioReportId("nec_m_090474", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_0904183", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		public bool IsSubarachnoidHemorrhage { get; set; }

		[RadioReportId("nec_m_090553", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_090566", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_090583", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		[RadioReportId("nec_m_090379", InstanceName = nameof(VesselsFindingType.Veins))]
		public bool IsThrombusSurroundedByContrastAgent { get; set; }

		[RadioReportId("nec_m_090554", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_090567", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_090584", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		public bool IsCollateralization { get; set; }

		[RadioReportId("nec_m_090555", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_090568", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_090585", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		public bool IsPreStenoticDilatation { get; set; }

		[RadioReportId("nec_m_090556", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_090569", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		public bool IsSubclavianStealSyndrome { get; set; }

		[RadioReportId("nec_m_090557", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_090570", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		public bool IsSuspicionOf { get; set; }

        #endregion

		#region InternalCarotidArtery

		[RadioReportId("nec_m_090206", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		public ArteryLocalisationType ArteryLocalisationType { get; set; }

		#endregion


		#region ExternalCarotidArtery

		public AffectedBranchType AffectedBranchType { get; set; }

		#endregion

		#region VertebralArtery

		[RadioReportId("nec_m_090218", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		public bool IsV1 { get; set; }

		[RadioReportId("nec_m_090219", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		public bool IsV2 { get; set; }

		[RadioReportId("nec_m_090220", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		public bool IsV3 { get; set; }

		[RadioReportId("nec_m_090221", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		public bool IsV4 { get; set; }

		[RadioReportId("nec_m_090538", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		public bool IsViaContralateralVertebralArtery { get; set; }

		#endregion

		#region CircleOfWillisCerebralArteries

		[RadioReportId("nec_m_090223", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		public AffectedSegmentsOrVesselsLocations ArteriesSegmentType { get; set; }

		[RadioReportId("nec_m_090548", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		public bool IsLeptomeningealTranscortical { get; set; }

		[RadioReportId("nec_m_090549", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		public bool IsContralateralAci { get; set; }

		[RadioReportId("nec_m_090550", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		public bool IsPosteriorCommunicansArtery { get; set; }

		[RadioReportId("nec_m_090551", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		public bool IsViaOphtalmicArtery { get; set; }

		#endregion

		#region SubclavianArtery

		[RadioReportId("nec_m_090229", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		public bool IsProximalSegment { get; set; }

		[RadioReportId("nec_m_090230", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		public bool IsIntermediateSegment { get; set; }

		[RadioReportId("nec_m_090231", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		public bool IsDistalSegment { get; set; }

		#endregion

		#region CerebralVeinsDuralSinuses

		[RadioReportId("nec_m_090233", InstanceName = nameof(VesselsFindingType.CerebralVeinsDuralSinuses))]
		public bool IsSuperiorSagittalSinus { get; set; }

		[RadioReportId("nec_m_090234", InstanceName = nameof(VesselsFindingType.CerebralVeinsDuralSinuses))]
		public bool IsInferiorSagittalSinus { get; set; }

		[RadioReportId("nec_m_090235", InstanceName = nameof(VesselsFindingType.CerebralVeinsDuralSinuses))]
		public bool IsVMagnaCerebri { get; set; }

		[RadioReportId("nec_m_090236", InstanceName = nameof(VesselsFindingType.CerebralVeinsDuralSinuses))]
		public bool IsStraightSinus { get; set; }

		[RadioReportId("nec_m_090237", InstanceName = nameof(VesselsFindingType.CerebralVeinsDuralSinuses))]
		public bool IsConfluensOfSinuses { get; set; }

		[RadioReportId("nec_m_090238", InstanceName = nameof(VesselsFindingType.CerebralVeinsDuralSinuses))]
		public bool IsRightTransverseSinus { get; set; }

		[RadioReportId("nec_m_090239", InstanceName = nameof(VesselsFindingType.CerebralVeinsDuralSinuses))]
		public bool IsLeftTransverseSinus { get; set; }

		[RadioReportId("nec_m_090240", InstanceName = nameof(VesselsFindingType.CerebralVeinsDuralSinuses))]
		public bool IsRightSigmoidSinus { get; set; }

		[RadioReportId("nec_m_090241", InstanceName = nameof(VesselsFindingType.CerebralVeinsDuralSinuses))]
		public bool IsLeftSigmoidSinus { get; set; }

		[RadioReportId("nec_m_090242", InstanceName = nameof(VesselsFindingType.CerebralVeinsDuralSinuses))]
		public bool IsRightPetrosalSinus { get; set; }

		[RadioReportId("nec_m_090243", InstanceName = nameof(VesselsFindingType.CerebralVeinsDuralSinuses))]
		public bool IsLeftPetrosalSinus { get; set; }

		[RadioReportId("nec_m_090244", InstanceName = nameof(VesselsFindingType.CerebralVeinsDuralSinuses))]
		public bool IsCavernousSinusRightPart { get; set; }

		[RadioReportId("nec_m_090245", InstanceName = nameof(VesselsFindingType.CerebralVeinsDuralSinuses))]
		public bool IsCavernousSinusLeftPart { get; set; }

		public CerebralVeinsPathologyType CerebralVeinsPathologyType { get; set; }

		[RadioReportId("nec_m_090369", InstanceName = nameof(VesselsFindingType.CerebralVeinsDuralSinuses))]
		public bool IsCerebralEdema { get; set; }

		#endregion

        #region Veins

		public VeinsCharacterizationType VeinsCharacterizationType { get; set; }

		[RadioReportId("nec_m_090376", InstanceName = nameof(VesselsFindingType.Veins))]
		public int? LengthInMm { get; set; }

		[RadioReportId("nec_m_090378", InstanceName = nameof(VesselsFindingType.Veins))]
		public bool IsLongDistance { get; set; }
		public VeinsPathologyType VeinsPathologyType { get; set; }

        #endregion
    }
}
