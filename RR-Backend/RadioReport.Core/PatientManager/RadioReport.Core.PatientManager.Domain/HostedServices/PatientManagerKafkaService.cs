using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Confluent.Kafka;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Consts;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Logic.Models.ReportList;
using RadioReport.Common.Models;
using RadioReport.Core.PatientManager.Domain.Interfaces;
using RadioReport.Core.PatientManager.Domain.Models;

namespace RadioReport.Core.PatientManager.Domain.HostedServices
{
    public class PatientManagerKafkaService : KafkaConsumerHostedServiceBase
    {
        public PatientManagerKafkaService(
            ConsumerConfig consumerConfig,
            IServiceScopeFactory serviceScopeFactory,
            ICacheService cacheService,
            ILogger<PatientManagerKafkaService> logger
        ) : base(consumerConfig, logger, serviceScopeFactory, cacheService)
        {
        }

        protected override IEnumerable<string> Topics { get; } = new[]
        {
            KafkaTopic.Request.GetOrAddPatientSync,
            KafkaTopic.Request.GetPatientSync,
            KafkaTopic.Request.GetPatientsSync,
            KafkaTopic.Request.FilterPatientsSync
        };

        protected override async Task OnMessageReadAsync(string topic, string message, string key, IServiceScope serviceScope)
        {
            if (serviceScope == null) throw new ArgumentNullException(nameof(serviceScope));

            switch (topic)
            {
                case KafkaTopic.Request.GetPatientSync:
                    await HandleGetPatientSyncRequest(message, serviceScope);
                    break;
                case KafkaTopic.Request.GetPatientsSync:
                    await HandleGetPatientsSyncRequest(message, serviceScope);
                    break;
                case KafkaTopic.Request.GetOrAddPatientSync:
                    await HandleGetOrAddPatientSyncRequest(message, serviceScope);
                    break;
                case KafkaTopic.Request.FilterPatientsSync:
                    await HandleFilterPatientsRequest(message, serviceScope);
                    break;
            }
        }

        private async Task HandleGetPatientSyncRequest(string message, IServiceScope serviceScope)
        {
            var request = message.Deserialize<GetPatientSyncRequest>();
            var response = new GetPatientSyncResponse();

            var manager = serviceScope.ServiceProvider.GetRequiredService<IPatientEncryptedManager>();
            var encryptionService = serviceScope.ServiceProvider.GetRequiredService<IEntityEncryptionService<Patient, PatientEncrypted>>();

            var patientEncrypted = await manager.GetByIdAsync(request.PatientId);
            if (patientEncrypted == null) throw new PatientNotFoundException(request.PatientId);

            var patient = await encryptionService.DecryptAsync(patientEncrypted);
            response.IsSuccess = patient != null;
            response.PatientDto = patient.MapToDto();

            await CacheService.Set(request.CacheKey, response.AsJson(), TimeSpan.FromMinutes(Redis.Expirations.KafkaSyncRequestMinutes));
        }

        private async Task HandleGetPatientsSyncRequest(string message, IServiceScope serviceScope)
        {
            var request = message.Deserialize<GetPatientsSyncRequest>();
            var response = new GetPatientsSyncResponse();

            var manager = serviceScope.ServiceProvider.GetRequiredService<IPatientEncryptedManager>();
            var encryptionService = serviceScope.ServiceProvider.GetRequiredService<IEntityEncryptionService<Patient, PatientEncrypted>>();

            var patientsEncrypted = await manager.GetByIdsAsync(request.PatientIds);
            if (patientsEncrypted != null)
            {
                response.IsSuccess = true;
                var patientsDecrypted = await encryptionService.DecryptRangeAsync(patientsEncrypted);
                response.PatientDtos.AddRange(patientsDecrypted.Select(p => p.MapToDto()));
            }

            await CacheService.Set(request.CacheKey, response.AsJson(), TimeSpan.FromMinutes(Redis.Expirations.KafkaSyncRequestMinutes));
        }

        private async Task HandleGetOrAddPatientSyncRequest(string message, IServiceScope serviceScope)
        {
            var request = message.Deserialize<GetOrAddPatientSyncRequest>();
            if (request.PatientDto == null) throw new ArgumentException(nameof(request.PatientDto));

            var response = new GetOrAddPatientSyncResponse();

            var manager = serviceScope.ServiceProvider.GetRequiredService<IPatientEncryptedManager>();
            var encodingService = serviceScope.ServiceProvider.GetRequiredService<IVaultEncodingService>();
            var encryptionServce = serviceScope.ServiceProvider.GetRequiredService<IEntityEncryptionService<Patient, PatientEncrypted>>();
            var httpAuthContext = serviceScope.ServiceProvider.GetRequiredService<HttpAuthContext>();

            Patient patient = null;
            var isAdded = false;
            if (!request.PatientDto.ExternalIdentifier.IsNullOrEmpty())
            {
                var externalIdentifierHash = encodingService.HashStringSha256(request.PatientDto.ExternalIdentifier);
                var patientEncrypted = manager.GetByExternalIdentifierHash(externalIdentifierHash);
                patient = patientEncrypted != null ? await encryptionServce.DecryptAsync(patientEncrypted) : null;
            }

            if (patient == null)
            {
                patient = request.PatientDto.MapToPatient(httpAuthContext);
                var patientEncrypted = await encryptionServce.EncryptAsync(patient);
                await manager.AddAsync(patientEncrypted);
                isAdded = true;
            }

            response.IsSuccess = patient != null;
            response.PatientDto = patient.MapToDto();
            response.IsAdded = isAdded;

            await CacheService.Set(request.CacheKey, response.AsJson(), TimeSpan.FromMinutes(Redis.Expirations.KafkaSyncRequestMinutes));
        }

        private async Task HandleFilterPatientsRequest(string message, IServiceScope serviceScope)
        {
            var request = message.Deserialize<FilterPatientsSyncRequest>();
            var response = new FilterPatientsSyncResponse();

            var manager = serviceScope.ServiceProvider.GetRequiredService<IPatientEncryptedManager>();
            var httpAuthContext = serviceScope.ServiceProvider.GetRequiredService<HttpAuthContext>();
            var encryptionServce = serviceScope.ServiceProvider.GetRequiredService<IEntityEncryptionService<Patient, PatientEncrypted>>();
            var encodingService = serviceScope.ServiceProvider.GetRequiredService<IVaultEncodingService>();

            if (request.FilterOptions.PatientId.HasValue && !request.FilterOptions.PatientId.Value.IsEmpty())
            {
                await AddIdIfExists(manager, request, response);
            }
            else if (request.FilterOptions.Gender.HasValue)
            {
                var patientsEncrypted = await manager.GetManyAsync(p => p.InstituteId == httpAuthContext.InstituteId);
                var patientsDecrypted = await encryptionServce.DecryptRangeAsync(patientsEncrypted);
                var patientsFiltered = FilterByGenderAndBirthdate(patientsDecrypted, request.FilterOptions);
                patientsFiltered = FilterByNames(patientsFiltered, request.FilterOptions);
                response.PatientIds.AddRange(patientsFiltered.Select(p => p.Id));
            }
            else
            {
                var birthDateHash = request.FilterOptions.BirthDate.HasValue
                    ? encodingService.HashDateSha256(request.FilterOptions.BirthDate.Value)
                    : string.Empty;
                var encryptedOptions = new PatientEncryptedFilterOptions(request.FilterOptions, birthDateHash);
                var patientsEncrypted = await manager.GetByFilterOptions(encryptedOptions);
                var patientsDecrypted = await encryptionServce.DecryptRangeAsync(patientsEncrypted);
                var patientsFiltered = FilterByNames(patientsDecrypted, request.FilterOptions);
                response.PatientIds.AddRange(patientsFiltered.Select(p => p.Id));
            }

            response.IsSuccess = true;

            await CacheService.Set(request.CacheKey, response.AsJson(), TimeSpan.FromMinutes(1));
        }

        private static async Task AddIdIfExists(IPatientEncryptedManager manager, FilterPatientsSyncRequest request, FilterPatientsSyncResponse response)
        {
            var exists = await manager.AnyAsync(p => p.Id == request.FilterOptions.PatientId.Value);
            if (exists)
            {
                response.PatientIds.Add(request.FilterOptions.PatientId!.Value);
            }
        }

        private static IEnumerable<Patient> FilterByGenderAndBirthdate(IEnumerable<Patient> patients, PatientFilterOptions options) =>
            patients.Where(patient =>
                (options.Gender == Gender.None || options.Gender == patient.Gender) &&
                (!options.BirthDate.HasValue || options.BirthDate.Value.Date == patient.BirthDate.Date));

        private static IEnumerable<Patient> FilterByNames(IEnumerable<Patient> patients, PatientFilterOptions options) =>
            patients.Where(patient =>
                (options.PatientFirstName.IsNullOrWhiteSpace() ||
                 patient.FirstName.Contains(options.PatientFirstName, StringComparison.InvariantCultureIgnoreCase)) &&
                (options.PatientLastName.IsNullOrWhiteSpace() ||
                 patient.LastName.Contains(options.PatientLastName, StringComparison.InvariantCultureIgnoreCase)));
    }
}
