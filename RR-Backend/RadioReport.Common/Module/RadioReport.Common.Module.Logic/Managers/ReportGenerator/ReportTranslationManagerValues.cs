using Microsoft.Extensions.Localization;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Enums.Pages.Localizers;
using RadioReport.Common.Module.Logic.Models.ReportGenerator.Translations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace RadioReport.Common.Module.Logic.Managers.ReportGenerator
{
    public partial class ReportTranslationManager
    {
        protected virtual List<TranslationFormatting> CustomTranslationFormattings { get; } = new List<TranslationFormatting>();


        private string TranslateMultipleValues(IStringLocalizer localizer, RadioReportValue valueToTranslate)
        {
            if (valueToTranslate is null)
            {
                return string.Empty;
            }

            var customFormatting = CustomTranslationFormattings.FirstOrDefault(cf => cf.RrIds.Contains(GetRRIdWithoutSuffix(valueToTranslate.RadioReportId)));

            if (customFormatting != null)
            {
                var selectedEnumKeys = valueToTranslate.TranslationKey.Split(valueSeparator);
                IEnumerable<(string value, string key)> selectedEnum = selectedEnumKeys.Select(v =>
                {
                    v = v.Trim();
                    var enumParts = v.Trim().Split(keySeparator);
                    if (enumParts.Length > 1)
                    {
                        var enumValue = enumParts[1];
                        if (!string.IsNullOrEmpty(valueToTranslate.AlternativeTranslationSuffix))
                        {
                            enumValue = enumValue.Substring(0, enumValue.LastIndexOf(valueToTranslate.AlternativeTranslationSuffix, StringComparison.Ordinal));
                        }
                        return (enumValue, v);
                    }
                    return (v, v);
                });

                var enumValues = customFormatting?.EnumValues?.ToList();

                return customFormatting.FormatTranslations(valueToTranslate, localizer, selectedEnum.ToList(), enumValues);
            }
            else
            {
                return FormatTranslationsAsSeparateValues(localizer, valueToTranslate);
            }
        }

        private string FormatTranslationsAsSeparateValues(IStringLocalizer localizer, RadioReportValue valueToTranslate)
        {
            var resultBuilder = new StringBuilder();
            foreach (var item in valueToTranslate.TranslationKey.Split(valueSeparator))
            {
                var value = GetValueFromModuleOrGeneralResource(localizer, item.Trim(), valueToTranslate.AlternativeTranslationSuffix);
                resultBuilder.Append(value + $"{valueSeparator} ");
            }
            return resultBuilder.ToString().Trim().TrimEnd(valueSeparator);
        }

        private static string GetRRIdWithoutSuffix(string rrid)
        {
            var findingMatches = Regex.Matches(rrid, ReportConsts.RadioReportFindingPattern);

            if (findingMatches.Count == 1 || findingMatches.Count == 2)
            {
                return rrid[0..findingMatches[0].Index];
            }
            return rrid;
        }

        #region Custom Translation Functions

        #region Ranges
        protected string CreateTranslationsWithRanges(RadioReportValue valueToTranslate, IStringLocalizer localizer,
            List<(string value, string key)> selectedEnum, List<string> enumValues)
        {
            if (valueToTranslate == null) throw new ArgumentNullException(nameof(valueToTranslate));

            if (selectedEnum is null || !selectedEnum.Any() || enumValues is null)
            {
                return string.Empty;
            }

            var resultBuilder = new StringBuilder();

            resultBuilder.Append(GetValueFromModuleOrGeneralResource(localizer, selectedEnum.First().key.Trim(), valueToTranslate.AlternativeTranslationSuffix));
            var currentRangeCount = 1;
            var lastFoundIndex = enumValues.IndexOf(selectedEnum.ElementAt(0).value);

            for (var i = 1; i < selectedEnum.Count; i++)
            {
                var currentFoundIndex = enumValues.IndexOf(selectedEnum.ElementAt(i).value);
                if (lastFoundIndex + 1 == currentFoundIndex)
                {
                    currentRangeCount++;

                    if (currentRangeCount > 1 && i == selectedEnum.Count - 1)
                    {
                        resultBuilder.Append('-');
                        resultBuilder.Append(GetValueFromModuleOrGeneralResource(localizer, selectedEnum.ElementAt(i).key.Trim(), valueToTranslate.AlternativeTranslationSuffix));
                    }
                }
                else
                {
                    if (currentRangeCount > 1)
                    {
                        resultBuilder.Append('-');
                        resultBuilder.Append(GetValueFromModuleOrGeneralResource(localizer, selectedEnum.ElementAt(i - 1).key.Trim(), valueToTranslate.AlternativeTranslationSuffix));
                    }
                    resultBuilder.Append($"{valueSeparator} ");
                    resultBuilder.Append(GetValueFromModuleOrGeneralResource(localizer, selectedEnum.ElementAt(i).key.Trim(), valueToTranslate.AlternativeTranslationSuffix));
                    currentRangeCount = 1;
                }
                lastFoundIndex = currentFoundIndex;
            }
            return resultBuilder.ToString().Trim().TrimEnd(valueSeparator);
        }
        #endregion

        #region Discs
        protected string CreateTranslationsForDiscs(RadioReportValue valueToTranslate, IStringLocalizer localizer,
            List<(string value, string key)> selectedEnum, List<string> enumValues)
        {
            if (selectedEnum is null || !selectedEnum.Any() || enumValues is null)
            {
                return string.Empty;
            }

            selectedEnum.RemoveAll(e => !e.value.EndsWith("d", StringComparison.Ordinal));

            var resultBuilder = new StringBuilder();

            var firstElemTranslation = GetValueFromModuleOrGeneralResource(localizer, selectedEnum.First().key.Trim(), valueToTranslate.AlternativeTranslationSuffix);
            var currentRangeCount = 1;
            var lastFoundIndex = enumValues.IndexOf(selectedEnum.First().value);

            for (var i = 1; i < selectedEnum.Count; i++)
            {
                var currentFoundIndex = enumValues.IndexOf(selectedEnum.ElementAt(i).value);
                if (lastFoundIndex + 1 == currentFoundIndex)
                {
                    currentRangeCount++;

                    if (currentRangeCount > 1 && i == selectedEnum.Count - 1)
                    {
                        var lastElemTranslation = GetValueFromModuleOrGeneralResource(localizer, selectedEnum.ElementAt(i).key.Trim(), valueToTranslate.AlternativeTranslationSuffix);
                        AppendDiscRange(resultBuilder, firstElemTranslation, lastElemTranslation);
                        resultBuilder.Append($"{valueSeparator} ");
                    }
                }
                else
                {
                    if (currentRangeCount > 1)
                    {
                        var lastElemTranslation = GetValueFromModuleOrGeneralResource(localizer, selectedEnum.ElementAt(i - 1).key.Trim(), valueToTranslate.AlternativeTranslationSuffix);
                        AppendDiscRange(resultBuilder, firstElemTranslation, lastElemTranslation);
                    }
                    else
                    {
                        resultBuilder.Append(firstElemTranslation);
                    }
                    resultBuilder.Append($"{valueSeparator} ");

                    firstElemTranslation = GetValueFromModuleOrGeneralResource(localizer, selectedEnum.ElementAt(i).key.Trim(), valueToTranslate.AlternativeTranslationSuffix);
                    if (i == selectedEnum.Count - 1)
                    {
                        resultBuilder.Append(firstElemTranslation);
                    }
                    currentRangeCount = 1;
                }

                lastFoundIndex = currentFoundIndex;
            }

            if (selectedEnum.Count == 1)
            {
                resultBuilder.Append(firstElemTranslation);
            }

            return resultBuilder.ToString().Trim().TrimEnd(valueSeparator);
        }
        
        private static void AppendDiscRange(StringBuilder resultBuilder, string firstElemTranslation, string lastElemTranslation)
        {
            var firstElemTranslationParts = firstElemTranslation.Split('/');
            var lastElemTranslationParts = lastElemTranslation.Split('/');

            resultBuilder.Append(firstElemTranslationParts.Length == 2 ? firstElemTranslationParts[0] : firstElemTranslation);

            resultBuilder.Append('-');

            if (lastElemTranslationParts.Length == 2)
            {
                if (char.IsDigit(lastElemTranslationParts[1].Trim()[0]))
                {
                    var lastCategory = ExtractCategory(lastElemTranslationParts[0]);
                    resultBuilder.Append(lastCategory);
                }
                resultBuilder.Append(lastElemTranslationParts[1]);
            }
            else
            {
                resultBuilder.Append(lastElemTranslation);
            }
        }

        private static string ExtractCategory(string translation)
        {
            for (var i = 0; i < translation.Length; i++)
            {
                if (char.IsDigit(translation[i]))
                {
                    return translation.Substring(0, i);
                }
            }
            return translation;
        }
        #endregion

        #region Vascular
        private static readonly IList<(string[] values, string key)> _vascularGroupedValues =
            new List<(string[] values, string key)>
            {
                { (new [] { nameof(AffectedSegmentsOrVesselsLocations.ACAa1Left), nameof(AffectedSegmentsOrVesselsLocations.ACAa2Left) }, "AffectedSegmentsOrVesselsLocations_ACALeft") },
                { (new [] { nameof(AffectedSegmentsOrVesselsLocations.ACAa1Right), nameof(AffectedSegmentsOrVesselsLocations.ACAa2Right) }, "AffectedSegmentsOrVesselsLocations_ACARight") },
                { (new [] { nameof(AffectedSegmentsOrVesselsLocations.MCAm1Left), nameof(AffectedSegmentsOrVesselsLocations.MCAm2Left), nameof(AffectedSegmentsOrVesselsLocations.MCAm3Left) }, "AffectedSegmentsOrVesselsLocations_MCALeft") },
                { (new [] { nameof(AffectedSegmentsOrVesselsLocations.MCAm1Right), nameof(AffectedSegmentsOrVesselsLocations.MCAm2Right), nameof(AffectedSegmentsOrVesselsLocations.MCAm3Right) }, "AffectedSegmentsOrVesselsLocations_MCARight") },
                { (new [] { nameof(AffectedSegmentsOrVesselsLocations.PCAp1Left), nameof(AffectedSegmentsOrVesselsLocations.PCAp2Left) }, "AffectedSegmentsOrVesselsLocations_PCALeft") },
                { (new [] { nameof(AffectedSegmentsOrVesselsLocations.PCAp1Right), nameof(AffectedSegmentsOrVesselsLocations.PCAp2Right) }, "AffectedSegmentsOrVesselsLocations_PCARight") },
            };

        protected string CreateTranslationsForVascularValues(RadioReportValue valueToTranslate, IStringLocalizer localizer,
            List<(string value, string key)> selectedEnum, List<string> enumValues)
        {
            if (valueToTranslate == null) throw new ArgumentNullException(nameof(valueToTranslate));

            if (selectedEnum is null || !selectedEnum.Any() || enumValues is null)
            {
                return string.Empty;
            }

            var resultBuilder = new StringBuilder();

            foreach (var group in _vascularGroupedValues)
            {
                if (group.values.All(v => selectedEnum.Any(e => e.value == v)))
                {
                    var firstIndex = selectedEnum.FindIndex(e => group.values.Any(v => v == e.value));
                    selectedEnum.Insert(firstIndex, (group.key, group.key));
                    selectedEnum.RemoveAll(e => group.values.Any(v => v == e.value));
                }
            }

            return string.Join($"{valueSeparator} ",
                selectedEnum.Select(val => GetValueFromModuleOrGeneralResource(localizer, val.key.Trim(), valueToTranslate.AlternativeTranslationSuffix)))
                .Trim().TrimEnd(valueSeparator);
        }
        #endregion

        #region Head
        private static readonly IDictionary<string, string[]> _cortexGroupedValues =
            new Dictionary<string, string[]>
            {
                { nameof(CortexLocations.FrontalLobeRight), new [] { nameof(CortexLocations.SuperiorFrontalGyrusRight), nameof(CortexLocations.MiddleFrontalGyrusRight), nameof(CortexLocations.PrecentralGyrusRight) } },
                { nameof(CortexLocations.FrontalLobeLeft), new [] { nameof(CortexLocations.SuperiorFrontalGyrusLeft), nameof(CortexLocations.MiddleFrontalGyrusLeft), nameof(CortexLocations.PrecentralGyrusLeft) } },
                { nameof(CortexLocations.ParietalLobeRight), new [] { nameof(CortexLocations.PostcentralLobeRight) } },
                { nameof(CortexLocations.ParietalLobeLeft), new [] { nameof(CortexLocations.PostcentralLobeLeft) } },
                { nameof(CortexLocations.Cerebellum), new [] { nameof(CortexLocations.CerebellarHemisphereRight), nameof(CortexLocations.CerebellarTonsilRight), nameof(CortexLocations.CerebellarHemisphereLeft), nameof(CortexLocations.CerebellarTonsilLeft), nameof(CortexLocations.CerebellarVermis) } }
            };

        private static readonly IDictionary<string, string[]> _basalGangliaGroupedValues =
            new Dictionary<string, string[]>
            {
                { nameof(BasalGangliaLocations.GlobusPallidusRight), new [] { nameof(BasalGangliaLocations.GlobusPallidusInternalRight), nameof(BasalGangliaLocations.GlobusPallidusExternalRight) } },
                { nameof(BasalGangliaLocations.GlobusPallidusLeft), new [] { nameof(BasalGangliaLocations.GlobusPallidusInternalLeft), nameof(BasalGangliaLocations.GlobusPallidusExternalLeft) } },
                { nameof(BasalGangliaLocations.CaudateNucleusRight), new [] { nameof(BasalGangliaLocations.HeadCaudateNucleusRight), nameof(BasalGangliaLocations.BodyCaudateNucleusRight), nameof(BasalGangliaLocations.TailCcaudateNucleusRight) } },
                { nameof(BasalGangliaLocations.CaudateNucleusLeft), new [] { nameof(BasalGangliaLocations.HeadCaudateNucleusLeft), nameof(BasalGangliaLocations.BodyCaudateNucleusLeft), nameof(BasalGangliaLocations.TailCcaudateNucleusLeft) } },
                { nameof(BasalGangliaLocations.InternalCapsuleRight), new [] { nameof(BasalGangliaLocations.AnteriorLimbInternalCapsuleRight), nameof(BasalGangliaLocations.GenuInternalCapsuleRight), nameof(BasalGangliaLocations.PosteriorLimbInternalCapsuleRight) } },
                { nameof(BasalGangliaLocations.InternalCapsuleLeft), new [] { nameof(BasalGangliaLocations.AnteriorLimbInternalCapsuleLeft), nameof(BasalGangliaLocations.GenuInternalCapsuleLeft), nameof(BasalGangliaLocations.PosteriorLimbInternalCapsuleLeft) } },
            };

        protected string CreateTranslationsWithGroupedValues(RadioReportValue valueToTranslate, IStringLocalizer localizer,
            List<(string value, string key)> selectedEnum, List<string> enumValues)
        {
            if (valueToTranslate == null) throw new ArgumentNullException(nameof(valueToTranslate));

            if (selectedEnum is null | !selectedEnum.Any() || enumValues is null)
            {
                return string.Empty;
            }

            var resultBuilder = new StringBuilder();
            var groupedValues = valueToTranslate.TypeName == typeof(CortexLocations).FullName ? _cortexGroupedValues : _basalGangliaGroupedValues;

            for (var i = 0; i < selectedEnum.Count; i++)
            {
                var (currentValue, key) = selectedEnum.ElementAt(i);
                if (enumValues.Contains(currentValue))
                {
                    var parentValue = groupedValues.Keys.SingleOrDefault(k => groupedValues[k].Contains(currentValue));
                    if (parentValue == null || !selectedEnum.Any(e => e.value == parentValue))
                    {
                        resultBuilder.Append(GetValueFromModuleOrGeneralResource(localizer, selectedEnum.ElementAt(i).key.Trim(), valueToTranslate.AlternativeTranslationSuffix));
                        resultBuilder.Append($"{valueSeparator} ");
                    }
                }
            }

            return resultBuilder.ToString().Trim().TrimEnd(valueSeparator);
        }
        #endregion

        #endregion
    }
}
