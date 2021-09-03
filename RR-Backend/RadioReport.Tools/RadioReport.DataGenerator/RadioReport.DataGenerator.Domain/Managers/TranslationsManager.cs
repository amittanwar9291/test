using Microsoft.Extensions.Localization;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using RadioReport.DataGenerator.Domain.Interfaces;
using System;
using System.Collections.Generic;

namespace RadioReport.DataGenerator.Domain.Managers
{
    public class TranslationsManager : ITranslationsManager
    {
        private readonly IStringLocalizerFactory _stringLocalizerFactory;
        private readonly IReadOnlyDictionary<string, IStringLocalizer> _localizers;

        public TranslationsManager(IStringLocalizerFactory stringLocalizerFactory)
        {
            _stringLocalizerFactory = stringLocalizerFactory;
            _localizers = ReportTranslationManager.InitializeDictionary(_stringLocalizerFactory);
        }

        public bool CheckValueTranslation(RadioReportValue valueToTranslate, string languageCode)
        {
            if (valueToTranslate?.TranslationKey != null)
            {
                var translationKey = valueToTranslate.TranslationKey;
                var localizer = ReportTranslationManager.GetLocalizer(_localizers, valueToTranslate.RadioReportId);
                ReportTranslationManager.SetCultureInfo(languageCode);

                if (localizer != null && ReportTranslationManager.IsTranslatableType(valueToTranslate))
                {
                    return CheckKeyValue(localizer, translationKey);
                }
                return true;
            }
            return false;
        }

        private bool CheckKeyValue(IStringLocalizer moduleLocalizer, string key)
        {
            if (moduleLocalizer == null) throw new ArgumentNullException(nameof(moduleLocalizer));
            if (key == null) throw new ArgumentNullException(nameof(key));

            var resultTranslation = ReportTranslationManager.GetValueFromResource(moduleLocalizer, key);

            if (resultTranslation == key)
            {
                resultTranslation =  _localizers["General"][key].Value;
            }

            return resultTranslation != key;
        }
    }
}
