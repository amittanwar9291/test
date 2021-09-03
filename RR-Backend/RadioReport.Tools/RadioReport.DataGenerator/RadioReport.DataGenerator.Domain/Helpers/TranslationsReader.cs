using RadioReport.Common.Helpers;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.DataGenerator.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace RadioReport.DataGenerator.Domain.Helpers
{
    public static class TranslationsReader
    {
        private static readonly List<string> _enumValuesToIgnore = new List<string>() { "value__", "None" };

        public static IDictionary<string, IDictionary<string, string>> ProcessModelToGetTranslations(ITranslationsManager translationManager,
            Type type, string languageCode, string moduleName, byte pageNumber)
        {
            if (type == null) throw new ArgumentNullException(nameof(type));

            var result = new Dictionary<string, IDictionary<string, string>>();
            foreach (var property in type.GetProperties())
            {
                ProcessPropertyToGetTranslations(result, translationManager, property, languageCode, moduleName, pageNumber);
            }
            return result;
        }

        private static void ProcessModelToGetTranslations(IDictionary<string, IDictionary<string, string>> result, ITranslationsManager translationManager,
            Type type, string languageCode, string moduleName, byte pageNumber)
        {
            foreach (var property in type.GetProperties())
            {
                ProcessPropertyToGetTranslations(result, translationManager, property, languageCode, moduleName, pageNumber);
            }
        }

        private static void ProcessPropertyToGetTranslations(IDictionary<string, IDictionary<string, string>> result, ITranslationsManager translationManager,
            PropertyInfo info, string languageCode, string moduleName, byte pageNumber)
        {
            if (typeof(ModelBase).IsAssignableFrom(info.PropertyType))
            {
                ProcessModelToGetTranslations(result, translationManager, info.PropertyType.GetTypeInfo(), languageCode, moduleName, pageNumber);
            }

            if (info.PropertyType.IsEnum)
            {
                ProcessEnumToGetTranslations(result, translationManager, info, languageCode, moduleName, pageNumber);
            }

            if (typeof(IEnumerable<ICollectionItem>).IsAssignableFrom(info.PropertyType))
            {
                var collectionElementsType = info.PropertyType.GetGenericArguments().FirstOrDefault();
                if (collectionElementsType != null)
                {
                    ProcessModelToGetTranslations(result, translationManager, collectionElementsType, languageCode, moduleName, pageNumber);
                }
            }
        }

        #region Enums
        private static void ProcessEnumToGetTranslations(IDictionary<string, IDictionary<string, string>> result, ITranslationsManager translationManager,
            PropertyInfo info, string languageCode, string moduleName, byte pageNumber)
        {
            var allEnumFields = info.PropertyType.GetFields();
            var rrIdAttributes = info.GetCustomAttributes(typeof(RadioReportIdAttribute), false).Select(rr => rr as RadioReportIdAttribute);
            var validRrIdAttributes = rrIdAttributes.Where(rr => rr.IsExportable && RridHelper.CheckRridValidityForPage(rr.Id, moduleName, pageNumber));
            
            if (validRrIdAttributes?.Any() ?? false)
            {
                RetrieveTranslationsForEnumProperty(result, translationManager, allEnumFields, languageCode, validRrIdAttributes);
            }    
        }

        private static void RetrieveTranslationsForEnumProperty(IDictionary<string, IDictionary<string, string>> result, ITranslationsManager translationManager,
            FieldInfo[] enumFields, string languageCode, IEnumerable<RadioReportIdAttribute> rridAttributes)
        {
            foreach (var field in enumFields.Where(f => !_enumValuesToIgnore.Contains(f.Name)))
            {
                foreach (var attribute in rridAttributes)
                {
                    var translationKey = RadioReportIdAttributeReader.CreateTranslationKey(field.ReflectedType?.Name, field.Name, attribute.AlternativeTranslationSuffix);

                    var mockRadioReportValue = new RadioReportValue()
                    {
                        RadioReportId = attribute.Id,
                        TranslationKey = translationKey,
                        TypeName = field.FieldType.Name
                    };

                    if(!translationManager.CheckValueTranslation(mockRadioReportValue, languageCode))
                    {
                        if (result.ContainsKey(attribute.Id))
                        {
                            result[attribute.Id].TryAdd(translationKey, "missing");
                        }
                        else
                        {
                            result.TryAdd(attribute.Id, new Dictionary<string, string>() { { translationKey, "missing" } });
                        }
                    }    
                }
            }
        }
        #endregion Enums
    }
}