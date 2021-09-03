using AutoFixture;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using RadioReport.Common.Logic.Attributes;
using System;
using AutoFixture.Kernel;
using System.IO;
using System.Collections;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.DataGenerator.Domain.Interfaces;
using Microsoft.Extensions.Localization;
using RadioReport.Common.Module.Logic.Resources.ReportGenerator;

namespace RadioReport.DataGenerator.Domain.Managers
{
    public class DataGeneratorService : IDataGeneratorService
    {
        private readonly IStringLocalizerFactory _stringLocalizerFactory;

        public DataGeneratorService(IStringLocalizerFactory stringLocalizerFactory)
        {
            _stringLocalizerFactory = stringLocalizerFactory;
            var test = _stringLocalizerFactory.Create(typeof(HeadValuesResources));
            var res = test["CerebrospinalFluidSpaceFindingType_NormVariantVentricle"].Value;
        }

        public Type GetPageType(string moduleName, string pageName)
        {
            var fixture = prepareFixture();
            var moduleAssembly = loadModuleAssembly(moduleName);
            return getPageType(moduleAssembly, pageName);
        }

        public PageModelBase GetExamplePage(string moduleName, string pageName)
        {
            var fixture = prepareFixture();
            var moduleAssembly = loadModuleAssembly(moduleName);
            var pageType = getPageType(moduleAssembly, pageName);
            var pageManagerType = getPageManager(moduleAssembly, pageName);

            if (pageType is null)
            {
                return null;
            }

            var pageInstance = new SpecimenContext(fixture).Resolve(pageType) as PageModelBase;
            var findingListProperties = getFindingsProperties(pageType);
            createAndSetFindings(findingListProperties, pageManagerType, pageInstance, fixture);

            return pageInstance;
        }

        public IEnumerable<RadioReportValue> GetValuesForPage(string moduleName, string pageName)
        {
            var pageModel = GetExamplePage(moduleName, pageName);
            return pageModel is null ? null : RadioReportIdAttributeReader.GetValuesFromAllProperties(pageModel);
        }

        public IEnumerable<string> FindDuplicates(IEnumerable<RadioReportValue> values) =>  
            values
                ?.GroupBy(x => x.RadioReportId)
                ?.Where(g => g.Count() > 1)
                ?.Select(g => g.First()?.RadioReportId);   

        private void createAndSetFindings(IEnumerable<PropertyInfo> findingListProperties, Type pageManagerType, PageModelBase pageInstance, Fixture fixture)
        {
            foreach (var findingListProperty in findingListProperties ?? Enumerable.Empty<PropertyInfo>())
            {
                var findingType = findingListProperty.PropertyType.GetGenericArguments().First();
                var findingTypeEnum = getTypeOfFindingTypeEnum(pageManagerType, findingType);
                var findingTypeProperty = findingType.GetProperties().First(p => p.PropertyType == findingTypeEnum);
                var resultFindings = generateListOfType(findingType) as IList;
                var fields = findingTypeEnum
                    .GetFields(BindingFlags.Public | BindingFlags.Static)
                    .Where(fInfo => fInfo.Name != "None")
                    .ToArray();

                byte i = 0;
                while (i < fields.Length)
                {
                    var enumValue = fields[i];
                    var finding = new SpecimenContext(fixture).Resolve(findingType) as FindingBase;
                    finding.Number = ++i;
                    finding.ParentNumber = null;
                    findingTypeProperty.SetValue(finding, Enum.Parse(findingTypeEnum, enumValue.Name));
                    resultFindings.Add(finding);
                }

                findingListProperty.SetValue(pageInstance, resultFindings);
            }
        }

        private Fixture prepareFixture()
        {
            var fixture = new Fixture();
            fixture.Register<int?>(() => 0);
            fixture.Register<bool>(() => true);
            fixture.Register<string>(() => "test");
            
            return fixture;
        }

        private Assembly loadModuleAssembly(string moduleName)
        {
            var fileName = Directory.GetFiles(AppDomain.CurrentDomain.BaseDirectory, $"*.{moduleName}.Domain.dll")?.FirstOrDefault();
            if (!string.IsNullOrEmpty(fileName))
            {
                return Assembly.LoadFile(fileName);
            }
            return null;
        }

        private Type getPageType(Assembly moduleAssembly, string pageName) =>
            moduleAssembly?.GetTypes()?.FirstOrDefault(x => x.Name == $"{pageName}Page");

        private Type getPageManager(Assembly moduleAssembly, string pageName) =>
            moduleAssembly?.GetTypes()?.FirstOrDefault(x => x.Name == $"{pageName}PageManager");

        // Get properties from pageType which are List<Finding>
        private IEnumerable<PropertyInfo> getFindingsProperties(Type pageType) =>
            pageType
                .GetProperties()
                .Where(prop => 
                    prop.PropertyType.IsGenericType &&
                    prop.PropertyType.GetInterface(nameof(IEnumerable)) != null &&
                    prop.PropertyType.GetGenericArguments().Any(arg => arg.GetInterface(nameof(ICollectionItem)) != null)
                 );

        // Gets enum (finding type enum) from manager type list for certain finding.
        // For example for 3 page and finding Sequence result will be type of enum SequenceType
        private Type getTypeOfFindingTypeEnum(Type managerType, Type findingType)
        {
            var instance = Activator.CreateInstance(managerType, null, null, null, null, null, null);
            var findingTypeEnums = managerType.GetRuntimeProperties().FirstOrDefault(prop => prop.Name == "FindingTypes");
            var val = findingTypeEnums?.GetValue(instance) as List<Type>;
            return val?.FirstOrDefault(type => findingType.GetProperties().Any(prop => prop.PropertyType == type));
        }

        private IEnumerable generateListOfType (Type typeParameter)
        {
            var listType = typeof(List<>);
            var constructedListType = listType.MakeGenericType(typeParameter);
            var instance = Activator.CreateInstance(constructedListType) as IEnumerable;
            return instance;
        }
    }
}
