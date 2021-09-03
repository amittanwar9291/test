using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.NeckMRT.Repo.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BonesFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    MyelonPathologyType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    MainSpatialNeoplasmDifferentialDiagnosisType1 = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    MainHomogeneityType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    CorticalBoneType = table.Column<byte>(nullable: false),
                    T1w = table.Column<byte>(nullable: false),
                    T2w = table.Column<byte>(nullable: false),
                    IsSeptatedChambered = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCentral = table.Column<bool>(nullable: false),
                    IsDiffuseDistribution = table.Column<bool>(nullable: false),
                    IsNidus = table.Column<bool>(nullable: false),
                    IsT2wHyperintense = table.Column<bool>(nullable: false),
                    IsFatSignal = table.Column<bool>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    SubHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    IsPeriostealReaction = table.Column<bool>(nullable: false),
                    IsSclerosisEdge = table.Column<bool>(nullable: false),
                    IsExpansive = table.Column<bool>(nullable: false),
                    IsOsteolytic = table.Column<bool>(nullable: false),
                    IsOsteoblastic = table.Column<bool>(nullable: false),
                    IsSclerotic = table.Column<bool>(nullable: false),
                    IsInfiltrationSoftTissues = table.Column<bool>(nullable: false),
                    IsInfiltrationOfAdjacentbone = table.Column<bool>(nullable: false),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsOverOneLesion = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BonesFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FindingLocalizers",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Code = table.Column<string>(maxLength: 25, nullable: false),
                    Content = table.Column<string>(nullable: false),
                    Mapping = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FindingLocalizers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ImageFiles",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    FileName = table.Column<string>(maxLength: 255, nullable: true),
                    ObjectName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ImageFiles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LarynxFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsGlottis = table.Column<bool>(nullable: false),
                    IsSinusOfMorgagni = table.Column<bool>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    T1wSignal = table.Column<byte>(nullable: false),
                    T2wSignal = table.Column<byte>(nullable: false),
                    IsInvasive = table.Column<bool>(nullable: false),
                    CmQuantitativeType = table.Column<byte>(nullable: false),
                    CmHomogeneityType = table.Column<byte>(nullable: false),
                    IsSupraglotticSpace = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LarynxFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PharynxFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    CmEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsNasopharynx = table.Column<bool>(nullable: false),
                    IsOropharynx = table.Column<bool>(nullable: false),
                    IsHypopharynx = table.Column<bool>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    MassHomogeneityType = table.Column<byte>(nullable: false),
                    SignalT1wType = table.Column<byte>(nullable: false),
                    SignalT2wType = table.Column<byte>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsDisplacing = table.Column<bool>(nullable: false),
                    IsInvasive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PharynxFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Reports",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    PatientId = table.Column<Guid>(nullable: false),
                    UserId = table.Column<Guid>(nullable: false),
                    InstituteId = table.Column<Guid>(nullable: false),
                    PresetCode = table.Column<string>(maxLength: 255, nullable: true),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    StudyInstanceUID = table.Column<string>(nullable: true),
                    ExaminationDate = table.Column<DateTime>(nullable: false),
                    AccessionNumber = table.Column<string>(nullable: true),
                    ExaminationType = table.Column<string>(maxLength: 50, nullable: false),
                    FindingsDate = table.Column<DateTime>(nullable: false),
                    Status = table.Column<byte>(nullable: false),
                    PatientAge = table.Column<byte>(nullable: false),
                    FreeField = table.Column<string>(nullable: true),
                    Language = table.Column<string>(maxLength: 50, nullable: true),
                    Evaluation = table.Column<string>(maxLength: 255, nullable: true),
                    IsLocked = table.Column<bool>(nullable: false),
                    LicenseFractionId = table.Column<Guid>(nullable: false),
                    LicensingDate = table.Column<DateTime>(nullable: false),
                    TotalPageCount = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reports", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ReportSchemas",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportTypeName = table.Column<string>(type: "varchar(50)", nullable: false),
                    Paragraphs = table.Column<string>(nullable: true),
                    IsDefault = table.Column<bool>(nullable: false),
                    VersionName = table.Column<string>(type: "varchar(50)", nullable: false),
                    BuildVersion = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReportSchemas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ReportSession",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    InstituteId = table.Column<Guid>(nullable: false),
                    UserId = table.Column<Guid>(nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReportSession", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BonesPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    areFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BonesPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BonesPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ExaminationPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    IsMRINeck = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExaminationPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ExaminationPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "IndicationPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    IsMRI = table.Column<bool>(nullable: false),
                    MonthOfMRI = table.Column<byte>(nullable: false),
                    YearOfMRI = table.Column<int>(nullable: false),
                    IsCT = table.Column<bool>(nullable: false),
                    MonthOfCT = table.Column<byte>(nullable: false),
                    YearOfCT = table.Column<int>(nullable: false),
                    IsSonography = table.Column<bool>(nullable: false),
                    MonthOfSonography = table.Column<byte>(nullable: false),
                    YearOfSonography = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IndicationPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_IndicationPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LarynxPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LarynxPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LarynxPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LymphNodesPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LymphNodesPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LymphNodesPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PageInfos",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    PageId = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    TypeName = table.Column<string>(maxLength: 255, nullable: true),
                    PageNumber = table.Column<byte>(nullable: false),
                    IsBlocked = table.Column<bool>(nullable: false),
                    WasModified = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PageInfos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PageInfos_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PharynxPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PharynxPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PharynxPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ReportResults",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    InstituteId = table.Column<Guid>(nullable: false),
                    ReportTypeName = table.Column<string>(maxLength: 255, nullable: true),
                    ReportSummary = table.Column<string>(nullable: true),
                    Discussion = table.Column<string>(nullable: true),
                    IsLocalizer = table.Column<bool>(nullable: false),
                    IsReferenceImage = table.Column<bool>(nullable: false),
                    IsICD10 = table.Column<bool>(nullable: false),
                    Approved = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReportResults", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ReportResults_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SoftTissuesPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoftTissuesPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SoftTissuesPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SummaryPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    IsContrastEnhancedMriNeck = table.Column<bool>(nullable: false),
                    IsBrainMri = table.Column<bool>(nullable: false),
                    IsOrbitaMri = table.Column<bool>(nullable: false),
                    IsTemporomandibularJointsMri = table.Column<bool>(nullable: false),
                    IsTofMrAngiography = table.Column<bool>(nullable: false),
                    IsMrAngiographyIntracranial = table.Column<bool>(nullable: false),
                    IsMrAngiographyExtracranial = table.Column<bool>(nullable: false),
                    IsMriCervicalSpine = table.Column<bool>(nullable: false),
                    IsCct = table.Column<bool>(nullable: false),
                    IsCtAngiographyIntracranial = table.Column<bool>(nullable: false),
                    IsCtAngiographyExtracranial = table.Column<bool>(nullable: false),
                    IsCtPetrousBone = table.Column<bool>(nullable: false),
                    IsParanasalSinusCt = table.Column<bool>(nullable: false),
                    IsCtNeck = table.Column<bool>(nullable: false),
                    IsDentalCtDvt = table.Column<bool>(nullable: false),
                    IsCtThorax = table.Column<bool>(nullable: false),
                    IsPetCt = table.Column<bool>(nullable: false),
                    IsSpectCt = table.Column<bool>(nullable: false),
                    IsBoneScintigraphy = table.Column<bool>(nullable: false),
                    MRIFollowUpType = table.Column<byte>(nullable: false),
                    IsBiopsy = table.Column<bool>(nullable: false),
                    BiopsyType = table.Column<byte>(nullable: false),
                    IsEvaluationInInterdisciplinaryTumorBoard = table.Column<bool>(nullable: false),
                    DynamicsOfFindingsType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SummaryPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SummaryPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TechnologyPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    CMReinforcedType = table.Column<byte>(nullable: false),
                    SequencesType = table.Column<byte>(nullable: false),
                    ContrastMediumType = table.Column<byte>(nullable: false),
                    ContrastQuantity = table.Column<decimal>(nullable: true),
                    IsCMSideEffect = table.Column<bool>(nullable: false),
                    IsH1BlockerIV = table.Column<bool>(nullable: false),
                    IsH2BlockerIV = table.Column<bool>(nullable: false),
                    IsCortisoneIV = table.Column<bool>(nullable: false),
                    IsO2Administration = table.Column<bool>(nullable: false),
                    IsSubcutaneousEpinephrine = table.Column<bool>(nullable: false),
                    IsNotFurtherSpecified = table.Column<bool>(nullable: false),
                    BarcodeCMCharge = table.Column<string>(nullable: true),
                    SetName = table.Column<string>(nullable: true),
                    IsMotion = table.Column<bool>(nullable: false),
                    IsMetalArtifacts = table.Column<bool>(nullable: false),
                    IsOther = table.Column<bool>(nullable: false),
                    IsIntravenous = table.Column<bool>(nullable: false),
                    MagneticFieldStrengthType = table.Column<byte>(nullable: false),
                    IsSusceptibilityArtifacts = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TechnologyPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TechnologyPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ThyroidPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ThyroidPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ThyroidPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "VesselsPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VesselsPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VesselsPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ReportSchemaSessions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportSchemaId = table.Column<Guid>(nullable: false),
                    UserName = table.Column<string>(type: "varchar(50)", nullable: false),
                    LastActivity = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReportSchemaSessions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ReportSchemaSessions_ReportSchemas_ReportSchemaId",
                        column: x => x.ReportSchemaId,
                        principalTable: "ReportSchemas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BonesFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    MyelonPathologyType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    MainSpatialNeoplasmDifferentialDiagnosisType1 = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    MainHomogeneityType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    CorticalBoneType = table.Column<byte>(nullable: false),
                    T1w = table.Column<byte>(nullable: false),
                    T2w = table.Column<byte>(nullable: false),
                    IsSeptatedChambered = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCentral = table.Column<bool>(nullable: false),
                    IsDiffuseDistribution = table.Column<bool>(nullable: false),
                    IsNidus = table.Column<bool>(nullable: false),
                    IsT2wHyperintense = table.Column<bool>(nullable: false),
                    IsFatSignal = table.Column<bool>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    SubHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    IsPeriostealReaction = table.Column<bool>(nullable: false),
                    IsSclerosisEdge = table.Column<bool>(nullable: false),
                    IsExpansive = table.Column<bool>(nullable: false),
                    IsOsteolytic = table.Column<bool>(nullable: false),
                    IsOsteoblastic = table.Column<bool>(nullable: false),
                    IsSclerotic = table.Column<bool>(nullable: false),
                    IsInfiltrationSoftTissues = table.Column<bool>(nullable: false),
                    IsInfiltrationOfAdjacentbone = table.Column<bool>(nullable: false),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsOverOneLesion = table.Column<bool>(nullable: false),
                    SpineLocations = table.Column<decimal>(nullable: false),
                    IsMaxilla = table.Column<bool>(nullable: false),
                    IsMandible = table.Column<bool>(nullable: false),
                    IsCondylarProcess = table.Column<bool>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    IsOsTemporale = table.Column<bool>(nullable: false),
                    IsOsSphenoidale = table.Column<bool>(nullable: false),
                    IsOsEthmoidale = table.Column<bool>(nullable: false),
                    IsMaxillaPalatineProcess = table.Column<bool>(nullable: false),
                    IsMaxillaAlveolarProcess = table.Column<bool>(nullable: false),
                    IsRamusMandibulae = table.Column<bool>(nullable: false),
                    IsCoronoideusProcess = table.Column<bool>(nullable: false),
                    IsMandibleAlveolarProcess = table.Column<bool>(nullable: false),
                    SizeInMm = table.Column<byte>(nullable: true),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    IsSpondylodesis = table.Column<bool>(nullable: false),
                    SpondylodesisSpineLocations = table.Column<decimal>(nullable: false),
                    SpondylodesisTraumaLocations = table.Column<byte>(nullable: false),
                    IsOsteosynthesis = table.Column<bool>(nullable: false),
                    OsteosynthesisSpineLocations = table.Column<decimal>(nullable: false),
                    IsIntervertebralDiscProthesis = table.Column<bool>(nullable: false),
                    ProthesisSpineLocations = table.Column<decimal>(nullable: false),
                    IsVertebroplasty = table.Column<bool>(nullable: false),
                    VertebroplastySpineLocations = table.Column<decimal>(nullable: false),
                    AxialDeviationType = table.Column<byte>(nullable: false),
                    PathologyType = table.Column<byte>(nullable: false),
                    MaxDiameterInMm = table.Column<byte>(nullable: true),
                    ExtensionReferenceSpinalCanalType = table.Column<byte>(nullable: false),
                    SagittalWidthOfCanalInMm = table.Column<byte>(nullable: true),
                    IsHighGradeCSF = table.Column<bool>(nullable: false),
                    IsMyelonCompression = table.Column<bool>(nullable: false),
                    IsNarrowingOfTheIntervertebral = table.Column<bool>(nullable: false),
                    IsBroadbased = table.Column<bool>(nullable: false),
                    IsOsteophyteFormation = table.Column<bool>(nullable: false),
                    IsMigrationCranial = table.Column<bool>(nullable: false),
                    IsMigrationCaudal = table.Column<bool>(nullable: false),
                    ModicClassificationType = table.Column<byte>(nullable: false),
                    IsIncreasedSizeOfDisc = table.Column<bool>(nullable: false),
                    IsT2wHyperintensityOfDisc = table.Column<bool>(nullable: false),
                    IsContrastEnhancement = table.Column<bool>(nullable: false),
                    IsEndplateEdema = table.Column<bool>(nullable: false),
                    IsErosionsOfTheEndplates = table.Column<bool>(nullable: false),
                    IsVertebraEdema = table.Column<bool>(nullable: false),
                    IsOsteomyelitis = table.Column<bool>(nullable: false),
                    SpineAxialLocations = table.Column<byte>(nullable: false),
                    IsParavertebralinflammatoryReaction = table.Column<bool>(nullable: false),
                    IsIncreasedT2Signal = table.Column<bool>(nullable: false),
                    CharacterizationType = table.Column<byte>(nullable: false),
                    ExtensionCraniocaudalInMm = table.Column<int>(nullable: true),
                    ExtensionSagittalInMm = table.Column<byte>(nullable: true),
                    SpinalCanalLocations = table.Column<byte>(nullable: false),
                    MyelonDifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    MyelonDifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsMaxillaRight = table.Column<bool>(nullable: false),
                    IsMaxillaLeft = table.Column<bool>(nullable: false),
                    IsMandibleRight = table.Column<bool>(nullable: false),
                    IsMandibleLeft = table.Column<bool>(nullable: false),
                    IsCondylarProcessRight = table.Column<bool>(nullable: false),
                    IsCondylarProcessLeft = table.Column<bool>(nullable: false),
                    IsManubriumSterni = table.Column<bool>(nullable: false),
                    IsSkullBase = table.Column<bool>(nullable: false),
                    IsVertebra = table.Column<bool>(nullable: false),
                    IsTendinitisCalcareaLongus = table.Column<bool>(nullable: false),
                    IsTendinitisRight = table.Column<bool>(nullable: false),
                    IsTendinitisLeft = table.Column<bool>(nullable: false),
                    IsNasalSeptum = table.Column<bool>(nullable: false),
                    SecondPlaneInMm = table.Column<byte>(nullable: true),
                    ThirdPlaneInMm = table.Column<byte>(nullable: true),
                    IsPeripheralContrastEnhancement = table.Column<bool>(nullable: false),
                    IsOverOneLesionOfSameEntity = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsMultiple = table.Column<bool>(nullable: false),
                    OsteomyelitisDifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    IsSpine = table.Column<bool>(nullable: false),
                    IsFacialSkeleton = table.Column<bool>(nullable: false),
                    IsCartilage = table.Column<bool>(nullable: false),
                    IsPosteriorCranialFossa = table.Column<bool>(nullable: false),
                    IsOsIncisivum = table.Column<bool>(nullable: false),
                    IsOsPalatinum = table.Column<bool>(nullable: false),
                    IsVomer = table.Column<bool>(nullable: false),
                    IsSuperiorNasalConcha = table.Column<bool>(nullable: false),
                    IsMiddleNasalConcha = table.Column<bool>(nullable: false),
                    IsInferiorNasalConcha = table.Column<bool>(nullable: false),
                    IsOsHyoideum = table.Column<bool>(nullable: false),
                    IsThyroidCartilage = table.Column<bool>(nullable: false),
                    IsCricoidCartilage = table.Column<bool>(nullable: false),
                    IsArytenoidCartilage = table.Column<bool>(nullable: false),
                    IsOsOccipitale = table.Column<bool>(nullable: false),
                    IsClivus = table.Column<bool>(nullable: false),
                    LocalSpreadType = table.Column<byte>(nullable: false),
                    SpatialNeoplasmDifferentialDiagnosisType1 = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    SpatialNeoplasmDifferentialDiagnosisType2 = table.Column<byte>(nullable: false),
                    SpatialNeoplasmDifferentialDiagnosisType3 = table.Column<byte>(nullable: false),
                    IsWithinThePrimaryAffectedBone = table.Column<bool>(nullable: false),
                    BonesPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BonesFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BonesFindings_BonesPages_BonesPageId",
                        column: x => x.BonesPageId,
                        principalTable: "BonesPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PatientInformation",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Weight = table.Column<int>(nullable: false),
                    Height = table.Column<int>(nullable: false),
                    Gender = table.Column<byte>(nullable: false),
                    Age = table.Column<byte>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PatientInformation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PatientInformation_ExaminationPages_Id",
                        column: x => x.Id,
                        principalTable: "ExaminationPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Indication",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    ParentNumber = table.Column<byte>(nullable: true),
                    ScopeId = table.Column<Guid>(nullable: true),
                    IndicationType = table.Column<byte>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    IsSolidFood = table.Column<bool>(nullable: false),
                    IsLiquids = table.Column<bool>(nullable: false),
                    IsStatusPostAspiration = table.Column<bool>(nullable: false),
                    GoiterType = table.Column<byte>(nullable: false),
                    MetabolismType = table.Column<byte>(nullable: false),
                    IsNasopharynx = table.Column<bool>(nullable: false),
                    IsOropharynx = table.Column<bool>(nullable: false),
                    IsHypopharynx = table.Column<bool>(nullable: false),
                    IsLarynx = table.Column<bool>(nullable: false),
                    IsParotidSpace = table.Column<bool>(nullable: false),
                    TumorEntityType = table.Column<byte>(nullable: false),
                    DetailsType = table.Column<byte>(nullable: false),
                    MonthOfPostoperativeImaging = table.Column<byte>(nullable: false),
                    YearOfPostoperativeImaging = table.Column<int>(nullable: false),
                    AbscessType = table.Column<byte>(nullable: false),
                    ArterialPathologyType = table.Column<byte>(nullable: false),
                    IndicationPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Indication", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Indication_IndicationPages_IndicationPageId",
                        column: x => x.IndicationPageId,
                        principalTable: "IndicationPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PreviousTherapy",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    ParentNumber = table.Column<byte>(nullable: true),
                    ScopeId = table.Column<Guid>(nullable: true),
                    PreviousTherapyType = table.Column<byte>(nullable: false),
                    MonthOfPreviousTherapy = table.Column<byte>(nullable: false),
                    YearOfPreviousTherapy = table.Column<int>(nullable: false),
                    ThryoidectomyType = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    IsNeckDissectionRight = table.Column<bool>(nullable: false),
                    NeckDissectionTypeRight = table.Column<byte>(nullable: false),
                    IsNeckDissectionLeft = table.Column<bool>(nullable: false),
                    NeckDissectionTypeLeft = table.Column<byte>(nullable: false),
                    IndicationPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PreviousTherapy", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PreviousTherapy_IndicationPages_IndicationPageId",
                        column: x => x.IndicationPageId,
                        principalTable: "IndicationPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LarynxFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsGlottis = table.Column<bool>(nullable: false),
                    IsSinusOfMorgagni = table.Column<bool>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    T1wSignal = table.Column<byte>(nullable: false),
                    T2wSignal = table.Column<byte>(nullable: false),
                    IsInvasive = table.Column<bool>(nullable: false),
                    CmQuantitativeType = table.Column<byte>(nullable: false),
                    CmHomogeneityType = table.Column<byte>(nullable: false),
                    IsSupraglotticSpace = table.Column<bool>(nullable: false),
                    IsEpiglottis = table.Column<bool>(nullable: false),
                    IsLymphadenitis = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsSubordinated = table.Column<bool>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    IsVestibularFold = table.Column<bool>(nullable: false),
                    IsVocalCord = table.Column<bool>(nullable: false),
                    IsThyroidCartilage = table.Column<bool>(nullable: false),
                    IsAryepiglotticFold = table.Column<bool>(nullable: false),
                    IsThyroarytenoidMuscle = table.Column<bool>(nullable: false),
                    IsAnteriorCommissure = table.Column<bool>(nullable: false),
                    IsPosteriorCommissure = table.Column<bool>(nullable: false),
                    IsSubglotticSpace = table.Column<bool>(nullable: false),
                    LocalizationAxialType = table.Column<byte>(nullable: false),
                    SizeInMm = table.Column<int>(nullable: true),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsMicroscopicFat = table.Column<bool>(nullable: false),
                    IsMacroscopicFat = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    CystsType = table.Column<byte>(nullable: false),
                    IsHemorrhageSignsOfResidualHemorrhage = table.Column<bool>(nullable: false),
                    IsCalcifications = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsToothBone = table.Column<bool>(nullable: false),
                    IsAirFluidLevel = table.Column<bool>(nullable: false),
                    IsExophytic = table.Column<bool>(nullable: false),
                    IsEndophytic = table.Column<bool>(nullable: false),
                    IsDisplacing = table.Column<bool>(nullable: false),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    CmDistributionType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    IsSuspected = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsMoreThan1LesionSameEntity = table.Column<bool>(nullable: false),
                    IsAryepiglotticFolds = table.Column<bool>(nullable: false),
                    IsMucosalContrastEnhancement = table.Column<bool>(nullable: false),
                    IsSupraglotticLaryngealEdema = table.Column<bool>(nullable: false),
                    IsEdematousSwellingOfTheEpiglottis = table.Column<bool>(nullable: false),
                    IsObliterationOfThePerifocalFattyTissue = table.Column<bool>(nullable: false),
                    IsPhlegmon = table.Column<bool>(nullable: false),
                    IsTongueEdema = table.Column<bool>(nullable: false),
                    IsPalatinTonsilEdema = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    ExtensionInMm = table.Column<int>(nullable: true),
                    IsExtensionToSpacesOfSuprahyoidNeck = table.Column<bool>(nullable: false),
                    IsSoftTissueSwelling = table.Column<bool>(nullable: false),
                    SoftTissueLocalizationType = table.Column<byte>(nullable: false),
                    EntityType = table.Column<byte>(nullable: false),
                    IsEpiglotticDisruption = table.Column<bool>(nullable: false),
                    IsRuptureAtLevelOfPetiole = table.Column<bool>(nullable: false),
                    IsMucosalTearsOfTheAryepiglotticFolds = table.Column<bool>(nullable: false),
                    ClassificationType = table.Column<byte>(nullable: false),
                    IsDislocation = table.Column<bool>(nullable: false),
                    IsFracture = table.Column<bool>(nullable: false),
                    FractureLocalizationType = table.Column<byte>(nullable: false),
                    IsArytaenoidCartilageRight = table.Column<bool>(nullable: false),
                    IsArytaenoidCartilageLeft = table.Column<bool>(nullable: false),
                    FractureOrientationType = table.Column<byte>(nullable: false),
                    IsLuxationSubluxation = table.Column<bool>(nullable: false),
                    LuxationLocalizationType = table.Column<byte>(nullable: false),
                    IsCricothyroidalJointRight = table.Column<bool>(nullable: false),
                    IsCricothyroidalJointLeft = table.Column<bool>(nullable: false),
                    IsCartilagoArytaenoideaRight = table.Column<bool>(nullable: false),
                    IsCartilagoArytaenoideaLeft = table.Column<bool>(nullable: false),
                    CricothyroidClassificationType = table.Column<byte>(nullable: false),
                    IsPronouncedSubcutaneousEdema = table.Column<bool>(nullable: false),
                    IsRetractionOfRupture = table.Column<bool>(nullable: false),
                    IsDissectionCarotidArtery = table.Column<bool>(nullable: false),
                    IsDissectionCarotidArteryRight = table.Column<bool>(nullable: false),
                    IsDissectionCarotidArteryLeft = table.Column<bool>(nullable: false),
                    IsAirwayObstruction = table.Column<bool>(nullable: false),
                    IsSubcutaneousEmphysema = table.Column<bool>(nullable: false),
                    IsIpsilateralVocalFoldAdduction = table.Column<bool>(nullable: false),
                    IsIpsilateralVocalFoldAdductionRight = table.Column<bool>(nullable: false),
                    IsIpsilateralVocalFoldAdductionLeft = table.Column<bool>(nullable: false),
                    IsDislocatedFractureFragments = table.Column<bool>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    LarynxPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LarynxFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LarynxFindings_ImageFiles_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LarynxFindings_LarynxPages_LarynxPageId",
                        column: x => x.LarynxPageId,
                        principalTable: "LarynxPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LymphNodesFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    FindingType = table.Column<byte>(nullable: false),
                    IsLevelIaSubmental = table.Column<bool>(nullable: false),
                    IsLevelIbSubmandibular = table.Column<bool>(nullable: false),
                    IsLevelIIaUpperInternal = table.Column<bool>(nullable: false),
                    IsLevelIIbUpperInternal = table.Column<bool>(nullable: false),
                    IsLevelIIIMidInternal = table.Column<bool>(nullable: false),
                    IsLevelIVLowerInternal = table.Column<bool>(nullable: false),
                    IsLevelVaSuperiorPosteriorcervical = table.Column<bool>(nullable: false),
                    IsLevelVbInferiorPosterior = table.Column<bool>(nullable: false),
                    IsLevelVIAnteriorCompartment = table.Column<bool>(nullable: false),
                    IsLevelVIIUppermediastinalLN = table.Column<bool>(nullable: false),
                    MaxShortAxisDiameterInMm = table.Column<int>(nullable: true),
                    ShapeType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsConglomerateMass = table.Column<bool>(nullable: false),
                    CharacterizationType = table.Column<byte>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    LymphNodesPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LymphNodesFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LymphNodesFindings_ImageFiles_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LymphNodesFindings_LymphNodesPages_LymphNodesPageId",
                        column: x => x.LymphNodesPageId,
                        principalTable: "LymphNodesPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PharynxFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    CmEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsNasopharynx = table.Column<bool>(nullable: false),
                    IsOropharynx = table.Column<bool>(nullable: false),
                    IsHypopharynx = table.Column<bool>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    MassHomogeneityType = table.Column<byte>(nullable: false),
                    SignalT1wType = table.Column<byte>(nullable: false),
                    SignalT2wType = table.Column<byte>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsDisplacing = table.Column<bool>(nullable: false),
                    IsInvasive = table.Column<bool>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    AnatomicVariantType = table.Column<byte>(nullable: false),
                    GradingType = table.Column<byte>(nullable: false),
                    IsChoanalAtresiaRight = table.Column<bool>(nullable: false),
                    IsChoanalAtresiaLeft = table.Column<bool>(nullable: false),
                    CleftLipAndPalateType = table.Column<byte>(nullable: false),
                    IsCleftLipAndPalateRight = table.Column<bool>(nullable: false),
                    IsCleftLipAndPalateLeft = table.Column<bool>(nullable: false),
                    IsZenkerSDiverticulum = table.Column<bool>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsMacroscopic = table.Column<bool>(nullable: false),
                    IsMicroscopic = table.Column<bool>(nullable: false),
                    IsCysticChange = table.Column<bool>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    ProvenHistologyType = table.Column<byte>(nullable: false),
                    IsProvenHistology = table.Column<bool>(nullable: false),
                    IsRoof = table.Column<bool>(nullable: false),
                    IsPharyngealTonsil = table.Column<bool>(nullable: false),
                    IsNasopharynxPosteriorWall = table.Column<bool>(nullable: false),
                    IsNasopharynxLateralWall = table.Column<bool>(nullable: false),
                    IsTorusTubarius = table.Column<bool>(nullable: false),
                    IsPharyngealRecess = table.Column<bool>(nullable: false),
                    IsInferiorSoftPalate = table.Column<bool>(nullable: false),
                    IsOropharynxPosteriorWall = table.Column<bool>(nullable: false),
                    IsOropharynxLateralWall = table.Column<bool>(nullable: false),
                    IsTonsilLodge = table.Column<bool>(nullable: false),
                    IsLateralPharyngealWall = table.Column<bool>(nullable: false),
                    IsInferior = table.Column<bool>(nullable: false),
                    IsTongueBase = table.Column<bool>(nullable: false),
                    IsInferiorLingualTonsils = table.Column<bool>(nullable: false),
                    IsEpiglottisUpperMargin = table.Column<bool>(nullable: false),
                    IsInferiorValleculae = table.Column<bool>(nullable: false),
                    IsHypopharynxPosteriorWall = table.Column<bool>(nullable: false),
                    IsPiriformSinus = table.Column<bool>(nullable: false),
                    IsPostcricoidRegion = table.Column<bool>(nullable: false),
                    OrientationAxialType = table.Column<byte>(nullable: false),
                    IsPharyngealMucosalSpacePms = table.Column<bool>(nullable: false),
                    IsParapharyngealSpacePps = table.Column<bool>(nullable: false),
                    IsMasticatorSpaceMs = table.Column<bool>(nullable: false),
                    IsBuccalSpaceBs = table.Column<bool>(nullable: false),
                    IsParotidSpacePs = table.Column<bool>(nullable: false),
                    IsCarotidSpaceCs = table.Column<bool>(nullable: false),
                    IsRetropharyngealSpaceRpsAndDangerSpace = table.Column<bool>(nullable: false),
                    IsPerivertebralSpacePvsPrevertebral = table.Column<bool>(nullable: false),
                    IsPerivertebralSpacePvsParaspinal = table.Column<bool>(nullable: false),
                    IsVisceralSpaceVs = table.Column<bool>(nullable: false),
                    IsAnteriorCervicalSpaceAcs = table.Column<bool>(nullable: false),
                    IsPosteriorCervicalSpacePcs = table.Column<bool>(nullable: false),
                    IsOralMucosalSpaceOms = table.Column<bool>(nullable: false),
                    IsSublingualSpaceSls = table.Column<bool>(nullable: false),
                    IsSubmandibularSpaceSms = table.Column<bool>(nullable: false),
                    IsRootOfTheTongueRot = table.Column<bool>(nullable: false),
                    IsFasciaSpacesLingualTonsils = table.Column<bool>(nullable: false),
                    IsFasciaSpacesValleculae = table.Column<bool>(nullable: false),
                    IsTransspatialGrowth = table.Column<bool>(nullable: false),
                    SizeInMm = table.Column<int>(nullable: true),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    AsymmetryType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    IsMicroscopicFat = table.Column<bool>(nullable: false),
                    IsMacroscopicFat = table.Column<bool>(nullable: false),
                    IsCyst = table.Column<bool>(nullable: false),
                    CystType = table.Column<byte>(nullable: false),
                    IsHemorrhageHemosiderin = table.Column<bool>(nullable: false),
                    IsFocalSignalVoids = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsTissueBridging = table.Column<bool>(nullable: false),
                    IsGasFluidLevel = table.Column<bool>(nullable: false),
                    IsToothBoneFormation = table.Column<bool>(nullable: false),
                    IsEdematousSwelling = table.Column<bool>(nullable: false),
                    IsExophytic = table.Column<bool>(nullable: false),
                    IsEndophytic = table.Column<bool>(nullable: false),
                    CmEnhancementDistributionType = table.Column<byte>(nullable: false),
                    IsLymphadenitis = table.Column<bool>(nullable: false),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsImbibitionOfPerifocalFatTissue = table.Column<bool>(nullable: false),
                    IsAffectionOfParapharyngealFatStrips = table.Column<bool>(nullable: false),
                    IsSoftTissueEmphysema = table.Column<bool>(nullable: false),
                    IsHyperplasiaRightTonsillaPalatina = table.Column<bool>(nullable: false),
                    IsHyperplasiaLeftTonsilPalatina = table.Column<bool>(nullable: false),
                    IsHyperplasiaTonsillaPharyngea = table.Column<bool>(nullable: false),
                    IsTopographicalRelationToRecurrentLaryngealNerve = table.Column<bool>(nullable: false),
                    IsEdemaOfTheRightLongusColliMuscle = table.Column<bool>(nullable: false),
                    IsEdemaOfTheLeftLongusColliMuscle = table.Column<bool>(nullable: false),
                    IsOsteomyelitis = table.Column<bool>(nullable: false),
                    IsOsteomyelitisMaxilla = table.Column<bool>(nullable: false),
                    IsOsteomyelitisMandible = table.Column<bool>(nullable: false),
                    IsOsteomyelitisCorpusMandibulae = table.Column<bool>(nullable: false),
                    IsOsteomyelitisRamusMandibulae = table.Column<bool>(nullable: false),
                    IsOsteolysis = table.Column<bool>(nullable: false),
                    IsOsteolysisMaxilla = table.Column<bool>(nullable: false),
                    IsOsteolysisMandible = table.Column<bool>(nullable: false),
                    IsOsteolysisCorpusMandibulae = table.Column<bool>(nullable: false),
                    IsOsteolysisRamusMandibulae = table.Column<bool>(nullable: false),
                    IsMediastinitis = table.Column<bool>(nullable: false),
                    IsAirwayObstruction = table.Column<bool>(nullable: false),
                    IsThrombosisRightInternalJugularVein = table.Column<bool>(nullable: false),
                    IsThrombosisLeftInternalJugularVein = table.Column<bool>(nullable: false),
                    IsPseudoaneurysmRightIca = table.Column<bool>(nullable: false),
                    IsPseudoaneurysmLeftIca = table.Column<bool>(nullable: false),
                    IsStenosisRightIca = table.Column<bool>(nullable: false),
                    IsStenosisLeftIca = table.Column<bool>(nullable: false),
                    IsAffectionSpinalCanal = table.Column<bool>(nullable: false),
                    IsEpiduralExtension = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    IsMoreThan1LesionSameEntity = table.Column<bool>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    PharynxPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PharynxFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PharynxFindings_ImageFiles_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_PharynxFindings_PharynxPages_PharynxPageId",
                        column: x => x.PharynxPageId,
                        principalTable: "PharynxPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SoftTissuesFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    FindingType = table.Column<byte>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    CharacterizationCystType = table.Column<byte>(nullable: false),
                    IsMNCThickeningOfTheCystWall = table.Column<bool>(nullable: false),
                    IsMNCStreakySignalEnhancementFatSaturatedT2wSequence = table.Column<bool>(nullable: false),
                    IsMNCStreakyContrastEnhancementPerifocal = table.Column<bool>(nullable: false),
                    IsCutaneousFistula = table.Column<bool>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    LocalizationType = table.Column<byte>(nullable: false),
                    PeriauricularType = table.Column<byte>(nullable: false),
                    AnterolateralType = table.Column<byte>(nullable: false),
                    LateralNeckCystType = table.Column<byte>(nullable: false),
                    IsLNCThickeningOfTheCystWall = table.Column<bool>(nullable: false),
                    IsLNCStreakySignalEnhancementFatSaturatedT2wSequence = table.Column<bool>(nullable: false),
                    IsLNCStreakyContrastEnhancementPerifocal = table.Column<bool>(nullable: false),
                    IsSuppurativeThyroiditis = table.Column<bool>(nullable: false),
                    LNCDifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsMedianToThePosteriorWallOfTheNasopharynx = table.Column<bool>(nullable: false),
                    IsTCThickeningOfTheCystWall = table.Column<bool>(nullable: false),
                    IsTCStreakySignalEnhancementFatSaturatedT2wSequence = table.Column<bool>(nullable: false),
                    IsTCStreakyContrastEnhancementPerifocal = table.Column<bool>(nullable: false),
                    TCDifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsCystSubordinate = table.Column<bool>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    CharacterizationIDifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsHistologyProven = table.Column<bool>(nullable: false),
                    HistologyProvenType = table.Column<byte>(nullable: false),
                    LocalizationReferenceVertebra = table.Column<decimal>(nullable: false),
                    OrientationAxialType = table.Column<byte>(nullable: false),
                    IsPharyngealMucosalSpacePMS = table.Column<bool>(nullable: false),
                    IsParapharyngealSpacePPS = table.Column<bool>(nullable: false),
                    IsMastatorSpaceMS = table.Column<bool>(nullable: false),
                    IsBuccalSpaceBS = table.Column<bool>(nullable: false),
                    IsParotidSpacePS = table.Column<bool>(nullable: false),
                    IsCarotidSpaceCS = table.Column<bool>(nullable: false),
                    IsRetropharyngealSpaceRPSAndDangerSpace = table.Column<bool>(nullable: false),
                    IsPerivertebralSpacePVSPrevertebral = table.Column<bool>(nullable: false),
                    IsPerivertebralSpacePVSParaspinal = table.Column<bool>(nullable: false),
                    IsVisceralSpaceVS = table.Column<bool>(nullable: false),
                    IsAnteriorCervicalSpaceACS = table.Column<bool>(nullable: false),
                    IsPosteriorCervicalSpacePCS = table.Column<bool>(nullable: false),
                    IsOralMucosalSpaceOMS = table.Column<bool>(nullable: false),
                    IsSublingualSpaceSLS = table.Column<bool>(nullable: false),
                    IsSubmandibularSpaceSMS = table.Column<bool>(nullable: false),
                    IsApexLinguae = table.Column<bool>(nullable: false),
                    IsCorpusLinguae = table.Column<bool>(nullable: false),
                    IsRadixLinguae = table.Column<bool>(nullable: false),
                    IsTongueBaseTonsil = table.Column<bool>(nullable: false),
                    IsValleculae = table.Column<bool>(nullable: false),
                    IsTransspatialSpread = table.Column<bool>(nullable: false),
                    VascularNerveSheathType = table.Column<byte>(nullable: false),
                    IsRegioParotideomasseterica = table.Column<bool>(nullable: false),
                    IsBuccalRegion = table.Column<bool>(nullable: false),
                    IsOralRegion = table.Column<bool>(nullable: false),
                    IsMentalRegion = table.Column<bool>(nullable: false),
                    IsSubmental = table.Column<bool>(nullable: false),
                    IsUpperLip = table.Column<bool>(nullable: false),
                    IsLowerLip = table.Column<bool>(nullable: false),
                    IsPharyngealMuscles = table.Column<bool>(nullable: false),
                    IsUvulaeMuscle = table.Column<bool>(nullable: false),
                    IsLaryngealMuscles = table.Column<bool>(nullable: false),
                    IsVocalMuscle = table.Column<bool>(nullable: false),
                    IsIntrinsicMusclesOfTheTongue = table.Column<bool>(nullable: false),
                    IsGenioglossusMuscle = table.Column<bool>(nullable: false),
                    IsHyoglossusMuscle = table.Column<bool>(nullable: false),
                    IsFloorOfMouthMuscles = table.Column<bool>(nullable: false),
                    IsMylohyoidMuscle = table.Column<bool>(nullable: false),
                    IsGeniohyoidMuscle = table.Column<bool>(nullable: false),
                    IsDigastricMuscle = table.Column<bool>(nullable: false),
                    IsNeckMuscles = table.Column<bool>(nullable: false),
                    IsLongusCapitisMuscle = table.Column<bool>(nullable: false),
                    IsLongusColliMuscle = table.Column<bool>(nullable: false),
                    IsLevatorScapulaeMuscle = table.Column<bool>(nullable: false),
                    IsScalenusAnteriorMuscle = table.Column<bool>(nullable: false),
                    IsScalenusMediusMuscle = table.Column<bool>(nullable: false),
                    IsScalenusPosteriorMuscle = table.Column<bool>(nullable: false),
                    IsSternocleidomastoideusMuscle = table.Column<bool>(nullable: false),
                    IsParaspinalMuscles = table.Column<bool>(nullable: false),
                    IsDeepOrIntrinsicMusclesMedialTract = table.Column<bool>(nullable: false),
                    IsDeepOrIntrinsicMusclesLateralTract = table.Column<bool>(nullable: false),
                    IsTrapeziusMuscle = table.Column<bool>(nullable: false),
                    SizeInMm = table.Column<int>(nullable: true),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    ShapeDifferentialDiagnosis = table.Column<byte>(nullable: false),
                    SignalT1w = table.Column<byte>(nullable: false),
                    SignalT2w = table.Column<byte>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsMicroscopicFat = table.Column<bool>(nullable: false),
                    IsMacroscopicFat = table.Column<bool>(nullable: false),
                    IsCyst = table.Column<bool>(nullable: false),
                    CystType = table.Column<byte>(nullable: false),
                    IsHemorrhageOrHemosiderin = table.Column<bool>(nullable: false),
                    IsCalcifications = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsToothOrBone = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsAirFluidLevel = table.Column<bool>(nullable: false),
                    IsExophytic = table.Column<bool>(nullable: false),
                    IsEndophytic = table.Column<bool>(nullable: false),
                    IsDisplacing = table.Column<bool>(nullable: false),
                    IsInvasive = table.Column<bool>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    SignificantHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    IsLymphadenitis = table.Column<bool>(nullable: false),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsObliterationOfPerifocalFatTissue = table.Column<bool>(nullable: false),
                    IsSoftTissueEmphysema = table.Column<bool>(nullable: false),
                    IsAdjacentToTheRecurrentLaryngealNerve = table.Column<bool>(nullable: false),
                    IsEdemaOfTheLongusColliMuscleRight = table.Column<bool>(nullable: false),
                    IsEdemaLongusColliMuscleLeft = table.Column<bool>(nullable: false),
                    IsOsteomyelitis = table.Column<bool>(nullable: false),
                    IsOsteomyelitisMaxilla = table.Column<bool>(nullable: false),
                    IsOsteomyelitisMandible = table.Column<bool>(nullable: false),
                    IsOsteomyelitisCorpusMandibulae = table.Column<bool>(nullable: false),
                    IsOsteomyelitisRamusMandibulae = table.Column<bool>(nullable: false),
                    IsOsteolysis = table.Column<bool>(nullable: false),
                    IsOsteolysisMaxilla = table.Column<bool>(nullable: false),
                    IsOsteolysisMandible = table.Column<bool>(nullable: false),
                    IsOsteolysisCorpusMandibulae = table.Column<bool>(nullable: false),
                    IsOsteolysisRamusMandibulae = table.Column<bool>(nullable: false),
                    IsMediastinitis = table.Column<bool>(nullable: false),
                    IsAirwayObstruction = table.Column<bool>(nullable: false),
                    AirwayObstructionMinDiameterInMm = table.Column<int>(nullable: true),
                    IsTrachealDisplacement = table.Column<bool>(nullable: false),
                    TrachealDisplacementType = table.Column<byte>(nullable: false),
                    IsActiveBleeding = table.Column<bool>(nullable: false),
                    IsInternalJugularVeinThrombosisRight = table.Column<bool>(nullable: false),
                    IsInternalJugularVeinThrombosisLeft = table.Column<bool>(nullable: false),
                    IsPseudoaneurysmICARight = table.Column<bool>(nullable: false),
                    IsPseudoaneurysmICALeft = table.Column<bool>(nullable: false),
                    IsStenosisICARight = table.Column<bool>(nullable: false),
                    IsStenosisICALeft = table.Column<bool>(nullable: false),
                    IsAffectionSpinalCanal = table.Column<bool>(nullable: false),
                    IsEpiduralExtension = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsAbove1LesionSameEntity = table.Column<bool>(nullable: false),
                    IsDisseminated = table.Column<bool>(nullable: false),
                    SoftTissuesPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoftTissuesFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SoftTissuesFindings_ImageFiles_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SoftTissuesFindings_SoftTissuesPages_SoftTissuesPageId",
                        column: x => x.SoftTissuesPageId,
                        principalTable: "SoftTissuesPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TNMClassification",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    ParentNumber = table.Column<byte>(nullable: true),
                    ScopeId = table.Column<Guid>(nullable: true),
                    ClassificationType = table.Column<byte>(nullable: false),
                    TStageType = table.Column<byte>(nullable: false),
                    NStageType = table.Column<byte>(nullable: false),
                    MStageType = table.Column<byte>(nullable: false),
                    NStageHPVMinusType = table.Column<byte>(nullable: false),
                    NStageHPVPlusType = table.Column<byte>(nullable: false),
                    IsT0 = table.Column<bool>(nullable: false),
                    SummaryPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TNMClassification", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TNMClassification_SummaryPages_SummaryPageId",
                        column: x => x.SummaryPageId,
                        principalTable: "SummaryPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CMSideEffect",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    ParentNumber = table.Column<byte>(nullable: true),
                    ScopeId = table.Column<Guid>(nullable: true),
                    CMSideEffectType = table.Column<byte>(nullable: false),
                    MinAfterCMinjection = table.Column<int>(nullable: true),
                    DurationAdverseReactionType = table.Column<byte>(nullable: false),
                    IsCompletelyDeclining = table.Column<bool>(nullable: false),
                    IsSeriousAdverseEvent = table.Column<bool>(nullable: false),
                    TechnologyPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CMSideEffect", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CMSideEffect_TechnologyPages_TechnologyPageId",
                        column: x => x.TechnologyPageId,
                        principalTable: "TechnologyPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Sequence",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    ParentNumber = table.Column<byte>(nullable: true),
                    ScopeId = table.Column<Guid>(nullable: true),
                    WeightingType = table.Column<byte>(nullable: false),
                    OrientationType = table.Column<byte>(nullable: false),
                    IsSaturatedFat = table.Column<bool>(nullable: false),
                    Is3D = table.Column<bool>(nullable: false),
                    IsParallelImaging = table.Column<bool>(nullable: false),
                    SequenceType = table.Column<byte>(nullable: false),
                    IsChemicalShiftImaging = table.Column<bool>(nullable: false),
                    IsBreathHoldingTechnique = table.Column<bool>(nullable: false),
                    IsSedation = table.Column<bool>(nullable: false),
                    IsPostContrast = table.Column<bool>(nullable: false),
                    IsPostContrastSubtraction = table.Column<bool>(nullable: false),
                    IsPostContrastPerfusion = table.Column<bool>(nullable: false),
                    TechnologyPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sequence", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Sequence_TechnologyPages_TechnologyPageId",
                        column: x => x.TechnologyPageId,
                        principalTable: "TechnologyPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ThyroidFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    FindingType = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    TotalVolumeType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    CmHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType1 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType2 = table.Column<byte>(nullable: false),
                    SizeRightLobeInMm = table.Column<float>(nullable: true),
                    SizeRightLobeSecondPlaneInMm = table.Column<float>(nullable: true),
                    SizeRightLobeThirdPlaneInMm = table.Column<float>(nullable: true),
                    SizeLeftLobeInMm = table.Column<float>(nullable: true),
                    SizeLeftLobeSecondPlaneInMm = table.Column<float>(nullable: true),
                    SizeLeftLobeThirdPlaneInMm = table.Column<float>(nullable: true),
                    SizeInMm = table.Column<int>(nullable: true),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    AutomaticCalculationInMl = table.Column<int>(nullable: true),
                    MeasurementInMl = table.Column<int>(nullable: true),
                    MinInnerDiameterAxialInMm = table.Column<int>(nullable: true),
                    SagittalInMm = table.Column<int>(nullable: true),
                    Coronal = table.Column<int>(nullable: true),
                    IsAbscess = table.Column<bool>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsCyst = table.Column<bool>(nullable: false),
                    IsCalcifications = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsFibrosis = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsDisplacement = table.Column<bool>(nullable: false),
                    IsTrachealCompression = table.Column<bool>(nullable: false),
                    IsVascularCompressionRight = table.Column<bool>(nullable: false),
                    IsVascularCompressionLeft = table.Column<bool>(nullable: false),
                    IsInfiltration = table.Column<bool>(nullable: false),
                    IsCutis = table.Column<bool>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    IsMoreThanOneLesionOfTheSameEntity = table.Column<bool>(nullable: false),
                    T1wSignalType = table.Column<byte>(nullable: false),
                    T2wSignalType = table.Column<byte>(nullable: false),
                    AbnormalitiesNormVariantsThyroidType = table.Column<byte>(nullable: false),
                    ThyroidectomyType = table.Column<byte>(nullable: false),
                    IsNoThyroidTissue = table.Column<bool>(nullable: false),
                    ThyroidectomySideType = table.Column<byte>(nullable: false),
                    TherapyType = table.Column<byte>(nullable: false),
                    ComplicationsType = table.Column<byte>(nullable: false),
                    IsRightLobe = table.Column<bool>(nullable: false),
                    IsLeftLobe = table.Column<bool>(nullable: false),
                    IsIsthmus = table.Column<bool>(nullable: false),
                    MeasurementType = table.Column<byte>(nullable: false),
                    GrowthType = table.Column<byte>(nullable: false),
                    ExpansionInMm = table.Column<int>(nullable: true),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsNodusSolitary = table.Column<bool>(nullable: false),
                    IsMultinodular = table.Column<bool>(nullable: false),
                    IsTranscapsular = table.Column<bool>(nullable: false),
                    IsTrachea = table.Column<bool>(nullable: false),
                    IsVascularNerveSheathRight = table.Column<bool>(nullable: false),
                    IsVascularNerveSheathLeft = table.Column<bool>(nullable: false),
                    IsRecurrentLaryngealNerve = table.Column<bool>(nullable: false),
                    IsEsophagus = table.Column<bool>(nullable: false),
                    IsLarynx = table.Column<bool>(nullable: false),
                    IsPrevertebralFascia = table.Column<bool>(nullable: false),
                    IsUpperMediastinum = table.Column<bool>(nullable: false),
                    RelationToThyroidGlandType = table.Column<byte>(nullable: false),
                    LocalizationType = table.Column<byte>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsSolitary = table.Column<bool>(nullable: false),
                    IsMultiple = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsDystrophy = table.Column<bool>(nullable: false),
                    IsNecroses = table.Column<bool>(nullable: false),
                    IsSignalVoids = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsSubcutaneous = table.Column<bool>(nullable: false),
                    IsPerineuralInvasion = table.Column<bool>(nullable: false),
                    IsTransspatialSpread = table.Column<bool>(nullable: false),
                    IsParapharyngealSpace = table.Column<bool>(nullable: false),
                    IsMastricatorSpace = table.Column<bool>(nullable: false),
                    IsParotidSpace = table.Column<bool>(nullable: false),
                    IsCarotidSpace = table.Column<bool>(nullable: false),
                    IsPostCervicalSpace = table.Column<bool>(nullable: false),
                    IsSublingualSpace = table.Column<bool>(nullable: false),
                    IsSubmandibularSpace = table.Column<bool>(nullable: false),
                    IsMusclesOfMastication = table.Column<bool>(nullable: false),
                    IsBones = table.Column<bool>(nullable: false),
                    IsMandible = table.Column<bool>(nullable: false),
                    IsMaxilla = table.Column<bool>(nullable: false),
                    IsAnteriorCranialFossa = table.Column<bool>(nullable: false),
                    IsMiddleCranialFossa = table.Column<bool>(nullable: false),
                    IsDuctalCompression = table.Column<bool>(nullable: false),
                    IsDuctalStenosis = table.Column<bool>(nullable: false),
                    IsConcrement = table.Column<bool>(nullable: false),
                    ConcrementInMm = table.Column<int>(nullable: true),
                    IsDilatedDuctus = table.Column<bool>(nullable: false),
                    DilatedDuctusInMm = table.Column<int>(nullable: true),
                    IsEdematousSwelling = table.Column<bool>(nullable: false),
                    IsFattyDegeneration = table.Column<bool>(nullable: false),
                    IsAtrophy = table.Column<bool>(nullable: false),
                    IsIntraglandularLymphNode = table.Column<bool>(nullable: false),
                    IsNecrotic = table.Column<bool>(nullable: false),
                    AbscessInMm = table.Column<int>(nullable: true),
                    IsExtensionIntoCervicalFascialSpaces = table.Column<bool>(nullable: false),
                    IsMyositis = table.Column<bool>(nullable: false),
                    IsPhlegmon = table.Column<bool>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    ThyroidPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ThyroidFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ThyroidFindings_ImageFiles_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ThyroidFindings_ThyroidPages_ThyroidPageId",
                        column: x => x.ThyroidPageId,
                        principalTable: "ThyroidPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "VesselsFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    PathologyType = table.Column<byte>(nullable: false),
                    ExtentType = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    SubarachnoidHemorrhageType = table.Column<byte>(nullable: false),
                    CharacterizationType = table.Column<byte>(nullable: false),
                    DetailsVascularMalformationType = table.Column<byte>(nullable: false),
                    ArteriovenousMalformationType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    DiameterStenosisInMm = table.Column<int>(nullable: true),
                    DiameterDiseaseFreePoststenoticSegmentInMm = table.Column<int>(nullable: true),
                    DegreeOfStenosisInPercent = table.Column<int>(nullable: true),
                    StenosisOcclusionExtentInMm = table.Column<int>(nullable: true),
                    DissectionExtentInMm = table.Column<int>(nullable: true),
                    AneurysmExtentInMm = table.Column<int>(nullable: true),
                    MaxDiameterInMm = table.Column<int>(nullable: true),
                    IsHemodynamicallyRelevant = table.Column<bool>(nullable: false),
                    IsShortLength = table.Column<bool>(nullable: false),
                    IsWallHematomaHyperintenseInUnenhancedT1W = table.Column<bool>(nullable: false),
                    IsContrastEnhancementOfTheVesselWall = table.Column<bool>(nullable: false),
                    IsT2WHyperintensityOfTheVesselWallEdema = table.Column<bool>(nullable: false),
                    IsIrregularVesselCaliber = table.Column<bool>(nullable: false),
                    IsPanarteritisNodosa = table.Column<bool>(nullable: false),
                    IsBranchesOfTheExternalCarotidArteryToTheOphthalmicArtery = table.Column<bool>(nullable: false),
                    IsCircleOfWillis = table.Column<bool>(nullable: false),
                    IsSubarachnoidHemorrhage = table.Column<bool>(nullable: false),
                    IsThrombusSurroundedByContrastAgent = table.Column<bool>(nullable: false),
                    IsCollateralization = table.Column<bool>(nullable: false),
                    IsPreStenoticDilatation = table.Column<bool>(nullable: false),
                    IsSubclavianStealSyndrome = table.Column<bool>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    ArteryLocalisationType = table.Column<byte>(nullable: false),
                    AffectedBranchType = table.Column<byte>(nullable: false),
                    IsV1 = table.Column<bool>(nullable: false),
                    IsV2 = table.Column<bool>(nullable: false),
                    IsV3 = table.Column<bool>(nullable: false),
                    IsV4 = table.Column<bool>(nullable: false),
                    IsViaContralateralVertebralArtery = table.Column<bool>(nullable: false),
                    ArteriesSegmentType = table.Column<int>(nullable: false),
                    IsLeptomeningealTranscortical = table.Column<bool>(nullable: false),
                    IsContralateralAci = table.Column<bool>(nullable: false),
                    IsPosteriorCommunicansArtery = table.Column<bool>(nullable: false),
                    IsViaOphtalmicArtery = table.Column<bool>(nullable: false),
                    IsProximalSegment = table.Column<bool>(nullable: false),
                    IsIntermediateSegment = table.Column<bool>(nullable: false),
                    IsDistalSegment = table.Column<bool>(nullable: false),
                    IsSuperiorSagittalSinus = table.Column<bool>(nullable: false),
                    IsInferiorSagittalSinus = table.Column<bool>(nullable: false),
                    IsVMagnaCerebri = table.Column<bool>(nullable: false),
                    IsStraightSinus = table.Column<bool>(nullable: false),
                    IsConfluensOfSinuses = table.Column<bool>(nullable: false),
                    IsRightTransverseSinus = table.Column<bool>(nullable: false),
                    IsLeftTransverseSinus = table.Column<bool>(nullable: false),
                    IsRightSigmoidSinus = table.Column<bool>(nullable: false),
                    IsLeftSigmoidSinus = table.Column<bool>(nullable: false),
                    IsRightPetrosalSinus = table.Column<bool>(nullable: false),
                    IsLeftPetrosalSinus = table.Column<bool>(nullable: false),
                    IsCavernousSinusRightPart = table.Column<bool>(nullable: false),
                    IsCavernousSinusLeftPart = table.Column<bool>(nullable: false),
                    CerebralVeinsPathologyType = table.Column<byte>(nullable: false),
                    IsCerebralEdema = table.Column<bool>(nullable: false),
                    VeinsCharacterizationType = table.Column<byte>(nullable: false),
                    LengthInMm = table.Column<int>(nullable: true),
                    IsLongDistance = table.Column<bool>(nullable: false),
                    VeinsPathologyType = table.Column<byte>(nullable: false),
                    VesselsPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VesselsFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VesselsFindings_VesselsPages_VesselsPageId",
                        column: x => x.VesselsPageId,
                        principalTable: "VesselsPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BonesFindings_BonesPageId",
                table: "BonesFindings",
                column: "BonesPageId");

            migrationBuilder.CreateIndex(
                name: "IX_BonesPages_ReportId",
                table: "BonesPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CMSideEffect_TechnologyPageId",
                table: "CMSideEffect",
                column: "TechnologyPageId");

            migrationBuilder.CreateIndex(
                name: "IX_ExaminationPages_ReportId",
                table: "ExaminationPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_FindingLocalizers_Code",
                table: "FindingLocalizers",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Indication_IndicationPageId",
                table: "Indication",
                column: "IndicationPageId");

            migrationBuilder.CreateIndex(
                name: "IX_IndicationPages_ReportId",
                table: "IndicationPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LarynxFindings_ImageFileId",
                table: "LarynxFindings",
                column: "ImageFileId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LarynxFindings_LarynxPageId",
                table: "LarynxFindings",
                column: "LarynxPageId");

            migrationBuilder.CreateIndex(
                name: "IX_LarynxPages_ReportId",
                table: "LarynxPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LymphNodesFindings_ImageFileId",
                table: "LymphNodesFindings",
                column: "ImageFileId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LymphNodesFindings_LymphNodesPageId",
                table: "LymphNodesFindings",
                column: "LymphNodesPageId");

            migrationBuilder.CreateIndex(
                name: "IX_LymphNodesPages_ReportId",
                table: "LymphNodesPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PageInfos_ReportId",
                table: "PageInfos",
                column: "ReportId");

            migrationBuilder.CreateIndex(
                name: "IX_PharynxFindings_ImageFileId",
                table: "PharynxFindings",
                column: "ImageFileId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PharynxFindings_PharynxPageId",
                table: "PharynxFindings",
                column: "PharynxPageId");

            migrationBuilder.CreateIndex(
                name: "IX_PharynxPages_ReportId",
                table: "PharynxPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PreviousTherapy_IndicationPageId",
                table: "PreviousTherapy",
                column: "IndicationPageId");

            migrationBuilder.CreateIndex(
                name: "IX_ReportResults_ReportId",
                table: "ReportResults",
                column: "ReportId");

            migrationBuilder.CreateIndex(
                name: "IX_ReportSchemas_ReportTypeName_VersionName",
                table: "ReportSchemas",
                columns: new[] { "ReportTypeName", "VersionName" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ReportSchemaSessions_ReportSchemaId",
                table: "ReportSchemaSessions",
                column: "ReportSchemaId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ReportSession_ReportId",
                table: "ReportSession",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Sequence_TechnologyPageId",
                table: "Sequence",
                column: "TechnologyPageId");

            migrationBuilder.CreateIndex(
                name: "IX_SoftTissuesFindings_ImageFileId",
                table: "SoftTissuesFindings",
                column: "ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_SoftTissuesFindings_SoftTissuesPageId",
                table: "SoftTissuesFindings",
                column: "SoftTissuesPageId");

            migrationBuilder.CreateIndex(
                name: "IX_SoftTissuesPages_ReportId",
                table: "SoftTissuesPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_SummaryPages_ReportId",
                table: "SummaryPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_TechnologyPages_ReportId",
                table: "TechnologyPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ThyroidFindings_ImageFileId",
                table: "ThyroidFindings",
                column: "ImageFileId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ThyroidFindings_ThyroidPageId",
                table: "ThyroidFindings",
                column: "ThyroidPageId");

            migrationBuilder.CreateIndex(
                name: "IX_ThyroidPages_ReportId",
                table: "ThyroidPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_TNMClassification_SummaryPageId",
                table: "TNMClassification",
                column: "SummaryPageId");

            migrationBuilder.CreateIndex(
                name: "IX_VesselsFindings_VesselsPageId",
                table: "VesselsFindings",
                column: "VesselsPageId");

            migrationBuilder.CreateIndex(
                name: "IX_VesselsPages_ReportId",
                table: "VesselsPages",
                column: "ReportId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BonesFindingPresets");

            migrationBuilder.DropTable(
                name: "BonesFindings");

            migrationBuilder.DropTable(
                name: "CMSideEffect");

            migrationBuilder.DropTable(
                name: "FindingLocalizers");

            migrationBuilder.DropTable(
                name: "Indication");

            migrationBuilder.DropTable(
                name: "LarynxFindingPresets");

            migrationBuilder.DropTable(
                name: "LarynxFindings");

            migrationBuilder.DropTable(
                name: "LymphNodesFindings");

            migrationBuilder.DropTable(
                name: "PageInfos");

            migrationBuilder.DropTable(
                name: "PatientInformation");

            migrationBuilder.DropTable(
                name: "PharynxFindingPresets");

            migrationBuilder.DropTable(
                name: "PharynxFindings");

            migrationBuilder.DropTable(
                name: "PreviousTherapy");

            migrationBuilder.DropTable(
                name: "ReportResults");

            migrationBuilder.DropTable(
                name: "ReportSchemaSessions");

            migrationBuilder.DropTable(
                name: "ReportSession");

            migrationBuilder.DropTable(
                name: "Sequence");

            migrationBuilder.DropTable(
                name: "SoftTissuesFindings");

            migrationBuilder.DropTable(
                name: "ThyroidFindings");

            migrationBuilder.DropTable(
                name: "TNMClassification");

            migrationBuilder.DropTable(
                name: "VesselsFindings");

            migrationBuilder.DropTable(
                name: "BonesPages");

            migrationBuilder.DropTable(
                name: "LarynxPages");

            migrationBuilder.DropTable(
                name: "LymphNodesPages");

            migrationBuilder.DropTable(
                name: "ExaminationPages");

            migrationBuilder.DropTable(
                name: "PharynxPages");

            migrationBuilder.DropTable(
                name: "IndicationPages");

            migrationBuilder.DropTable(
                name: "ReportSchemas");

            migrationBuilder.DropTable(
                name: "TechnologyPages");

            migrationBuilder.DropTable(
                name: "SoftTissuesPages");

            migrationBuilder.DropTable(
                name: "ImageFiles");

            migrationBuilder.DropTable(
                name: "ThyroidPages");

            migrationBuilder.DropTable(
                name: "SummaryPages");

            migrationBuilder.DropTable(
                name: "VesselsPages");

            migrationBuilder.DropTable(
                name: "Reports");
        }
    }
}
