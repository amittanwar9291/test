using System;
using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    public class GastrointestinalTractFinding : GastrointestinalTractFindingBase, IRadioReportIdConditionEvaluator, IImageFileContainer
    {

		#region Common

		[RadioReportId("abd_m_090107", InstanceName = nameof(InstanceNames.GastrointestinalTract), IsExportable = false)]
		public DescriptionType DescriptionType { get; set; }

		public HistologyKnownType HistologyKnownType { get; set; }

		public GastricLocalizationType GastricLocalizationType { get; set; }

		[RadioReportId("abd_m_09xxx2-l", InstanceName = nameof(GastrointestinalTractFinding.CmEnhancementHomogeneityType), IsExportable = false)]
		public GastrointestinalHomogeneityType CmEnhancementHomogeneityType { get; set; }
		public PerforationType PerforationType { get; set; }

		public HeightType HeightType { get; set; }

		public SideType SideType { get; set; }

		public TypeType TypeType { get; set; }

		[RadioReportId("abd_m_090218", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090367", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_0902100", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public GastrointestinalDifferentialDiagnosisType DifferentialDiagnosis1Type { get; set; }

		[RadioReportId("abd_m_090221", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090440", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_0902101", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public GastrointestinalDifferentialDiagnosisType DifferentialDiagnosis2Type { get; set; }

		[RadioReportId("abd_m_090370", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090443", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		public EvaluationType EvaluationType { get; set; }

		[RadioReportId("abd_m_090372", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090445", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		public ExtensionType ExtensionType { get; set; }

		[RadioReportId("abd_m_090205", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090205", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsHistologyKnown { get; set; }

		[RadioReportId("abd_m_090215", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090528", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090387", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsDiffusionRestriction { get; set; }

		[RadioReportId("abd_m_090312", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090548", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsExophytic { get; set; }

		[RadioReportId("abd_m_090313", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090549", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsEndophytic { get; set; }

		[RadioReportId("abd_m_090219", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090332", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		[RadioReportId("abd_m_090368", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090219", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsSuspicionOf { get; set; }

		[RadioReportId("abd_m_090222", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090441", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090222", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsSubordinate { get; set; }

		[RadioReportId("abd_m_090424", InstanceName = nameof(GastrointestinalTractFindingType.GastricUlcer))]
		[RadioReportId("abd_m_090521", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		[RadioReportId("abd_m_090434", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_0904119", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsAbscess { get; set; }

		[RadioReportId("abd_m_090595", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		[RadioReportId("abd_m_0904110", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		public bool IsOneLesionOfTheSameEntity { get; set; }

		[RadioReportId("abd_m_090596", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		[RadioReportId("abd_m_0904111", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_0902110", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		public bool IsCommunicating { get; set; }

		[RadioReportId("abd_m_090238", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090374", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		[RadioReportId("abd_m_090238", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		[RadioReportId("abd_m_090238", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsDuodenum { get; set; }

		[RadioReportId("abd_m_090239", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090378", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsJejunum { get; set; }

		[RadioReportId("abd_m_090243", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090380", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		[RadioReportId("abd_m_090243", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		[RadioReportId("abd_m_090243", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsCecum { get; set; }

		[RadioReportId("abd_m_090244", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090381", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		[RadioReportId("abd_m_090244", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		[RadioReportId("abd_m_090244", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsVermiformAppendix { get; set; }

		[RadioReportId("abd_m_090350", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090447", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		[RadioReportId("abd_m_090350", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		[RadioReportId("abd_m_0902139", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsAscendingColon { get; set; }

		[RadioReportId("abd_m_090351", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090448", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		[RadioReportId("abd_m_090351", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		[RadioReportId("abd_m_0902140", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsHepaticFlexure { get; set; }

		[RadioReportId("abd_m_090352", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090449", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		[RadioReportId("abd_m_090352", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		[RadioReportId("abd_m_0902141", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsTransverseColon { get; set; }

		[RadioReportId("abd_m_090353", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090450", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		[RadioReportId("abd_m_090353", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		[RadioReportId("abd_m_0902142", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsSplenicFlexure { get; set; }

		[RadioReportId("abd_m_090354", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090451", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		[RadioReportId("abd_m_090354", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		[RadioReportId("abd_m_0902143", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsDescendingColon { get; set; }

		[RadioReportId("abd_m_090355", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090452", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		[RadioReportId("abd_m_090355", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		[RadioReportId("abd_m_0902144", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsSigmoidColon { get; set; }

		[RadioReportId("abd_m_090356", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090356", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		[RadioReportId("abd_m_0902145", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsRectum { get; set; }

		[RadioReportId("abd_m_090357", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090456", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		[RadioReportId("abd_m_0902146", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsAnalCanal { get; set; }

		[RadioReportId("abd_m_090247", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_0904115", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		[RadioReportId("abd_m_090495", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsInvagination { get; set; }

		[RadioReportId("abd_m_090248", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_0903102", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		public bool IsStenosis { get; set; }

		[RadioReportId("abd_m_090249", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_0902124", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		[RadioReportId("abd_m_090491", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsMass { get; set; }

		[RadioReportId("abd_m_090259", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_0903103", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		[RadioReportId("abd_m_0903183", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		public bool IsIleus { get; set; }

		[RadioReportId("abd_m_090358", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_0903104", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		public bool IsFistula { get; set; }

		[RadioReportId("abd_m_0905114", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_0904116", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		[RadioReportId("abd_m_0902114", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		[RadioReportId("abd_m_090478", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public bool IsPerforation { get; set; }

		[RadioReportId("abd_m_0905115", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090479", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public bool IsContained { get; set; }

		[RadioReportId("abd_m_090597", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090480", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public bool IsOpen { get; set; }

		[RadioReportId("abd_m_090532", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090477", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public bool IsPerifocalFatStranding { get; set; }

		[RadioReportId("abd_m_090375", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		[RadioReportId("abd_m_0902102", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		[RadioReportId("abd_m_0902102", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsParsDescendens { get; set; }

		[RadioReportId("abd_m_090376", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		[RadioReportId("abd_m_0902103", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		[RadioReportId("abd_m_0902103", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsParsHorizontalis { get; set; }

		[RadioReportId("abd_m_090377", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		[RadioReportId("abd_m_0902104", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		[RadioReportId("abd_m_0902104", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsParsAscendens { get; set; }

		[RadioReportId("abd_m_0904114", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		[RadioReportId("abd_m_0903130", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsAscites { get; set; }

		[RadioReportId("abd_m_0902105", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		[RadioReportId("abd_m_0902105", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsJejunumIleum { get; set; }

		[RadioReportId("abd_m_090485", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		[RadioReportId("abd_m_0902165", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		public bool IsFluid { get; set; }

		[RadioReportId("abd_m_090493", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		[RadioReportId("abd_m_0903184", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		public bool IsIncarceration { get; set; }

		[RadioReportId("abd_m_090494", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		[RadioReportId("abd_m_0903186", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		public bool IsVolvulus { get; set; }

		[RadioReportId("abd_m_090519", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_0905106", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsArterial { get; set; }

		[RadioReportId("abd_m_090531", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_0904123", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsAccentuatedMesentericVesselsCombSign { get; set; }

		[RadioReportId("abd_m_090404", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090323", InstanceName = nameof(GastrointestinalTractFindingType.GastricUlcer))]
		[RadioReportId("abd_m_090323", InstanceName = nameof(GastrointestinalTractFindingType.GastricDiverticulum))]
		[RadioReportId("abd_m_090404", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		[RadioReportId("abd_m_090404", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090561", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		[RadioReportId("abd_m_090323", InstanceName = nameof(GastrointestinalTractFindingType.Appendagitis))]
		public int? SizeInMm { get; set; }

		[RadioReportId("abd_m_090407", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090326", InstanceName = nameof(GastrointestinalTractFindingType.GastricUlcer))]
		[RadioReportId("abd_m_090326", InstanceName = nameof(GastrointestinalTractFindingType.GastricDiverticulum))]
		[RadioReportId("abd_m_090407", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		[RadioReportId("abd_m_090407", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090542", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		[RadioReportId("abd_m_090564", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		[RadioReportId("abd_m_090326", InstanceName = nameof(GastrointestinalTractFindingType.Appendagitis))]
		[RadioReportId("abd_m_090581", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		public int? SecondPlaneInMm { get; set; }

		[RadioReportId("abd_m_090410", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090329", InstanceName = nameof(GastrointestinalTractFindingType.GastricUlcer))]
		[RadioReportId("abd_m_090329", InstanceName = nameof(GastrointestinalTractFindingType.GastricDiverticulum))]
		[RadioReportId("abd_m_090410", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		[RadioReportId("abd_m_090410", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090567", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		[RadioReportId("abd_m_090329", InstanceName = nameof(GastrointestinalTractFindingType.Appendagitis))]
		[RadioReportId("abd_m_090584", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		public int? ThirdPlaneInMm { get; set; }

		[RadioReportId("abd_m_090427", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_090539", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public int? MeasurementIntestinalWallInMm { get; set; }

		[RadioReportId("abd_m_090535", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_0905110", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		[RadioReportId("abd_m_090483", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public int? SadLargestInMm { get; set; }

		#endregion

		#region GastricMass

		[RadioReportId("abd_m_090213", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		public bool IsSignalDropInTheOpposedPhaseChemicalShift { get; set; }

		[RadioReportId("abd_m_090315", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		public bool IsSubmucous { get; set; }

		[RadioReportId("abd_m_090319", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		public bool IsIntraluminal { get; set; }

		[RadioReportId("abd_m_090320", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		public bool IsExtraluminal { get; set; }

		[RadioReportId("abd_m_090413", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		public bool IsIrregularCalcifications { get; set; }

		[RadioReportId("abd_m_090414", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		public bool IsPunctateCalcifications { get; set; }

		[RadioReportId("abd_m_090415", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		public bool IsMucosalEnhancement { get; set; }

		[RadioReportId("abd_m_090419", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		public int? SadInMm { get; set; }

		[RadioReportId("abd_m_0904108", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		public bool IsMacroscopicFat { get; set; }

		#endregion

		#region GastricUlcer

		[RadioReportId("abd_m_090422", InstanceName = nameof(GastrointestinalTractFindingType.GastricUlcer))]
		public bool IsFreeGas { get; set; }

		[RadioReportId("abd_m_090423", InstanceName = nameof(GastrointestinalTractFindingType.GastricUlcer))]
		public bool IsSuspicionOfFreeGas { get; set; }

		[RadioReportId("abd_m_090425", InstanceName = nameof(GastrointestinalTractFindingType.GastricUlcer))]
		public bool IsSuspicionOfAbscess { get; set; }

		#endregion

		#region PostoperativeGastricImaging
		public ComplicationCourseOfDiseaseType ComplicationCourseOfDiseaseType { get; set; }

		[RadioReportId("abd_m_090336", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		public bool IsMarginalContrastEnhancement { get; set; }

		[RadioReportId("abd_m_090522", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		public bool IsSeroma { get; set; }

		[RadioReportId("abd_m_090338", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		public bool IsActiveBleeding { get; set; }

		[RadioReportId("abd_m_090339", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		public bool IsSignsOfSuperinfection { get; set; }

		[RadioReportId("abd_m_090341", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		public bool IsStomachResection { get; set; }

		public StomachResectionType StomachResectionType { get; set; }

		[RadioReportId("abd_m_090344", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		public bool IsBiliodigestiveAnastomosis { get; set; }

		[RadioReportId("abd_m_090345", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		public bool IsBraunAnastomosis { get; set; }

		[RadioReportId("abd_m_090346", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		public bool IsFundoplication { get; set; }

		[RadioReportId("abd_m_090347", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		public bool IsRouxYReconstruction { get; set; }

		[RadioReportId("abd_m_090348", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		public bool IsGastricBanding { get; set; }

		[RadioReportId("abd_m_090349", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		public bool IsBariatricSurgery { get; set; }

		#endregion

		#region SegmentalBowelFindings

		[RadioReportId("abd_m_090240", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		public bool IsPreterminalIleum { get; set; }

		[RadioReportId("abd_m_090241", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		public bool IsNeoterminalIleum { get; set; }

		[RadioReportId("abd_m_090242", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		public bool IsTerminalIleum { get; set; }

		public LengthOfChangesInCmType LengthOfChangesInCmType { get; set; }

		[RadioReportId("abd_m_090246", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		public bool IsStricture { get; set; }

		[RadioReportId("abd_m_090251", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		public int? MassMaximumDiameterInMm { get; set; }

		[RadioReportId("abd_m_090253", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		public bool IsPseudotumor { get; set; }

		[RadioReportId("abd_m_090254", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		public bool IsPseudotumorStenosis { get; set; }

		[RadioReportId("abd_m_090255", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		public bool IsPrestenoticDilatation { get; set; }

		[RadioReportId("abd_m_090257", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		public int? PrestenoticDilatationMaximumDiameterInMm { get; set; }

		[RadioReportId("abd_m_090360", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		public bool IsInterenteric { get; set; }

		[RadioReportId("abd_m_090361", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		public bool IsEnterocutaneous { get; set; }

		[RadioReportId("abd_m_090362", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		public bool IsBlindEndend { get; set; }

		[RadioReportId("abd_m_090363", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		public bool IsEnterovesical { get; set; }

		[RadioReportId("abd_m_090364", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		public bool IsEnterovaginal { get; set; }

		[RadioReportId("abd_m_090598", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		public bool IsToxicMegacolon { get; set; }

		[RadioReportId("abd_m_090530", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		public bool IsMucosalEdema { get; set; }

		#endregion

		#region IntestinalMass

		[RadioReportId("abd_m_090379", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsIleum { get; set; }

		[RadioReportId("abd_m_090453", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsRectumUpperThird { get; set; }

		[RadioReportId("abd_m_090454", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsRectumMiddleThird { get; set; }

		[RadioReportId("abd_m_090455", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsRectumLowerThird { get; set; }

		[RadioReportId("abd_m_0905107", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsPortalVenous { get; set; }

		[RadioReportId("abd_m_090289", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsDesmoplasticReactionOfTheMesentery { get; set; }

		[RadioReportId("abd_m_090290", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsPostoperativePostinterventional { get; set; }

		[RadioReportId("abd_m_090291", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsRadiationInduced { get; set; }

		[RadioReportId("abd_m_090292", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsMesorectalFascia { get; set; }

		[RadioReportId("abd_m_0902169", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public HourType FromToType { get; set; }

		[RadioReportId("abd_m_0902171", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public HourType UntilType { get; set; }

		[RadioReportId("abd_m_090295", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsAdjacentIntestine { get; set; }

		[RadioReportId("abd_m_090296", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsPeritonealFolds { get; set; }

		[RadioReportId("abd_m_0903187", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsParenchymalOrgan { get; set; }

		[RadioReportId("abd_m_0903188", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsLiver { get; set; }

		[RadioReportId("abd_m_0903189", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsPancreas { get; set; }

		[RadioReportId("abd_m_0903190", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsSpleen { get; set; }

		[RadioReportId("abd_m_0903191", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsKidney { get; set; }

		[RadioReportId("abd_m_0903192", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsKidneyRight { get; set; }

		[RadioReportId("abd_m_0903193", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsKidneyLeft { get; set; }

		[RadioReportId("abd_m_0903194", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsAdrenalGland { get; set; }

		[RadioReportId("abd_m_0903195", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsAdrenalGlandRight { get; set; }

		[RadioReportId("abd_m_0903196", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsAdrenalGlandLeft { get; set; }

		[RadioReportId("abd_m_0903197", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsVessels { get; set; }

		[RadioReportId("abd_m_0903198", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsBone { get; set; }

		[RadioReportId("abd_m_0904113", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsMechanicalIleus { get; set; }

		[RadioReportId("abd_m_0904120", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsPeritonealCarcinomatosis { get; set; }

		[RadioReportId("abd_m_0904121", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsFistulaFormation { get; set; }

		[RadioReportId("abd_m_0904122", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsCloacalFormation { get; set; }

		[RadioReportId("abd_m_0905113", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsLocoregional { get; set; }

		[RadioReportId("abd_m_0905114", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public bool IsDistant { get; set; }

		[RadioReportId("abd_m_090545", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		public int? LongitudinalExtensionInMm { get; set; }


		#endregion

		#region BowelDiverticula

		[RadioReportId("abd_m_0902172", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		public bool IsMeckelSDiverticulum { get; set; }

		public ContrastEnhancementDistributionType ContrastEnhancementDistributionType { get; set; }

		public CharacteristicsType CharacteristicsType { get; set; }

		[RadioReportId("abd_m_090472", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		public bool IsDiverticulosis { get; set; }

		[RadioReportId("abd_m_090474", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		public int? BowelDiverticulaMaximumDiameterInMm { get; set; }

		[RadioReportId("abd_m_090556", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		public HansenAndStockType HansenAndStockType { get; set; }

		[RadioReportId("abd_m_090558", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		public CddClassificationType CddClassificationType { get; set; }

		[RadioReportId("abd_m_0902108", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		public bool IsPerifocalAbscess { get; set; }

		[RadioReportId("abd_m_0902109", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		public bool IsMultipleAbscesses { get; set; }

		[RadioReportId("abd_m_0902112", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		public int? MaxSizeInMm { get; set; }

		[RadioReportId("abd_m_0903101", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		public bool IsPeritonitis { get; set; }

		[RadioReportId("abd_m_0903106", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		public bool IsEnteroEnteral { get; set; }

		[RadioReportId("abd_m_0903107", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		public bool IsEnteroVesical { get; set; }

		[RadioReportId("abd_m_0903108", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		public bool IsEnteroCutaneous { get; set; }

		[RadioReportId("abd_m_0903109", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		public bool IsEnteroVaginal { get; set; }

		[RadioReportId("abd_m_0903110", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		public bool IsSinusTract { get; set; }

		#endregion

		#region Appendicitis

		[RadioReportId("abd_m_0902119", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public bool IsRetrocecalPositionOfTheAppendix { get; set; }

		[RadioReportId("abd_m_0903113", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public bool IsAppendixExpansion { get; set; }

		[RadioReportId("abd_m_0903114", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public int? AppendixExpansionInMm { get; set; }

		[RadioReportId("abd_m_0903116", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public bool IsLumenExpansion { get; set; }

		[RadioReportId("abd_m_0903117", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public int? LumenExpansionInMm { get; set; }

		[RadioReportId("abd_m_0903119", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public bool IsAppendicolite { get; set; }

		[RadioReportId("abd_m_0903120", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public int? AppendicoliteInMm { get; set; }

		[RadioReportId("abd_m_0903122", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public bool IsContrastEnhancementOfTheIntestinalWall { get; set; }

		[RadioReportId("abd_m_0903123", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public bool IsTargetSign { get; set; }

		[RadioReportId("abd_m_0903124", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public bool IsFocalReducedContrastEnhancement { get; set; }

		[RadioReportId("abd_m_0903125", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public bool IsWallEdemaOfTheAdjacentIntestinalSegments { get; set; }

		public FluidType FluidType { get; set; }

		[RadioReportId("abd_m_090559", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public bool IsPerityphliticAbscess { get; set; }

		[RadioReportId("abd_m_090569", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public bool IsInflammatoryCoReactionOfTheMPsoas { get; set; }

		[RadioReportId("abd_m_0902121", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public bool IsMucocele { get; set; }

		[RadioReportId("abd_m_0902122", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public bool IsDiverticulitis { get; set; }

		[RadioReportId("abd_m_0902123", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public bool IsAppendagitisEpiploica { get; set; }

		public MassType MassType { get; set; }

		[RadioReportId("abd_m_0902127", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public bool IsEnlargedNonInflamedAppendix { get; set; }

		[RadioReportId("abd_m_0902128", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public bool IsColitis { get; set; }

		[RadioReportId("abd_m_0902129", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public bool IsIleitis { get; set; }

		[RadioReportId("abd_m_0902130", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		public bool IsOvarianProcess { get; set; }

		#endregion

		#region MechanicalIleus

		[RadioReportId("abd_m_0903127", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public int? MaxPrestenoticDilatationInMm { get; set; }

		public MechanicalLocalizationType MechanicalLocalizationType { get; set; }

		[RadioReportId("abd_m_0903199", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsIschemicBowelSegments { get; set; }

		[RadioReportId("abd_m_0903200", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsTransmigratoryPeritonitis { get; set; }

		[RadioReportId("abd_m_090489", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsAdhesionsBrides { get; set; }

		[RadioReportId("abd_m_090490", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsInflammatory { get; set; }

		[RadioReportId("abd_m_090492", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsStrangulation { get; set; }

		[RadioReportId("abd_m_090496", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsClosedLoop { get; set; }

		[RadioReportId("abd_m_090497", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsAtresia { get; set; }

		[RadioReportId("abd_m_090498", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsGallstoneIleus { get; set; }

		[RadioReportId("abd_m_090499", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsScarStenosis { get; set; }

		[RadioReportId("abd_m_0904100", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsDuplications { get; set; }

		[RadioReportId("abd_m_0904101", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsCoprostasis { get; set; }

		public PoststenoticSegmentType PoststenoticSegmentType { get; set; }

		public TransitionalSegmentType TransitionalSegmentType { get; set; }

		[RadioReportId("abd_m_090576", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		public bool IsSurroundingMass { get; set; }

		#endregion

		#region ParalyticIleus
		public PathogenesisType PathogenesisType { get; set; }

		[RadioReportId("abd_m_0903134", InstanceName = nameof(GastrointestinalTractFindingType.ParalyticIleus))]
		public bool IsGeneralizedUniformGaseousDistensionOfTheLargeAndSmallBowel { get; set; }

		[RadioReportId("abd_m_0903136", InstanceName = nameof(GastrointestinalTractFindingType.ParalyticIleus))]
		public int? MaximumDiameterLargeBowelInMm { get; set; }

		[RadioReportId("abd_m_0903139", InstanceName = nameof(GastrointestinalTractFindingType.ParalyticIleus))]
		public int? MaximumSmallBowelDiameterInMm { get; set; }

		#endregion

		#region Hernia

		public HerniaLocalizationType HerniaLocalizationType { get; set; }

		[RadioReportId("abd_m_0902160", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		public bool IsLittreRichterHernia { get; set; }

		[RadioReportId("abd_m_090578", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		public int? ExtensionHerniaSacInMm { get; set; }

		[RadioReportId("abd_m_090587", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		public int? ExtensionHernialOrificeInMm { get; set; }

		[RadioReportId("abd_m_090590", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		public int? ExtensionHernialOrificeSecondPlaneInMm { get; set; }

		[RadioReportId("abd_m_090593", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		public int? ExtensionHernialOrificeThirdPlaneInMm { get; set; }

		public AbdominalWallHerniaType AbdominalWallHerniaType { get; set; }

		[RadioReportId("abd_m_0903155", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		public MidlineHerniasType MidlineHerniasType { get; set; }

		public DetailsType DetailsType { get; set; }

		[RadioReportId("abd_m_0904107", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		public bool IsIncisionalHernia { get; set; }

		[RadioReportId("abd_m_0903166", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		public bool IsScrotalHernia { get; set; }

		[RadioReportId("abd_m_0902162", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		public bool IsIntestinalLoops { get; set; }

		[RadioReportId("abd_m_0902163", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		public bool IsLargeIntestine { get; set; }

		[RadioReportId("abd_m_0902164", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		public bool IsSmallIntestine { get; set; }

		[RadioReportId("abd_m_0902166", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		public bool IsMesentericFatTissue { get; set; }

		[RadioReportId("abd_m_0902167", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		public bool IsOmentum { get; set; }

		[RadioReportId("abd_m_0903181", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		public bool IsFixedBowelLoops { get; set; }

		[RadioReportId("abd_m_0903182", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		public bool IsBowelInAbnormalAnatomicPosition { get; set; }

		[RadioReportId("abd_m_0903185", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		public bool IsObstruction { get; set; }


        #endregion

		#region ImageFileUpload

        [RadioReportId("uni_09_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_09_005")]
        public string PictureNumber { get; set; }

        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_09_007", InstanceName = "AbdomenMRT.Gastrointestinal", IsExportable = false)]
        public ImageFile UploadedImageFile { get; set; }

        public void DropImageFile(Guid? imageFileId = null)
        {
            UploadedImageFile = null;
            ImageFileId = null;
        }

        public Guid? GetImageFileGuid(string fileType = null) => ImageFileId;

        public void SetImageFile(ImageFile imageFile, string fileType = null)
        {
            UploadedImageFile = imageFile ?? throw new ArgumentNullException(nameof(imageFile));
            ImageFileId = imageFile.Id;
        }

        #endregion

        public bool CheckCondition(string customConditionId)
		{
			return customConditionId switch
            {
                nameof(HerniaLocalizationType.BochdalekHernia) => this.HerniaLocalizationType.ToString() == customConditionId,
                nameof(HerniaLocalizationType.FemoralCanal) => this.HerniaLocalizationType.ToString() == customConditionId,
                nameof(HerniaLocalizationType.BackMuscles) => this.HerniaLocalizationType.ToString() == customConditionId,
                nameof(HerniaLocalizationType.AbdominalWall) => this.HerniaLocalizationType.ToString() == customConditionId,
                nameof(HerniaLocalizationType.InguinalCanal) => this.HerniaLocalizationType.ToString() == customConditionId,
                nameof(HerniaLocalizationType.InternalHernia) => this.HerniaLocalizationType.ToString() == customConditionId,
                nameof(GastrointestinalTractFindingType.IntestinalMass) => this.FindingType.ToString() == customConditionId,
                nameof(GastrointestinalTractFindingType.GastricMass) => this.FindingType.ToString() == customConditionId,
                nameof(GastrointestinalTractFindingType.SegmentalBowelFindings) => this.FindingType.ToString() == customConditionId,
                _ => false
            };
		}
    }
}