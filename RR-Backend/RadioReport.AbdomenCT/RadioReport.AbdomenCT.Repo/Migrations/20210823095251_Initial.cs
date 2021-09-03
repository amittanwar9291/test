using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.AbdomenCT.Repo.Migrations
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
                name: "AreaOfInvestigationPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AreaOfInvestigationPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AreaOfInvestigationPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MedicalHistoryPages",
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
                    table.PrimaryKey("PK_MedicalHistoryPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MedicalHistoryPages_Reports_ReportId",
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
                name: "TechnologyPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    CMReinforcedType = table.Column<byte>(nullable: false),
                    SequencesType = table.Column<byte>(nullable: false),
                    IodineConcentrationType = table.Column<byte>(nullable: false),
                    ContrastVolumeInMl = table.Column<int>(nullable: true),
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
                    IsRespiratoryArtifacts = table.Column<bool>(nullable: false),
                    IsPulsationArtifacts = table.Column<bool>(nullable: false),
                    IsMetalArtifacts = table.Column<bool>(nullable: false),
                    IsOther = table.Column<bool>(nullable: false),
                    IsEnteroclysis = table.Column<bool>(nullable: false),
                    IsOralContrast = table.Column<bool>(nullable: false),
                    IsRectalContrast = table.Column<bool>(nullable: false),
                    IsVaginalContrast = table.Column<bool>(nullable: false),
                    IsRetrogradeCystography = table.Column<bool>(nullable: false),
                    IsViaInsertedDrain = table.Column<bool>(nullable: false),
                    IsViaInsertedTube = table.Column<bool>(nullable: false),
                    IsFistulaTract = table.Column<bool>(nullable: false),
                    SpasmolysisType = table.Column<byte>(nullable: false),
                    ImageQualityType = table.Column<byte>(nullable: false),
                    IsBeamHardeningArtefacts = table.Column<bool>(nullable: false)
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
                        name: "FK_PatientInformation_AreaOfInvestigationPages_Id",
                        column: x => x.Id,
                        principalTable: "AreaOfInvestigationPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MedicalHistoryClinic",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    ParentNumber = table.Column<byte>(nullable: true),
                    ScopeId = table.Column<Guid>(nullable: true),
                    ClinicType = table.Column<byte>(nullable: false),
                    MedicalHistoryPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MedicalHistoryClinic", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MedicalHistoryClinic_MedicalHistoryPages_MedicalHistoryPage~",
                        column: x => x.MedicalHistoryPageId,
                        principalTable: "MedicalHistoryPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MedicalHistoryIndication",
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
                    LocalizationType = table.Column<byte>(nullable: false),
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
                    IsAppendix = table.Column<bool>(nullable: false),
                    IsColon = table.Column<bool>(nullable: false),
                    IsSigma = table.Column<bool>(nullable: false),
                    IsRectum = table.Column<bool>(nullable: false),
                    IsAnus = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    IsFistulaFormation = table.Column<bool>(nullable: false),
                    IsDiverticulitis = table.Column<bool>(nullable: false),
                    IsAppendicitis = table.Column<bool>(nullable: false),
                    ConcretionOrganRegionType = table.Column<byte>(nullable: false),
                    PathologyType = table.Column<byte>(nullable: false),
                    IsOcclusionAorta = table.Column<bool>(nullable: false),
                    IsOcclusionVisceralVessel = table.Column<bool>(nullable: false),
                    IsOcclusionPelvicAndLegArteries = table.Column<bool>(nullable: false),
                    MonthOfFollowUpAfterTherapy = table.Column<byte>(nullable: true),
                    YearOfFollowUpAfterTherapy = table.Column<int>(nullable: true),
                    IsPostoperative = table.Column<bool>(nullable: false),
                    IsPostinterventional = table.Column<bool>(nullable: false),
                    IsResection = table.Column<bool>(nullable: false),
                    IsPartialResection = table.Column<bool>(nullable: false),
                    IsChemotherapy = table.Column<bool>(nullable: false),
                    IsRadio = table.Column<bool>(nullable: false),
                    IsBiopsy = table.Column<bool>(nullable: false),
                    IsStenting = table.Column<bool>(nullable: false),
                    MedicalHistoryPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MedicalHistoryIndication", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MedicalHistoryIndication_MedicalHistoryPages_MedicalHistory~",
                        column: x => x.MedicalHistoryPageId,
                        principalTable: "MedicalHistoryPages",
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
                    SizeInMm = table.Column<int>(nullable: true),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    IsSubcapsular = table.Column<bool>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    CharacterizationHematoma = table.Column<byte>(nullable: false),
                    IsPlantVariationPathologicalMyProperty = table.Column<bool>(nullable: false),
                    PlantVariationPathologicalAnatomyType = table.Column<byte>(nullable: false),
                    IsSpleenContour = table.Column<bool>(nullable: false),
                    IsCleaves = table.Column<bool>(nullable: false),
                    IsNotches = table.Column<bool>(nullable: false),
                    IsNodes = table.Column<bool>(nullable: false),
                    IsLobulation = table.Column<bool>(nullable: false),
                    IsHematoma = table.Column<bool>(nullable: false),
                    Subcapsular = table.Column<int>(nullable: true),
                    IsSplenicVascularInjuryOr = table.Column<bool>(nullable: false),
                    IsSplenicVascularInjuryWith = table.Column<bool>(nullable: false),
                    ExtensionHematoma = table.Column<int>(nullable: true),
                    SecondPlane = table.Column<int>(nullable: true),
                    ThirdPlane = table.Column<int>(nullable: true),
                    IsLazerationParenchymaDepth = table.Column<bool>(nullable: false),
                    LazerationParenchymaDepth = table.Column<int>(nullable: true),
                    IsInvolvementOfTheHilar = table.Column<bool>(nullable: false),
                    IsSplenicRupture = table.Column<bool>(nullable: false),
                    ModifiedSpleenInjuryScaleType = table.Column<byte>(nullable: false),
                    IsInfectious = table.Column<bool>(nullable: false),
                    IsInflammatory = table.Column<bool>(nullable: false),
                    IsHematologicDisease = table.Column<bool>(nullable: false),
                    IsCongestive = table.Column<bool>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    IsExtremitasAnterior = table.Column<bool>(nullable: false),
                    IsMiddleThird = table.Column<bool>(nullable: false),
                    IsAtTheHilus = table.Column<bool>(nullable: false),
                    IsExtremePosterior = table.Column<bool>(nullable: false),
                    IsParenchymatous = table.Column<bool>(nullable: false),
                    QuantityType = table.Column<byte>(nullable: false),
                    DelimitationType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    SignalTypeExtended = table.Column<byte>(nullable: false),
                    DensityType = table.Column<byte>(nullable: false),
                    Quantitative = table.Column<int>(nullable: true),
                    IsFat = table.Column<bool>(nullable: false),
                    IsLiquid = table.Column<bool>(nullable: false),
                    IsCalcium = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSepts = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsBleeding = table.Column<bool>(nullable: false),
                    IsNoDisplacement = table.Column<bool>(nullable: false),
                    IsMass = table.Column<bool>(nullable: false),
                    EarlyArterialSignalTypeExtended = table.Column<byte>(nullable: false),
                    LateArterialSignalTypeExtended = table.Column<byte>(nullable: false),
                    PortalVenousSignalTypeExtended = table.Column<byte>(nullable: false),
                    VenousSignalTypeExtended = table.Column<byte>(nullable: false),
                    EquilibriumSignalTypeExtended = table.Column<byte>(nullable: false),
                    CMEnhancementDistributionType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
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
                name: "Acquisitions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    AcquisitionType = table.Column<byte>(nullable: false),
                    TechniqueType = table.Column<byte>(nullable: false),
                    NumberOfLines = table.Column<int>(nullable: true),
                    SliceThicknessInMm = table.Column<float>(nullable: true),
                    TubeVoltage1KV = table.Column<int>(nullable: true),
                    TubeVoltage2KV = table.Column<int>(nullable: true),
                    TubeCurrent1MAs = table.Column<int>(nullable: true),
                    TubeCurrent2MAs = table.Column<int>(nullable: true),
                    TubeCurrentModulationType = table.Column<byte>(nullable: false),
                    ReferenceValueInMAs = table.Column<int>(nullable: true),
                    IsNative = table.Column<bool>(nullable: false),
                    IsPulmonaryArterialPhase = table.Column<bool>(nullable: false),
                    IsArterial = table.Column<bool>(nullable: false),
                    IsArterialEarly = table.Column<bool>(nullable: false),
                    IsArterialLate = table.Column<bool>(nullable: false),
                    IsVenous = table.Column<bool>(nullable: false),
                    IsLate = table.Column<bool>(nullable: false),
                    LateDelayInMin = table.Column<float>(nullable: true),
                    PatientPositioningType = table.Column<byte>(nullable: false),
                    BreathingProtocolType = table.Column<byte>(nullable: false),
                    IsECGGating = table.Column<bool>(nullable: false),
                    TechnologyPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Acquisitions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Acquisitions_TechnologyPages_TechnologyPageId",
                        column: x => x.TechnologyPageId,
                        principalTable: "TechnologyPages",
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
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Reconstructions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    ReconstructionType = table.Column<byte>(nullable: false),
                    SliceThicknessST1Mm = table.Column<float>(nullable: true),
                    SliceThicknessST2Mm = table.Column<float>(nullable: true),
                    SliceThicknessST3Mm = table.Column<float>(nullable: true),
                    SliceThicknessST4Mm = table.Column<float>(nullable: true),
                    IsSoftTissues = table.Column<bool>(nullable: false),
                    IsLungs = table.Column<bool>(nullable: false),
                    IsBone = table.Column<bool>(nullable: false),
                    IsCTAngiography = table.Column<bool>(nullable: false),
                    IsMIP = table.Column<bool>(nullable: false),
                    IsMPR = table.Column<bool>(nullable: false),
                    IsVRT = table.Column<bool>(nullable: false),
                    IsMinIP = table.Column<bool>(nullable: false),
                    DoseLengthProductMGycm = table.Column<int>(nullable: true),
                    AcquisitionId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reconstructions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Reconstructions_Acquisitions_AcquisitionId",
                        column: x => x.AcquisitionId,
                        principalTable: "Acquisitions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Acquisitions_TechnologyPageId",
                table: "Acquisitions",
                column: "TechnologyPageId");

            migrationBuilder.CreateIndex(
                name: "IX_AreaOfInvestigationPages_ReportId",
                table: "AreaOfInvestigationPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CMSideEffects_TechnologyPageId",
                table: "CMSideEffects",
                column: "TechnologyPageId");

            migrationBuilder.CreateIndex(
                name: "IX_FindingLocalizers_Code",
                table: "FindingLocalizers",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_MedicalHistoryClinic_MedicalHistoryPageId",
                table: "MedicalHistoryClinic",
                column: "MedicalHistoryPageId");

            migrationBuilder.CreateIndex(
                name: "IX_MedicalHistoryIndication_MedicalHistoryPageId",
                table: "MedicalHistoryIndication",
                column: "MedicalHistoryPageId");

            migrationBuilder.CreateIndex(
                name: "IX_MedicalHistoryPages_ReportId",
                table: "MedicalHistoryPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PageInfos_ReportId",
                table: "PageInfos",
                column: "ReportId");

            migrationBuilder.CreateIndex(
                name: "IX_Reconstructions_AcquisitionId",
                table: "Reconstructions",
                column: "AcquisitionId");

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
                name: "IX_TechnologyPages_ReportId",
                table: "TechnologyPages",
                column: "ReportId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CMSideEffects");

            migrationBuilder.DropTable(
                name: "FindingLocalizers");

            migrationBuilder.DropTable(
                name: "MedicalHistoryClinic");

            migrationBuilder.DropTable(
                name: "MedicalHistoryIndication");

            migrationBuilder.DropTable(
                name: "PageInfos");

            migrationBuilder.DropTable(
                name: "PatientInformation");

            migrationBuilder.DropTable(
                name: "Reconstructions");

            migrationBuilder.DropTable(
                name: "ReportResults");

            migrationBuilder.DropTable(
                name: "ReportSchemaSessions");

            migrationBuilder.DropTable(
                name: "ReportSession");

            migrationBuilder.DropTable(
                name: "SpleenFindings");

            migrationBuilder.DropTable(
                name: "MedicalHistoryPages");

            migrationBuilder.DropTable(
                name: "AreaOfInvestigationPages");

            migrationBuilder.DropTable(
                name: "Acquisitions");

            migrationBuilder.DropTable(
                name: "ReportSchemas");

            migrationBuilder.DropTable(
                name: "ImageFile");

            migrationBuilder.DropTable(
                name: "SpleenPages");

            migrationBuilder.DropTable(
                name: "TechnologyPages");

            migrationBuilder.DropTable(
                name: "Reports");
        }
    }
}
