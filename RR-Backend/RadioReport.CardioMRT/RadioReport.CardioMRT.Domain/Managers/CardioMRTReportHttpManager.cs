using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using RadioReport.Common.Consts;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.CVI42;
using RadioReport.Common.Logic.Models.Kafka.Request;
using RadioReport.Common.Logic.Models.Kafka.Response;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.CardioMRT.Domain.Managers
{
    public class CardioMRTReportHttpManager : ReportHttpManager
    {
        private readonly IReportManager _reportManager;
        private readonly IServiceScopeFactory _serviceScopeFactory;
        private readonly HttpAuthContext _httpAuthContext;
        private readonly ILocalCacheService _cardioMrtLocalCacheService;
        private readonly EnvironmentContext _environmentContext;
        private readonly IKafkaProducer _kafkaProducer;

        public CardioMRTReportHttpManager(
            IReportManager reportManager,
            IKafkaProducer kafkaProducer,
            ILogger<CardioMRTReportHttpManager> logger,
            IImportReportService importReportService,
            HttpAuthContext httpAuthContext,
            IReportTextService reportTextService,
            IReportService reportService,
            ModuleContext moduleContext,
            IReportPageService reportPageService,
            IServiceScopeFactory serviceScopeFactory,
            ILocalCacheService cardioMrtLocalCacheService,
            EnvironmentContext environmentContext,
            ILicenseService licenseService,
            IReportStatusService reportStatusService,
            IOptions<LicenseOptions> licenseOptions
        ) : base(reportManager, kafkaProducer, logger, importReportService, httpAuthContext, reportTextService, reportService, moduleContext, reportPageService,
            licenseService, reportStatusService, environmentContext, licenseOptions)
        {
            _reportManager = reportManager;
            _serviceScopeFactory = serviceScopeFactory;
            _cardioMrtLocalCacheService = cardioMrtLocalCacheService;
            _environmentContext = environmentContext;
            _kafkaProducer = kafkaProducer;
            _httpAuthContext = httpAuthContext;
        }

        public override async Task UpdateAfterCreate(Report report)
        {
            if (!_environmentContext.DeploymentOptions.TryGetValue(DeploymentOptionKeys.Cvi42Key, out var isCvi42) ||
                !isCvi42)
            {
                return;
            }

            if (report != null)
            {
                var cvi42Request = new GetCvi42XmlSyncRequest { StudyInstanceUid = report.StudyInstanceUID };

                GetCvi42XmlSyncResponse cvi42Response;
                try
                {
                    cvi42Response = await _kafkaProducer.SendSynchronousRequest<GetCvi42XmlSyncResponse>(cvi42Request, _httpAuthContext);
                }
                catch (Exception e)
                {
                    throw new GeneralNotFoundException("CVI 42 Import failed to be processed, but Report is created!", e);
                }

                if (!cvi42Response.Exist)
                {
                    return;
                }

                var cvi42Report = cvi42Response.JsonContent.Deserialize<XmlReport>();
                var cvi42Dict = Cvi42Serializer.GetValuesFromCvi42Report(cvi42Report);

                var groupedPropertyInfo = _cardioMrtLocalCacheService
                    .PropertyInfoMaps[LocalCacheConsts.Cvi42PropertyInfoMapKey]
                    .GroupBy(p => p.Value.DeclaringType).ToList();

                using var scope = _serviceScopeFactory.CreateScope();
                var pageManagers = scope.ServiceProvider.GetServices<IPageManager>();
                foreach (var pageManager in pageManagers)
                {
                    var pageInstance = Activator.CreateInstance(pageManager.PageType);
                    var propertyInfoGroup = groupedPropertyInfo.FirstOrDefault(g => g.Key == pageManager.PageType);

                    if (propertyInfoGroup == null)
                    {
                        continue;
                    }

                    foreach (var propertyInfoPair in propertyInfoGroup)
                    {
                        var value = cvi42Dict.GetValueOrDefault(propertyInfoPair.Key);
                        if (value == null)
                        {
                            continue;
                        }

                        SetCvi42Value(propertyInfoPair.Value, pageInstance, value);
                    }

                    if (pageInstance == null) continue;

                    ((PageModelBase) pageInstance).ReportId = report.Id;
                    await pageManager.AddPageInstance(pageInstance);
                }

                report.Status = ReportStatus.InProgress;
                await _reportManager.UpdateAsync(report);
            }
        }

        private void SetCvi42Value(PropertyInfo property, object instance, object importValue)
        {
            var propertyType = property.PropertyType;
            object value;

            if (propertyType == typeof(bool))
            {
                value = string.Equals(importValue.ToString(), "true", StringComparison.InvariantCultureIgnoreCase);
            }
            else if (propertyType == typeof(int))
            {
                var isParsed = double.TryParse(importValue.ToString()?.Replace(',', '.'), NumberStyles.Any,
                    CultureInfo.InvariantCulture, out var result);
                value = isParsed ? (int) Math.Round(result) : 0;
            }
            else if (propertyType == typeof(int?))
            {
                var isParsed = double.TryParse(importValue.ToString()?.Replace(',', '.'), NumberStyles.Any,
                    CultureInfo.InvariantCulture, out var result);
                value = isParsed ? (int?) Math.Round(result) : default;
            }
            else if (propertyType == typeof(float?))
            {
                var isParsed = double.TryParse(importValue.ToString()?.Replace(',', '.'),
                    NumberStyles.Any, CultureInfo.InvariantCulture, out var result);
                value = isParsed ? (float?) Math.Round(result, 1) : default;
            }
            else
            {
                value = importValue;
            }

            if (value != default)
            {
                property.SetValue(instance, value);
            }
        }
    }
}
