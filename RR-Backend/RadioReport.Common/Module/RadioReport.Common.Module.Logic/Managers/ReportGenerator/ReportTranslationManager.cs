using Microsoft.Extensions.Localization;
using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using RadioReport.Common.Module.Logic.Resources.ReportGenerator;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.Common.Module.Logic.Managers.ReportGenerator
{
    public partial class ReportTranslationManager : IReportTranslationManager
    {
        private const string _systemPrefix = "System.";
        private const string _generalTranslationsKey = "General";
        protected const char keySeparator = '_';
        protected const char valueSeparator = ',';
        private const byte _moduleNamePrefixSize = 3;

        private readonly IStringLocalizerFactory _stringLocalizerFactory;
        private readonly IReadOnlyDictionary<string, IStringLocalizer> _localizers;

        public ReportTranslationManager(IStringLocalizerFactory stringLocalizerFactory)
        {
            _stringLocalizerFactory = stringLocalizerFactory;
            _localizers = InitializeDictionary(_stringLocalizerFactory);
        }

        public string GetValueTranslation(RadioReportValue valueToTranslate, string languageCode)
        {
            var result = string.Empty;

            if (valueToTranslate?.TranslationKey != null)
            {
                var translationKey = valueToTranslate.TranslationKey;
                var localizer = GetLocalizer(_localizers, valueToTranslate.RadioReportId);
                var currentCultureInfo = SetCultureInfo(languageCode);

                if (localizer != null && IsTranslatableType(valueToTranslate))
                {
                    //if value contains valueSeparator it means it is multivalue
                    if (translationKey.Contains(valueSeparator, StringComparison.Ordinal))
                    {
                        result = TranslateMultipleValues(localizer, valueToTranslate);
                    }
                    else
                    {
                        result = GetValueFromModuleOrGeneralResource(localizer, translationKey, valueToTranslate.AlternativeTranslationSuffix);
                    }
                }
                else
                {
                    return TryToGetGeneralTranslation(valueToTranslate.ValueAsString(currentCultureInfo));
                }
            }
            return result;
        }

        public string GetTextTranslation(string textToTranslate, string rrid, string languageCode)
        {
            if (string.IsNullOrWhiteSpace(textToTranslate) || string.IsNullOrWhiteSpace(rrid))
            {
                return null;
            }

            var localizer = GetLocalizer(_localizers, rrid);
            SetCultureInfo(languageCode);

            return GetValueFromModuleOrGeneralResource(localizer, textToTranslate, null);
        }
        
        public static bool IsTranslatableType(RadioReportValue value)
        {
            if (value == null) throw new ArgumentNullException(nameof(value));

            return !string.IsNullOrEmpty(value.TypeName)
                   && !(value.TypeName.Contains(_systemPrefix, StringComparison.Ordinal) && value.AlternativeTranslationSuffix is null);
        }


        private static string GetTypeName(string fullTypeName)
        {
            int lastDotIndex = fullTypeName.LastIndexOf('.');

            return lastDotIndex >= 0 ? fullTypeName.Substring(lastDotIndex + 1) : fullTypeName;
        }

        public static CultureInfo SetCultureInfo(string languageCode)
        {
            CultureInfo newCulture;
            try
            {
                newCulture = new CultureInfo(languageCode);
            }
            catch (CultureNotFoundException)
            {

                newCulture = new CultureInfo("en-GB");
            }

            if (newCulture != null)
            {
                Thread.CurrentThread.CurrentCulture = newCulture;
                Thread.CurrentThread.CurrentUICulture = newCulture;
            }

            return newCulture;
        }

        /// <summary>
        /// This method is used for getting value from localizer.
        /// First module localizer is checked. If translation is not found then general localizer is checked.
        /// </summary>
        /// <param name="moduleLocalizer">Localizer of module from which we are going to get value in case value is not found in general localizer</param>
        /// <param name="key">translation key</param>
        /// <returns></returns>
        protected string GetValueFromModuleOrGeneralResource(IStringLocalizer moduleLocalizer, string key, string translationSuffix)
        {
            if (moduleLocalizer == null) throw new ArgumentNullException(nameof(moduleLocalizer));
            if (key == null) throw new ArgumentNullException(nameof(key));

            var moduleTranslation = GetValueFromResource(moduleLocalizer, key);
            if (moduleTranslation != key)
            {
                // translation found
                return moduleTranslation;
            }

            var generalTranslation = GetValueFromResource(_localizers[_generalTranslationsKey], key);
            return generalTranslation != key ? generalTranslation : GetDefaultValueFromTranslationKey(key, translationSuffix);
        }

        /// <summary>
        /// This method is used for getting value from localizer, but does it in a loop
        /// for example: if value not found for key_part1_part2, then try find for key_part_1, and so on until key is empty.
        /// </summary>
        /// <param name="localizer">Localizer from which we are going to get value</param>
        /// <param name="key">translation key</param>
        /// <returns></returns>
        public static string GetValueFromResource(IStringLocalizer localizer, string key)
        {
            if (localizer == null) throw new ArgumentNullException(nameof(localizer));

            var keyBackup = new string(key);
            var found = false;
            var result = string.Empty;

            while (!found && !string.IsNullOrEmpty(key))
            {
                result = localizer[key].Value;
                // if localizer will not find value for requested key, it will return that key, this how we know if found
                if (result != key)
                {
                    found = true;
                }
                else
                {   // if value not found for "key_part1" try for "key"
                    var lastIndexOfSeparator = key.LastIndexOf(keySeparator);
                    key = key.Substring(0, lastIndexOfSeparator > 0 ? lastIndexOfSeparator : 0);
                }
            }

            return found ? result : keyBackup;
        }

        /// <summary>
        /// Tries to retriew a default value from the translation key. Should be used when no translation is found.
        /// For standard cases (Key_Value) only value of the translation key is being returned.
        /// For unusual cases (key without value or key with multiple values) the whole translation key is being returned.
        /// </summary>
        /// <param name="key">Translation key</param>
        /// <returns>Processed translation key</returns>
        private string GetDefaultValueFromTranslationKey(string key, string translationSuffix)
        {
            if (translationSuffix != null)
            {
                key = key.Substring(0, key.LastIndexOf('_'));
            }
            var keyParts = key.Split(keySeparator);
            return keyParts.Length == 2 ? TryToGetGeneralTranslation(keyParts[1]) : key;
        }

        private string TryToGetGeneralTranslation(string key)
        {
            return _localizers[_generalTranslationsKey][key].Value;
        }

        public static Dictionary<string, IStringLocalizer> InitializeDictionary(IStringLocalizerFactory stringLocalizerFactory)
        {
            if (stringLocalizerFactory == null) throw new ArgumentNullException(nameof(stringLocalizerFactory));

            return new Dictionary<string, IStringLocalizer> {
                { GetModulePrefixFromClass(nameof(AngioValuesResources)), stringLocalizerFactory.Create(typeof(AngioValuesResources))},
                { GetModulePrefixFromClass(nameof(CardioValuesResources)), stringLocalizerFactory.Create(typeof(CardioValuesResources))},
                { GetModulePrefixFromClass(nameof(ElbowValuesResources)), stringLocalizerFactory.Create(typeof(ElbowValuesResources))},
                { "anc", stringLocalizerFactory.Create(typeof(FeetValuesResources))},
                { GetModulePrefixFromClass(nameof(HandValuesResources)), stringLocalizerFactory.Create(typeof(HandValuesResources))},
                { GetModulePrefixFromClass(nameof(HipValuesResources)), stringLocalizerFactory.Create(typeof(HipValuesResources))},
                { GetModulePrefixFromClass(nameof(KneeValuesResources)), stringLocalizerFactory.Create(typeof(KneeValuesResources))},
                { ReportTypeNames.PrefixesDictionary[ReportTypeNames.MammaMRT], stringLocalizerFactory.Create(typeof(MammaMRTValuesResources))},
                { ReportTypeNames.PrefixesDictionary[ReportTypeNames.MammaMX], stringLocalizerFactory.Create(typeof(MammaMXValuesResources))},
                { GetModulePrefixFromClass(nameof(PelvisValuesResources)), stringLocalizerFactory.Create(typeof(PelvisValuesResources))},
                { GetModulePrefixFromClass(nameof(ShoulderValuesResources)), stringLocalizerFactory.Create(typeof(ShoulderValuesResources))},
                { GetModulePrefixFromClass(nameof(SpineValuesResources)), stringLocalizerFactory.Create(typeof(SpineValuesResources))},
                { GetModulePrefixFromClass(nameof(ThoraxValuesResources)), stringLocalizerFactory.Create(typeof(ThoraxValuesResources))},
                { GetModulePrefixFromClass(nameof(AbdomenValuesResources)), stringLocalizerFactory.Create(typeof(AbdomenValuesResources))},
                { GetModulePrefixFromClass(nameof(UniformValuesResources)), stringLocalizerFactory.Create(typeof(UniformValuesResources))},
                { GetModulePrefixFromClass(nameof(NeckValuesResources)), stringLocalizerFactory.Create(typeof(NeckValuesResources))},
                { GetModulePrefixFromClass(nameof(HeadValuesResources)), stringLocalizerFactory.Create(typeof(HeadValuesResources))},
                { _generalTranslationsKey, stringLocalizerFactory.Create(typeof(GeneralValuesResources))}
            };
        }

        public static IStringLocalizer GetLocalizer(IReadOnlyDictionary<string, IStringLocalizer> localizers, string rrid)
        {
            if (localizers == null) throw new ArgumentNullException(nameof(localizers));
            if (rrid == null) throw new ArgumentNullException(nameof(rrid));


            var shortModulePrefix = rrid.Substring(0, _moduleNamePrefixSize);
            if (!localizers.TryGetValue(shortModulePrefix, out IStringLocalizer localizer))
            {
                var modulePrefixParts = rrid.Split(keySeparator);
                var fullModulePrefix = string.Join(keySeparator, modulePrefixParts[0], modulePrefixParts[1]);
                localizers.TryGetValue(fullModulePrefix, out IStringLocalizer localizer2);
                return localizer2;
            }
            return localizer;
        }

        private static string GetModulePrefixFromClass(string className)
        {
            return className.ToLowerInvariant().Substring(0, _moduleNamePrefixSize);
        }
    }
}
