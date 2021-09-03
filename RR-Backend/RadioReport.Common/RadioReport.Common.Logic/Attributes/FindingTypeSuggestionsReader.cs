using System;
using System.Collections.Generic;

namespace RadioReport.Common.Logic.Attributes
{
    /// <summary>
    /// Helper class responsible for "reading" all suggested finding type enum values.
    /// </summary>
    public static class FindingTypeSuggestionsReader
    {
        private static readonly List<string> _enumValuesToIgnore = new List<string>() { "value__", "None" };

        /// <summary>
        /// The method via reflection mechanism gets suggested enum values for properties passed as argument.
        /// </summary>
        /// <param name="findingTypeProperties">List of properties to retrieve values from</param>
        /// <returns>Collection of finding suggested values</returns>
        public static IEnumerable<string> GetAvailableFindingTypes(List<Type> findingTypes)
        {
            findingTypes ??= new List<Type>();
            List<string> result = new List<string>();
            foreach (var type in findingTypes)
            {
                if (type.IsEnum)
                {
                    result.AddRange(GetFindingTypeSuggestionsFromEnumType(type));
                }
            }
            return result;
        }

        /// <summary>
        /// The method via reflection mechanism gets suggested enum values for given property
        /// </summary>
        /// <param name="type">Property type to get values from</param>
        /// <returns>Collection of finding suggested values</returns>
        private static IEnumerable<string> GetFindingTypeSuggestionsFromEnumType(Type type)
        {
            var allEnumFields = type.GetFields();
            foreach (var enumField in allEnumFields)
            {
                if (!_enumValuesToIgnore.Contains(enumField.Name))
                {
                    yield return enumField.Name;
                }
            }
        }
    }
}
