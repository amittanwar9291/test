using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator.Localizers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace RadioReport.Common.Module.Logic.Managers.ReportGenerator
{
    public partial class ReportGenerationManager : IReportGenerationManager
    {
        public virtual List<MultiLocalizer> SpecialLocalizers { get; } = new List<MultiLocalizer>();

        private const string _patientParagraphDefaultName = "Patient";
        //alternative languages are taken with priorities in order of presence on the list
        private static List<string> _alternativeLanguagesList = new List<string> { "en-GB", "de-DE", "fr-FR" };
        private const string _nullConst = "NULL";
        private int _reportRating = int.MinValue;
        
        private readonly IReportSchemaRepository _reportSchemaRepository;
        private readonly IReportTranslationManager _reportTranslationManager;
        private readonly IBooleanExpressionManager _booleanExpressionManager;
        private readonly IFindingLocalizerManager _findingLocalizerManager;
        private readonly IDocumentGenerator _documentGenerator;

        public ReportGenerationManager(IReportSchemaRepository reportSchemaRepository, IReportTranslationManager reportTranslationManager,
            IBooleanExpressionManager booleanExpressionManager, IFindingLocalizerManager findingLocalizerManager,
            IDocumentGenerator documentGenerator)
        {
            _reportSchemaRepository = reportSchemaRepository;
            _reportTranslationManager = reportTranslationManager;
            _booleanExpressionManager = booleanExpressionManager;
            _findingLocalizerManager = findingLocalizerManager;
            _documentGenerator = documentGenerator;
        }

        public async Task<ReportResult> GenerateTextReport(string reportTypeName, string languageCode, LocalizerType localizerType,
            bool localizersBackground, bool isIcd10, bool isReferenceImage, IEnumerable<RadioReportValue> reportData)
        {
            var result = new ReportResult()
            {
                ReportTypeName = reportTypeName,
                IsLocalizer = localizerType != LocalizerType.None,
                IsICD10 = isIcd10,
                IsReferenceImage = isReferenceImage
            };

            await GenerateAndAppendTextReport(result, languageCode, localizerType, localizersBackground, reportData);
            return result;
        }

        public async Task GenerateAndAppendTextReport(ReportResult result, string languageCode, LocalizerType localizerType, bool localizersBackground,
            IEnumerable<RadioReportValue> reportData)
        {
            localizersBackground |= localizerType == LocalizerType.Png; // localizers in png require base64 background

            if (result is null)
            {
                return;
            }
           
            var reportSchema = await _reportSchemaRepository.GetByReportTypeNameAsync(result.ReportTypeName);
            if (reportSchema is null)
            {
                throw new NotFoundReportSchemaException($"No {result.ReportTypeName} schema of report found");
            }

            var rrDict = new RadioReportValueDictionary(reportData);
            var images = result.IsReferenceImage ? new List<RadioReportValue>() : null;           
            
            Parallel.ForEach(reportSchema.Paragraphs, paragraph =>
            {                
                if (paragraph.Lines?.Count > 0)
                {
                    var newParagraphLines = new List<Line>();
                    foreach (var line in paragraph.Lines)
                    {
                        ProcessLine(line, rrDict, images, string.Empty, languageCode, result.IsLocalizer, out List<Line> newChildFindingLines, true);                            
                        newParagraphLines.AddRange(newChildFindingLines);                    
                    }

                    var resultLines = paragraph.Lines
                        .Concat(newParagraphLines)
                        .Where(l => l.IsDeleted is false)
                        .OrderBy(l => l.LevelOrder)
                        .ToList();
                  
                    paragraph.Lines.Clear();
                    paragraph.Lines.AddRange(resultLines);
                }
            });

            SetReportRating(reportSchema);

            Parallel.ForEach(reportSchema.Paragraphs, paragraph =>
            {
                if (paragraph.Lines?.Count > 0)
                {
                    foreach (var line in paragraph.Lines)
                    {
                        ProcessLine(line, rrDict, images, string.Empty, languageCode, result.IsLocalizer, out List<Line> newChildFindingLines, false);
                    }

                    var resultLines = paragraph.Lines
                        .Where(l => l.IsDeleted is false)
                        .OrderBy(l => l.LevelOrder)
                        .ToList();

                    paragraph.Lines.Clear();
                    paragraph.Lines.AddRange(resultLines);
                }
            });

            result.PatientData = GetPatientData(reportSchema);
            
            PrepareReportSummary(reportSchema, result);

            var htmlOutput = new StringBuilder(await _documentGenerator.GenerateDocumentFromReport(reportSchema, result, languageCode));

            if (localizerType != LocalizerType.None)
            {
                await AddLocalizerImages();
            }

            AddReferenceImages();

            result.ReportHtml = htmlOutput.ToString();

            /// <summary>
            /// Replaces localizer placeholder with svg html code or with img containing png in base64 code.
            /// </summary>
            async Task AddLocalizerImages()
            {
                var localizerPattern = ReportConsts.SubstitutedLocalizerPattern;
                var foundLocalizerPatterns = Regex.Matches(htmlOutput.ToString(), localizerPattern).Select(mc => mc.Value);

                var specialLocalizersWithConditions = SpecialLocalizers.Select(l => new MultiLocalizer()
                {
                    LocalizerId = l.LocalizerId,
                    Items = l.Items.Select(li =>
                    {
                        var condition = li.Condition;
                        if (condition != null)
                        {
                            condition = Regex.Replace(condition, ReportConsts.RadioReportIdPattern,
                            m =>
                            {
                                var rrValue = rrDict.GetRadioReportValue(m.Value, null);
                                return rrValue?.Value?.ToString() ?? _nullConst;
                            });
                        }

                        return new MultiLocalizerItem()
                        {
                            Rrid = li.Rrid,
                            TitleRRValue = li.TitleRRValue,
                            SubtitleRRValue = li.SubtitleRRValue,
                            ColorHash = li.ColorHash,
                            ColorName = li.ColorName,
                            PictureCode = li.PictureCode,
                            TitleFormat = li.TitleFormat,
                            Style = li.Style,
                            Condition = condition
                        };
                    }),
                    NoneValue = l.NoneValue
                });

                if (foundLocalizerPatterns.Any())
                {
                    foreach (var pattern in foundLocalizerPatterns)
                    {
                        var localizerContent =
                            await _findingLocalizerManager.CreateCheckedLocalizers(pattern, localizersBackground, localizerType, languageCode, specialLocalizersWithConditions);
                        htmlOutput.Replace(pattern, localizerContent);
                    }
                }
            }

            /// <summary>
            /// Replaces image placeholder with base64 image representation.
            /// </summary>
            void AddReferenceImages()
            {
                foreach (var image in images ?? Enumerable.Empty<RadioReportValue>())
                {
                    htmlOutput.Replace(image.RadioReportId, Convert.ToBase64String(image.Value as byte[]));
                }
            }
        }
    }
}
