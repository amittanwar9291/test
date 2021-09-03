using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.HeadCT.Repo.Migrations
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
                name: "AnamnesisPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    Hours = table.Column<int>(nullable: true),
                    Days = table.Column<int>(nullable: true),
                    Months = table.Column<int>(nullable: true),
                    Years = table.Column<int>(nullable: true),
                    IsMRI = table.Column<bool>(nullable: false),
                    MonthOfMRI = table.Column<byte>(nullable: false),
                    YearOfMRI = table.Column<int>(nullable: false),
                    IsCT = table.Column<bool>(nullable: false),
                    MonthOfCT = table.Column<byte>(nullable: false),
                    YearOfCT = table.Column<int>(nullable: false),
                    IsPETCT = table.Column<bool>(nullable: false),
                    MonthOfPETCT = table.Column<byte>(nullable: false),
                    YearOfPETCT = table.Column<int>(nullable: false),
                    IsDSA = table.Column<bool>(nullable: false),
                    MonthOfDSA = table.Column<byte>(nullable: false),
                    YearOfDSA = table.Column<int>(nullable: false)
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
                name: "BasalNucleiPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BasalNucleiPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BasalNucleiPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BrainstemCranialNervesPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BrainstemCranialNervesPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BrainstemCranialNervesPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CerebrospinalFluidSpacePages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CerebrospinalFluidSpacePages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CerebrospinalFluidSpacePages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CortexPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CortexPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CortexPages_Reports_ReportId",
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
                    IsBrainMRI = table.Column<bool>(nullable: false),
                    IsBrainstemMRI = table.Column<bool>(nullable: false),
                    IsPituitaryMRI = table.Column<bool>(nullable: false),
                    IsOrbitaMRI = table.Column<bool>(nullable: false),
                    IsParanasalSinusMRI = table.Column<bool>(nullable: false),
                    IsTemporalBone = table.Column<bool>(nullable: false)
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
                name: "FacialSkullPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FacialSkullPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FacialSkullPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MeningesPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MeningesPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MeningesPages_Reports_ReportId",
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
                name: "SellarRegionPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SellarRegionPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SellarRegionPages_Reports_ReportId",
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
                    IsActive = table.Column<bool>(nullable: false)
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
                    IsIntravenous = table.Column<bool>(nullable: false),
                    IsIntrathecal = table.Column<bool>(nullable: false),
                    IsBeamHardeningArtifact = table.Column<bool>(nullable: false),
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
                name: "ClinicalSymptomFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    CharacterizationType = table.Column<byte>(nullable: false),
                    IsThunderclapHeadache = table.Column<bool>(nullable: false),
                    VertigoType = table.Column<byte>(nullable: false),
                    VisualDisturbanceType = table.Column<byte>(nullable: false),
                    CognitiveChangeType = table.Column<byte>(nullable: false),
                    AlteredStateOfConsciousnessType = table.Column<byte>(nullable: false),
                    IsHeadache = table.Column<bool>(nullable: false),
                    IsNauseaVomiting = table.Column<bool>(nullable: false),
                    IsDisorderOfConsciousnessComa = table.Column<bool>(nullable: false),
                    IsPapilledema = table.Column<bool>(nullable: false),
                    IsMeningism = table.Column<bool>(nullable: false),
                    IsFever = table.Column<bool>(nullable: false),
                    IsPhotophobia = table.Column<bool>(nullable: false),
                    IsNausea = table.Column<bool>(nullable: false),
                    MotorDeficitType = table.Column<byte>(nullable: false),
                    LocalizationType = table.Column<byte>(nullable: false),
                    CranialNervesType = table.Column<byte>(nullable: false),
                    OlfactoryNerveDetailsType = table.Column<byte>(nullable: false),
                    FacialNervePalsyDetailsType = table.Column<byte>(nullable: false),
                    DysesthesiaType = table.Column<byte>(nullable: false),
                    TremorType = table.Column<byte>(nullable: false),
                    AtaxiaType = table.Column<byte>(nullable: false),
                    SpeechDisorderType = table.Column<byte>(nullable: false),
                    IsHearingLoss = table.Column<bool>(nullable: false),
                    IsHyperacusis = table.Column<bool>(nullable: false),
                    IsHypoacusis = table.Column<bool>(nullable: false),
                    IsConductiveHearingLoss = table.Column<bool>(nullable: false),
                    IsHypoakusisSensorineuralHearingLoss = table.Column<bool>(nullable: false),
                    IsTinnitus = table.Column<bool>(nullable: false),
                    IsPulsatile = table.Column<bool>(nullable: false),
                    IsSensorineuralHearingLoss = table.Column<bool>(nullable: false),
                    IsAnisocoria = table.Column<bool>(nullable: false),
                    IsMydriasis = table.Column<bool>(nullable: false),
                    IsMyosis = table.Column<bool>(nullable: false),
                    IsPtosis = table.Column<bool>(nullable: false),
                    IsEnophthalmos = table.Column<bool>(nullable: false),
                    IsExophthalmos = table.Column<bool>(nullable: false),
                    NystagmusType = table.Column<byte>(nullable: false),
                    CentralEndocrineDisorderType = table.Column<byte>(nullable: false),
                    IsPersonalityChanges = table.Column<bool>(nullable: false),
                    AnamnesisPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClinicalSymptomFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ClinicalSymptomFindings_AnamnesisPages_AnamnesisPageId",
                        column: x => x.AnamnesisPageId,
                        principalTable: "AnamnesisPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PreviousInterventionsTherapiesFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    Month = table.Column<byte>(nullable: false),
                    Year = table.Column<int>(nullable: false),
                    AnamnesisPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PreviousInterventionsTherapiesFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PreviousInterventionsTherapiesFindings_AnamnesisPages_Anamn~",
                        column: x => x.AnamnesisPageId,
                        principalTable: "AnamnesisPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BasalNucleiFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisLocalizationType = table.Column<byte>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    BasalGangliaLocations = table.Column<decimal>(nullable: false),
                    DistributionType = table.Column<byte>(nullable: false),
                    Size = table.Column<int>(nullable: true),
                    Size2ndPlane = table.Column<int>(nullable: true),
                    Size3rdPlane = table.Column<int>(nullable: true),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    DensityType = table.Column<byte>(nullable: false),
                    Quantitative = table.Column<int>(nullable: true),
                    IsSubstanceDefect = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsConfluent = table.Column<bool>(nullable: false),
                    IsMassEffect = table.Column<bool>(nullable: false),
                    IsInfiltration = table.Column<bool>(nullable: false),
                    IsAtrophy = table.Column<bool>(nullable: false),
                    IsPerifocalEdema = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    MaximumDiameter = table.Column<int>(nullable: true),
                    IsMidlineShift = table.Column<bool>(nullable: false),
                    MidlineShiftSideType = table.Column<byte>(nullable: false),
                    ExtentOfMidlineShift = table.Column<int>(nullable: true),
                    IsInvolvementOfVentricles = table.Column<bool>(nullable: false),
                    IsLateralVentricleRight = table.Column<bool>(nullable: false),
                    IsLateralVentricleLeft = table.Column<bool>(nullable: false),
                    IsThirdVentricle = table.Column<bool>(nullable: false),
                    IsFourthVentricle = table.Column<bool>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastDistributionType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType1 = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisType2 = table.Column<byte>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisType3 = table.Column<byte>(nullable: false),
                    Is1LesionOfTheSamePathology = table.Column<bool>(nullable: false),
                    BasalNucleiPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BasalNucleiFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BasalNucleiFindings_BasalNucleiPages_BasalNucleiPageId",
                        column: x => x.BasalNucleiPageId,
                        principalTable: "BasalNucleiPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BrainstemCranialNervesFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    Size = table.Column<int>(nullable: true),
                    SecondPlane = table.Column<int>(nullable: true),
                    ThirdPlane = table.Column<int>(nullable: true),
                    MarginType = table.Column<byte>(nullable: false),
                    DensityType = table.Column<byte>(nullable: false),
                    Quantitative = table.Column<int>(nullable: true),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    IsSubstanceDefect = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsConfluent = table.Column<bool>(nullable: false),
                    IsMassEffect = table.Column<bool>(nullable: false),
                    IsInfiltration = table.Column<bool>(nullable: false),
                    IsPerineuralTumorSpread = table.Column<bool>(nullable: false),
                    IsHydrocephalus = table.Column<bool>(nullable: false),
                    IsPerifocalEdema = table.Column<bool>(nullable: false),
                    IsMidbrainAtrophy = table.Column<bool>(nullable: false),
                    IsBrainstemAtrophy = table.Column<bool>(nullable: false),
                    IsNerveThickening = table.Column<bool>(nullable: false),
                    IsNerveCompression = table.Column<bool>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    ContrastDistributionType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis3 = table.Column<byte>(nullable: false),
                    IsMoreThan1Lesion = table.Column<bool>(nullable: false),
                    IsMesencephalon = table.Column<bool>(nullable: false),
                    IsCrusCerebri = table.Column<bool>(nullable: false),
                    IsCrusCerebriRight = table.Column<bool>(nullable: false),
                    IsCrusCerebriLeft = table.Column<bool>(nullable: false),
                    IsTegmentumMesencephali = table.Column<bool>(nullable: false),
                    IsSubstantiaNigra = table.Column<bool>(nullable: false),
                    IsNucleusRuber = table.Column<bool>(nullable: false),
                    IsLaminaTecti = table.Column<bool>(nullable: false),
                    IsPons = table.Column<bool>(nullable: false),
                    IsPonsRight = table.Column<bool>(nullable: false),
                    IsPonsLeft = table.Column<bool>(nullable: false),
                    IsPonsCentral = table.Column<bool>(nullable: false),
                    IsPonsPeripheral = table.Column<bool>(nullable: false),
                    IsMedullaOblongata = table.Column<bool>(nullable: false),
                    IsMedullaOblongataAnterior = table.Column<bool>(nullable: false),
                    IsMedullaOblongataCentral = table.Column<bool>(nullable: false),
                    IsMedullaOblongataPosterior = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    MaxDiameter = table.Column<int>(nullable: true),
                    IsVentricularherniation = table.Column<bool>(nullable: false),
                    IsLateralVentricleRight = table.Column<bool>(nullable: false),
                    IsLateralVentricleLeft = table.Column<bool>(nullable: false),
                    Is3rdVentricle = table.Column<bool>(nullable: false),
                    Is4thVentricle = table.Column<bool>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    CranialNerveType = table.Column<byte>(nullable: false),
                    IsRootEntryZone = table.Column<bool>(nullable: false),
                    IsGeniculumOfTheFacialNerve = table.Column<bool>(nullable: false),
                    IsMeatusAcusticusInternus = table.Column<bool>(nullable: false),
                    IsFacialisCanal = table.Column<bool>(nullable: false),
                    IsForamenStylomastoid = table.Column<bool>(nullable: false),
                    IsVestibularNerve = table.Column<bool>(nullable: false),
                    IsCochlearNerve = table.Column<bool>(nullable: false),
                    IsSuperciliaryGanglion = table.Column<bool>(nullable: false),
                    IsFossulaPetrosa = table.Column<bool>(nullable: false),
                    IsGanglionInferius = table.Column<bool>(nullable: false),
                    IsSulcusLateralisPosterior = table.Column<bool>(nullable: false),
                    IsTrigonumNerviVagi = table.Column<bool>(nullable: false),
                    IsCanalisHypoglossi = table.Column<bool>(nullable: false),
                    BrainstemCranialNervesPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BrainstemCranialNervesFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BrainstemCranialNervesFindings_BrainstemCranialNervesPages_~",
                        column: x => x.BrainstemCranialNervesPageId,
                        principalTable: "BrainstemCranialNervesPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CerebrospinalFluidSpaceFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    DescriptionType = table.Column<byte>(nullable: false),
                    IsLateralVentricle = table.Column<bool>(nullable: false),
                    IsLateralVentricleRight = table.Column<bool>(nullable: false),
                    IsAnteriorHornRight = table.Column<bool>(nullable: false),
                    IsCellaMediaRight = table.Column<bool>(nullable: false),
                    IsTrigonumRight = table.Column<bool>(nullable: false),
                    IsPosteriorHornRight = table.Column<bool>(nullable: false),
                    IsTemporalHornRight = table.Column<bool>(nullable: false),
                    IsLateralVentricleLeft = table.Column<bool>(nullable: false),
                    IsAnteriorHornLeft = table.Column<bool>(nullable: false),
                    IsCellaMediaLeft = table.Column<bool>(nullable: false),
                    IsTrigonumLeft = table.Column<bool>(nullable: false),
                    IsPosteriorHornLeft = table.Column<bool>(nullable: false),
                    IsTemporalHornLeft = table.Column<bool>(nullable: false),
                    IsForamenMonroi = table.Column<bool>(nullable: false),
                    IsForamenMonroiRight = table.Column<bool>(nullable: false),
                    IsForamenMonroiLeft = table.Column<bool>(nullable: false),
                    IsIIIVentricle = table.Column<bool>(nullable: false),
                    IsAquaeductusMesencephaliSylvii = table.Column<bool>(nullable: false),
                    IsIVVentricle = table.Column<bool>(nullable: false),
                    IsForamenLuschkae = table.Column<bool>(nullable: false),
                    IsForamenLuschkaeRight = table.Column<bool>(nullable: false),
                    IsForamenLuschkaeLeft = table.Column<bool>(nullable: false),
                    IsForamenMagendie = table.Column<bool>(nullable: false),
                    IsSubarachnoidCisterns = table.Column<bool>(nullable: false),
                    IsSuprasellarCistern = table.Column<bool>(nullable: false),
                    IsInterpeduncularCistern = table.Column<bool>(nullable: false),
                    IsQuadrigeminalCistern = table.Column<bool>(nullable: false),
                    IsPontineCistern = table.Column<bool>(nullable: false),
                    IsPrepontineCistern = table.Column<bool>(nullable: false),
                    IsPontomedullaryCistern = table.Column<bool>(nullable: false),
                    IsPontocerebellarCistern = table.Column<bool>(nullable: false),
                    IsMeckelCave = table.Column<bool>(nullable: false),
                    IsCisternaMagna = table.Column<bool>(nullable: false),
                    IsInsularCistern = table.Column<bool>(nullable: false),
                    Size = table.Column<int>(nullable: true),
                    SecondPlane = table.Column<int>(nullable: true),
                    ThirdPlane = table.Column<int>(nullable: true),
                    IsRightSide = table.Column<bool>(nullable: false),
                    IsLeftSide = table.Column<bool>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    DensityType = table.Column<byte>(nullable: false),
                    Quantitative = table.Column<int>(nullable: true),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    NormVariantVentricleType = table.Column<byte>(nullable: false),
                    ConfigurationType = table.Column<byte>(nullable: false),
                    ShrinkingType = table.Column<byte>(nullable: false),
                    AsymmetryType = table.Column<byte>(nullable: false),
                    IsStenosis = table.Column<bool>(nullable: false),
                    IsScarredResiduals = table.Column<bool>(nullable: false),
                    IsParenchymalDefect = table.Column<bool>(nullable: false),
                    IsTemporalHornExpansion = table.Column<bool>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    IsFlatteningOfTheGyri = table.Column<bool>(nullable: false),
                    IsTransependymalPressureCaps = table.Column<bool>(nullable: false),
                    IsPlumpingPosteriorHorns = table.Column<bool>(nullable: false),
                    IsEnlargementOfIIIVentricle = table.Column<bool>(nullable: false),
                    IsHyperdynamicFluidFlowVoid = table.Column<bool>(nullable: false),
                    IsInTheIIIVentricle = table.Column<bool>(nullable: false),
                    IsInTheAqueduct = table.Column<bool>(nullable: false),
                    IsAtrophyOfBrainParenchyma = table.Column<bool>(nullable: false),
                    IsCerebrospinalFluidNegativePressure = table.Column<bool>(nullable: false),
                    IsSlitVentricle = table.Column<bool>(nullable: false),
                    IsThickeningDuraMater = table.Column<bool>(nullable: false),
                    IsBilateralHygromas = table.Column<bool>(nullable: false),
                    IsPachymeningealEnhancement = table.Column<bool>(nullable: false),
                    IsTonsilDepression = table.Column<bool>(nullable: false),
                    EvansIndex = table.Column<decimal>(nullable: true),
                    CorpusCallosumAngle = table.Column<int>(nullable: true),
                    IsExtended = table.Column<bool>(nullable: false),
                    MaxDiameter = table.Column<int>(nullable: true),
                    MamillopontineDistance = table.Column<int>(nullable: true),
                    PontomesencephalicAngle = table.Column<int>(nullable: true),
                    VentricleDifferentialDiagnosis1Type = table.Column<byte>(nullable: false),
                    VentricleDifferentialDiagnosis2Type = table.Column<byte>(nullable: false),
                    MassDifferentialDiagnosisIKnow1Type = table.Column<byte>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    IsSubstanceDefect = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsDisplacement = table.Column<bool>(nullable: false),
                    IsInfiltration = table.Column<bool>(nullable: false),
                    IsSubependymalNodules = table.Column<bool>(nullable: false),
                    IsCalcified = table.Column<bool>(nullable: false),
                    IsHypertrophyChoroidPlexus = table.Column<bool>(nullable: false),
                    IsPerifocalEdema = table.Column<bool>(nullable: false),
                    IsHydrocephalus = table.Column<bool>(nullable: false),
                    MassDifferentialDiagnosisIDescribe1Type = table.Column<byte>(nullable: false),
                    MassDifferentialDiagnosis2Type = table.Column<byte>(nullable: false),
                    MassDifferentialDiagnosis3Type = table.Column<byte>(nullable: false),
                    Is1LesionOfTheSameEntity = table.Column<bool>(nullable: false),
                    IsMedian = table.Column<bool>(nullable: false),
                    IsFrontal = table.Column<bool>(nullable: false),
                    IsFrontobasal = table.Column<bool>(nullable: false),
                    IsTemporal = table.Column<bool>(nullable: false),
                    IsParietal = table.Column<bool>(nullable: false),
                    IsOccipital = table.Column<bool>(nullable: false),
                    IsInfratentorial = table.Column<bool>(nullable: false),
                    PatternType = table.Column<byte>(nullable: false),
                    IsAdjacentToTheTentorium = table.Column<bool>(nullable: false),
                    IsPerimesencephalic = table.Column<bool>(nullable: false),
                    IsVasospasm = table.Column<bool>(nullable: false),
                    IsIschemia = table.Column<bool>(nullable: false),
                    IsSubduralHematoma = table.Column<bool>(nullable: false),
                    IsEpiduralHematoma = table.Column<bool>(nullable: false),
                    FisherScaleType = table.Column<byte>(nullable: false),
                    CerebrospinalFluidSpacePageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CerebrospinalFluidSpaceFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CerebrospinalFluidSpaceFindings_CerebrospinalFluidSpacePage~",
                        column: x => x.CerebrospinalFluidSpacePageId,
                        principalTable: "CerebrospinalFluidSpacePages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CerebrospinalFluidSpaceFindings_ImageFile_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "CortexFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    CortexLocations = table.Column<decimal>(nullable: false),
                    IsPraecuneus = table.Column<bool>(nullable: false),
                    IsCuneus = table.Column<bool>(nullable: false),
                    IsLingualGyrus = table.Column<bool>(nullable: false),
                    IsGyrusTemporalisTransversus = table.Column<bool>(nullable: false),
                    IsLateralOccipitotemporalGyrus = table.Column<bool>(nullable: false),
                    IsParsIntermedia = table.Column<bool>(nullable: false),
                    IsSuperiorCerebellarPeduncle = table.Column<bool>(nullable: false),
                    IsMiddleCerebellarPeduncle = table.Column<bool>(nullable: false),
                    IsInferiorCerebellarPeduncle = table.Column<bool>(nullable: false),
                    IsCortex = table.Column<bool>(nullable: false),
                    IsWhiteMatter = table.Column<bool>(nullable: false),
                    LocalizationType = table.Column<byte>(nullable: false),
                    DetailsType = table.Column<byte>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsConfluent = table.Column<bool>(nullable: false),
                    IsMassEffect = table.Column<bool>(nullable: false),
                    IsInfiltration = table.Column<bool>(nullable: false),
                    IsNarrowedSulci = table.Column<bool>(nullable: false),
                    IsBlurringOfWhiteGreyJunction = table.Column<bool>(nullable: false),
                    IsPerifocalEdema = table.Column<bool>(nullable: false),
                    IsDescentOfTheCerebellarTonsils = table.Column<bool>(nullable: false),
                    IsHydrocephalus = table.Column<bool>(nullable: false),
                    IsMidlineShift = table.Column<bool>(nullable: false),
                    MidlineShiftSideType = table.Column<byte>(nullable: false),
                    MidlineShift = table.Column<int>(nullable: true),
                    IsHerniation = table.Column<bool>(nullable: false),
                    RegionType = table.Column<byte>(nullable: false),
                    IsCorticalThinning = table.Column<bool>(nullable: false),
                    CorticalThinningType = table.Column<byte>(nullable: false),
                    IsCorticalTuber = table.Column<bool>(nullable: false),
                    IsSubependymalNodules = table.Column<bool>(nullable: false),
                    IsCalcified = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    MaxDiameter = table.Column<int>(nullable: true),
                    IsVentricularHerniation = table.Column<bool>(nullable: false),
                    IsLateralVentricleRight = table.Column<bool>(nullable: false),
                    IsLateralVentricleLeft = table.Column<bool>(nullable: false),
                    Is3RdVentricle = table.Column<bool>(nullable: false),
                    Is4thVentricle = table.Column<bool>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    IsLesionOfTheSameEntity = table.Column<bool>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    IsFrontal = table.Column<bool>(nullable: false),
                    IsTemporal = table.Column<bool>(nullable: false),
                    IsParietal = table.Column<bool>(nullable: false),
                    IsOccipital = table.Column<bool>(nullable: false),
                    IsInfratentorial = table.Column<bool>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    CortexDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    CortexDifferentialDiagnosisType1 = table.Column<byte>(nullable: false),
                    CortexDifferentialDiagnosisType2 = table.Column<byte>(nullable: false),
                    CortexDifferentialDiagnosisType3 = table.Column<byte>(nullable: false),
                    LocalizationWHOClassification = table.Column<byte>(nullable: false),
                    Size = table.Column<int>(nullable: true),
                    Size2ndPlane = table.Column<int>(nullable: true),
                    Size3rdPlane = table.Column<int>(nullable: true),
                    MaxSizeInPreviousExamination = table.Column<int>(nullable: true),
                    SecondPlane = table.Column<int>(nullable: true),
                    ThirdPlane = table.Column<int>(nullable: true),
                    ConfigurationMarginType = table.Column<byte>(nullable: false),
                    DensityType = table.Column<byte>(nullable: false),
                    Quantitative = table.Column<int>(nullable: true),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    IsCysticParts = table.Column<bool>(nullable: false),
                    IsSolidParts = table.Column<bool>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsContactToTheVentricularSystem = table.Column<bool>(nullable: false),
                    IsAqueduct = table.Column<bool>(nullable: false),
                    IsCaputMedusa = table.Column<bool>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    ClassificationWHO1 = table.Column<byte>(nullable: false),
                    ClassificationWHO2 = table.Column<byte>(nullable: false),
                    ClassificationWHO3 = table.Column<byte>(nullable: false),
                    LocalizationModifiedClassificationAdams = table.Column<byte>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsMicroBleeding = table.Column<bool>(nullable: false),
                    IsHemorrhagicLacunae = table.Column<bool>(nullable: false),
                    IsAtrophy = table.Column<bool>(nullable: false),
                    ClassificationAdams1 = table.Column<byte>(nullable: false),
                    ClassificationAdams2 = table.Column<byte>(nullable: false),
                    ClassificationAdams3 = table.Column<byte>(nullable: false),
                    IsMesiotemporalSclerosis = table.Column<bool>(nullable: false),
                    CortexPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CortexFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CortexFindings_CortexPages_CortexPageId",
                        column: x => x.CortexPageId,
                        principalTable: "CortexPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ExaminationIndicationFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DetailsType = table.Column<byte>(nullable: false),
                    IndicationSubType = table.Column<byte>(nullable: false),
                    IsKnownCoagulopathy = table.Column<bool>(nullable: false),
                    IsKnownAnticoagulation = table.Column<bool>(nullable: false),
                    HuntHessScaleType = table.Column<byte>(nullable: false),
                    IsPathologilacFindingInPreviousExamination = table.Column<bool>(nullable: false),
                    IsProgressiveClinicalFindings = table.Column<bool>(nullable: false),
                    IsMinorTrauma = table.Column<bool>(nullable: false),
                    IsMajorTrauma = table.Column<bool>(nullable: false),
                    IsPenetratingInjury = table.Column<bool>(nullable: false),
                    IsPolytrauma = table.Column<bool>(nullable: false),
                    GlasgowComaScale = table.Column<int>(nullable: true),
                    IsIschemia = table.Column<bool>(nullable: false),
                    NihssScore = table.Column<int>(nullable: true),
                    AspectScore = table.Column<int>(nullable: true),
                    HoursAfterClinicalOnset = table.Column<int>(nullable: true),
                    IsWakeUpStroke = table.Column<bool>(nullable: false),
                    Month = table.Column<byte>(nullable: true),
                    Year = table.Column<int>(nullable: true),
                    IsRefractoryEpilepsy = table.Column<bool>(nullable: false),
                    IsVerificationOfShuntPositioning = table.Column<bool>(nullable: false),
                    HeadacheCourseType = table.Column<byte>(nullable: false),
                    IsSubacuteTrauma = table.Column<bool>(nullable: false),
                    IsExertion = table.Column<bool>(nullable: false),
                    IsNeurologicalDeficit = table.Column<bool>(nullable: false),
                    IsNeoplasia = table.Column<bool>(nullable: false),
                    IsImmuneSupression = table.Column<bool>(nullable: false),
                    IsPregnancy = table.Column<bool>(nullable: false),
                    IsPapilledema = table.Column<bool>(nullable: false),
                    IsThunderclapHeadache = table.Column<bool>(nullable: false),
                    ExaminationPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExaminationIndicationFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ExaminationIndicationFindings_ExaminationPages_ExaminationP~",
                        column: x => x.ExaminationPageId,
                        principalTable: "ExaminationPages",
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
                name: "MeningesFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    IsMedian = table.Column<bool>(nullable: false),
                    IsFrontal = table.Column<bool>(nullable: false),
                    IsTemporal = table.Column<bool>(nullable: false),
                    IsParietal = table.Column<bool>(nullable: false),
                    IsOccipital = table.Column<bool>(nullable: false),
                    IsInfratentorial = table.Column<bool>(nullable: false),
                    IsFalx = table.Column<bool>(nullable: false),
                    IsTentorium = table.Column<bool>(nullable: false),
                    IsLaminaCribrosa = table.Column<bool>(nullable: false),
                    IsOpticNerveSheath = table.Column<bool>(nullable: false),
                    IsIntrasellar = table.Column<bool>(nullable: false),
                    IsSkullBase = table.Column<bool>(nullable: false),
                    IsPosteriorClinoidProcess = table.Column<bool>(nullable: false),
                    IsSphenoidWing = table.Column<bool>(nullable: false),
                    IsCerebellopontineAngle = table.Column<bool>(nullable: false),
                    IsSigmoidSulcus = table.Column<bool>(nullable: false),
                    IsTrigoneOfTheLateralVentricle = table.Column<bool>(nullable: false),
                    IsInsularCistern = table.Column<bool>(nullable: false),
                    IsForamenMagnum = table.Column<bool>(nullable: false),
                    IsJugularForamen = table.Column<bool>(nullable: false),
                    SizeInMm = table.Column<int>(nullable: true),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    DensityType = table.Column<byte>(nullable: false),
                    QuantitativeInHu = table.Column<int>(nullable: true),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCysticParts = table.Column<bool>(nullable: false),
                    CysticPartsType = table.Column<byte>(nullable: false),
                    IsSolidParts = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    CurrentExaminationInHu = table.Column<int>(nullable: true),
                    PreviousExaminationInHu = table.Column<int>(nullable: true),
                    DescriptionType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    IsEnPlaqueConfiguration = table.Column<bool>(nullable: false),
                    GrowthPatternType = table.Column<byte>(nullable: false),
                    IsGyriformGrowth = table.Column<bool>(nullable: false),
                    IsIntrameatalGrowth = table.Column<bool>(nullable: false),
                    IsIntraforaminalFissuralGrowth = table.Column<bool>(nullable: false),
                    IsPerifocalCerebralEdema = table.Column<bool>(nullable: false),
                    IsDuraTailSign = table.Column<bool>(nullable: false),
                    IsLocalVenousStasis = table.Column<bool>(nullable: false),
                    IsOsteolysis = table.Column<bool>(nullable: false),
                    IsHyperostosisOfTheAdjacentBone = table.Column<bool>(nullable: false),
                    ContrastDistributionType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis3 = table.Column<byte>(nullable: false),
                    IsMoreThenOneLesionOfTheSameEntity = table.Column<bool>(nullable: false),
                    IsThickening = table.Column<bool>(nullable: false),
                    MeningesWidthInMm = table.Column<int>(nullable: true),
                    IsPachymeninges = table.Column<bool>(nullable: false),
                    IsLeptomeninges = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    MaxExtensionInMm = table.Column<int>(nullable: true),
                    IsAbscessCapsule = table.Column<bool>(nullable: false),
                    IsEmpyema = table.Column<bool>(nullable: false),
                    IsHydrocephalus = table.Column<bool>(nullable: false),
                    IsCrescentShaped = table.Column<bool>(nullable: false),
                    IsCrossingSutures = table.Column<bool>(nullable: false),
                    IsDuralAttachmentNotExceeded = table.Column<bool>(nullable: false),
                    MaxWidthInMm = table.Column<int>(nullable: true),
                    IsAlongFalx = table.Column<bool>(nullable: false),
                    IsAlongTentorium = table.Column<bool>(nullable: false),
                    IsSeptations = table.Column<bool>(nullable: false),
                    IsContrastEnhancementMembrane = table.Column<bool>(nullable: false),
                    IsFluid = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsCorticalVeinDisplacement = table.Column<bool>(nullable: false),
                    IsDuralThickening = table.Column<bool>(nullable: false),
                    IsContrastEnhancement = table.Column<bool>(nullable: false),
                    IsMidlineShift = table.Column<bool>(nullable: false),
                    MidlineShiftSideType = table.Column<byte>(nullable: false),
                    MidlineShiftInMm = table.Column<int>(nullable: true),
                    IsHerniation = table.Column<bool>(nullable: false),
                    RegionType = table.Column<byte>(nullable: false),
                    CharacterizationHematomaType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    IsDuralAttachmentCrossed = table.Column<bool>(nullable: false),
                    IsSuturesNotCrossed = table.Column<bool>(nullable: false),
                    IsDuralDisplacementBetweenEDHAndBrain = table.Column<bool>(nullable: false),
                    IsBiconvex = table.Column<bool>(nullable: false),
                    IsAssociatedSkullFracture = table.Column<bool>(nullable: false),
                    IsSwirlSign = table.Column<bool>(nullable: false),
                    IsContrecoupSDH = table.Column<bool>(nullable: false),
                    IsAdjacentContusion = table.Column<bool>(nullable: false),
                    IsConcomitantHydrocephalus = table.Column<bool>(nullable: false),
                    IsAssociatedInfarction = table.Column<bool>(nullable: false),
                    MeningesPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MeningesFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MeningesFindings_ImageFile_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_MeningesFindings_MeningesPages_MeningesPageId",
                        column: x => x.MeningesPageId,
                        principalTable: "MeningesPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SellarRegionFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    DensityType = table.Column<byte>(nullable: false),
                    CarotidArterySideType = table.Column<byte>(nullable: false),
                    PituitaryStalkSideType = table.Column<byte>(nullable: false),
                    ContrastQuantitativeType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastDistributionType = table.Column<byte>(nullable: false),
                    SellarRegionDiagnosisLocalizationType = table.Column<byte>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    RelationToThePituitaryGlandType = table.Column<byte>(nullable: false),
                    IsNeurohypophysis = table.Column<bool>(nullable: false),
                    IsAdenohypophysis = table.Column<bool>(nullable: false),
                    IsPituitaryStalk = table.Column<bool>(nullable: false),
                    IsCavernousSinus = table.Column<bool>(nullable: false),
                    IsOpticNerveI = table.Column<bool>(nullable: false),
                    IsOpticChiasm = table.Column<bool>(nullable: false),
                    IsOlfactoryNerveII = table.Column<bool>(nullable: false),
                    IsOculomotorNerveIII = table.Column<bool>(nullable: false),
                    IsTrochlearNerveIV = table.Column<bool>(nullable: false),
                    IsAbducensNerveVI = table.Column<bool>(nullable: false),
                    IsInternalCarotidArtery = table.Column<bool>(nullable: false),
                    IsDuraMaterMeningen = table.Column<bool>(nullable: false),
                    IsSphenoidSinus = table.Column<bool>(nullable: false),
                    IsNasopharynx = table.Column<bool>(nullable: false),
                    ExtensionSize = table.Column<int>(nullable: true),
                    ExtensionSize2ndPlane = table.Column<int>(nullable: true),
                    ExtensionSize3rdPlane = table.Column<int>(nullable: true),
                    Quantitative = table.Column<int>(nullable: true),
                    IsSubstanceDefect = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsToothBoneFormation = table.Column<bool>(nullable: false),
                    IsDisplacement = table.Column<bool>(nullable: false),
                    IsInfiltration = table.Column<bool>(nullable: false),
                    IsHydrocephalus = table.Column<bool>(nullable: false),
                    IsPerifocalEdema = table.Column<bool>(nullable: false),
                    IsBonyRemodeling = table.Column<bool>(nullable: false),
                    IsDuraTailSign = table.Column<bool>(nullable: false),
                    IsContactWithCarotidArtery = table.Column<bool>(nullable: false),
                    IsDisplacementOfPituitaryStalk = table.Column<bool>(nullable: false),
                    IsInfiltrationIntoCavernousSinus = table.Column<bool>(nullable: false),
                    IsSuspicionOfInfiltration = table.Column<bool>(nullable: false),
                    IsExtensionToSuprasellar = table.Column<bool>(nullable: false),
                    IsContactToOpticChiasm = table.Column<bool>(nullable: false),
                    IsDetectionOfLesion = table.Column<bool>(nullable: false),
                    SellarRegionDiagnosis1Type = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    SellarRegionDiagnosis2Type = table.Column<byte>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    SellarRegionDiagnosis3Type = table.Column<byte>(nullable: false),
                    Is1LesionOfTheSameEntity = table.Column<bool>(nullable: false),
                    SellarRegionPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SellarRegionFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SellarRegionFindings_SellarRegionPages_SellarRegionPageId",
                        column: x => x.SellarRegionPageId,
                        principalTable: "SellarRegionPages",
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
                    IsCTMyelography = table.Column<bool>(nullable: false),
                    IsPerfusionCT = table.Column<bool>(nullable: false),
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
                name: "VesselsFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    Perfusion01SerialNumber = table.Column<string>(nullable: true),
                    Perfusion01PictureNumber = table.Column<string>(nullable: true),
                    Perfusion01ImageFileId = table.Column<Guid>(nullable: true),
                    Perfusion02SerialNumber = table.Column<string>(nullable: true),
                    Perfusion02PictureNumber = table.Column<string>(nullable: true),
                    Perfusion02ImageFileId = table.Column<Guid>(nullable: true),
                    CortexLocation = table.Column<decimal>(nullable: false),
                    IsPraecuneus = table.Column<bool>(nullable: false),
                    IsCuneus = table.Column<bool>(nullable: false),
                    IsLingualGyrus = table.Column<bool>(nullable: false),
                    IsGyrusTemporalisTransversus = table.Column<bool>(nullable: false),
                    IsLateralOccipitotemporalGyrus = table.Column<bool>(nullable: false),
                    IsParsIntermedia = table.Column<bool>(nullable: false),
                    IsSuperiorCerebellarPeduncle = table.Column<bool>(nullable: false),
                    IsMiddleCerebellarPeduncle = table.Column<bool>(nullable: false),
                    IsInferiorCerebellarPeduncle = table.Column<bool>(nullable: false),
                    IsCortex = table.Column<bool>(nullable: false),
                    IsWhiteMatter = table.Column<bool>(nullable: false),
                    WhiteMatterType = table.Column<byte>(nullable: false),
                    DetailsType = table.Column<byte>(nullable: false),
                    BasalGangliaLocation = table.Column<decimal>(nullable: false),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    PathologyType = table.Column<byte>(nullable: false),
                    SeverityType = table.Column<byte>(nullable: false),
                    IsHemodynamicallyRelevant = table.Column<bool>(nullable: false),
                    DiameterStenosisInMm = table.Column<int>(nullable: true),
                    DiameterDiseaseFreePoststenoticSegmentInMm = table.Column<int>(nullable: true),
                    DegreeOfStenosisCalculatedInNASCETInPercentage = table.Column<int>(nullable: true),
                    FormType = table.Column<byte>(nullable: false),
                    LengthInMm = table.Column<int>(nullable: true),
                    IsShortStenosis = table.Column<bool>(nullable: false),
                    IsWallHematoma = table.Column<bool>(nullable: false),
                    IsContrastEnhancementOfTheArterialWall = table.Column<bool>(nullable: false),
                    IsLocoregionalObliterationOfFattyTissue = table.Column<bool>(nullable: false),
                    IsCaliberIrregularities = table.Column<bool>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    ExtensionAneurysmInMm = table.Column<int>(nullable: true),
                    WidthAneurysmNeckInMm = table.Column<int>(nullable: true),
                    OrientationAneurysmType = table.Column<byte>(nullable: false),
                    IsSubarachnoidHemorrhage = table.Column<bool>(nullable: false),
                    SubarachnoidHemorrhageType = table.Column<byte>(nullable: false),
                    SubarachnoidHemorrhageLocalizationType = table.Column<byte>(nullable: false),
                    IsThrombolization = table.Column<bool>(nullable: false),
                    IsEccentric = table.Column<bool>(nullable: false),
                    IsDownstreamInfarctionAreas = table.Column<bool>(nullable: false),
                    IsInflammatoryChange = table.Column<bool>(nullable: false),
                    VesselsDiagnosisType = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsSoftPlaque = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    IsPanarteritisNodosa = table.Column<bool>(nullable: false),
                    IsBranchesOfTheExternalCarotidArtery = table.Column<bool>(nullable: false),
                    IsCirculusArteriosusWillisii = table.Column<bool>(nullable: false),
                    IsRightP1HypoplasiaOrFTPConfiguration = table.Column<bool>(nullable: false),
                    IsRightP1Aplasia = table.Column<bool>(nullable: false),
                    IsRightP1SplittingOrDuplication = table.Column<bool>(nullable: false),
                    IsRightA1Hypoplasia = table.Column<bool>(nullable: false),
                    IsRightA1Aplasia = table.Column<bool>(nullable: false),
                    IsRightA1SplittingOrDuplication = table.Column<bool>(nullable: false),
                    IsRightAcomPHypoplasia = table.Column<bool>(nullable: false),
                    IsRightAcomPAplasia = table.Column<bool>(nullable: false),
                    IsRightPICAEndingAV = table.Column<bool>(nullable: false),
                    IsRightAVHypoplasia = table.Column<bool>(nullable: false),
                    IsRightAVAplasia = table.Column<bool>(nullable: false),
                    IsRightTripleACA = table.Column<bool>(nullable: false),
                    IsRightAcomAHypoplasia = table.Column<bool>(nullable: false),
                    IsRightAcomAAplasia = table.Column<bool>(nullable: false),
                    IsRightAcomASplittingOrDuplication = table.Column<bool>(nullable: false),
                    IsLeftP1HypoplasiaOrFTPConfiguration = table.Column<bool>(nullable: false),
                    IsLeftP1Aplasia = table.Column<bool>(nullable: false),
                    IsLeftP1SplittingOrDuplication = table.Column<bool>(nullable: false),
                    IsLeftA1Hypoplasia = table.Column<bool>(nullable: false),
                    IsLeftA1Aplasia = table.Column<bool>(nullable: false),
                    IsLeftA1SplittingOrDuplication = table.Column<bool>(nullable: false),
                    IsLeftAcomPHypoplasia = table.Column<bool>(nullable: false),
                    IsLeftAcomPAplasia = table.Column<bool>(nullable: false),
                    IsLeftPICAEndingAV = table.Column<bool>(nullable: false),
                    IsLeftAVHypoplasia = table.Column<bool>(nullable: false),
                    IsLeftAVAplasia = table.Column<bool>(nullable: false),
                    IsLeftTripleACA = table.Column<bool>(nullable: false),
                    IsLeftAcomAHypoplasia = table.Column<bool>(nullable: false),
                    IsLeftAcomAAplasia = table.Column<bool>(nullable: false),
                    IsLeftAcomASplittingOrDuplication = table.Column<bool>(nullable: false),
                    ArterialTerritoryType = table.Column<byte>(nullable: false),
                    ArterialSupplyAreaPatternType = table.Column<byte>(nullable: false),
                    VascularTerritoryLocation = table.Column<int>(nullable: false),
                    VascularTerritoryType = table.Column<byte>(nullable: false),
                    IsCorticalVeins = table.Column<bool>(nullable: false),
                    IsCorticalVeinsRight = table.Column<bool>(nullable: false),
                    IsCorticalVeinsLeft = table.Column<bool>(nullable: false),
                    IsInternalCerebralVeins = table.Column<bool>(nullable: false),
                    IsInternalCerebralVeinsRight = table.Column<bool>(nullable: false),
                    IsInternalCerebralVeinsLeft = table.Column<bool>(nullable: false),
                    IsRightVeinOfLabbe = table.Column<bool>(nullable: false),
                    IsLeftVeinOfLabbe = table.Column<bool>(nullable: false),
                    IsRightSphenoparietalSinus = table.Column<bool>(nullable: false),
                    IsLeftSphenoparietalSinus = table.Column<bool>(nullable: false),
                    MaxDiameterInMm = table.Column<int>(nullable: true),
                    IsMultipleLesions = table.Column<bool>(nullable: false),
                    IschemicAreaPatternType = table.Column<byte>(nullable: false),
                    IsPerifocalGliosis = table.Column<bool>(nullable: false),
                    IsEtatLacunaire = table.Column<bool>(nullable: false),
                    IsTerritorialPatternWedgeShapedConfiguration = table.Column<bool>(nullable: false),
                    IsWhiteMatterAffected = table.Column<bool>(nullable: false),
                    IsCortexAffected = table.Column<bool>(nullable: false),
                    IsStringOfPearlsAspect = table.Column<bool>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    InfarctStageType = table.Column<byte>(nullable: false),
                    IsInfarctionDemarked = table.Column<bool>(nullable: false),
                    IsNoIntracerebralHemorrhage = table.Column<bool>(nullable: false),
                    IsCSFIsodense = table.Column<bool>(nullable: false),
                    IsLimitedDelineationOfTheBasalGanglia = table.Column<bool>(nullable: false),
                    IsLimitedDelineationOfTheThalamus = table.Column<bool>(nullable: false),
                    IsHyperdenseMediaSign = table.Column<bool>(nullable: false),
                    IsHyperdenseVesselSign = table.Column<bool>(nullable: false),
                    IsLimitedMedullaCorticalDifferentiation = table.Column<bool>(nullable: false),
                    IsSwellingOfTheGyri = table.Column<bool>(nullable: false),
                    IsNarrowedSulci = table.Column<bool>(nullable: false),
                    IsPseudolaminarNecrosis = table.Column<bool>(nullable: false),
                    IsHemorrhagicTransformation = table.Column<bool>(nullable: false),
                    IsPetechial = table.Column<bool>(nullable: false),
                    IsParenchymatous = table.Column<bool>(nullable: false),
                    IsVentricularHerniation = table.Column<bool>(nullable: false),
                    IsAssociatedFindingsWedgeShapedConfiguration = table.Column<bool>(nullable: false),
                    CerebralEdemaType = table.Column<byte>(nullable: false),
                    IsNoEvidenceOfAPerfusionDisturbance = table.Column<bool>(nullable: false),
                    IsHypoperfusion = table.Column<bool>(nullable: false),
                    HypoPerfusionType = table.Column<byte>(nullable: false),
                    IsHyperperfusion = table.Column<bool>(nullable: false),
                    HyperPerfusionType = table.Column<byte>(nullable: false),
                    IsLimitedEvaluability = table.Column<bool>(nullable: false),
                    IsArtifactRelated = table.Column<bool>(nullable: false),
                    GradingVolumeInMm3 = table.Column<float>(nullable: true),
                    MTTInSec = table.Column<int>(nullable: true),
                    MTTGradingType = table.Column<byte>(nullable: false),
                    TTPInSec = table.Column<int>(nullable: true),
                    TTPGradingType = table.Column<byte>(nullable: false),
                    CBFInMl100gMin = table.Column<int>(nullable: true),
                    CBFGradingType = table.Column<byte>(nullable: false),
                    CBVInMl100g = table.Column<int>(nullable: true),
                    CBVGradingType = table.Column<byte>(nullable: false),
                    MismatchType = table.Column<byte>(nullable: false),
                    MismatchVolumeInMm3 = table.Column<float>(nullable: true),
                    IsRelevantPenumbra = table.Column<bool>(nullable: false),
                    IsNoRelevantPenumbra = table.Column<bool>(nullable: false),
                    MismatchRatio = table.Column<float>(nullable: true),
                    IsIschemicGenesis = table.Column<bool>(nullable: false),
                    IsTumorDisease = table.Column<bool>(nullable: false),
                    IsPostictalChanges = table.Column<bool>(nullable: false),
                    IsPRESS = table.Column<bool>(nullable: false),
                    IsReperfusionSyndrome = table.Column<bool>(nullable: false),
                    ASPECTScore = table.Column<int>(nullable: true),
                    AffectedSegmentsOrVesselsLocation = table.Column<int>(nullable: false),
                    LongitudinalExpansionThrombusInMm = table.Column<int>(nullable: true),
                    CollateralizationSeverityType = table.Column<byte>(nullable: false),
                    IsAntCommunicatingArtery = table.Column<bool>(nullable: false),
                    IsPostCommunicatingArtery = table.Column<bool>(nullable: false),
                    IsCollateralizationOfTheICAViaECABranches = table.Column<bool>(nullable: false),
                    IsRetrogradePerfusionOfTheOphthalmicArtery = table.Column<bool>(nullable: false),
                    IsPerfusionOfTheICAParsCervicalis = table.Column<bool>(nullable: false),
                    IsThroughContralateralExternalCarotidArtery = table.Column<bool>(nullable: false),
                    IsThroughIpsilateralVertebralArtery = table.Column<bool>(nullable: false),
                    IsLeptomeningealCollaterals = table.Column<bool>(nullable: false),
                    IsCervicalVesselElongation = table.Column<bool>(nullable: false),
                    IsUpstreamCervicalArteryWithHighGradeStenosis = table.Column<bool>(nullable: false),
                    IsUpstreamCervicalArteryWithOcclusion = table.Column<bool>(nullable: false),
                    IsThrombusInUpstreamCervicalArtery = table.Column<bool>(nullable: false),
                    IsDissectionOfUpstreamCervicalArtery = table.Column<bool>(nullable: false),
                    IsOstialStenosisAffectedVessel = table.Column<bool>(nullable: false),
                    InternalCarotidArterySegmentsLocations = table.Column<byte>(nullable: false),
                    ArteriesWithOutletType = table.Column<byte>(nullable: false),
                    IsV1 = table.Column<bool>(nullable: false),
                    IsV2 = table.Column<bool>(nullable: false),
                    IsV3 = table.Column<bool>(nullable: false),
                    IsV4 = table.Column<bool>(nullable: false),
                    IsContralateralVertebralArtery = table.Column<bool>(nullable: false),
                    CerebralVenousThrombosisLocation = table.Column<int>(nullable: false),
                    IsCongestiveHemorrhage = table.Column<bool>(nullable: false),
                    IsPetechialHemorrhages = table.Column<bool>(nullable: false),
                    IsEctasiaOfTheUpstreamVeins = table.Column<bool>(nullable: false),
                    IsSAH = table.Column<bool>(nullable: false),
                    IsCerebralEdema = table.Column<bool>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    WithoutAVShuntType = table.Column<byte>(nullable: false),
                    WithAVShuntType = table.Column<byte>(nullable: false),
                    IsReverseFlowSuspected = table.Column<bool>(nullable: false),
                    IsFrontal = table.Column<bool>(nullable: false),
                    IsTemporal = table.Column<bool>(nullable: false),
                    IsParietal = table.Column<bool>(nullable: false),
                    IsOccipital = table.Column<bool>(nullable: false),
                    IsInfratentorial = table.Column<bool>(nullable: false),
                    IsTransverseSinus = table.Column<bool>(nullable: false),
                    IsSigmoidSinus = table.Column<bool>(nullable: false),
                    IsSinusCavernosus = table.Column<bool>(nullable: false),
                    IsSuperiorSagittalSinus = table.Column<bool>(nullable: false),
                    IsSuperiorPetrosalSinus = table.Column<bool>(nullable: false),
                    IsInferiorPetrosalSinus = table.Column<bool>(nullable: false),
                    IsReverseFlow = table.Column<bool>(nullable: false),
                    IsReverseFlowSuspicionOf = table.Column<bool>(nullable: false),
                    IsThrombosis = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsEdema = table.Column<bool>(nullable: false),
                    IsIschemia = table.Column<bool>(nullable: false),
                    VesselsPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VesselsFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VesselsFindings_ImageFile_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_VesselsFindings_ImageFile_Perfusion01ImageFileId",
                        column: x => x.Perfusion01ImageFileId,
                        principalTable: "ImageFile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_VesselsFindings_ImageFile_Perfusion02ImageFileId",
                        column: x => x.Perfusion02ImageFileId,
                        principalTable: "ImageFile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_VesselsFindings_VesselsPages_VesselsPageId",
                        column: x => x.VesselsPageId,
                        principalTable: "VesselsPages",
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
                name: "IX_AnamnesisPages_ReportId",
                table: "AnamnesisPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_BasalNucleiFindings_BasalNucleiPageId",
                table: "BasalNucleiFindings",
                column: "BasalNucleiPageId");

            migrationBuilder.CreateIndex(
                name: "IX_BasalNucleiPages_ReportId",
                table: "BasalNucleiPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_BrainstemCranialNervesFindings_BrainstemCranialNervesPageId",
                table: "BrainstemCranialNervesFindings",
                column: "BrainstemCranialNervesPageId");

            migrationBuilder.CreateIndex(
                name: "IX_BrainstemCranialNervesPages_ReportId",
                table: "BrainstemCranialNervesPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CerebrospinalFluidSpaceFindings_CerebrospinalFluidSpacePage~",
                table: "CerebrospinalFluidSpaceFindings",
                column: "CerebrospinalFluidSpacePageId");

            migrationBuilder.CreateIndex(
                name: "IX_CerebrospinalFluidSpaceFindings_ImageFileId",
                table: "CerebrospinalFluidSpaceFindings",
                column: "ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_CerebrospinalFluidSpacePages_ReportId",
                table: "CerebrospinalFluidSpacePages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ClinicalSymptomFindings_AnamnesisPageId",
                table: "ClinicalSymptomFindings",
                column: "AnamnesisPageId");

            migrationBuilder.CreateIndex(
                name: "IX_CMSideEffects_TechnologyPageId",
                table: "CMSideEffects",
                column: "TechnologyPageId");

            migrationBuilder.CreateIndex(
                name: "IX_CortexFindings_CortexPageId",
                table: "CortexFindings",
                column: "CortexPageId");

            migrationBuilder.CreateIndex(
                name: "IX_CortexPages_ReportId",
                table: "CortexPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ExaminationIndicationFindings_ExaminationPageId",
                table: "ExaminationIndicationFindings",
                column: "ExaminationPageId");

            migrationBuilder.CreateIndex(
                name: "IX_ExaminationPages_ReportId",
                table: "ExaminationPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_FacialSkullPages_ReportId",
                table: "FacialSkullPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_FindingLocalizers_Code",
                table: "FindingLocalizers",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_MeningesFindings_ImageFileId",
                table: "MeningesFindings",
                column: "ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_MeningesFindings_MeningesPageId",
                table: "MeningesFindings",
                column: "MeningesPageId");

            migrationBuilder.CreateIndex(
                name: "IX_MeningesPages_ReportId",
                table: "MeningesPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PageInfos_ReportId",
                table: "PageInfos",
                column: "ReportId");

            migrationBuilder.CreateIndex(
                name: "IX_PreviousInterventionsTherapiesFindings_AnamnesisPageId",
                table: "PreviousInterventionsTherapiesFindings",
                column: "AnamnesisPageId");

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
                name: "IX_SellarRegionFindings_SellarRegionPageId",
                table: "SellarRegionFindings",
                column: "SellarRegionPageId");

            migrationBuilder.CreateIndex(
                name: "IX_SellarRegionPages_ReportId",
                table: "SellarRegionPages",
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
                name: "IX_VesselsFindings_ImageFileId",
                table: "VesselsFindings",
                column: "ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_VesselsFindings_Perfusion01ImageFileId",
                table: "VesselsFindings",
                column: "Perfusion01ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_VesselsFindings_Perfusion02ImageFileId",
                table: "VesselsFindings",
                column: "Perfusion02ImageFileId");

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
                name: "BasalNucleiFindings");

            migrationBuilder.DropTable(
                name: "BrainstemCranialNervesFindings");

            migrationBuilder.DropTable(
                name: "CerebrospinalFluidSpaceFindings");

            migrationBuilder.DropTable(
                name: "ClinicalSymptomFindings");

            migrationBuilder.DropTable(
                name: "CMSideEffects");

            migrationBuilder.DropTable(
                name: "CortexFindings");

            migrationBuilder.DropTable(
                name: "ExaminationIndicationFindings");

            migrationBuilder.DropTable(
                name: "FacialSkullPages");

            migrationBuilder.DropTable(
                name: "FindingLocalizers");

            migrationBuilder.DropTable(
                name: "MeningesFindings");

            migrationBuilder.DropTable(
                name: "PageInfos");

            migrationBuilder.DropTable(
                name: "PatientInformation");

            migrationBuilder.DropTable(
                name: "PreviousInterventionsTherapiesFindings");

            migrationBuilder.DropTable(
                name: "Reconstructions");

            migrationBuilder.DropTable(
                name: "ReportResults");

            migrationBuilder.DropTable(
                name: "ReportSchemaSessions");

            migrationBuilder.DropTable(
                name: "ReportSession");

            migrationBuilder.DropTable(
                name: "SellarRegionFindings");

            migrationBuilder.DropTable(
                name: "SummaryPages");

            migrationBuilder.DropTable(
                name: "VesselsFindings");

            migrationBuilder.DropTable(
                name: "BasalNucleiPages");

            migrationBuilder.DropTable(
                name: "BrainstemCranialNervesPages");

            migrationBuilder.DropTable(
                name: "CerebrospinalFluidSpacePages");

            migrationBuilder.DropTable(
                name: "CortexPages");

            migrationBuilder.DropTable(
                name: "MeningesPages");

            migrationBuilder.DropTable(
                name: "ExaminationPages");

            migrationBuilder.DropTable(
                name: "AnamnesisPages");

            migrationBuilder.DropTable(
                name: "Acquisitions");

            migrationBuilder.DropTable(
                name: "ReportSchemas");

            migrationBuilder.DropTable(
                name: "SellarRegionPages");

            migrationBuilder.DropTable(
                name: "ImageFile");

            migrationBuilder.DropTable(
                name: "VesselsPages");

            migrationBuilder.DropTable(
                name: "TechnologyPages");

            migrationBuilder.DropTable(
                name: "Reports");
        }
    }
}
