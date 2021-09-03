using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Reflection;
using System.Text;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.Common.Logic.Attributes
{
    /// <summary>
    /// Helper class responsible for "reading" and handling RadioReportId attribute.  
    /// </summary>
    public static class RadioReportIdAttributeReader
    {
        private const char _keySeparator = '_';
        private const char _valueSeparator = ',';

        /// <summary>
        /// The method via reflection mechanism goes through model class and return values of field where radioReporId attribute is assigned
        /// </summary>
        /// <param name="model">Model for reading</param>
        /// <returns>Collection of values for radioreportid attributes</returns>
        public static IEnumerable<RadioReportValue> GetValuesFromAllProperties(ModelBase model)
        {
            if (model is null)
            {
                throw new ArgumentNullException(nameof(model));
            }

            var result = new List<RadioReportValue>();
            var type = model.GetType();

            foreach (var item in type.GetProperties())
            {
                result.AddRange(GetValueFromProperty(item, model, null));
            }

            return result;
        }

        private static IEnumerable<RadioReportValue> GetValueFromProperty(PropertyInfo info, ModelBase model, ICollectionItem collectionItem) =>
            GetValueFromProperty(info, model, null, collectionItem);

        /// <summary>
        /// The method via reflection mechanism goes through specified property and return values of field if radioReporId attribute is assigned
        /// </summary>
        /// <param name="info">Property info classes described field/property</param>
        /// <param name="model">Model for reading</param>
        /// <param name="instanceName">Name of instance take into account</param>
        /// <returns>Collection of values for radioreportid attributes</returns>
        private static IEnumerable<RadioReportValue> GetValueFromProperty(PropertyInfo info, ModelBase model, string instanceName, ICollectionItem collectionItem)
        {
            var result = new List<RadioReportValue>();
            var rrIdAtributes = info.GetCustomAttributes(typeof(RadioReportIdAttribute), false);
            var value = info.GetValue(model);

            if (rrIdAtributes != null && rrIdAtributes.Length > 0)
            {
                foreach (var item in rrIdAtributes)
                {
                    var attributeValue = (RadioReportIdAttribute) item;
                    if (ShouldEvaluateClassAttribute(attributeValue, instanceName, collectionItem))
                    {
                        if (attributeValue.IsExportable)
                        {
                            var shouldAdd = true;
                            if (!string.IsNullOrEmpty(attributeValue.CustomConditionName) && model is IRadioReportIdConditionEvaluator evaluator)
                            {
                                if (!evaluator.CheckCondition(attributeValue.CustomConditionName))
                                {
                                    shouldAdd = false;
                                }
                            }

                            if (shouldAdd)
                            {
                                var rrValue = new RadioReportValue
                                {
                                    RadioReportId = GetRRid(attributeValue, collectionItem),
                                    Value = attributeValue.Value ?? value,
                                    AlternativeTranslationSuffix = attributeValue.AlternativeTranslationSuffix,
                                    TypeName = attributeValue.Value == null ? value?.GetType().ToString() : attributeValue.Value.GetType().ToString(),
                                    CollectionItemType = collectionItem != null ? collectionItem.InstanceName : string.Empty,
                                    DecimalPlaces = attributeValue.DecimalPlaces
                                };
                                PrepareTranslationKey(rrValue, attributeValue.AlternativeTranslationSuffix);
                                result.Add(rrValue);
                            }
                        }

                        var currentInstanceName = GetCurrentInstanceName(attributeValue.InstanceName);
                        if (ShouldEvaluateNotExportable(attributeValue, currentInstanceName, model, instanceName, collectionItem))
                        {
                            if (value is ModelBase)
                            {
                                result.AddRange(GetValuesFromAllProperties(value as ModelBase, attributeValue.InstanceName, collectionItem));
                            }
                            if (info.PropertyType.IsEnum)
                            {
                                result.AddRange(GetValueFromEnum(info, model, attributeValue.InstanceName, collectionItem));
                            }
                        }
                    }
                }
            }
            else if (value is ModelBase)
            {
                result.AddRange(GetValuesFromAllProperties(value as ModelBase, instanceName, collectionItem));
            }
            else if (info.PropertyType.IsEnum)
            {
                result.AddRange(GetValueFromEnum(info, model, instanceName, collectionItem));
            }
            else if (value is IEnumerable<ICollectionItem>)
            {
                foreach (var item in info.GetValue(model) as IEnumerable<ICollectionItem>)
                {
                    result.AddRange(GetValuesFromAllProperties(item as ModelBase, null, item));
                }
            }

            return result;
        }

        /// <summary>
        /// The method via reflection mechanism goes through model class and return values of field where radioReporId attribute is assigned
        /// </summary>
        /// <param name="model">Model for reading</param>
        /// <param name="instanceName">Name of instance take into account</param>
        /// <returns>Collection of values for radioreportid attributes</returns>
        private static IEnumerable<RadioReportValue> GetValuesFromAllProperties(ModelBase model, string instanceName, ICollectionItem collectionItem)
        {
            var result = new List<RadioReportValue>();
            var type = model.GetType();

            foreach (var item in type.GetProperties())
            {
                result.AddRange(GetValueFromProperty(item, model, instanceName, collectionItem));
            }

            return result;
        }

        /// <summary>
        /// The method gets value for enum field if radioreportid attribute is assigned to it
        /// </summary>
        /// <param name="info">Property info classes described field/property</param>
        /// <param name="model">Model for reading</param>
        /// <param name="instanceName">Name of instance take into account</param>
        /// <returns>Collection of values for radioreportid attributes</returns>
        private static IEnumerable<RadioReportValue> GetValueFromEnum(PropertyInfo info, ModelBase model, string instanceName, ICollectionItem collectionItem)
        {
            var result = new List<RadioReportValue>();
            var value = info.GetValue(model);

            if (value != null)
            {
                var enumValues = value.ToString().Split(",");
                foreach (var item in enumValues)
                {
                    result.AddRange(GetValueForEnumField(info, model, item.Trim(), instanceName, collectionItem));
                }
            }

            // Special case when localizer is group of checkboxes.
            // Foreach above returns many rrvalues for every checked enum value. Hence removing duplicates.
            // One of them might be true, hence selecting True value first.
            if (!info.GetCustomAttributes<RadioReportIdAttribute>().Any() && info.PropertyType.GetCustomAttribute<FlagsAttribute>() != null)
            {
                result = result
                    .GroupBy(g => g.RadioReportId)
                    .Select(g => g.FirstOrDefault(v => v.Value is "True") ?? g.First())
                    .ToList();
            }

            return result;
        }

        /// <summary>
        /// Method retrieves name of instance (part after last dot) out of full path of instance name
        /// </summary>
        /// <param name="fullInstanceName">Full path of instance name</param>
        /// <returns>Name of instance</returns>
        private static string GetCurrentInstanceName(string fullInstanceName)
        {
            var result = fullInstanceName;
            if (fullInstanceName?.LastIndexOf('.') > 0)
            {
                result = fullInstanceName.Remove(fullInstanceName.LastIndexOf('.'));
            }

            return result;
        }

        /// <summary>
        /// The method gets value for enum fields if radioreportid attribute is assigned to it
        /// </summary>
        /// <param name="info">Property info classes described field/property</param>
        /// <param name="model">Model for reading</param>
        /// <param name="instanceName">Name of instance take into account</param>
        /// <param name="fieldName">Name of enum field take into account</param>
        /// <returns>Collection of values for radioreportid attributes</returns>
        private static IEnumerable<RadioReportValue> GetValueForEnumField(PropertyInfo info, ModelBase model, string fieldName, string instanceName,
            ICollectionItem collectionItem)
        {
            var result = new List<RadioReportValue>();
            var fieldInfo = info.PropertyType.GetField(fieldName);
            if (fieldInfo != null)
            {
                var allEnumFields = fieldInfo.DeclaringType.GetFields();

                foreach (var enumField in allEnumFields)
                {
                    var allAttributes = enumField.GetCustomAttributes(typeof(RadioReportIdAttribute), false);
                    if (allAttributes != null && allAttributes.Length > 0)
                    {
                        foreach (var attribute in allAttributes)
                        {
                            var attributeValue = (RadioReportIdAttribute) attribute;
                            if (ShouldEvaluateEnumAttribute(attributeValue, instanceName, collectionItem))
                            {
                                var shouldAdd = true;
                                if (!string.IsNullOrEmpty(attributeValue.CustomConditionName) && model is IRadioReportIdConditionEvaluator evaluator)
                                {
                                    if (!evaluator.CheckCondition(attributeValue.CustomConditionName))
                                    {
                                        shouldAdd = false;
                                    }
                                }

                                if (shouldAdd)
                                {
                                    var enumValue = fieldInfo.GetValue(model);
                                    string value = false.ToString();
                                    if (enumValue.ToString().Equals(enumField.Name, StringComparison.Ordinal))
                                    {
                                        value = attributeValue.Value == null ? true.ToString() : attributeValue.Value.ToString();
                                    }

                                    var rrValue = new RadioReportValue
                                    {
                                        RadioReportId = GetRRid((RadioReportIdAttribute) attribute, collectionItem),
                                        Value = value,
                                        AlternativeTranslationSuffix = attributeValue.AlternativeTranslationSuffix,
                                        TypeName = attributeValue.Value == null
                                            ? fieldInfo.GetValue(model).GetType().ToString()
                                            : attributeValue.Value.GetType().ToString(),
                                        CollectionItemType = collectionItem != null ? collectionItem.InstanceName : string.Empty,
                                        DecimalPlaces = attributeValue.DecimalPlaces
                                    };
                                    PrepareTranslationKey(rrValue, attributeValue.AlternativeTranslationSuffix);
                                    result.Add(rrValue);
                                }
                            }
                        }
                    }
                }
            }

            return result;
        }

        private static bool ShouldEvaluateClassAttribute(RadioReportIdAttribute attributeValue, string instanceName, ICollectionItem collectionItem)
        {
            // nested object instance name
            var result = !string.IsNullOrEmpty(instanceName) && !string.IsNullOrEmpty(attributeValue.InstanceName) && attributeValue.InstanceName == instanceName;

            // certain finding exclusive
            result |= !string.IsNullOrEmpty(collectionItem?.InstanceName) && !string.IsNullOrEmpty(attributeValue.InstanceName) &&
                      attributeValue.InstanceName == collectionItem?.InstanceName;

            // common in finding
            result |= string.IsNullOrEmpty(attributeValue.InstanceName) && string.IsNullOrEmpty(instanceName) && !string.IsNullOrEmpty(collectionItem?.InstanceName);

            // no instance name no problem
            result |= string.IsNullOrEmpty(attributeValue.InstanceName) && string.IsNullOrEmpty(instanceName) && string.IsNullOrEmpty(collectionItem?.InstanceName);

            // custom condition name sometimes is used when instancename differs to evaluate anyways
            result |= !string.IsNullOrEmpty(attributeValue.CustomConditionName) &&
                      (instanceName == collectionItem?.InstanceName || instanceName == attributeValue.InstanceName);

            // Not exportable that have instance name should also be evaluated
            result |= !attributeValue.IsExportable;

            return result;
        }

        private static bool ShouldEvaluateEnumAttribute(RadioReportIdAttribute attributeValue, string instanceName, ICollectionItem collectionItem)
        {
            // check instance names
            var result = !string.IsNullOrEmpty(attributeValue.InstanceName) &&
                         (attributeValue.InstanceName.Equals(collectionItem?.InstanceName, StringComparison.Ordinal) ||
                          attributeValue.InstanceName.Equals(instanceName, StringComparison.Ordinal));

            // custom condition name sometimes is used when instancename differs to evaluate anyways, but later OR is necessary for not reporting duplicates
            result |= !string.IsNullOrEmpty(attributeValue.CustomConditionName) &&
                      (instanceName == collectionItem?.InstanceName || instanceName == attributeValue.InstanceName);

            // normal radio in normal page model or common for all findings
            result |= string.IsNullOrEmpty(attributeValue.InstanceName);

            return result;
        }

        private static bool ShouldEvaluateNotExportable(RadioReportIdAttribute attributeValue, string currentInstanceName, ModelBase model, string instanceName,
            ICollectionItem collectionItem)
        {
            // if we are on top level go to model/radio-enum
            var result = currentInstanceName == null;

            // if we are in finding go into anyway (case for simple objects within findings without instance names)
            result |= model is ICollectionItem;

            // no instance names from parents
            result |= instanceName == null && collectionItem?.InstanceName == null;

            // nested model/radio-enum
            result |= instanceName != null && instanceName == currentInstanceName;

            // nested model/radio-enum when parent is finding
            result |= collectionItem?.InstanceName != null && collectionItem?.InstanceName == currentInstanceName;

            // sometimes everthing checks but for some reason we do not want to go into some elements.
            if (result &&
                !string.IsNullOrEmpty(attributeValue.CustomConditionName) &&
                model is IRadioReportIdConditionEvaluator evaluator &&
                !evaluator.CheckCondition(attributeValue.CustomConditionName))
            {
                result = false;
            }

            return result;
        }

        private static void PrepareTranslationKey(RadioReportValue radioReportValue, string modificator)
        {
            if (radioReportValue.Value != null)
            {
                var valueAsString = radioReportValue.ValueAsString();
                if (string.IsNullOrEmpty(radioReportValue.TypeName))
                {
                    radioReportValue.TranslationKey = valueAsString;
                }
                else if (valueAsString.Contains(_valueSeparator, StringComparison.Ordinal))
                {
                    var rrValues = valueAsString.Split(_valueSeparator).ToList();
                    radioReportValue.TranslationKey = string.Join($"{_valueSeparator} ",
                        rrValues.Select(value => CreateTranslationKey(radioReportValue.TypeName, value.Trim(), modificator)));
                }
                else
                {
                    radioReportValue.TranslationKey = CreateTranslationKey(radioReportValue.TypeName, valueAsString, modificator);
                }
            }
        }

        private static string GetTypeName(string fullTypeName)
        {
            var lastDotIndex = fullTypeName?.LastIndexOf('.') ?? -1;

            return lastDotIndex >= 0 ? fullTypeName.Substring(lastDotIndex + 1) : fullTypeName;
        }

        private static string GetRRid(RadioReportIdAttribute attributeValue, ICollectionItem collectionItem)
        {
            string findingSuffix;
            if (collectionItem is FindingBase findingBase && findingBase.ParentNumber.GetValueOrDefault() > 0)
            {
                findingSuffix = "-F" + findingBase.ParentNumber.ToString() + "-D" + findingBase.Number.ToString(CultureInfo.InvariantCulture);
            }
            else
            {
                findingSuffix = collectionItem?.Number > 0 ? "-F" + collectionItem?.Number.ToString(CultureInfo.InvariantCulture) : string.Empty;
            }
            return attributeValue.Id + findingSuffix;
        }

        public static string CreateTranslationKey(string typeName, string value, string modificator)
        {
            var sb = new StringBuilder();
            sb.Append(GetTypeName(typeName)).Append(_keySeparator).Append(value);
            if (!string.IsNullOrEmpty(modificator))
            {
                sb.Append(_keySeparator).Append(modificator);
            }
            return sb.ToString();
        }
    }
}
