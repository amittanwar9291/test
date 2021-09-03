using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using RadioReport.Common.Helpers;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;

namespace RadioReport.Common.Module.Logic.Attributes
{
    /// <summary>
    /// Helper class responsible for "reading" all available field translations.
    /// Translations are available for enums that do not have separate rrids on each value. (usually refers to dropdowns, localizers)
    /// </summary>
    public static class TranslationsReader
    {
        private static readonly List<string> _enumValuesToIgnore = new List<string>() { "value__", "None" };

        /// <summary>
        /// The method via reflection mechanism goes through model classes of given types and returns a list of translation keys and translations.
        /// </summary>
        /// <param name="translationManager">Instance of translation manager</param>
        /// <param name="pageDetails">List of model types (for pages) and their page numbers to retriew translations from</param>
        /// <param name="languageCode"></param>
        /// <param name="moduleName"></param>
        /// <returns></returns>
        public static IDictionary<string, IDictionary<string, string>> GetTranslationsList(IReportTranslationManager translationManager,
            IEnumerable<(Type type, byte pageNumber)> pageDetails, string languageCode, string moduleName)
        {
            if (pageDetails is null)
            {
                throw new ArgumentNullException(nameof(pageDetails));
            }

            var result = new Dictionary<string, IDictionary<string, string>>();
            foreach (var (type, pageNumber) in pageDetails)
            {
                ProcessModelToGetTranslations(result, translationManager, type, languageCode, moduleName, pageNumber);
            }
            return result;
        }

        /// <summary>
        /// The method via reflection mechanism goes through model classe of a given type 
        /// and appends values to result list of translation keys and translations (separate for each rrid).
        /// </summary>
        /// <param name="result">Result list to append new values to</param>
        /// <param name="translationManager">Instance of translation manager</param>
        /// <param name="type">Class type (page) to scan</param>
        /// <param name="languageCode"></param>
        /// <param name="moduleName"></param>
        /// <param name="pageNumber"></param>
        private static void ProcessModelToGetTranslations(IDictionary<string, IDictionary<string, string>> result, IReportTranslationManager translationManager,
            Type type, string languageCode, string moduleName, byte pageNumber)
        {
            foreach (var property in type.GetProperties())
            {
                ProcessPropertyToGetTranslations(result, translationManager, property, languageCode, moduleName, pageNumber);
            }
        }

        /// <summary>
        /// The method via reflection mechanism checks the property and looks for enums to retriew translations from.
        /// </summary>
        /// <param name="result">Result list to append new values to</param>
        /// <param name="translationManager">Instance of translation manager</param>
        /// <param name="info">Property info to scan and retrieve translations from</param>
        /// <param name="languageCode"></param>
        /// <param name="moduleName"></param>
        /// <param name="pageNumber"></param>
        private static void ProcessPropertyToGetTranslations(IDictionary<string, IDictionary<string, string>> result, IReportTranslationManager translationManager,
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
        /// <summary>
        /// The method via reflection mechanism gets all enum values and checks if enum should have translations retrieved:
        /// If separate values have rrids - translations are NOT retrieved.
        /// If separate values don't have rrids - translations are retrieved.
        /// </summary>
        /// <param name="result">Result list to append new values to</param>
        /// <param name="translationManager">Instance of translation manager</param>
        /// <param name="info">Property info to scan and retrieve translations from</param>
        /// <param name="languageCode"></param>
        /// <param name="moduleName"></param>
        /// <param name="pageNumber"></param>
        private static void ProcessEnumToGetTranslations(IDictionary<string, IDictionary<string, string>> result, IReportTranslationManager translationManager,
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

        /// <summary>
        /// The method tries to obtain translation for an enum values. Translations are appended to result list (separate for each rrid).
        /// </summary>
        /// <param name="result">Result list to append new values to</param>
        /// <param name="translationManager">Instance of translation manager</param>
        /// <param name="enumFields">Fields to obtains translations for</param>
        /// <param name="languageCode">Language code</param>
        /// <param name="rridAttributes">List of parent rrid attribute.</param>
        private static void RetrieveTranslationsForEnumProperty(IDictionary<string, IDictionary<string, string>> result, IReportTranslationManager translationManager,
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

                    var translation = translationManager.GetValueTranslation(mockRadioReportValue, languageCode);

                    if (result.ContainsKey(attribute.Id))
                    {
                        result[attribute.Id].TryAdd(translationKey, translation);
                    }
                    else
                    {
                        result.TryAdd(attribute.Id, new Dictionary<string, string>() { { translationKey, translation } });
                    }
                }
            }
        }
        #endregion Enums
    }
}