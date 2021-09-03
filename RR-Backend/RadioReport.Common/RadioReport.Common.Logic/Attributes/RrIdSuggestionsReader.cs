using RadioReport.Common.Helpers;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace RadioReport.Common.Logic.Attributes
{
    /// <summary>
    /// Helper class responsible for "reading" all ids of RadioReportId attribute of a given type (usually page) 
    /// and the suggestion for values of its properties.  
    /// </summary>
    public static class RrIdSuggestionsReader
    {
        private static readonly List<string> _booleanValues = new List<string>() { true.ToString(), false.ToString() };
        private const string _enumValueToIgnore = "value__";

        /// <summary>
        /// The method via reflection mechanism goes through model class of a given type and return a list of ids of radioReportId 
        /// with sets of possible values (only for enums and booleans)
        /// </summary>
        /// <param name="modelType">Type of model to scan (usually page or root model)</param>
        /// <returns>Collection of RadioReportIdAttributeSuggestion objects representing radioreportid attribute ids 
        /// and collection of suggested values and finding suggested values</returns>
        public static IDictionary<string, HashSet<string>> GetAvailableFieldIds(Type modelType, string moduleName,
            byte pageNumber)
        {
            if (modelType is null)
            {
                throw new ArgumentNullException(nameof(modelType));
            }

            IDictionary<string, HashSet<string>> result = new Dictionary<string, HashSet<string>>();
            ProcessModelToGetRrIdsAndSuggestions(result, modelType, moduleName, pageNumber);
            return result;
        }

        /// <summary>
        /// The method via reflection mechanism goes through properties of a given model and appends the provided result list with
        /// found rrids and their suggested values.
        /// </summary>
        /// <param name="result">Result list to append new values to</param>
        /// <param name="type">Model type to scan properties of</param>
        private static void ProcessModelToGetRrIdsAndSuggestions(IDictionary<string, HashSet<string>> result, Type type,
            string moduleName, byte pageNumber)
        {
            foreach (var property in type.GetProperties())
            {
                ProcessPropertyToGetRrIdsAndSuggestions(result, property, moduleName, pageNumber);
            }
        }

        /// <summary>
        /// The method via reflection mechanism gets rrid attributes of a given property, appends result list with rrids 
        /// and value suggestions and scans inner sub properties for rrid attributes.
        /// </summary>
        /// <param name="result">Result list to append new values to</param>
        /// <param name="info">Property info of a property to scan and retrieve rrids from</param>
        private static void ProcessPropertyToGetRrIdsAndSuggestions(IDictionary<string, HashSet<string>> result,
            PropertyInfo info, string moduleName, byte pageNumber)
        {
            // getting rrid of current property (of any kind)
            var rrIdAttributes = info.GetCustomAttributes(typeof(RadioReportIdAttribute), false);
            RetrieveRrIdsAndSuggestionsForProperty(result, rrIdAttributes, info.PropertyType, moduleName, pageNumber);

            if (typeof(ModelBase).IsAssignableFrom(info.PropertyType))
            {
                ProcessModelToGetRrIdsAndSuggestions(result, info.PropertyType.GetTypeInfo(), moduleName, pageNumber);
            }

            if (info.PropertyType.IsEnum)
            {
                ProcessEnumToGetRrIdsAndSuggestions(result, info, rrIdAttributes, moduleName, pageNumber);
            }

            if (typeof(IEnumerable<ICollectionItem>).IsAssignableFrom(info.PropertyType))
            {
                var collectionElementsType = info.PropertyType.GetGenericArguments().FirstOrDefault();
                if (collectionElementsType != null)
                {
                    ProcessModelToGetRrIdsAndSuggestions(result, collectionElementsType, moduleName, pageNumber);
                }
            }
        }

        #region Enums

        /// <summary>
        /// The method via reflection mechanism gets all enum values and their rrid attributes and appends result list with rrids 
        /// and value suggestions.
        /// </summary>
        /// <param name="result">Result list to append new values to</param>
        /// <param name="info">Property info of an enum to scan and retrieve rrids from</param>
        /// <param name="parentRadioReportAttributes">Table of rrid attributes retrieved from a property that is calling this method
        /// (it is used for appending enum values without their own rrids to the rrid of property that uses this enum -
        /// for example in cases of flags)</param>
        private static void ProcessEnumToGetRrIdsAndSuggestions(IDictionary<string, HashSet<string>> result, PropertyInfo info, 
            object[] parentRadioReportAttributes, string moduleName, byte pageNumber)
        {
            var allEnumFields = info.PropertyType.GetFields();

            foreach (var enumField in allEnumFields)
            {
                var enumFieldRrIdAttributes = enumField.GetCustomAttributes(typeof(RadioReportIdAttribute), false);

                // get value suggestions for enum value rrids (case when radio button)
                if (enumFieldRrIdAttributes?.Any() ?? false)
                {
                    AddRrIdsAndSuggestions(result, enumFieldRrIdAttributes, _booleanValues, moduleName, pageNumber);
                }
            }

            // get value suggestions for parent rrids (case when dropdown, slider or localizer)
            if (parentRadioReportAttributes?.Any(rr => (rr as RadioReportIdAttribute).IsExportable) ?? false)
            {
                RetrieveValueSuggestionsForEnumProperty(result, allEnumFields, parentRadioReportAttributes, moduleName, pageNumber);
            }
        }

        /// <summary>
        /// The methods retrieves enum values and adds them as suggested values to the rrid of parent property.
        /// </summary>
        /// <param name="result">Result list to append new values to</param>
        /// <param name="enumFields">Table of enum fields info</param>
        /// <param name="parentRadioReportAttributes">Table of rrid attributes retrieved from a property that is calling this method
        /// (it is used for appending enum values without their own rrids to the rrid of property that uses this enum </param>
        private static void RetrieveValueSuggestionsForEnumProperty(IDictionary<string, HashSet<string>> result, FieldInfo[] enumFields, 
            object[] parentRadioReportAttributes, string moduleName, byte pageNumber)
        {
            var suggestedEnumValues = enumFields.ToList()
                .Select(enumField => enumField.Name)
                .Where(enumVal => !enumVal.Equals(_enumValueToIgnore, StringComparison.Ordinal));

            if (suggestedEnumValues.Any())
            {
                AddRrIdsAndSuggestions(result, parentRadioReportAttributes, suggestedEnumValues, moduleName, pageNumber);
            }
        }

        #endregion Enums

        #region NonEnums

        private static IEnumerable<string> GetSuggestedValuesOfNonEnumProperty(Type propertyType)
        {
            return typeof(bool).IsAssignableFrom(propertyType) ? _booleanValues : Enumerable.Empty<string>();
        }

        #endregion NonEnums

        #region Common

        private static void RetrieveRrIdsAndSuggestionsForProperty(IDictionary<string, HashSet<string>> result,
            object[] radioReportAttributes, Type propetyType, string moduleName, byte pageNumber)
        {
            if (radioReportAttributes?.Length > 0)
            {
                // This list has values if a property is not an enum. Otherwise it is empty and enum values are added in separate method.
                var suggestedValues = GetSuggestedValuesOfNonEnumProperty(propetyType);
                AddRrIdsAndSuggestions(result, radioReportAttributes, suggestedValues, moduleName, pageNumber);
            }
        }

        /// <summary>
        /// The method loops through all radio report id attributes, retrieves rrids, appends them to result list and then for
        /// each id sets provided suggested values.
        /// </summary>
        /// <param name="result">Result list to append new values to</param>
        /// <param name="radioReportAttributes">Table of rrid attributes to retrieve values from</param>
        /// <param name="newSuggestedValues">List of suggested values to append for each rrid</param>
        private static void AddRrIdsAndSuggestions(IDictionary<string, HashSet<string>> result, object[] radioReportAttributes,
            IEnumerable<string> newSuggestedValues, string moduleName, byte pageNumber)
        {
            foreach (RadioReportIdAttribute attribute in radioReportAttributes)
            {
                if (attribute.IsExportable && RridHelper.CheckRridValidityForPage(attribute.Id, moduleName, pageNumber))
                {
                    if (!result.ContainsKey(attribute.Id))
                    {
                        result.Add(attribute.Id, new HashSet<string>());
                    }

                    if (result.TryGetValue(attribute.Id, out HashSet<string> existingSuggestedValues))
                    {
                        if (attribute.Value != null)
                        {
                            existingSuggestedValues.Add(attribute.Value.ToString());
                        }
                        else
                        {
                            foreach (var newSuggestedValue in newSuggestedValues)
                            {
                                existingSuggestedValues.Add(newSuggestedValue);
                            }
                        }
                    }
                }
            }
        }

        #endregion Common
    }
}
