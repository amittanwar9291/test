using System;
using System.Linq;
using System.Reflection;
using ConsoleTables;
using Microsoft.Extensions.DependencyInjection;
using MoreLinq.Extensions;
using RadioReport.Common.Enums;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.API.Helpers;
using RadioReport.Common.Module.API.Models;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using RadioReport.Common.Module.Logic.Services;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;
using RadioReport.Common.Repository;
using Scrutor;

namespace RadioReport.Common.Module.API.Extensions
{
    public static class ModuleServiceCollectionExtensions
    {
        public static void AddModuleSpecific(this IServiceCollection services, ModuleType moduleType)
        {
            services.Scan(scan => scan
                .FromApplicationDependencies(RadioReportAssembly)
                .AddModuleClasses(moduleType, classes => classes.Where(type => type.InheritsOrImplements(typeof(Manager<,>))))
                .AsMatchingInterface().WithScopedLifetime()
                .AddModuleClasses(moduleType, classes => classes.Where(type => type.InheritsOrImplements(typeof(PageManagerBase<,>))))
                .AsImplementedInterfaces().WithScopedLifetime()
                .AddModuleClasses(moduleType, classes => classes.Where(type => type.InheritsOrImplements(typeof(PageRepositoryBase<>))))
                .AsMatchingInterface().WithScopedLifetime()
                .AddModuleClasses(moduleType, classes => classes.Where(type => type.InheritsOrImplements(typeof(PresetRepositoryBase<>))))
                .AsMatchingInterface().WithScopedLifetime()
                .AddModuleClasses(moduleType, classes => classes.Where(type => type.InheritsOrImplements(typeof(ReportGenerationManager))))
                .As<IReportGenerationManager>().WithScopedLifetime()
                .AddModuleClasses(moduleType, classes => classes.Where(type => type.InheritsOrImplements(typeof(ReportPageService))))
                .As<IReportPageService>().WithScopedLifetime()
                .AddModuleClasses(moduleType, classes => classes.Where(type => type.InheritsOrImplements(typeof(ReportTranslationManager))))
                .As<IReportTranslationManager>().WithSingletonLifetime()
                .AddModuleClasses(moduleType, classes => classes.Where(type => type.InheritsOrImplements(typeof(RepositoryBase<>), true)))
                .AsMatchingInterface().WithScopedLifetime()
                .AddClasses(classes => classes.Where(type => type.InheritsOrImplements(typeof(IReportHttpManager))))
                .As<IReportHttpManager>().WithScopedLifetime()
                .AddClasses(classes => classes.Where(type => type.InheritsOrImplements(typeof(IImportReportService))))
                .As<IImportReportService>().WithScopedLifetime()
                .AddClasses(classes => classes.Where(type => type.InheritsOrImplements(typeof(ReportRepository))))
                .As<IRepository<Report>>().WithScopedLifetime()
                .AddClasses(classes => classes.Where(type => type.InheritsOrImplements(typeof(ReportSchemaRepositoryBase))))
                .As<IReportSchemaRepository>().WithScopedLifetime()
                .AddClasses(classes => classes.Where(type => type.InheritsOrImplements(typeof(ReportSchemaSessionRepositoryBase))))
                .As<IReportSchemaSessionRepository>().WithScopedLifetime()
                .AddClasses(classes => classes.Where(type => type.InheritsOrImplements(typeof(FindingLocalizerRepositoryBase))))
                .As<IFindingLocalizerRepository>().WithScopedLifetime()
                .AddClasses(classes => classes.Where(type => type.InheritsOrImplements(typeof(LocalCacheService))))
                .As<ILocalCacheService>().WithSingletonLifetime()
            );

            services.ValidateRegistration<IRepository<Report>>(moduleType);
            services.ValidateRegistration<IReportSchemaRepository>(moduleType);
            services.ValidateRegistration<IReportSchemaSessionRepository>(moduleType);
            services.ValidateRegistration<IFindingLocalizerRepository>(moduleType);
            services.ValidateRegistration<ILocalCacheService>(moduleType);
            services.ValidateRegistration<IImportReportService>(moduleType);
            services.ValidateRegistration<IReportHttpManager>(moduleType);

            services.AddPageHttpManagers<GeneratedControllerPageModelAttribute>((typeof(IPageHttpManager<>), typeof(PageHttpManager<>)));
            services.AddPageHttpManagers<GeneratedControllerPageWithImageModelAttribute>((typeof(IPageWithImageHttpManager<>),
                typeof(PageWithImageHttpManager<>)));

            PrintRadioReportRegistrations(services);
        }

        private static bool RadioReportAssembly(Assembly assembly) =>
            assembly.FullName != null && assembly.FullName.StartsWith("RadioReport", StringComparison.OrdinalIgnoreCase);

        private static IServiceTypeSelector AddModuleClasses(this IImplementationTypeSelector typeSelector, ModuleType moduleType,
            Action<IImplementationTypeFilter> action) =>
            typeSelector.AddClasses(typeFilter =>
            {
                typeFilter.Where(classType => NamespaceContainsModuleName(classType, moduleType) && classType.GetInterfaces().Any());
                action(typeFilter);
            });

        private static bool NamespaceContainsModuleName(Type type, ModuleType moduleType) =>
            type?.Namespace != null &&
            type.Namespace.Contains(moduleType.ToServiceName(), StringComparison.OrdinalIgnoreCase);

        private static void ValidateRegistration<T>(this IServiceCollection services, ModuleType moduleType)
        {
            var serviceType = typeof(T);
            var registrationCount = services.Count(service => service.ServiceType == serviceType);
            if (registrationCount > 1)
            {
                RemoveCommonServiceRegistrations(services, serviceType, moduleType, registrationCount);
            }

            registrationCount = services.Count(service => service.ServiceType == serviceType);
            if (registrationCount != 1)
            {
                throw new InvalidServiceRegistrationException(
                    $"Exact one service implementing {serviceType.Name} must be registered");
            }
        }

        private static void RemoveCommonServiceRegistrations(IServiceCollection services, Type serviceType,
            ModuleType moduleType, int registrationCount)
        {
            var commonRegistrations = services
                .Where(service =>
                    service.ServiceType == serviceType &&
                    !NamespaceContainsModuleName(service.ImplementationType, moduleType))
                .ToList();

            if (commonRegistrations.Count == registrationCount)
            {
                var commonDistinctCount = commonRegistrations.DistinctBy(c => c.ImplementationType).Count();
                if (commonDistinctCount != 1 && commonDistinctCount != commonRegistrations.Count)
                {
                    throw new InvalidServiceRegistrationException(
                        $"Different implementation types from {serviceType.Name} are registered, but both are from common project");
                }

                for (var i = 1; i < commonRegistrations.Count; i++)
                {
                    services.Remove(commonRegistrations[i]);
                }
            }
            else
            {
                commonRegistrations.ForEach(service => services.Remove(service));
            }
        }

        private static void AddPageHttpManagers<T>(this IServiceCollection services, params (Type, Type)[] serviceTuples) where T : Attribute
        {
            foreach (var (service, implementation) in serviceTuples)
            {
                foreach (var pageModelType in AttributeHelper.GetGeneratedControllerTypes<T>())
                {
                    var serviceType = service.MakeGenericType(pageModelType);
                    var implementationType = implementation.MakeGenericType(pageModelType);
                    services.AddScoped(serviceType, implementationType);
                }
            }
        }

        private static void PrintRadioReportRegistrations(IServiceCollection services) =>
            ConsoleTable
                .From(
                    services
                        .Where(s => s.ServiceType.FullName != null &&
                                    s.ServiceType.FullName.StartsWith("RadioReport",
                                        StringComparison.InvariantCultureIgnoreCase))
                        .Select(s => new ShortServiceDescriptor
                        {
                            ServiceType = s.ServiceType,
                            ImplementationType = s.ImplementationType,
                            ServiceLifetime = s.Lifetime.ToString()
                        }))
                .Write();
    }
}
