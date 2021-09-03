using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.AbdomenMRT.Repo.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                name: "GastrointestinalTractFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType = table.Column<int>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    IsInvasive = table.Column<bool>(nullable: false),
                    IsDisplacing = table.Column<bool>(nullable: false),
                    IsOcclusive = table.Column<bool>(nullable: false),
                    IsTransmuralSpread = table.Column<bool>(nullable: false),
                    IsLymphadenopathy = table.Column<bool>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    T1WSignalType = table.Column<byte>(nullable: false),
                    T2WSignalType = table.Column<byte>(nullable: false),
                    IsUlceratingFinding = table.Column<bool>(nullable: false),
                    IsLocoregionalLymphadenopathy = table.Column<bool>(nullable: false),
                    IntestinalMassExtensionType = table.Column<byte>(nullable: false),
                    IsAdjacentFatTissue = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GastrointestinalTractFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ImageFile",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    FileName = table.Column<string>(nullable: true),
                    ObjectName = table.Column<string>(nullable: true),
                    Stream = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ImageFile", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "KidneysFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    KidneysDifferentialDiagnosisType = table.Column<int>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    T1wSignal = table.Column<byte>(nullable: false),
                    T2wSignal = table.Column<byte>(nullable: false),
                    IsDisplacing = table.Column<bool>(nullable: false),
                    IsDeformationOuterRenalContour = table.Column<bool>(nullable: false),
                    CorticomedullaryPhase = table.Column<byte>(nullable: false),
                    NephrographicPhase = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KidneysFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LiverFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<int>(nullable: false),
                    WashInArterialPhaseType = table.Column<byte>(nullable: false),
                    IsMaskingVenousPhase = table.Column<bool>(nullable: false),
                    IsLateVenousPooling = table.Column<bool>(nullable: false),
                    FocalLocalizationType = table.Column<byte>(nullable: false),
                    IsRightLobeOfLiver = table.Column<bool>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    EarlyArterial = table.Column<byte>(nullable: false),
                    LateArterial = table.Column<byte>(nullable: false),
                    PortalVenous = table.Column<byte>(nullable: false),
                    Venous = table.Column<byte>(nullable: false),
                    LiverSpecificContrastEnhancement = table.Column<byte>(nullable: false),
                    IsCentralScar = table.Column<bool>(nullable: false),
                    IsWashInArterialPhase = table.Column<bool>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsHemorrhageProducts = table.Column<bool>(nullable: false),
                    GrowthPatternsType = table.Column<int>(nullable: false),
                    QualityOfEnhancement = table.Column<byte>(nullable: false),
                    T1WSignalType = table.Column<byte>(nullable: false),
                    T2WSignalType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LiverFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PancreasFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    MainMassDifferentialDiagnosisType1 = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    SignalT1wType = table.Column<byte>(nullable: false),
                    SignalT2wType = table.Column<byte>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsHemosiderin = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    PancreaticDuctPathologyType = table.Column<byte>(nullable: false),
                    GrowthPatternsType = table.Column<byte>(nullable: false),
                    ContrastEnhancementQuantitative = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistribution = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PancreasFindingPresets", x => x.Id);
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
                name: "SpleenFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    DelimitationType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    T1w = table.Column<byte>(nullable: false),
                    T2w = table.Column<byte>(nullable: false),
                    CMEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    CMEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    CMEnhancementDistributionType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpleenFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AdrenalGlandsPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdrenalGlandsPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AdrenalGlandsPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AnamnesisPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    IsMRIAbdomen = table.Column<bool>(nullable: false),
                    MonthOfMRI = table.Column<byte>(nullable: true),
                    YearOfMRI = table.Column<int>(nullable: true),
                    IsCTAbdomen = table.Column<bool>(nullable: false),
                    MonthOfCT = table.Column<byte>(nullable: true),
                    YearOfCT = table.Column<int>(nullable: true),
                    IsSonographyAbdomen = table.Column<bool>(nullable: false),
                    MonthOfSonography = table.Column<byte>(nullable: true),
                    YearOfSonography = table.Column<int>(nullable: true),
                    IsPetCT = table.Column<bool>(nullable: false),
                    MonthOfPetCT = table.Column<byte>(nullable: true),
                    YearOfPetCT = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnamnesisPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AnamnesisPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ExaminationRegionPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    IsMRIAbdomen = table.Column<bool>(nullable: false),
                    IsMRIUpperAbdomen = table.Column<bool>(nullable: false),
                    IsMRILiver = table.Column<bool>(nullable: false),
                    IsMRIPancreas = table.Column<bool>(nullable: false),
                    IsMRCP = table.Column<bool>(nullable: false),
                    IsMRISellink = table.Column<bool>(nullable: false),
                    IsMRIKidneys = table.Column<bool>(nullable: false),
                    IsMRIAdrenalGlands = table.Column<bool>(nullable: false),
                    IsMRIRetroperitoneum = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExaminationRegionPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ExaminationRegionPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GastrointestinalTractPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GastrointestinalTractPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GastrointestinalTractPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "KidneysPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KidneysPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_KidneysPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LiverPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false),
                    IsNoEvidenceOfStoneDisease = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LiverPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LiverPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LymphaticSystemPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LymphaticSystemPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LymphaticSystemPages_Reports_ReportId",
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
                name: "PancreasPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PancreasPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PancreasPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PeritonealCavityPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PeritonealCavityPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PeritonealCavityPages_Reports_ReportId",
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
                name: "SpleenPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpleenPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SpleenPages_Reports_ReportId",
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
                    CourseType = table.Column<byte>(nullable: false),
                    IsQuantity = table.Column<bool>(nullable: false),
                    IsSize = table.Column<bool>(nullable: false),
                    RemissionDetailsType = table.Column<byte>(nullable: false),
                    IsCt = table.Column<bool>(nullable: false),
                    IsWithIVContrastAgent = table.Column<bool>(nullable: false),
                    IsArterialPhase = table.Column<bool>(nullable: false),
                    IsPortalVenousPhase = table.Column<bool>(nullable: false),
                    IsUrographicPhase = table.Column<bool>(nullable: false),
                    IsNonEnhanced = table.Column<bool>(nullable: false),
                    IsContrastEnhancedMri = table.Column<bool>(nullable: false),
                    IsHepatocyteSpecificContrastAgent = table.Column<bool>(nullable: false),
                    IsMRCP = table.Column<bool>(nullable: false),
                    IsUltrasoundExamination = table.Column<bool>(nullable: false),
                    IsContrastEnhancedUltrasoundExaminationCeus = table.Column<bool>(nullable: false),
                    IsTransesophageal = table.Column<bool>(nullable: false),
                    IsTransrectal = table.Column<bool>(nullable: false),
                    IsTransvaginal = table.Column<bool>(nullable: false),
                    IsFollowUp = table.Column<bool>(nullable: false),
                    PeriodType = table.Column<int>(nullable: false),
                    IsGastroscopy = table.Column<bool>(nullable: false),
                    IsERCP = table.Column<bool>(nullable: false),
                    IsColonoscopy = table.Column<bool>(nullable: false),
                    IsBiopsy = table.Column<bool>(nullable: false),
                    IsSonographicallyGuided = table.Column<bool>(nullable: false),
                    IsCTGuided = table.Column<bool>(nullable: false),
                    IsMriGuided = table.Column<bool>(nullable: false),
                    IsOpen = table.Column<bool>(nullable: false),
                    IsDrainage = table.Column<bool>(nullable: false),
                    IsPercutaneous = table.Column<bool>(nullable: false),
                    IsTransgastric = table.Column<bool>(nullable: false),
                    IsTranshepatic = table.Column<bool>(nullable: false),
                    IsPTCD = table.Column<bool>(nullable: false),
                    IsClinicalCorrelation = table.Column<bool>(nullable: false),
                    IsCorrelationWithLaboratoryFindings = table.Column<bool>(nullable: false),
                    IsInterdisciplinaryDiscussionInTumourBoard = table.Column<bool>(nullable: false),
                    IsRecommendedConsultation = table.Column<bool>(nullable: false),
                    IsInternalMedicine = table.Column<bool>(nullable: false),
                    IsSurgery = table.Column<bool>(nullable: false),
                    IsEndocrinology = table.Column<bool>(nullable: false),
                    IsGynecology = table.Column<bool>(nullable: false),
                    IsUrology = table.Column<bool>(nullable: false),
                    TStageType = table.Column<byte>(nullable: false),
                    TStageSubType = table.Column<byte>(nullable: false),
                    NStageType = table.Column<byte>(nullable: false),
                    NStageSentinelNodeType = table.Column<byte>(nullable: false),
                    NStageSubType = table.Column<byte>(nullable: false),
                    MStageType = table.Column<byte>(nullable: false),
                    IsPUL = table.Column<bool>(nullable: false),
                    IsMAR = table.Column<bool>(nullable: false),
                    IsOSS = table.Column<bool>(nullable: false),
                    IsPLE = table.Column<bool>(nullable: false),
                    IsHEP = table.Column<bool>(nullable: false),
                    IsPER = table.Column<bool>(nullable: false),
                    IsBRA = table.Column<bool>(nullable: false),
                    IsADR = table.Column<bool>(nullable: false),
                    IsLYM = table.Column<bool>(nullable: false),
                    IsSKI = table.Column<bool>(nullable: false),
                    IsOTH = table.Column<bool>(nullable: false),
                    MStageSubType = table.Column<byte>(nullable: false),
                    GradingType = table.Column<byte>(nullable: false),
                    FurtherParametersDetailsType = table.Column<byte>(nullable: false),
                    FurtherParametersRResidualType = table.Column<byte>(nullable: false),
                    FurtherParametersLymphaticInvasionType = table.Column<byte>(nullable: false),
                    FurtherParametersVenousInvasionType = table.Column<byte>(nullable: false),
                    FurtherParametersPerineuralInvasionType = table.Column<byte>(nullable: false),
                    LiRADSCategoryType = table.Column<byte>(nullable: false),
                    LiRADSTreatmentResponseCategoryType = table.Column<byte>(nullable: false)
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
                    MagneticFieldStrengthType = table.Column<byte>(nullable: false),
                    IsEnteroclysis = table.Column<bool>(nullable: false),
                    IsOralContrast = table.Column<bool>(nullable: false),
                    IsMaskingOrLiquidMatrix = table.Column<bool>(nullable: false),
                    IsRectalContrast = table.Column<bool>(nullable: false),
                    IsVaginalContrast = table.Column<bool>(nullable: false),
                    IsUrinaryBladderContrast = table.Column<bool>(nullable: false),
                    SpasmolysisType = table.Column<byte>(nullable: false),
                    IsPulsationOrBreathing = table.Column<bool>(nullable: false),
                    IsSusceptibilityArtifacts = table.Column<bool>(nullable: false),
                    IsChemicalShift = table.Column<bool>(nullable: false),
                    IsIncorrectSubtraction = table.Column<bool>(nullable: false),
                    ImageQualityType = table.Column<byte>(nullable: false)
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
                name: "AdrenalGlandsFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    SizeInMm = table.Column<int>(nullable: true),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    LocalizationType = table.Column<byte>(nullable: false),
                    SingalT1wType = table.Column<byte>(nullable: false),
                    SingalT2wType = table.Column<byte>(nullable: false),
                    IsSignalDropInPhaseShift = table.Column<bool>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsFocalRegressiveChanges = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsAtrophyOfTheRemainingAdrenalGland = table.Column<bool>(nullable: false),
                    IsFatTissue = table.Column<bool>(nullable: false),
                    IsEquivalentToFat = table.Column<bool>(nullable: false),
                    IsMacroscopicFat = table.Column<bool>(nullable: false),
                    IsIntracytoplasmicFat = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsLocoregionalLymphadenopathy = table.Column<bool>(nullable: false),
                    GrowthPatternsType = table.Column<byte>(nullable: false),
                    IsKidneys = table.Column<bool>(nullable: false),
                    IsDiaphragm = table.Column<bool>(nullable: false),
                    IsSupradiaphragmaticSpread = table.Column<bool>(nullable: false),
                    IsMusculature = table.Column<bool>(nullable: false),
                    IsMidlineCrossing = table.Column<bool>(nullable: false),
                    CMEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis1Type = table.Column<int>(nullable: false),
                    DifferentialDiagnosis2Type = table.Column<int>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType = table.Column<int>(nullable: false),
                    AdrenalGlandsPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdrenalGlandsFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AdrenalGlandsFindings_AdrenalGlandsPages_AdrenalGlandsPageId",
                        column: x => x.AdrenalGlandsPageId,
                        principalTable: "AdrenalGlandsPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AdrenalGlandsFindings_ImageFile_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AnamnesisClinic",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    ParentNumber = table.Column<byte>(nullable: true),
                    ScopeId = table.Column<Guid>(nullable: true),
                    ClinicType = table.Column<byte>(nullable: false),
                    AnamnesisPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnamnesisClinic", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AnamnesisClinic_AnamnesisPages_AnamnesisPageId",
                        column: x => x.AnamnesisPageId,
                        principalTable: "AnamnesisPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AnamnesisIndication",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    ParentNumber = table.Column<byte>(nullable: true),
                    ScopeId = table.Column<Guid>(nullable: true),
                    IndicationType = table.Column<byte>(nullable: false),
                    DetailsType = table.Column<byte>(nullable: false),
                    OrganRegionType = table.Column<byte>(nullable: false),
                    LiverLocalizationType = table.Column<byte>(nullable: false),
                    IsRightLobeOfLiver = table.Column<bool>(nullable: false),
                    IsLeftLobeOfLiver = table.Column<bool>(nullable: false),
                    IsCaudateLobe = table.Column<bool>(nullable: false),
                    IsQuadrateLobe = table.Column<bool>(nullable: false),
                    LiverSegmentsLocalizationType = table.Column<int>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    IsEsophagus = table.Column<bool>(nullable: false),
                    IsStomach = table.Column<bool>(nullable: false),
                    IsDuodenum = table.Column<bool>(nullable: false),
                    IsJejunum = table.Column<bool>(nullable: false),
                    IsIleum = table.Column<bool>(nullable: false),
                    IsColon = table.Column<bool>(nullable: false),
                    IsSigma = table.Column<bool>(nullable: false),
                    IsRectum = table.Column<bool>(nullable: false),
                    IsAnus = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    IsFistulaFormation = table.Column<bool>(nullable: false),
                    AnastomosisOrganRegionType = table.Column<byte>(nullable: false),
                    MonthOfFollowUpAfterTherapy = table.Column<byte>(nullable: true),
                    YearOfFollowUpAfterTherapy = table.Column<int>(nullable: true),
                    IsPostoperative = table.Column<bool>(nullable: false),
                    IsResection = table.Column<bool>(nullable: false),
                    IsPartialResection = table.Column<bool>(nullable: false),
                    IsChemotherapy = table.Column<bool>(nullable: false),
                    IsRadio = table.Column<bool>(nullable: false),
                    IsBiopsy = table.Column<bool>(nullable: false),
                    IsStenting = table.Column<bool>(nullable: false),
                    AnamnesisPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnamnesisIndication", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AnamnesisIndication_AnamnesisPages_AnamnesisPageId",
                        column: x => x.AnamnesisPageId,
                        principalTable: "AnamnesisPages",
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
                        name: "FK_PatientInformation_ExaminationRegionPages_Id",
                        column: x => x.Id,
                        principalTable: "ExaminationRegionPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GastrointestinalTractFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType = table.Column<int>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    IsInvasive = table.Column<bool>(nullable: false),
                    IsDisplacing = table.Column<bool>(nullable: false),
                    IsOcclusive = table.Column<bool>(nullable: false),
                    IsTransmuralSpread = table.Column<bool>(nullable: false),
                    IsLymphadenopathy = table.Column<bool>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    T1WSignalType = table.Column<byte>(nullable: false),
                    T2WSignalType = table.Column<byte>(nullable: false),
                    IsUlceratingFinding = table.Column<bool>(nullable: false),
                    IsLocoregionalLymphadenopathy = table.Column<bool>(nullable: false),
                    IntestinalMassExtensionType = table.Column<byte>(nullable: false),
                    IsAdjacentFatTissue = table.Column<bool>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    GastricLocalizationType = table.Column<byte>(nullable: false),
                    CmEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    PerforationType = table.Column<byte>(nullable: false),
                    HeightType = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    TypeType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis1Type = table.Column<int>(nullable: false),
                    DifferentialDiagnosis2Type = table.Column<int>(nullable: false),
                    EvaluationType = table.Column<int>(nullable: false),
                    ExtensionType = table.Column<int>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsExophytic = table.Column<bool>(nullable: false),
                    IsEndophytic = table.Column<bool>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    IsOneLesionOfTheSameEntity = table.Column<bool>(nullable: false),
                    IsCommunicating = table.Column<bool>(nullable: false),
                    IsDuodenum = table.Column<bool>(nullable: false),
                    IsJejunum = table.Column<bool>(nullable: false),
                    IsCecum = table.Column<bool>(nullable: false),
                    IsVermiformAppendix = table.Column<bool>(nullable: false),
                    IsAscendingColon = table.Column<bool>(nullable: false),
                    IsHepaticFlexure = table.Column<bool>(nullable: false),
                    IsTransverseColon = table.Column<bool>(nullable: false),
                    IsSplenicFlexure = table.Column<bool>(nullable: false),
                    IsDescendingColon = table.Column<bool>(nullable: false),
                    IsSigmoidColon = table.Column<bool>(nullable: false),
                    IsRectum = table.Column<bool>(nullable: false),
                    IsAnalCanal = table.Column<bool>(nullable: false),
                    IsInvagination = table.Column<bool>(nullable: false),
                    IsStenosis = table.Column<bool>(nullable: false),
                    IsMass = table.Column<bool>(nullable: false),
                    IsIleus = table.Column<bool>(nullable: false),
                    IsFistula = table.Column<bool>(nullable: false),
                    IsPerforation = table.Column<bool>(nullable: false),
                    IsContained = table.Column<bool>(nullable: false),
                    IsOpen = table.Column<bool>(nullable: false),
                    IsPerifocalFatStranding = table.Column<bool>(nullable: false),
                    IsParsDescendens = table.Column<bool>(nullable: false),
                    IsParsHorizontalis = table.Column<bool>(nullable: false),
                    IsParsAscendens = table.Column<bool>(nullable: false),
                    IsAscites = table.Column<bool>(nullable: false),
                    IsJejunumIleum = table.Column<bool>(nullable: false),
                    IsFluid = table.Column<bool>(nullable: false),
                    IsIncarceration = table.Column<bool>(nullable: false),
                    IsVolvulus = table.Column<bool>(nullable: false),
                    IsArterial = table.Column<bool>(nullable: false),
                    IsAccentuatedMesentericVesselsCombSign = table.Column<bool>(nullable: false),
                    SizeInMm = table.Column<int>(nullable: true),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    MeasurementIntestinalWallInMm = table.Column<int>(nullable: true),
                    SadLargestInMm = table.Column<int>(nullable: true),
                    IsSignalDropInTheOpposedPhaseChemicalShift = table.Column<bool>(nullable: false),
                    IsSubmucous = table.Column<bool>(nullable: false),
                    IsIntraluminal = table.Column<bool>(nullable: false),
                    IsExtraluminal = table.Column<bool>(nullable: false),
                    IsIrregularCalcifications = table.Column<bool>(nullable: false),
                    IsPunctateCalcifications = table.Column<bool>(nullable: false),
                    IsMucosalEnhancement = table.Column<bool>(nullable: false),
                    SadInMm = table.Column<int>(nullable: true),
                    IsMacroscopicFat = table.Column<bool>(nullable: false),
                    IsFreeGas = table.Column<bool>(nullable: false),
                    IsSuspicionOfFreeGas = table.Column<bool>(nullable: false),
                    IsSuspicionOfAbscess = table.Column<bool>(nullable: false),
                    ComplicationCourseOfDiseaseType = table.Column<byte>(nullable: false),
                    IsMarginalContrastEnhancement = table.Column<bool>(nullable: false),
                    IsSeroma = table.Column<bool>(nullable: false),
                    IsActiveBleeding = table.Column<bool>(nullable: false),
                    IsSignsOfSuperinfection = table.Column<bool>(nullable: false),
                    IsStomachResection = table.Column<bool>(nullable: false),
                    StomachResectionType = table.Column<byte>(nullable: false),
                    IsBiliodigestiveAnastomosis = table.Column<bool>(nullable: false),
                    IsBraunAnastomosis = table.Column<bool>(nullable: false),
                    IsFundoplication = table.Column<bool>(nullable: false),
                    IsRouxYReconstruction = table.Column<bool>(nullable: false),
                    IsGastricBanding = table.Column<bool>(nullable: false),
                    IsBariatricSurgery = table.Column<bool>(nullable: false),
                    IsPreterminalIleum = table.Column<bool>(nullable: false),
                    IsNeoterminalIleum = table.Column<bool>(nullable: false),
                    IsTerminalIleum = table.Column<bool>(nullable: false),
                    LengthOfChangesInCmType = table.Column<byte>(nullable: false),
                    IsStricture = table.Column<bool>(nullable: false),
                    MassMaximumDiameterInMm = table.Column<int>(nullable: true),
                    IsPseudotumor = table.Column<bool>(nullable: false),
                    IsPseudotumorStenosis = table.Column<bool>(nullable: false),
                    IsPrestenoticDilatation = table.Column<bool>(nullable: false),
                    PrestenoticDilatationMaximumDiameterInMm = table.Column<int>(nullable: true),
                    IsInterenteric = table.Column<bool>(nullable: false),
                    IsEnterocutaneous = table.Column<bool>(nullable: false),
                    IsBlindEndend = table.Column<bool>(nullable: false),
                    IsEnterovesical = table.Column<bool>(nullable: false),
                    IsEnterovaginal = table.Column<bool>(nullable: false),
                    IsToxicMegacolon = table.Column<bool>(nullable: false),
                    IsMucosalEdema = table.Column<bool>(nullable: false),
                    IsIleum = table.Column<bool>(nullable: false),
                    IsRectumUpperThird = table.Column<bool>(nullable: false),
                    IsRectumMiddleThird = table.Column<bool>(nullable: false),
                    IsRectumLowerThird = table.Column<bool>(nullable: false),
                    IsPortalVenous = table.Column<bool>(nullable: false),
                    IsDesmoplasticReactionOfTheMesentery = table.Column<bool>(nullable: false),
                    IsPostoperativePostinterventional = table.Column<bool>(nullable: false),
                    IsRadiationInduced = table.Column<bool>(nullable: false),
                    IsMesorectalFascia = table.Column<bool>(nullable: false),
                    FromToType = table.Column<int>(nullable: false),
                    UntilType = table.Column<int>(nullable: false),
                    IsAdjacentIntestine = table.Column<bool>(nullable: false),
                    IsPeritonealFolds = table.Column<bool>(nullable: false),
                    IsParenchymalOrgan = table.Column<bool>(nullable: false),
                    IsLiver = table.Column<bool>(nullable: false),
                    IsPancreas = table.Column<bool>(nullable: false),
                    IsSpleen = table.Column<bool>(nullable: false),
                    IsKidney = table.Column<bool>(nullable: false),
                    IsKidneyRight = table.Column<bool>(nullable: false),
                    IsKidneyLeft = table.Column<bool>(nullable: false),
                    IsAdrenalGland = table.Column<bool>(nullable: false),
                    IsAdrenalGlandRight = table.Column<bool>(nullable: false),
                    IsAdrenalGlandLeft = table.Column<bool>(nullable: false),
                    IsVessels = table.Column<bool>(nullable: false),
                    IsBone = table.Column<bool>(nullable: false),
                    IsMechanicalIleus = table.Column<bool>(nullable: false),
                    IsPeritonealCarcinomatosis = table.Column<bool>(nullable: false),
                    IsFistulaFormation = table.Column<bool>(nullable: false),
                    IsCloacalFormation = table.Column<bool>(nullable: false),
                    IsLocoregional = table.Column<bool>(nullable: false),
                    IsDistant = table.Column<bool>(nullable: false),
                    LongitudinalExtensionInMm = table.Column<int>(nullable: true),
                    IsMeckelSDiverticulum = table.Column<bool>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    CharacteristicsType = table.Column<byte>(nullable: false),
                    IsDiverticulosis = table.Column<bool>(nullable: false),
                    BowelDiverticulaMaximumDiameterInMm = table.Column<int>(nullable: true),
                    HansenAndStockType = table.Column<int>(nullable: false),
                    CddClassificationType = table.Column<int>(nullable: false),
                    IsPerifocalAbscess = table.Column<bool>(nullable: false),
                    IsMultipleAbscesses = table.Column<bool>(nullable: false),
                    MaxSizeInMm = table.Column<int>(nullable: true),
                    IsPeritonitis = table.Column<bool>(nullable: false),
                    IsEnteroEnteral = table.Column<bool>(nullable: false),
                    IsEnteroVesical = table.Column<bool>(nullable: false),
                    IsEnteroCutaneous = table.Column<bool>(nullable: false),
                    IsEnteroVaginal = table.Column<bool>(nullable: false),
                    IsSinusTract = table.Column<bool>(nullable: false),
                    IsRetrocecalPositionOfTheAppendix = table.Column<bool>(nullable: false),
                    IsAppendixExpansion = table.Column<bool>(nullable: false),
                    AppendixExpansionInMm = table.Column<int>(nullable: true),
                    IsLumenExpansion = table.Column<bool>(nullable: false),
                    LumenExpansionInMm = table.Column<int>(nullable: true),
                    IsAppendicolite = table.Column<bool>(nullable: false),
                    AppendicoliteInMm = table.Column<int>(nullable: true),
                    IsContrastEnhancementOfTheIntestinalWall = table.Column<bool>(nullable: false),
                    IsTargetSign = table.Column<bool>(nullable: false),
                    IsFocalReducedContrastEnhancement = table.Column<bool>(nullable: false),
                    IsWallEdemaOfTheAdjacentIntestinalSegments = table.Column<bool>(nullable: false),
                    FluidType = table.Column<byte>(nullable: false),
                    IsPerityphliticAbscess = table.Column<bool>(nullable: false),
                    IsInflammatoryCoReactionOfTheMPsoas = table.Column<bool>(nullable: false),
                    IsMucocele = table.Column<bool>(nullable: false),
                    IsDiverticulitis = table.Column<bool>(nullable: false),
                    IsAppendagitisEpiploica = table.Column<bool>(nullable: false),
                    MassType = table.Column<byte>(nullable: false),
                    IsEnlargedNonInflamedAppendix = table.Column<bool>(nullable: false),
                    IsColitis = table.Column<bool>(nullable: false),
                    IsIleitis = table.Column<bool>(nullable: false),
                    IsOvarianProcess = table.Column<bool>(nullable: false),
                    MaxPrestenoticDilatationInMm = table.Column<int>(nullable: true),
                    MechanicalLocalizationType = table.Column<byte>(nullable: false),
                    IsIschemicBowelSegments = table.Column<bool>(nullable: false),
                    IsTransmigratoryPeritonitis = table.Column<bool>(nullable: false),
                    IsAdhesionsBrides = table.Column<bool>(nullable: false),
                    IsInflammatory = table.Column<bool>(nullable: false),
                    IsStrangulation = table.Column<bool>(nullable: false),
                    IsClosedLoop = table.Column<bool>(nullable: false),
                    IsAtresia = table.Column<bool>(nullable: false),
                    IsGallstoneIleus = table.Column<bool>(nullable: false),
                    IsScarStenosis = table.Column<bool>(nullable: false),
                    IsDuplications = table.Column<bool>(nullable: false),
                    IsCoprostasis = table.Column<bool>(nullable: false),
                    PoststenoticSegmentType = table.Column<byte>(nullable: false),
                    TransitionalSegmentType = table.Column<byte>(nullable: false),
                    IsSurroundingMass = table.Column<bool>(nullable: false),
                    PathogenesisType = table.Column<byte>(nullable: false),
                    IsGeneralizedUniformGaseousDistensionOfTheLargeAndSmallBowel = table.Column<bool>(nullable: false),
                    MaximumDiameterLargeBowelInMm = table.Column<int>(nullable: true),
                    MaximumSmallBowelDiameterInMm = table.Column<int>(nullable: true),
                    HerniaLocalizationType = table.Column<byte>(nullable: false),
                    IsLittreRichterHernia = table.Column<bool>(nullable: false),
                    ExtensionHerniaSacInMm = table.Column<int>(nullable: true),
                    ExtensionHernialOrificeInMm = table.Column<int>(nullable: true),
                    ExtensionHernialOrificeSecondPlaneInMm = table.Column<int>(nullable: true),
                    ExtensionHernialOrificeThirdPlaneInMm = table.Column<int>(nullable: true),
                    AbdominalWallHerniaType = table.Column<byte>(nullable: false),
                    MidlineHerniasType = table.Column<int>(nullable: false),
                    DetailsType = table.Column<byte>(nullable: false),
                    IsIncisionalHernia = table.Column<bool>(nullable: false),
                    IsScrotalHernia = table.Column<bool>(nullable: false),
                    IsIntestinalLoops = table.Column<bool>(nullable: false),
                    IsLargeIntestine = table.Column<bool>(nullable: false),
                    IsSmallIntestine = table.Column<bool>(nullable: false),
                    IsMesentericFatTissue = table.Column<bool>(nullable: false),
                    IsOmentum = table.Column<bool>(nullable: false),
                    IsFixedBowelLoops = table.Column<bool>(nullable: false),
                    IsBowelInAbnormalAnatomicPosition = table.Column<bool>(nullable: false),
                    IsObstruction = table.Column<bool>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    GastrointestinalTractPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GastrointestinalTractFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GastrointestinalTractFindings_GastrointestinalTractPages_Ga~",
                        column: x => x.GastrointestinalTractPageId,
                        principalTable: "GastrointestinalTractPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GastrointestinalTractFindings_ImageFile_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "KidneysFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    KidneysDifferentialDiagnosisType = table.Column<int>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    T1wSignal = table.Column<byte>(nullable: false),
                    T2wSignal = table.Column<byte>(nullable: false),
                    IsDisplacing = table.Column<bool>(nullable: false),
                    IsDeformationOuterRenalContour = table.Column<bool>(nullable: false),
                    CorticomedullaryPhase = table.Column<byte>(nullable: false),
                    NephrographicPhase = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    KidneysDifferentialDiagnosisType1 = table.Column<int>(nullable: false),
                    KidneysDifferentialDiagnosisType2 = table.Column<int>(nullable: false),
                    KidneysDifferentialDiagnosisType3 = table.Column<int>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    IsMoreThanOneLesionSameEntity = table.Column<bool>(nullable: false),
                    CraniocaudalDiameterInMm = table.Column<int>(nullable: true),
                    DiameterKidneySecondPlaneInMm = table.Column<int>(nullable: true),
                    DiameterKidneyThirdPlaneInMm = table.Column<int>(nullable: true),
                    RenalCortexT1wSignal = table.Column<byte>(nullable: false),
                    RenalCortexT2wSignal = table.Column<byte>(nullable: false),
                    IsRenalCortexFocal = table.Column<bool>(nullable: false),
                    KidneyMarrowT1wSignal = table.Column<byte>(nullable: false),
                    KidneyMarrowT2wSignal = table.Column<byte>(nullable: false),
                    IsKidneyMarrowFocal = table.Column<bool>(nullable: false),
                    IsStreakyInflammatoryInfiltrationPerirenalAdiposeTissue = table.Column<bool>(nullable: false),
                    IsThickeningGerotaFascia = table.Column<bool>(nullable: false),
                    IsMultipleGasInclusions = table.Column<bool>(nullable: false),
                    ContrastEnhancementRenalParenchymaQuantitative = table.Column<byte>(nullable: false),
                    ContrastEnhancementQuantitativeStrongType = table.Column<byte>(nullable: false),
                    NormVariantOrAnomalyType = table.Column<byte>(nullable: false),
                    IsAgenesis = table.Column<bool>(nullable: false),
                    IsAplasia = table.Column<bool>(nullable: false),
                    IsEnlargementOfTheContralateralKidney = table.Column<bool>(nullable: false),
                    IsHypoplasia = table.Column<bool>(nullable: false),
                    IsLobarDysmorphia = table.Column<bool>(nullable: false),
                    IsDDMass = table.Column<bool>(nullable: false),
                    IsDuplexCollectingSystem = table.Column<bool>(nullable: false),
                    IsDoubleKidney = table.Column<bool>(nullable: false),
                    IsRenalEctopy = table.Column<bool>(nullable: false),
                    IsFloatingKidney = table.Column<bool>(nullable: false),
                    IsFusionAnomalies = table.Column<bool>(nullable: false),
                    FusionAnomaliesKidneyType = table.Column<byte>(nullable: false),
                    IsNonrotation = table.Column<bool>(nullable: false),
                    IsPersistentFetalLobulation = table.Column<bool>(nullable: false),
                    RenalArteryType = table.Column<byte>(nullable: false),
                    PolarArteryType = table.Column<byte>(nullable: false),
                    RenalVeinsType = table.Column<byte>(nullable: false),
                    IsBifurcatedLeftRenalVeinAnteriorAndPosteriorAorta = table.Column<bool>(nullable: false),
                    UreterType = table.Column<byte>(nullable: false),
                    SeverityType = table.Column<int>(nullable: false),
                    IsDilatationOfTheRenalPelvisAndTheRenalCalices = table.Column<bool>(nullable: false),
                    MaxDilatationInMm = table.Column<int>(nullable: true),
                    MaxDilatationParenchymaInMm = table.Column<int>(nullable: true),
                    IsRenalPelvisDilatation = table.Column<bool>(nullable: false),
                    IsReducedRenalParenchymaThickness = table.Column<bool>(nullable: false),
                    IsLossOfParenchymaHydronephrosis = table.Column<bool>(nullable: false),
                    IsSideDifferenceContrastEnhancement = table.Column<bool>(nullable: false),
                    IsLossCorticomedullaryDifferentiation = table.Column<bool>(nullable: false),
                    IsSwollenKidney = table.Column<bool>(nullable: false),
                    IsIndurationPerirenal = table.Column<bool>(nullable: false),
                    IsPerirenalFluid = table.Column<bool>(nullable: false),
                    IsDilatationUreter = table.Column<bool>(nullable: false),
                    DilatationInMm = table.Column<int>(nullable: true),
                    IsContrastEnhancementUreteralWall = table.Column<bool>(nullable: false),
                    AssociatedCausalFindingsType = table.Column<byte>(nullable: false),
                    IsRenalCalice = table.Column<bool>(nullable: false),
                    IsRenalPelvis = table.Column<bool>(nullable: false),
                    IsUreter = table.Column<bool>(nullable: false),
                    UrolithiasisDetailsUreterType = table.Column<byte>(nullable: false),
                    IsUrinaryBladder = table.Column<bool>(nullable: false),
                    IsOstiumRight = table.Column<bool>(nullable: false),
                    IsOstiumLeft = table.Column<bool>(nullable: false),
                    IsUrethra = table.Column<bool>(nullable: false),
                    MaxDiameterConcrementInMm = table.Column<int>(nullable: true),
                    IsPhlebolite = table.Column<bool>(nullable: false),
                    IsPapillaryCalcifications = table.Column<bool>(nullable: false),
                    EnlargedUterusDetailsType = table.Column<byte>(nullable: false),
                    IsFornixRupture = table.Column<bool>(nullable: false),
                    IsPyelonephritis = table.Column<bool>(nullable: false),
                    IsAmpullaryTypeOfRenalPelvis = table.Column<bool>(nullable: false),
                    IsRenalSinusCyst = table.Column<bool>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    MassSideType = table.Column<byte>(nullable: false),
                    IsCompletelyIntrarenal = table.Column<bool>(nullable: false),
                    LocalizationType = table.Column<byte>(nullable: false),
                    BosniakClassificationType1 = table.Column<int>(nullable: false),
                    BosniakClassificationType2 = table.Column<int>(nullable: false),
                    BosniakClassificationType3 = table.Column<int>(nullable: false),
                    IsLocalization = table.Column<bool>(nullable: false),
                    MassSideMoreThanOneLesionType = table.Column<byte>(nullable: false),
                    IsUpperPoleKidney = table.Column<bool>(nullable: false),
                    IsCranialThird = table.Column<bool>(nullable: false),
                    IsMiddleThird = table.Column<bool>(nullable: false),
                    IsLowerThird = table.Column<bool>(nullable: false),
                    IsLowerPoleKidney = table.Column<bool>(nullable: false),
                    IsRenalHilus = table.Column<bool>(nullable: false),
                    IsDetailsCompletelyIntrarenal = table.Column<bool>(nullable: false),
                    MassChar2ExtensionSizeInMm = table.Column<int>(nullable: true),
                    MassChar2SecondPlaneInMm = table.Column<int>(nullable: true),
                    MassChar2ThirdPlaneInMm = table.Column<int>(nullable: true),
                    FormType = table.Column<byte>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    FatType = table.Column<byte>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    CalcificationType = table.Column<byte>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsNodularThickening = table.Column<bool>(nullable: false),
                    IsDelicate = table.Column<bool>(nullable: false),
                    IsSeptaCalcification = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsCentralScar = table.Column<bool>(nullable: false),
                    IsHemosiderin = table.Column<bool>(nullable: false),
                    IsExophytic = table.Column<bool>(nullable: false),
                    IsAngularInterfaceSign = table.Column<bool>(nullable: false),
                    IsFungalConfiguration = table.Column<bool>(nullable: false),
                    IsPlaqueLikeGrowthRenalPelvis = table.Column<bool>(nullable: false),
                    IsObstructionAndHydronephrosis = table.Column<bool>(nullable: false),
                    IsCommunicationWithRenalPelvis = table.Column<bool>(nullable: false),
                    IsBeanShaped = table.Column<bool>(nullable: false),
                    IsInfiltration = table.Column<bool>(nullable: false),
                    IsInfiltrationRenalPelvis = table.Column<bool>(nullable: false),
                    IsInfiltrationPerirenalSpace = table.Column<bool>(nullable: false),
                    IsInfiltrationMusculature = table.Column<bool>(nullable: false),
                    IsInfiltrationAbdominalWall = table.Column<bool>(nullable: false),
                    IsInfiltrationAdrenalGlands = table.Column<bool>(nullable: false),
                    IsInfiltrationLiver = table.Column<bool>(nullable: false),
                    IsInfiltrationSpleen = table.Column<bool>(nullable: false),
                    IsInfiltrationIntestine = table.Column<bool>(nullable: false),
                    IsInfiltrationBones = table.Column<bool>(nullable: false),
                    ExcretoryPhase = table.Column<byte>(nullable: false),
                    IsSpokeWheelEnhancementPattern = table.Column<bool>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsAssociatedFindingsNodularThickening = table.Column<bool>(nullable: false),
                    IsAssociatedFindingsCalcification = table.Column<bool>(nullable: false),
                    IsPseudoCapsularExtension = table.Column<bool>(nullable: false),
                    IsInfiltrationPerirenalAdiposeTissue = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsLocoregionalLN = table.Column<bool>(nullable: false),
                    SADInMm = table.Column<int>(nullable: true),
                    IsVascularInfiltration = table.Column<bool>(nullable: false),
                    VascularInfiltrationType = table.Column<byte>(nullable: false),
                    ExtensionType = table.Column<byte>(nullable: false),
                    IsCompleteOcclusion = table.Column<bool>(nullable: false),
                    IsIntramuralInfiltration = table.Column<bool>(nullable: false),
                    IsRetroperitonealCollateralVessels = table.Column<bool>(nullable: false),
                    IsFluidAroundCyst = table.Column<bool>(nullable: false),
                    DD1FollowUpMonths = table.Column<int>(nullable: true),
                    DD1ModalityType = table.Column<byte>(nullable: false),
                    DD2FollowUpMonths = table.Column<int>(nullable: true),
                    DD2ModalityType = table.Column<byte>(nullable: false),
                    DD3FollowUpMonths = table.Column<int>(nullable: true),
                    DD3ModalityType = table.Column<byte>(nullable: false),
                    IsIrregularNarrowingRenalParenchyma = table.Column<bool>(nullable: false),
                    IsDeformationCalices = table.Column<bool>(nullable: false),
                    IsMultipleScars = table.Column<bool>(nullable: false),
                    IsReductionCortexAndMedulla = table.Column<bool>(nullable: false),
                    MultipleGasInclusionsLocalizationType = table.Column<byte>(nullable: false),
                    PathologyType = table.Column<byte>(nullable: false),
                    RenalInfarctionLocalizationType = table.Column<byte>(nullable: false),
                    RenalInfarctionExtensionSizeInMm = table.Column<int>(nullable: true),
                    RenalInfarctionSecondPlaneInMm = table.Column<int>(nullable: true),
                    RenalInfarctionThirdPlaneInMm = table.Column<int>(nullable: true),
                    RenalInfarctionT1wSignal = table.Column<byte>(nullable: false),
                    RenalInfarctionT2wSignal = table.Column<byte>(nullable: false),
                    IsWedgeShapedDefect = table.Column<bool>(nullable: false),
                    IsMissingCMEnhancement = table.Column<bool>(nullable: false),
                    IsCorticalRimSign = table.Column<bool>(nullable: false),
                    IsFibroticChangesOrScarTissue = table.Column<bool>(nullable: false),
                    IsDeformationsBarkContour = table.Column<bool>(nullable: false),
                    IsShrinkageInfarctedTissue = table.Column<bool>(nullable: false),
                    IsDissectionRenalArtery = table.Column<bool>(nullable: false),
                    IsStenosisOrOcclusionRenalArtery = table.Column<bool>(nullable: false),
                    RenalInfarctionCharacterizationType = table.Column<byte>(nullable: false),
                    IsOnyMedullaryContrastEnhancement = table.Column<bool>(nullable: false),
                    IsNarrowContrastedRimAroundCortex = table.Column<bool>(nullable: false),
                    IsCorticalCalcifications = table.Column<bool>(nullable: false),
                    IsAtrophy = table.Column<bool>(nullable: false),
                    IsCompleteRenalCorticalNecrosis = table.Column<bool>(nullable: false),
                    DilatationOfTheRenalVeinInMm = table.Column<int>(nullable: true),
                    IsFillingDefectAfterContrastAdministration = table.Column<bool>(nullable: false),
                    IsNodularThrombusEnhancement = table.Column<bool>(nullable: false),
                    IsDiffusionRestrictionInTheThrombus = table.Column<bool>(nullable: false),
                    IsAlteredRenalPerfusion = table.Column<bool>(nullable: false),
                    IsTumorThrombosis = table.Column<bool>(nullable: false),
                    NormVariantOrAnomalySerialNumber = table.Column<string>(nullable: true),
                    NormVariantOrAnomalyPictureNumber = table.Column<string>(nullable: true),
                    NormVariantOrAnomalyImageFileId = table.Column<Guid>(nullable: true),
                    ObstructiveNephropathyChar1SerialNumber = table.Column<string>(nullable: true),
                    ObstructiveNephropathyChar1PictureNumber = table.Column<string>(nullable: true),
                    ObstructiveNephropathyChar1ImageFileId = table.Column<Guid>(nullable: true),
                    ObstructiveNephropathyChar2SerialNumber = table.Column<string>(nullable: true),
                    ObstructiveNephropathyChar2PictureNumber = table.Column<string>(nullable: true),
                    ObstructiveNephropathyChar2ImageFileId = table.Column<Guid>(nullable: true),
                    MassSerialNumber = table.Column<string>(nullable: true),
                    MassPictureNumber = table.Column<string>(nullable: true),
                    MassImageFileId = table.Column<Guid>(nullable: true),
                    DecreasedRenalVolumeSerialNumber = table.Column<string>(nullable: true),
                    DecreasedRenalVolumePictureNumber = table.Column<string>(nullable: true),
                    DecreasedRenalVolumeImageFileId = table.Column<Guid>(nullable: true),
                    IncreasedRenalVolumeSerialNumber = table.Column<string>(nullable: true),
                    IncreasedRenalVolumePictureNumber = table.Column<string>(nullable: true),
                    IncreasedRenalVolumeImageFileId = table.Column<Guid>(nullable: true),
                    VascularNephropathySerialNumber = table.Column<string>(nullable: true),
                    VascularNephropathyPictureNumber = table.Column<string>(nullable: true),
                    VascularNephropathyImageFileId = table.Column<Guid>(nullable: true),
                    KidneysPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KidneysFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_KidneysFindings_ImageFile_DecreasedRenalVolumeImageFileId",
                        column: x => x.DecreasedRenalVolumeImageFileId,
                        principalTable: "ImageFile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_KidneysFindings_ImageFile_IncreasedRenalVolumeImageFileId",
                        column: x => x.IncreasedRenalVolumeImageFileId,
                        principalTable: "ImageFile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_KidneysFindings_KidneysPages_KidneysPageId",
                        column: x => x.KidneysPageId,
                        principalTable: "KidneysPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_KidneysFindings_ImageFile_MassImageFileId",
                        column: x => x.MassImageFileId,
                        principalTable: "ImageFile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_KidneysFindings_ImageFile_NormVariantOrAnomalyImageFileId",
                        column: x => x.NormVariantOrAnomalyImageFileId,
                        principalTable: "ImageFile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_KidneysFindings_ImageFile_ObstructiveNephropathyChar1ImageF~",
                        column: x => x.ObstructiveNephropathyChar1ImageFileId,
                        principalTable: "ImageFile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_KidneysFindings_ImageFile_ObstructiveNephropathyChar2ImageF~",
                        column: x => x.ObstructiveNephropathyChar2ImageFileId,
                        principalTable: "ImageFile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_KidneysFindings_ImageFile_VascularNephropathyImageFileId",
                        column: x => x.VascularNephropathyImageFileId,
                        principalTable: "ImageFile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "LiverFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<int>(nullable: false),
                    WashInArterialPhaseType = table.Column<byte>(nullable: false),
                    IsMaskingVenousPhase = table.Column<bool>(nullable: false),
                    IsLateVenousPooling = table.Column<bool>(nullable: false),
                    FocalLocalizationType = table.Column<byte>(nullable: false),
                    IsRightLobeOfLiver = table.Column<bool>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    EarlyArterial = table.Column<byte>(nullable: false),
                    LateArterial = table.Column<byte>(nullable: false),
                    PortalVenous = table.Column<byte>(nullable: false),
                    Venous = table.Column<byte>(nullable: false),
                    LiverSpecificContrastEnhancement = table.Column<byte>(nullable: false),
                    IsCentralScar = table.Column<bool>(nullable: false),
                    IsWashInArterialPhase = table.Column<bool>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsHemorrhageProducts = table.Column<bool>(nullable: false),
                    GrowthPatternsType = table.Column<int>(nullable: false),
                    QualityOfEnhancement = table.Column<byte>(nullable: false),
                    T1WSignalType = table.Column<byte>(nullable: false),
                    T2WSignalType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<int>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<int>(nullable: false),
                    DifferentialDiagnosis3 = table.Column<int>(nullable: false),
                    LiverSegmentsLocations = table.Column<int>(nullable: false),
                    LiverPathologyLocations = table.Column<long>(nullable: false),
                    LiverPathologyLocations2 = table.Column<long>(nullable: false),
                    IsSignalDropInChemicalShift = table.Column<bool>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsPeripheralEnhancement = table.Column<bool>(nullable: false),
                    IsPortalVeinRightBranch = table.Column<bool>(nullable: false),
                    IsPortalVeinLeftBranch = table.Column<bool>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    IsCommonHepaticArtery = table.Column<bool>(nullable: false),
                    IsRightHepaticArtery = table.Column<bool>(nullable: false),
                    IsLeftHepaticArtery = table.Column<bool>(nullable: false),
                    IsIntrahepatic = table.Column<bool>(nullable: false),
                    SizeInMm = table.Column<int>(nullable: true),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    IsLeftLobeOfLiver = table.Column<bool>(nullable: false),
                    IsLobusCaudatus = table.Column<bool>(nullable: false),
                    IsLobusQuadratus = table.Column<bool>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    Equilibrium = table.Column<byte>(nullable: false),
                    IsCottonWoolAppearance = table.Column<bool>(nullable: false),
                    IsCentripetalFillInIrisDiaphragmPhenomenon = table.Column<bool>(nullable: false),
                    IsTriangleSign = table.Column<bool>(nullable: false),
                    IsEnhancementToHepaticVeins = table.Column<bool>(nullable: false),
                    IsCentrifugalEnhancement = table.Column<bool>(nullable: false),
                    IsWashOutVenousPhase = table.Column<bool>(nullable: false),
                    IsRingTargetSign = table.Column<bool>(nullable: false),
                    IsFadingEnhancement = table.Column<bool>(nullable: false),
                    FatType = table.Column<byte>(nullable: false),
                    IsSepts = table.Column<bool>(nullable: false),
                    IsFluidCsfIsointens = table.Column<bool>(nullable: false),
                    IsPeripheralMembrane = table.Column<bool>(nullable: false),
                    IsPortalVeinProximal = table.Column<bool>(nullable: false),
                    IsRightHepaticVein = table.Column<bool>(nullable: false),
                    IsMiddleHepaticVein = table.Column<bool>(nullable: false),
                    IsLeftHepaticVein = table.Column<bool>(nullable: false),
                    IsAssociatedCholestasis = table.Column<bool>(nullable: false),
                    IsRightHepaticDuct = table.Column<bool>(nullable: false),
                    IsLeftHepaticDuct = table.Column<bool>(nullable: false),
                    IsCommonHepaticDuct = table.Column<bool>(nullable: false),
                    IsGallBladder = table.Column<bool>(nullable: false),
                    IsMoreThanOneLesionOfTheSameEntity = table.Column<bool>(nullable: false),
                    IsHypertrophyLeftLiverLobe = table.Column<bool>(nullable: false),
                    IsHypertrophyCaudateLobe = table.Column<bool>(nullable: false),
                    IsHepaticFissureWidening = table.Column<bool>(nullable: false),
                    IsNodularSurface = table.Column<bool>(nullable: false),
                    NodularSurfaceType = table.Column<byte>(nullable: false),
                    IsCorkscrewLikeHepaticArtery = table.Column<bool>(nullable: false),
                    IsVPortaeDilatation = table.Column<bool>(nullable: false),
                    IsVPortaeThrombosis = table.Column<bool>(nullable: false),
                    IsCentral = table.Column<bool>(nullable: false),
                    IsRightPortalVein = table.Column<bool>(nullable: false),
                    IsLeftPortalVein = table.Column<bool>(nullable: false),
                    IsSubocclusive = table.Column<bool>(nullable: false),
                    IsCollateralization = table.Column<bool>(nullable: false),
                    IsCavernousPortalVein = table.Column<bool>(nullable: false),
                    IsHepaticVeins = table.Column<bool>(nullable: false),
                    IsHepaticVeinsNotEvaluable = table.Column<bool>(nullable: false),
                    IsThrombosis = table.Column<bool>(nullable: false),
                    IsComplete = table.Column<bool>(nullable: false),
                    IsPartial = table.Column<bool>(nullable: false),
                    IsOcclusion = table.Column<bool>(nullable: false),
                    IsDilatation = table.Column<bool>(nullable: false),
                    IsArteriovenousShunts = table.Column<bool>(nullable: false),
                    IsArterioportalShunts = table.Column<bool>(nullable: false),
                    IsPortovenousShunts = table.Column<bool>(nullable: false),
                    IsPeriosophageal = table.Column<bool>(nullable: false),
                    IsPerisplenic = table.Column<bool>(nullable: false),
                    IsPerigastric = table.Column<bool>(nullable: false),
                    IsParaumbilical = table.Column<bool>(nullable: false),
                    IsRetroperitoneal = table.Column<bool>(nullable: false),
                    IsRecanalizedUmbilicalVein = table.Column<bool>(nullable: false),
                    IsAscites = table.Column<bool>(nullable: false),
                    AscitesType = table.Column<byte>(nullable: false),
                    IsFibrosis = table.Column<bool>(nullable: false),
                    IsConfluent = table.Column<bool>(nullable: false),
                    IsWedgeShapedExtensionToPeriphery = table.Column<bool>(nullable: false),
                    IsSignalDrop = table.Column<bool>(nullable: false),
                    SignalDropType = table.Column<byte>(nullable: false),
                    GallbladderNormVariantPostoperativeType = table.Column<byte>(nullable: false),
                    TopographyConcrementsType = table.Column<byte>(nullable: false),
                    IsObstructive = table.Column<bool>(nullable: false),
                    IsIntrahepaticBileDuctDilatation = table.Column<bool>(nullable: false),
                    IsMirizziSyndrome = table.Column<bool>(nullable: false),
                    ClassificationMcsherryType = table.Column<byte>(nullable: false),
                    DetailsStoneType = table.Column<byte>(nullable: false),
                    IsNeckCollum = table.Column<bool>(nullable: false),
                    IsBodyCorpus = table.Column<bool>(nullable: false),
                    IsBaseOfBladderFundus = table.Column<bool>(nullable: false),
                    IsCysticDuct = table.Column<bool>(nullable: false),
                    CharacteristicsType = table.Column<byte>(nullable: false),
                    MaxWallThicknessInMm = table.Column<int>(nullable: true),
                    IsPeriportalEdema = table.Column<bool>(nullable: false),
                    IsIncreasedGallbladderWallEnhancement = table.Column<bool>(nullable: false),
                    IsIncreasedContrastEnhancementLiverParenchyma = table.Column<bool>(nullable: false),
                    IsWallDiscontinuity = table.Column<bool>(nullable: false),
                    IsIntramuralRokitanskyAschoff = table.Column<bool>(nullable: false),
                    IsPearlNecklaceSign = table.Column<bool>(nullable: false),
                    IsIntramuralGranulomas = table.Column<bool>(nullable: false),
                    IsIntraluminalPolypoidMass = table.Column<bool>(nullable: false),
                    IsMuralCalcification = table.Column<bool>(nullable: false),
                    IsLiver = table.Column<bool>(nullable: false),
                    IsStomach = table.Column<bool>(nullable: false),
                    IsIntestine = table.Column<bool>(nullable: false),
                    IsPancreas = table.Column<bool>(nullable: false),
                    IsHepaticArtery = table.Column<bool>(nullable: false),
                    IsProperHepaticArtery = table.Column<bool>(nullable: false),
                    IsPortalVein = table.Column<bool>(nullable: false),
                    IsShortRightHepaticDuct = table.Column<bool>(nullable: false),
                    IsHuangClassification = table.Column<bool>(nullable: false),
                    HuangClassificationType = table.Column<int>(nullable: false),
                    MaxWidthOfTheCommonBileDuctInMm = table.Column<int>(nullable: true),
                    MaxWidthOfTheIntrahepaticInMm = table.Column<int>(nullable: true),
                    IsDoubleDuctSign = table.Column<bool>(nullable: false),
                    IsMultifocalDilatationOfBileDucts = table.Column<bool>(nullable: false),
                    IsCysticDilatationsOfBileDucts = table.Column<bool>(nullable: false),
                    IsCaliberVariations = table.Column<bool>(nullable: false),
                    IsConcentricWallThickening = table.Column<bool>(nullable: false),
                    IsStringOfPearlsConfiguration = table.Column<bool>(nullable: false),
                    IsWallEnhancement = table.Column<bool>(nullable: false),
                    IsIntrahepaticStone = table.Column<bool>(nullable: false),
                    IsIntraductal = table.Column<bool>(nullable: false),
                    IsCholangitis = table.Column<bool>(nullable: false),
                    IsPusInTheBileDuct = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    ExtensionInMm = table.Column<int>(nullable: true),
                    IsAerobilia = table.Column<bool>(nullable: false),
                    IsStricture = table.Column<bool>(nullable: false),
                    LengthOfStrictureInMm = table.Column<int>(nullable: true),
                    IsPseudostricture = table.Column<bool>(nullable: false),
                    IsPseudostrictureSuspicionOf = table.Column<bool>(nullable: false),
                    ExtensionType = table.Column<byte>(nullable: false),
                    IsAdjacentFluidFormation = table.Column<bool>(nullable: false),
                    IsEncapsulation = table.Column<bool>(nullable: false),
                    IsGasInclusion = table.Column<bool>(nullable: false),
                    IsExtrahepatic = table.Column<bool>(nullable: false),
                    IsSignsOfInfection = table.Column<bool>(nullable: false),
                    IsLongSegmentalStricture = table.Column<bool>(nullable: false),
                    IsIrregularWallThickening = table.Column<bool>(nullable: false),
                    IsLateEnhancementOfTheMassWallThickening = table.Column<bool>(nullable: false),
                    IsAbsenceOfWashout = table.Column<bool>(nullable: false),
                    IsCapsularRetraction = table.Column<bool>(nullable: false),
                    GrowthPatternType = table.Column<byte>(nullable: false),
                    IsVPortaeProximal = table.Column<bool>(nullable: false),
                    IsInferiorVenaCava = table.Column<bool>(nullable: false),
                    IsLiverCapsule = table.Column<bool>(nullable: false),
                    ClassificationCorletteType = table.Column<byte>(nullable: false),
                    IsCommonOriginOfCeliacArtery = table.Column<bool>(nullable: false),
                    IsTrifurcationHepaticArtery = table.Column<bool>(nullable: false),
                    IsGastroduodenalArtery = table.Column<bool>(nullable: false),
                    IsTruncusIncompletus = table.Column<bool>(nullable: false),
                    IsTruncusCompletus = table.Column<bool>(nullable: false),
                    LiverPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LiverFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LiverFindings_ImageFile_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LiverFindings_LiverPages_LiverPageId",
                        column: x => x.LiverPageId,
                        principalTable: "LiverPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LymphaticSystemFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    LocalizationType = table.Column<byte>(nullable: false),
                    MaxShortAxisDiameterSad = table.Column<int>(nullable: true),
                    IsLymphNodeBulk = table.Column<bool>(nullable: false),
                    SizeInMm = table.Column<int>(nullable: true),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    SpineLocation = table.Column<decimal>(nullable: false),
                    EvaluationType = table.Column<byte>(nullable: false),
                    IsSize = table.Column<bool>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsContrastEnhancement = table.Column<bool>(nullable: false),
                    IsLocation = table.Column<bool>(nullable: false),
                    IsNumber = table.Column<bool>(nullable: false),
                    IsFattyHilum = table.Column<bool>(nullable: false),
                    IsIncreased = table.Column<bool>(nullable: false),
                    IsPathologicDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsFattyTissueInTheLnHilus = table.Column<bool>(nullable: false),
                    IsFattyInfiltration = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsCysticTransformation = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    IsSandwichSign = table.Column<bool>(nullable: false),
                    IsAorticEncasement = table.Column<bool>(nullable: false),
                    IsPortalVeinEncasement = table.Column<bool>(nullable: false),
                    CMEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType = table.Column<int>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    LymphaticSystemPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LymphaticSystemFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LymphaticSystemFindings_ImageFile_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LymphaticSystemFindings_LymphaticSystemPages_LymphaticSyste~",
                        column: x => x.LymphaticSystemPageId,
                        principalTable: "LymphaticSystemPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PancreasFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    MainMassDifferentialDiagnosisType1 = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    SignalT1wType = table.Column<byte>(nullable: false),
                    SignalT2wType = table.Column<byte>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsHemosiderin = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    PancreaticDuctPathologyType = table.Column<byte>(nullable: false),
                    GrowthPatternsType = table.Column<byte>(nullable: false),
                    ContrastEnhancementQuantitative = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistribution = table.Column<byte>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    IsUncinateProcess = table.Column<bool>(nullable: false),
                    IsPancreaticHead = table.Column<bool>(nullable: false),
                    IsPancreaticTail = table.Column<bool>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    IsPancreaticBody = table.Column<bool>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    IsCharacterizationIPancreaticHead = table.Column<bool>(nullable: false),
                    IsCharacterizationIPancreaticCorpus = table.Column<bool>(nullable: false),
                    IsCharacterizationIPancreaticTail = table.Column<bool>(nullable: false),
                    IsIrregularConfiguration = table.Column<bool>(nullable: false),
                    IsStringOfPearlsConfiguration = table.Column<bool>(nullable: false),
                    IsFillingDefects = table.Column<bool>(nullable: false),
                    IsConcretion = table.Column<bool>(nullable: false),
                    IsPapillaDuodeniMajor = table.Column<bool>(nullable: false),
                    Diameter = table.Column<byte>(nullable: true),
                    IsIntraductalGas = table.Column<bool>(nullable: false),
                    MeasurementDilatation = table.Column<byte>(nullable: true),
                    IsDilationUpstreamDuct = table.Column<bool>(nullable: false),
                    DilationUpstreamDuct = table.Column<byte>(nullable: true),
                    IsDuodenum = table.Column<bool>(nullable: false),
                    IsStomach = table.Column<bool>(nullable: false),
                    IsSplenicArtery = table.Column<bool>(nullable: false),
                    IsCommonHepaticArtery = table.Column<bool>(nullable: false),
                    IsPortalVein = table.Column<bool>(nullable: false),
                    SignalT1wFSType = table.Column<byte>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsSepts = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsSignalVoids = table.Column<bool>(nullable: false),
                    IsDuodenalStenosis = table.Column<bool>(nullable: false),
                    IsGastroduodenalArtery = table.Column<bool>(nullable: false),
                    IsPancreaticoduodenalArtery = table.Column<bool>(nullable: false),
                    IsPseudoaneurysm = table.Column<bool>(nullable: false),
                    IsParenchymalFattyDegeneration = table.Column<bool>(nullable: false),
                    IsParenchymalAtrophy = table.Column<bool>(nullable: false),
                    IsParenchymalAtrophyUncinateProcess = table.Column<bool>(nullable: false),
                    IsParenchymalAtrophyPancreaticHead = table.Column<bool>(nullable: false),
                    IsParenchymalAtrophyPancreaticBody = table.Column<bool>(nullable: false),
                    IsParenchymalAtrophyPancreaticTail = table.Column<bool>(nullable: false),
                    IsWalledOffNecrosis = table.Column<bool>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    AnatomicalVariantsAnomalyFindingType = table.Column<byte>(nullable: false),
                    PancreasDivisumClassificationType = table.Column<byte>(nullable: false),
                    IsStenosisOfTheMinorPapilla = table.Column<bool>(nullable: false),
                    PancreaticDuctDilatation = table.Column<byte>(nullable: true),
                    PancreasAnulareClassificationType = table.Column<byte>(nullable: false),
                    IsObstructionOfTheAbberantPancreaticDuct = table.Column<bool>(nullable: false),
                    IsFluidAccumulation = table.Column<bool>(nullable: false),
                    IsIsolated = table.Column<bool>(nullable: false),
                    IsConnectionToTheDuctusPancreaticus = table.Column<bool>(nullable: false),
                    IsMultifocal = table.Column<bool>(nullable: false),
                    IsCommunicating = table.Column<bool>(nullable: false),
                    IsBursaOmentalis = table.Column<bool>(nullable: false),
                    IsPeritonealCavity = table.Column<bool>(nullable: false),
                    IsAnteriorPararenalSpace = table.Column<bool>(nullable: false),
                    IsPelvis = table.Column<bool>(nullable: false),
                    IsParenchymalNecrosis = table.Column<bool>(nullable: false),
                    AcutePancreatitisExpansionType = table.Column<byte>(nullable: false),
                    IsGas = table.Column<bool>(nullable: false),
                    IsDebris = table.Column<bool>(nullable: false),
                    IsAdjacentEdematousIntestinalWallChange = table.Column<bool>(nullable: false),
                    IsExtrahepaticCholestasis = table.Column<bool>(nullable: false),
                    DuctHepatocholedochusDiameter = table.Column<byte>(nullable: true),
                    IsExtrahepaticCholestasisAdjacent = table.Column<bool>(nullable: false),
                    ExtrahepaticCholestasis = table.Column<byte>(nullable: true),
                    IsCholecystitis = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    IsIntrapancreatic = table.Column<bool>(nullable: false),
                    IsExtrapancreatic = table.Column<bool>(nullable: false),
                    AbscessExpansion = table.Column<byte>(nullable: true),
                    IsFistula = table.Column<bool>(nullable: false),
                    IsColon = table.Column<bool>(nullable: false),
                    IsThrombosis = table.Column<bool>(nullable: false),
                    IsSplenicVein = table.Column<bool>(nullable: false),
                    IsSplenicVeinCompleteOcclusion = table.Column<bool>(nullable: false),
                    IsPortalVeinCompleteOcclusion = table.Column<bool>(nullable: false),
                    IsBleeding = table.Column<bool>(nullable: false),
                    IsPseudoaneurysmSplenicArtery = table.Column<bool>(nullable: false),
                    IsPseudoaneurysmGastroduodenalArtery = table.Column<bool>(nullable: false),
                    IsPseudoaneurysmPancreaticoduodenalArtery = table.Column<bool>(nullable: false),
                    IsTruncusCoelicus = table.Column<bool>(nullable: false),
                    IsFatTissueNecrosis = table.Column<bool>(nullable: false),
                    AssessmentType = table.Column<byte>(nullable: false),
                    IsAcuteOnChronic = table.Column<bool>(nullable: false),
                    IsAcutePeripancreaticFluidCollection = table.Column<bool>(nullable: false),
                    IsPseudocysts = table.Column<bool>(nullable: false),
                    AcutePancreatitisDiagnosisType = table.Column<byte>(nullable: false),
                    IsAcuteNecroticFluidCollection = table.Column<bool>(nullable: false),
                    IsParenchymatous = table.Column<bool>(nullable: false),
                    IsPeripancreatic = table.Column<bool>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    IsPancreaticCorpus = table.Column<bool>(nullable: false),
                    IsPancreaticDuct = table.Column<bool>(nullable: false),
                    IsBranchduct = table.Column<bool>(nullable: false),
                    Size = table.Column<int>(nullable: true),
                    SecondPlane = table.Column<int>(nullable: true),
                    ThirdPlane = table.Column<int>(nullable: true),
                    IsInternalChangesFat = table.Column<bool>(nullable: false),
                    PhaseType = table.Column<byte>(nullable: false),
                    IsMassEffect = table.Column<bool>(nullable: false),
                    IsSpleen = table.Column<bool>(nullable: false),
                    IsMesocolonTransversum = table.Column<bool>(nullable: false),
                    IsStomachSuspicionOf = table.Column<bool>(nullable: false),
                    IsExtensionDuctHepatocholedochus = table.Column<bool>(nullable: false),
                    MaxDiameter = table.Column<byte>(nullable: true),
                    IsDoubleDuctSign = table.Column<bool>(nullable: false),
                    IsVesselInvolvement = table.Column<bool>(nullable: false),
                    IsCeliacTrunk = table.Column<bool>(nullable: false),
                    CeliacTrunkCharacteristicsType = table.Column<byte>(nullable: false),
                    SplenicArteryCharacteristicsType = table.Column<byte>(nullable: false),
                    CommonHepaticArteryCharacteristicsType = table.Column<byte>(nullable: false),
                    GastroduodenalArteryCharacteristicsType = table.Column<byte>(nullable: false),
                    PancreaticoduodenalArteryCharacteristicsType = table.Column<byte>(nullable: false),
                    IsASuperiorMesentericArtery = table.Column<bool>(nullable: false),
                    ASuperiorMesentericArteryCharacteristicsType = table.Column<byte>(nullable: false),
                    PortalVeinCharacteristicsType = table.Column<byte>(nullable: false),
                    IsVSuperiorMesentericArtery = table.Column<bool>(nullable: false),
                    VSuperiorMesentericArteryCharacteristicsType = table.Column<byte>(nullable: false),
                    IsTearDropSign = table.Column<bool>(nullable: false),
                    IsVCavaInferior = table.Column<bool>(nullable: false),
                    VCavaInferiorCharacteristicsType = table.Column<byte>(nullable: false),
                    MassDifferentialDiagnosisType1 = table.Column<byte>(nullable: false),
                    MassDifferentialDiagnosisType2 = table.Column<byte>(nullable: false),
                    MassDifferentialDiagnosisType3 = table.Column<byte>(nullable: false),
                    IsLesionAboveOne = table.Column<bool>(nullable: false),
                    FukuokaCriteriaType = table.Column<byte>(nullable: false),
                    IsFollowUpInOneTwoYears = table.Column<bool>(nullable: false),
                    IsObstructiveCholestasisWithCysticLesion = table.Column<bool>(nullable: false),
                    IsDilatationOfThePancreaticDuct = table.Column<bool>(nullable: false),
                    IsHighRiskContrastEnhancingmuralNodule = table.Column<bool>(nullable: false),
                    IsDiscussionSurgicalIndication = table.Column<bool>(nullable: false),
                    IsClinicalPancreatitis = table.Column<bool>(nullable: false),
                    IsDiameterCysticLesionOver3cm = table.Column<bool>(nullable: false),
                    IsGrowthAboveFiveMmInTwoYears = table.Column<bool>(nullable: false),
                    IsContrastEnhancingMuralNodules = table.Column<bool>(nullable: false),
                    IsThickenedWall = table.Column<bool>(nullable: false),
                    IsContrastEnhancement = table.Column<bool>(nullable: false),
                    IsPancreaticDuctFiveToNineMm = table.Column<bool>(nullable: false),
                    IsAbruptChangeInPancreatic = table.Column<bool>(nullable: false),
                    IsCAIsIncreased = table.Column<bool>(nullable: false),
                    IsLymphNodes = table.Column<bool>(nullable: false),
                    IsDiscussionEndosonography = table.Column<bool>(nullable: false),
                    FukuokaNegativeCystSizeType = table.Column<byte>(nullable: false),
                    IsCTMRIIn6MonthsThen = table.Column<bool>(nullable: false),
                    IsCTMRIIn6MonthsThereafter = table.Column<bool>(nullable: false),
                    IsEndosonography = table.Column<bool>(nullable: false),
                    IsMRIWithEndosonography = table.Column<bool>(nullable: false),
                    DiffuseParenchymalChangesHomogeneityType = table.Column<byte>(nullable: false),
                    IsEnhancementOfTheCapsule = table.Column<bool>(nullable: false),
                    IsDiffuseSmallestFatNecroses = table.Column<bool>(nullable: false),
                    IsMultipleLesions = table.Column<bool>(nullable: false),
                    DiameterLargestLesion = table.Column<int>(nullable: true),
                    IsPseudocyst = table.Column<bool>(nullable: false),
                    IsPseudocystEnhancementOfTheCapsule = table.Column<bool>(nullable: false),
                    IsPseudocystMultipleLesions = table.Column<bool>(nullable: false),
                    PseudocystDiameterLargestLesion = table.Column<int>(nullable: true),
                    CharacterizationIIIHomogeneityType = table.Column<byte>(nullable: false),
                    DiffuseParenchymalDifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    DiffuseParenchymalDifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    MonthOfOperation = table.Column<byte>(nullable: true),
                    YearOfOperation = table.Column<int>(nullable: true),
                    PostoperativeFindingType = table.Column<byte>(nullable: false),
                    PathologyType = table.Column<byte>(nullable: false),
                    PancreasPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PancreasFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PancreasFindings_ImageFile_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_PancreasFindings_PancreasPages_PancreasPageId",
                        column: x => x.PancreasPageId,
                        principalTable: "PancreasPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PeritonealCavityFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType = table.Column<int>(nullable: false),
                    DifferentialDiagnosis1Type = table.Column<int>(nullable: false),
                    DifferentialDiagnosis2Type = table.Column<int>(nullable: false),
                    DifferentialDiagnosis3Type = table.Column<int>(nullable: false),
                    IsSubphrenic = table.Column<bool>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    IsOmentalBursa = table.Column<bool>(nullable: false),
                    IsOmentumMajus = table.Column<bool>(nullable: false),
                    IsOmentalForamen = table.Column<bool>(nullable: false),
                    IsSubhepatic = table.Column<bool>(nullable: false),
                    IsSupramesenteric = table.Column<bool>(nullable: false),
                    IsInframesenteric = table.Column<bool>(nullable: false),
                    IsMesentericRoot = table.Column<bool>(nullable: false),
                    IsPeritonealContrastEnhancement = table.Column<bool>(nullable: false),
                    IsParacolic = table.Column<bool>(nullable: false),
                    IsParacolicRight = table.Column<bool>(nullable: false),
                    IsParacolicLeft = table.Column<bool>(nullable: false),
                    IsMesocolonTransversum = table.Column<bool>(nullable: false),
                    IsSupramesocolic = table.Column<bool>(nullable: false),
                    IsInframesocolic = table.Column<bool>(nullable: false),
                    IsVesicoUterinePouch = table.Column<bool>(nullable: false),
                    IsRectoUterinePouchPouchOfDouglas = table.Column<bool>(nullable: false),
                    IsRectoVesicalPouch = table.Column<bool>(nullable: false),
                    IsMesenteryOfTheSmallBowel = table.Column<bool>(nullable: false),
                    IsDiffuse = table.Column<bool>(nullable: false),
                    IsAnteriorPararenalSpace = table.Column<bool>(nullable: false),
                    IsPosteriorPararenalSpace = table.Column<bool>(nullable: false),
                    IsPerirenalSpace = table.Column<bool>(nullable: false),
                    IsAnteriorLeafGerotaFascia = table.Column<bool>(nullable: false),
                    IsPosteriorLeafGerotaFascia = table.Column<bool>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    T1wSignal = table.Column<byte>(nullable: false),
                    T2wSignal = table.Column<byte>(nullable: false),
                    IsSignalDrop = table.Column<bool>(nullable: false),
                    SignalDropExtensionType = table.Column<byte>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    ExtensionSizeInMm = table.Column<int>(nullable: true),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    IsRetroperitoneum = table.Column<bool>(nullable: false),
                    IsLateroconalFascia = table.Column<bool>(nullable: false),
                    IsZuckerkandlsFascia = table.Column<bool>(nullable: false),
                    IsParaaortic = table.Column<bool>(nullable: false),
                    IsInteraortocaval = table.Column<bool>(nullable: false),
                    IsParacaval = table.Column<bool>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsBoneOrTooth = table.Column<bool>(nullable: false),
                    IsInternalChangesCapsule = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsSignalVoids = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    GrowthPatternsType = table.Column<byte>(nullable: false),
                    IsAssociatedFindingsCapsule = table.Column<bool>(nullable: false),
                    IsPseudoCapsule = table.Column<bool>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    MaxThicknessInMm = table.Column<int>(nullable: true),
                    IsConcomitantPeritonitis = table.Column<bool>(nullable: false),
                    IsFocalGasInclusion = table.Column<bool>(nullable: false),
                    IsSuspectedAbscess = table.Column<bool>(nullable: false),
                    IsSuspectedAbscessAboveOneFinding = table.Column<bool>(nullable: false),
                    IsCommunicatingLesions = table.Column<bool>(nullable: false),
                    QuantityType = table.Column<byte>(nullable: false),
                    AscitesQualityType = table.Column<byte>(nullable: false),
                    IsOmentumInvolvement = table.Column<bool>(nullable: false),
                    IsMesentericFatInvolvement = table.Column<bool>(nullable: false),
                    IsInvolvedQuadrantsRightUpper = table.Column<bool>(nullable: false),
                    IsInvolvedQuadrantsRightLower = table.Column<bool>(nullable: false),
                    IsInvolvedQuadrantsLeftUpper = table.Column<bool>(nullable: false),
                    IsInvolvedQuadrantsLeftLower = table.Column<bool>(nullable: false),
                    IsIntraperitoneal = table.Column<bool>(nullable: false),
                    IsRetroperitoneumRightSide = table.Column<bool>(nullable: false),
                    IsRetroperitoneumLeftSide = table.Column<bool>(nullable: false),
                    IsSedimentationEffects = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsSignsOfSuperinfection = table.Column<bool>(nullable: false),
                    PMLocalizationHomogeneityType = table.Column<byte>(nullable: false),
                    IsSpaceOccupying = table.Column<bool>(nullable: false),
                    IsAbdominalWall = table.Column<bool>(nullable: false),
                    IsSmallIntestine = table.Column<bool>(nullable: false),
                    IsColon = table.Column<bool>(nullable: false),
                    IsStomach = table.Column<bool>(nullable: false),
                    IsArteries = table.Column<bool>(nullable: false),
                    IsVeins = table.Column<bool>(nullable: false),
                    IsThickenedGreaterOmentum = table.Column<bool>(nullable: false),
                    IsContrastEnhancement = table.Column<bool>(nullable: false),
                    ThickenedGreaterOmentumMaxWidthInMm = table.Column<int>(nullable: true),
                    IsPerforation = table.Column<bool>(nullable: false),
                    IsFreeGas = table.Column<bool>(nullable: false),
                    IsDDPostoperative = table.Column<bool>(nullable: false),
                    IsIleus = table.Column<bool>(nullable: false),
                    IsAscites = table.Column<bool>(nullable: false),
                    IsImpressionOfLiverSurface = table.Column<bool>(nullable: false),
                    IsImpressionOfSpleenSurface = table.Column<bool>(nullable: false),
                    IsEvidenceOfContrastMediaLatePhase = table.Column<bool>(nullable: false),
                    IsEncasementOfMesentericVessels = table.Column<bool>(nullable: false),
                    IsRetractionOfAdjacentIntestinalLoops = table.Column<bool>(nullable: false),
                    PMStrongHomogeneityType = table.Column<byte>(nullable: false),
                    IsAboveOneLesionOfTheSameEntity = table.Column<bool>(nullable: false),
                    RMLocalizationHomogeneityType = table.Column<byte>(nullable: false),
                    IsUreter = table.Column<bool>(nullable: false),
                    IsBone = table.Column<bool>(nullable: false),
                    IsNeuralForamen = table.Column<bool>(nullable: false),
                    IsSpinalCanal = table.Column<bool>(nullable: false),
                    IsCutaneous = table.Column<bool>(nullable: false),
                    IsMPsoas = table.Column<bool>(nullable: false),
                    IsSpondylodiscitis = table.Column<bool>(nullable: false),
                    IsSpondylodiscitisSuspicionOf = table.Column<bool>(nullable: false),
                    RMStrongHomogeneityType = table.Column<byte>(nullable: false),
                    PeritonealCavityPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PeritonealCavityFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PeritonealCavityFindings_ImageFile_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_PeritonealCavityFindings_PeritonealCavityPages_PeritonealCa~",
                        column: x => x.PeritonealCavityPageId,
                        principalTable: "PeritonealCavityPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SpleenFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    DelimitationType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    T1w = table.Column<byte>(nullable: false),
                    T2w = table.Column<byte>(nullable: false),
                    CMEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    CMEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    CMEnhancementDistributionType = table.Column<byte>(nullable: false),
                    SizeInMm = table.Column<int>(nullable: true),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    PlantVariationPathologicalAnatomyType = table.Column<byte>(nullable: false),
                    IsCleaves = table.Column<bool>(nullable: false),
                    IsNotches = table.Column<bool>(nullable: false),
                    IsNodes = table.Column<bool>(nullable: false),
                    IsLobulation = table.Column<bool>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    IsExtremitasAnterior = table.Column<bool>(nullable: false),
                    IsMiddleThird = table.Column<bool>(nullable: false),
                    IsAtTheHilus = table.Column<bool>(nullable: false),
                    IsExtremePosterior = table.Column<bool>(nullable: false),
                    IsParenchymatous = table.Column<bool>(nullable: false),
                    IsSubcapsular = table.Column<bool>(nullable: false),
                    QuantityType = table.Column<byte>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsLiquid = table.Column<bool>(nullable: false),
                    IsCalcium = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSepts = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsFlowVoid = table.Column<bool>(nullable: false),
                    IsBleeding = table.Column<bool>(nullable: false),
                    IsNoDisplacement = table.Column<bool>(nullable: false),
                    IsMass = table.Column<bool>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis3 = table.Column<byte>(nullable: false),
                    IsMoreThanOneLesionSamePathology = table.Column<bool>(nullable: false),
                    IsMoreThanOneLesionParenchymatous = table.Column<bool>(nullable: false),
                    IsMoreThanOneLesionSubcapsular = table.Column<bool>(nullable: false),
                    IsUpstreamAneurysm = table.Column<bool>(nullable: false),
                    MaxDiameterInMm = table.Column<byte>(nullable: true),
                    IsUpstreamArterialOcclusion = table.Column<bool>(nullable: false),
                    IsOcclusionOfTheSplenicVein = table.Column<bool>(nullable: false),
                    IsThrombosisOfTheSplenicVein = table.Column<bool>(nullable: false),
                    IsMultifocalLocalization = table.Column<bool>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    SpleenPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpleenFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SpleenFindings_ImageFile_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SpleenFindings_SpleenPages_SpleenPageId",
                        column: x => x.SpleenPageId,
                        principalTable: "SpleenPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CMSideEffects",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    CMSideEffectType = table.Column<byte>(nullable: false),
                    MinAfterCMinjection = table.Column<int>(nullable: true),
                    DurationAdverseReactionType = table.Column<byte>(nullable: false),
                    IsCompletelyDeclining = table.Column<bool>(nullable: false),
                    IsSeriousAdverseEvent = table.Column<bool>(nullable: false),
                    TechnologyPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CMSideEffects", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CMSideEffects_TechnologyPages_TechnologyPageId",
                        column: x => x.TechnologyPageId,
                        principalTable: "TechnologyPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Sequences",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    WeightingType = table.Column<byte>(nullable: false),
                    OrientationType = table.Column<byte>(nullable: false),
                    IsSaturatedFat = table.Column<bool>(nullable: false),
                    Is3D = table.Column<bool>(nullable: false),
                    IsParallelImaging = table.Column<bool>(nullable: false),
                    SequenceType = table.Column<byte>(nullable: false),
                    IsChemicalShiftImaging = table.Column<bool>(nullable: false),
                    IsCineImaging = table.Column<bool>(nullable: false),
                    IsMrcp = table.Column<bool>(nullable: false),
                    IsPostContrast = table.Column<bool>(nullable: false),
                    IsSubtraction = table.Column<bool>(nullable: false),
                    IsB0 = table.Column<bool>(nullable: false),
                    IsB50 = table.Column<bool>(nullable: false),
                    IsB100 = table.Column<bool>(nullable: false),
                    IsB800 = table.Column<bool>(nullable: false),
                    IsB1000 = table.Column<bool>(nullable: false),
                    IsADCMap = table.Column<bool>(nullable: false),
                    TechnologyPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sequences", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Sequences_TechnologyPages_TechnologyPageId",
                        column: x => x.TechnologyPageId,
                        principalTable: "TechnologyPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "LymphNodeStationsFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<int>(nullable: false),
                    IsInternalMammaryRight = table.Column<bool>(nullable: false),
                    IsInternalMammaryLeft = table.Column<bool>(nullable: false),
                    IsDiaphragmaticRight = table.Column<bool>(nullable: false),
                    IsDiaphragmaticLeft = table.Column<bool>(nullable: false),
                    IsRetrocrural = table.Column<bool>(nullable: false),
                    IsInferior = table.Column<bool>(nullable: false),
                    IsAnterior = table.Column<bool>(nullable: false),
                    IsMiddle = table.Column<bool>(nullable: false),
                    IsGastroesophageal = table.Column<bool>(nullable: false),
                    IsGreaterCurvature = table.Column<bool>(nullable: false),
                    IsGreaterOmentum = table.Column<bool>(nullable: false),
                    IsGastroduodenal = table.Column<bool>(nullable: false),
                    IsGastroepiploic = table.Column<bool>(nullable: false),
                    IsPyloric = table.Column<bool>(nullable: false),
                    IsLesserCurvature = table.Column<bool>(nullable: false),
                    IsLesserOmentum = table.Column<bool>(nullable: false),
                    IsLeftGastric = table.Column<bool>(nullable: false),
                    IsCardioesophageal = table.Column<bool>(nullable: false),
                    IsCommonHepaticArtery = table.Column<bool>(nullable: false),
                    IsHepatoduodenalLigament = table.Column<bool>(nullable: false),
                    IsPeripancreatic = table.Column<bool>(nullable: false),
                    IsPancreaticolienal = table.Column<bool>(nullable: false),
                    IsPancreaticoduodenal = table.Column<bool>(nullable: false),
                    LymphaticSystemFindingId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LymphNodeStationsFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LymphNodeStationsFindings_LymphaticSystemFindings_Lymphatic~",
                        column: x => x.LymphaticSystemFindingId,
                        principalTable: "LymphaticSystemFindings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AdrenalGlandsFindings_AdrenalGlandsPageId",
                table: "AdrenalGlandsFindings",
                column: "AdrenalGlandsPageId");

            migrationBuilder.CreateIndex(
                name: "IX_AdrenalGlandsFindings_ImageFileId",
                table: "AdrenalGlandsFindings",
                column: "ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_AdrenalGlandsPages_ReportId",
                table: "AdrenalGlandsPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AnamnesisClinic_AnamnesisPageId",
                table: "AnamnesisClinic",
                column: "AnamnesisPageId");

            migrationBuilder.CreateIndex(
                name: "IX_AnamnesisIndication_AnamnesisPageId",
                table: "AnamnesisIndication",
                column: "AnamnesisPageId");

            migrationBuilder.CreateIndex(
                name: "IX_AnamnesisPages_ReportId",
                table: "AnamnesisPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CMSideEffects_TechnologyPageId",
                table: "CMSideEffects",
                column: "TechnologyPageId");

            migrationBuilder.CreateIndex(
                name: "IX_ExaminationRegionPages_ReportId",
                table: "ExaminationRegionPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_FindingLocalizers_Code",
                table: "FindingLocalizers",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_GastrointestinalTractFindings_GastrointestinalTractPageId",
                table: "GastrointestinalTractFindings",
                column: "GastrointestinalTractPageId");

            migrationBuilder.CreateIndex(
                name: "IX_GastrointestinalTractFindings_ImageFileId",
                table: "GastrointestinalTractFindings",
                column: "ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_GastrointestinalTractPages_ReportId",
                table: "GastrointestinalTractPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_KidneysFindings_DecreasedRenalVolumeImageFileId",
                table: "KidneysFindings",
                column: "DecreasedRenalVolumeImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_KidneysFindings_IncreasedRenalVolumeImageFileId",
                table: "KidneysFindings",
                column: "IncreasedRenalVolumeImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_KidneysFindings_KidneysPageId",
                table: "KidneysFindings",
                column: "KidneysPageId");

            migrationBuilder.CreateIndex(
                name: "IX_KidneysFindings_MassImageFileId",
                table: "KidneysFindings",
                column: "MassImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_KidneysFindings_NormVariantOrAnomalyImageFileId",
                table: "KidneysFindings",
                column: "NormVariantOrAnomalyImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_KidneysFindings_ObstructiveNephropathyChar1ImageFileId",
                table: "KidneysFindings",
                column: "ObstructiveNephropathyChar1ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_KidneysFindings_ObstructiveNephropathyChar2ImageFileId",
                table: "KidneysFindings",
                column: "ObstructiveNephropathyChar2ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_KidneysFindings_VascularNephropathyImageFileId",
                table: "KidneysFindings",
                column: "VascularNephropathyImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_KidneysPages_ReportId",
                table: "KidneysPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LiverFindings_ImageFileId",
                table: "LiverFindings",
                column: "ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_LiverFindings_LiverPageId",
                table: "LiverFindings",
                column: "LiverPageId");

            migrationBuilder.CreateIndex(
                name: "IX_LiverPages_ReportId",
                table: "LiverPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LymphaticSystemFindings_ImageFileId",
                table: "LymphaticSystemFindings",
                column: "ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_LymphaticSystemFindings_LymphaticSystemPageId",
                table: "LymphaticSystemFindings",
                column: "LymphaticSystemPageId");

            migrationBuilder.CreateIndex(
                name: "IX_LymphaticSystemPages_ReportId",
                table: "LymphaticSystemPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LymphNodeStationsFindings_LymphaticSystemFindingId",
                table: "LymphNodeStationsFindings",
                column: "LymphaticSystemFindingId");

            migrationBuilder.CreateIndex(
                name: "IX_PageInfos_ReportId",
                table: "PageInfos",
                column: "ReportId");

            migrationBuilder.CreateIndex(
                name: "IX_PancreasFindings_ImageFileId",
                table: "PancreasFindings",
                column: "ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_PancreasFindings_PancreasPageId",
                table: "PancreasFindings",
                column: "PancreasPageId");

            migrationBuilder.CreateIndex(
                name: "IX_PancreasPages_ReportId",
                table: "PancreasPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PeritonealCavityFindings_ImageFileId",
                table: "PeritonealCavityFindings",
                column: "ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_PeritonealCavityFindings_PeritonealCavityPageId",
                table: "PeritonealCavityFindings",
                column: "PeritonealCavityPageId");

            migrationBuilder.CreateIndex(
                name: "IX_PeritonealCavityPages_ReportId",
                table: "PeritonealCavityPages",
                column: "ReportId",
                unique: true);

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
                name: "IX_Sequences_TechnologyPageId",
                table: "Sequences",
                column: "TechnologyPageId");

            migrationBuilder.CreateIndex(
                name: "IX_SpleenFindings_ImageFileId",
                table: "SpleenFindings",
                column: "ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_SpleenFindings_SpleenPageId",
                table: "SpleenFindings",
                column: "SpleenPageId");

            migrationBuilder.CreateIndex(
                name: "IX_SpleenPages_ReportId",
                table: "SpleenPages",
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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AdrenalGlandsFindings");

            migrationBuilder.DropTable(
                name: "AnamnesisClinic");

            migrationBuilder.DropTable(
                name: "AnamnesisIndication");

            migrationBuilder.DropTable(
                name: "CMSideEffects");

            migrationBuilder.DropTable(
                name: "FindingLocalizers");

            migrationBuilder.DropTable(
                name: "GastrointestinalTractFindingPresets");

            migrationBuilder.DropTable(
                name: "GastrointestinalTractFindings");

            migrationBuilder.DropTable(
                name: "KidneysFindingPresets");

            migrationBuilder.DropTable(
                name: "KidneysFindings");

            migrationBuilder.DropTable(
                name: "LiverFindingPresets");

            migrationBuilder.DropTable(
                name: "LiverFindings");

            migrationBuilder.DropTable(
                name: "LymphNodeStationsFindings");

            migrationBuilder.DropTable(
                name: "PageInfos");

            migrationBuilder.DropTable(
                name: "PancreasFindingPresets");

            migrationBuilder.DropTable(
                name: "PancreasFindings");

            migrationBuilder.DropTable(
                name: "PatientInformation");

            migrationBuilder.DropTable(
                name: "PeritonealCavityFindings");

            migrationBuilder.DropTable(
                name: "ReportResults");

            migrationBuilder.DropTable(
                name: "ReportSchemaSessions");

            migrationBuilder.DropTable(
                name: "ReportSession");

            migrationBuilder.DropTable(
                name: "Sequences");

            migrationBuilder.DropTable(
                name: "SpleenFindingPresets");

            migrationBuilder.DropTable(
                name: "SpleenFindings");

            migrationBuilder.DropTable(
                name: "SummaryPages");

            migrationBuilder.DropTable(
                name: "AdrenalGlandsPages");

            migrationBuilder.DropTable(
                name: "AnamnesisPages");

            migrationBuilder.DropTable(
                name: "GastrointestinalTractPages");

            migrationBuilder.DropTable(
                name: "KidneysPages");

            migrationBuilder.DropTable(
                name: "LiverPages");

            migrationBuilder.DropTable(
                name: "LymphaticSystemFindings");

            migrationBuilder.DropTable(
                name: "PancreasPages");

            migrationBuilder.DropTable(
                name: "ExaminationRegionPages");

            migrationBuilder.DropTable(
                name: "PeritonealCavityPages");

            migrationBuilder.DropTable(
                name: "ReportSchemas");

            migrationBuilder.DropTable(
                name: "TechnologyPages");

            migrationBuilder.DropTable(
                name: "SpleenPages");

            migrationBuilder.DropTable(
                name: "ImageFile");

            migrationBuilder.DropTable(
                name: "LymphaticSystemPages");

            migrationBuilder.DropTable(
                name: "Reports");
        }
    }
}
