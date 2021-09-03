using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System;
using Buckets = RadioReport.Common.Consts.MinIO.Buckets;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Module.Logic.Models.ReportGenerator.Localizers;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Helpers.ReportGenerator;

namespace RadioReport.Common.Module.Logic.Managers.ReportGenerator
{
    public class FindingLocalizerManager : Manager<FindingLocalizer, IFindingLocalizerRepository>, IFindingLocalizerManager
    {
        private readonly IMinIOService _minIOService;
        private readonly IReportTranslationManager _reportTranslationManager;
        private readonly IKafkaProducer _kafkaProducer;
        private readonly IBooleanExpressionManager _booleanExpressionManager;
        private readonly HttpAuthContext _httpAuthContext;

        private const string ImageStyleString = "style =\"margin-right: 10px;\"";


        public FindingLocalizerManager(IFindingLocalizerRepository repository, IMinIOService minIOService, IReportTranslationManager reportTranslationManager,
            IKafkaProducer kafkaProducer, IBooleanExpressionManager booleanExpressionManager, HttpAuthContext httpAuthContext) : base(repository)
        {
            _minIOService = minIOService;
            _reportTranslationManager = reportTranslationManager;
            _kafkaProducer = kafkaProducer;
            _booleanExpressionManager = booleanExpressionManager;
            _httpAuthContext = httpAuthContext;
        }

        /// <summary>
        /// Creates a localizer with "checked" and "unchecked" CSS class occurrences added.
        /// In case of special localizers creates set of localizers aligned horizontally with all fields and styles from predefined settings.
        /// </summary>
        /// <param name="localizerRegexCapture">the whole localizer string, in format: [rr-id:localizer-code|selected-values;rr-id:localizer-code|selected-values;...]</param>
        /// <param name="languageCode"></param>
        /// <param name="specialLocalizers">list of multi-localizer settings for current module</param>
        /// <returns></returns>
        public async Task<string> CreateCheckedLocalizers(string localizerRegexCapture, bool localizersBackground,
            LocalizerType localizerType, string languageCode, IEnumerable<MultiLocalizer> specialLocalizers)
        {
            var localizers = localizerRegexCapture?.TrimStart('[')?.TrimEnd(']')?.Split(';');
            if (localizers?.Length > 0)
            {
                var localizerParts = localizers[0].Split('|')[0].Split(':');
                var localizerCode = localizerParts.Length == ReportConsts.LocalizerCodeParts ? localizerParts[1] : string.Empty;
                var specialLocalizer = specialLocalizers.FirstOrDefault(sl => sl.LocalizerId == localizerCode);

                var localizerOutput = new StringBuilder();
                foreach (var localizer in localizers)
                {
                    var localizerRrid = localizer.Split('|')[0].Split(':')[0];

                    IEnumerable<MultiLocalizerItem> items = new List<MultiLocalizerItem>() { null };

                    if (specialLocalizer != null)
                    {
                        items = specialLocalizer.Items?.Where(i => (i.Rrid == localizerRrid || i.Rrid is null)
                                                                    && (i.Condition is null || _booleanExpressionManager.EvaluateExpression(i.Condition)));
                    }

                    foreach (var item in items ?? Enumerable.Empty<MultiLocalizerItem>())
                    {
                        var localizerSvg = await CreateCheckedLocalizer(localizer, item, languageCode, localizersBackground);
                        if (localizerSvg != null)
                        {
                            if (localizerType == LocalizerType.Png)
                            {
                                localizerOutput.Append(await ConvertLocalizerSvgToPng(localizerSvg));
                            }
                            else
                            {
                                localizerOutput.Append(localizerSvg);
                            }
                        }
                    } 
                }
                return localizerOutput.ToString();
            }
            return string.Empty;
        }

        private async Task<string> CreateCheckedLocalizer(string fullLocalizerContent, MultiLocalizerItem specialLocalizerItem,
            string languageCode, bool localizersBackground)
        {
            var captureParts = fullLocalizerContent.Split('|');
            var localizerParts = captureParts[0].Split(':');
            var localizerCode = localizerParts.Length == ReportConsts.LocalizerCodeParts ? localizerParts[1] : string.Empty;
            
            var tempRRValue = new RadioReportValue()
            {
                RadioReportId = localizerParts[0],
                TranslationKey = captureParts[1],
                TypeName = "Localizer"
            };

            if (specialLocalizerItem?.PictureCode != null)
            {
                localizerCode = specialLocalizerItem.PictureCode;
            }

            var localizerPicture = await GetByCode(localizerCode, localizersBackground);
            if (localizerPicture is null)
            {
                return null;
            }

            var valuesToCheck = captureParts[1].Split(',').Select(v => v[(v.IndexOf('_', StringComparison.Ordinal) + 1)..]);

            var mappings = localizerPicture.Mapping.Split(',').ToList();
            var localizerContents = localizerPicture.Content;

            if (specialLocalizerItem != null && !mappings.Any(m => valuesToCheck.Contains(m)))
            {
                // if special localizer is empty do not display it
                return string.Empty;
            }

            for (var i = 0; i < mappings.Count; i++)
            {
                var valueToInsert = valuesToCheck.Contains(mappings[i]) ? "checked" : "unchecked";
                var valueToSubst = $"CHK{i:D2}";
                localizerContents = Regex.Replace(localizerContents, valueToSubst, valueToInsert);
            }

            var localizerBuilder = new StringBuilder(localizerContents);

            SubstituteValue(localizerBuilder, localizerContents, valuesToCheck, mappings, tempRRValue, languageCode);
            SubstituteTranslations(localizerBuilder, localizerContents, tempRRValue, languageCode);

            if (specialLocalizerItem is null)
            {
                localizerBuilder.Replace("<svg", $"<svg {ImageStyleString}");
            }
            else
            {
                FillSpecialLocalizerContent(specialLocalizerItem, localizerBuilder, languageCode);
            }
            return localizerBuilder.ToString();
        }

        private void FillSpecialLocalizerContent(MultiLocalizerItem item, StringBuilder contentBuilder, string languageCode)
        {
            if (item != null)
            {
                var mainTitle = item.TitleRRValue != null ? _reportTranslationManager.GetValueTranslation(item.TitleRRValue, languageCode) : string.Empty;
                var subTitle = item.SubtitleRRValue != null ? _reportTranslationManager.GetValueTranslation(item.SubtitleRRValue, languageCode) : string.Empty;
                contentBuilder.Replace("%color%", item.ColorHash);
                contentBuilder.Replace("%color-name%", item.ColorName);
                var title = item.TitleFormat
                    ?.Replace("%T%", mainTitle, StringComparison.Ordinal)
                    ?.Replace("%ST%", subTitle, StringComparison.Ordinal);
                contentBuilder.Replace("%title%", title);
                if (item.Style != null)
                {
                    contentBuilder.Replace("<svg", $"<svg {item.Style}");
                }
            }
        }

        public async Task<FindingLocalizer> GetByCode(string code, bool localizersBackground)
        {
            var localizer = await Repository.GetLocalizerByCode(code);

            if (localizer != null && localizersBackground)
            {
                localizer.Content = await RegexHelper.ReplaceAsync(localizer.Content, ReportConsts.BackgroundRegex, async (match) =>
                {
                    if (match.Groups.Count > 1)
                    {
                        var imageURI = match.Groups[1].Value;
                        byte[] imageStream;
                        try
                        {
                            imageStream = await _minIOService.GetBinaryObjectAsync(Buckets.StaticFiles, imageURI);
                        }
                        catch (MinIOOperationException)
                        {
                            throw;
                        }
                        var base64Image = Convert.ToBase64String(imageStream);
                        var replaceString = "'data:image/png;base64," + base64Image + "'";
                        return Regex.Replace(match.Value, ReportConsts.BackgroundReplaceRegex, _ => replaceString);
                    }
                    return match.Value;
                });
            }

            return localizer;
        }

        private void SubstituteValue(StringBuilder builder, string content, IEnumerable<string> valuesToCheck, 
            IEnumerable<string> mappings, RadioReportValue tempRRValue, string languageCode)
        {
            if (content.Contains(ReportConsts.LocalizerValuePlaceholder, StringComparison.Ordinal))
            {
                var localizerValue = valuesToCheck.Any(v => mappings.Contains(v))
                    ? _reportTranslationManager.GetValueTranslation(tempRRValue, languageCode)
                    : string.Empty;
                builder.Replace(ReportConsts.LocalizerValuePlaceholder, localizerValue);
            }
        }

        private void SubstituteTranslations(StringBuilder builder, string content, 
            RadioReportValue tempRRValue, string languageCode)
        {
            var match = Regex.Match(content, ReportConsts.LocalizerTranslationPattern);
            while (match.Success)
            {
                var translationKey = $"{ReportConsts.LocalizerTranslationKeyPrefix}_{match.Groups[1].Value}";
                builder.Replace(match.Value, _reportTranslationManager.GetTextTranslation(translationKey, tempRRValue.RadioReportId, languageCode));
                match = match.NextMatch();
            }
        }

        private async Task<string> ConvertLocalizerSvgToPng(string localizerSvg)
        {
            var width = LocalizerImageHelper.GetSvgSizeElement(localizerSvg, ReportConsts.SvgWidthAttribute, 312);
            var height = LocalizerImageHelper.GetSvgSizeElement(localizerSvg, ReportConsts.SvgHeightAttribute, 200);

            var request = new HtmlRenderRequest()
            {
                HtmlContent = localizerSvg,
                HtmlRenderFormat = HtmlRenderFormat.PNG,
                PaperFormat = PaperFormat.A4,
                Viewport = (width, height),
                CacheReturn = true
            };

            var response = await _kafkaProducer.SendSynchronousRequest<HtmlRenderResponse>(request, _httpAuthContext);
            if (response.IsSuccess)
            {
                return FormattingHelper.GeneratePngImageTag(response.RenderContent);
            }
            return string.Empty;
        }
    }
}
