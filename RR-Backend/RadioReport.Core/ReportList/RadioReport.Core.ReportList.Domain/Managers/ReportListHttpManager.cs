using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Logic.Models.ReportList;
using RadioReport.Common.Models;
using RadioReport.Core.ReportList.Domain.Interfaces;
using RadioReport.Core.ReportList.Domain.Models;

namespace RadioReport.Core.ReportList.Domain.Managers
{
    public class ReportListHttpManager : IReportListHttpManager
    {
        private readonly IReportEntryManager _reportEntryManager;
        private readonly IFilteringService _filteringService;
        private readonly IReportListPaginationService _paginationService;
        private readonly ISortingService _sortingService;
        private readonly IKafkaProducer _kafkaProducer;
        private readonly HttpAuthContext _httpAuthContext;
        private readonly ILogger<ReportListHttpManager> _logger;
        private readonly IExportCsvService _exportCsvService;

        public ReportListHttpManager(
            IReportEntryManager reportEntryManager,
            IFilteringService filteringService,
            IReportListPaginationService paginationService,
            ISortingService sortingService,
            IKafkaProducer kafkaProducer,
            HttpAuthContext httpAuthContext,
            ILogger<ReportListHttpManager> logger,
            IExportCsvService exportCsvService
        )
        {
            _reportEntryManager = reportEntryManager;
            _filteringService = filteringService;
            _paginationService = paginationService;
            _sortingService = sortingService;
            _kafkaProducer = kafkaProducer;
            _httpAuthContext = httpAuthContext;
            _logger = logger;
            _exportCsvService = exportCsvService;
        }

        public async Task<ReportListResponse> GetWithPatient(ReportListOptions options)
        {
            if (options == null) throw new ArgumentNullException(nameof(options));

            var (patientFilterOptions, reportFilterOptions, paginationOptions, sortOptions) = PrepareOptions(options);
            var hasPatientFilter = _filteringService.HasPatientFilter(patientFilterOptions);
            var patientIdMatches = hasPatientFilter ? await _filteringService.GetPatientIdsByFilterOptions(patientFilterOptions) : new List<Guid>();
            if (hasPatientFilter && patientIdMatches.IsNullOrEmpty())
            {
                return GetEmptyReportList(options);
            }

            var examinationTypeMatches = _filteringService.GetExaminationFilterMatches(reportFilterOptions.Examinations);
            Expression<Func<ReportEntry, bool>> reportQueryPredicate =
                report =>
                    // instituteId
                    report.InstituteId == _httpAuthContext.InstituteId &&
                    // patientId
                    (patientIdMatches.IsNullOrEmpty() || patientIdMatches.Contains(report.PatientId)) &&
                    // age
                    (!reportFilterOptions.Age.HasValue || report.PatientAge == reportFilterOptions.Age.Value) &&
                    // status
                    (reportFilterOptions.ReportStatuses.IsNullOrEmpty() || reportFilterOptions.ReportStatuses.Contains(report.Status)) &&
                    // examination
                    (examinationTypeMatches.IsNullOrEmpty() || examinationTypeMatches.Contains(report.ExaminationType.ToLower())) &&
                    // examination date
                    (!reportFilterOptions.ExaminationDate.HasValue || report.ExaminationDate.Date == reportFilterOptions.ExaminationDate.Value.Date) &&
                    // findings date
                    (!reportFilterOptions.FindingsDate.HasValue || report.FindingsDate.Date == reportFilterOptions.FindingsDate.Value.Date) &&
                    // user
                    (reportFilterOptions.UserIds.IsNullOrEmpty() || reportFilterOptions.UserIds.Contains(report.UserId));

            paginationOptions.Total = await _reportEntryManager.CountAsync(reportQueryPredicate);
            if (paginationOptions.Total == 0)
            {
                return GetEmptyReportList(options);
            }

            paginationOptions.PageCount = _paginationService.GetPageCount(paginationOptions);
            _paginationService.CapCurrentPage(paginationOptions);
            var pageSize = paginationOptions.PageSize ?? throw new InvalidOperationException();
            var skipCount = _paginationService.GetSkipCount(paginationOptions, pageSize);

            var reports = await _sortingService.SortReports(GetManyQueryable(reportQueryPredicate), sortOptions, skipCount, pageSize);
            var relatedPatients = await GetRelatedPatients(reports);
            var result = reports
                .Select(report => new ReportPatientResponse
                {
                    Report = report,
                    Patient = relatedPatients.SingleOrDefault(p => p.Id == report.PatientId)?.MapToDto()
                })
                .ToList();

            var response = new ReportListResponse
            {
                ReportListOptions = options
            };
            response.ReportPatientList.AddRange(result);

            return response;
        }

        public Task<ReportEntry> GetByIdAsync(Guid id, Expression<Func<ReportEntry, bool>> predicate = null) => _reportEntryManager.GetByIdAsync(id);

        public Task<ReportEntry> GetByIdAsync(Guid id, string[] includes, Expression<Func<ReportEntry, bool>> predicate = null) =>
            _reportEntryManager.GetByIdAsync(id, includes);

        public Task<List<ReportEntry>> GetByIdsAsync(List<Guid> ids, Expression<Func<ReportEntry, bool>> predicate = null) =>
            _reportEntryManager.GetByIdsAsync(ids);

        public Task<ReportEntry> GetAsNoTrackingAsync(Guid id) => _reportEntryManager.GetAsNoTrackingAsync(id);

        public Task<List<ReportEntry>> GetAllAsync() => _reportEntryManager.GetAllAsync();

        public IQueryable<ReportEntry> GetManyQueryable(Expression<Func<ReportEntry, bool>> predicate) => _reportEntryManager.GetManyQueryable(predicate);

        public Task<List<ReportEntry>> GetManyAsync(Expression<Func<ReportEntry, bool>> predicate) => _reportEntryManager.GetManyAsync(predicate);

        public Task<ReportEntry> GetFirstOrDefaultAsync(Expression<Func<ReportEntry, bool>> predicate, string[] includes = null) =>
            _reportEntryManager.GetFirstOrDefaultAsync(predicate, includes);

        public Task<ReportEntry>
            GetSingleAsync(Expression<Func<ReportEntry, bool>> predicate, string[] includes = null) =>
            _reportEntryManager.GetSingleAsync(predicate, includes);

        public Task<ReportEntry> GetSingleOrDefaultAsync(Expression<Func<ReportEntry, bool>> predicate) =>
            _reportEntryManager.GetSingleOrDefaultAsync(predicate);

        public Task<bool> AnyAsync(Guid id) => _reportEntryManager.AnyAsync(id);

        public Task<bool> AnyAsync(Expression<Func<ReportEntry, bool>> predicate) => _reportEntryManager.AnyAsync(predicate);

        public Task<ReportEntry> AddAsync(ReportEntry model, bool keepId = false) => _reportEntryManager.AddAsync(model, keepId);

        public Task AddRangeAsync(IEnumerable<ReportEntry> models) => _reportEntryManager.AddRangeAsync(models);

        public Task<ReportEntry> UpdateAsync(ReportEntry model) => _reportEntryManager.UpdateAsync(model);

        public Task UpdateByPropertiesAsync(ReportEntry model, IEnumerable<string> properties) =>
            _reportEntryManager.UpdateByPropertiesAsync(model, properties);

        public Task RemoveAsync(Guid id) => _reportEntryManager.RemoveAsync(id);

        public Task RemoveAllAsync() => _reportEntryManager.RemoveAllAsync();

        public Task<int> CountAsync(Expression<Func<ReportEntry, bool>> predicate) => _reportEntryManager.CountAsync(predicate);

        public Task<bool> IsAlive() => _reportEntryManager.IsAlive();

        private (PatientFilterOptions PatientFilterOptions, ReportFilterOptions ReportFilterOptions, PaginationOptions PaginationOptions, SortOptions
            SortOptions)
            PrepareOptions(ReportListOptions options)
        {
            _filteringService.SetDefaultsIfEmpty(options);
            _paginationService.SetDefaultsIfEmpty(options);
            _sortingService.SetDefaultsIfEmpty(options);

            return (options.Filter.PatientOptions, options.Filter.ReportOptions, options.Pagination, options.Sort);
        }

        private static ReportListResponse GetEmptyReportList(ReportListOptions options)
        {
            options.Pagination.Total = 0;
            options.Pagination.PageCount = 1;
            options.Pagination.CurrentPage = 1;

            return new ReportListResponse
            {
                ReportListOptions = options
            };
        }

        private async Task<List<Patient>> GetRelatedPatients(ICollection<ReportEntry> reports)
        {
            AssertPatientIds(reports);

            var patientIds = reports.Where(r => !r.PatientId.IsEmpty()).Select(r => r.PatientId).Distinct().ToList();
            if (patientIds.IsNullOrEmpty()) return new List<Patient>();

            var request = new GetPatientsSyncRequest();
            request.PatientIds.AddRange(patientIds);
            var response = await _kafkaProducer.SendSynchronousRequest<GetPatientsSyncResponse>(request, _httpAuthContext);
            if (!response.IsSuccess) throw new GetPatientsFailedException($"PatientIds {string.Join(",", request.PatientIds)}");

            return response.PatientDtos.Select(p => p.MapToPatient(_httpAuthContext)).ToList();
        }

        private void AssertPatientIds(IEnumerable<ReportEntry> reports)
        {
            var missingPatientIds = reports.Where(r => r.PatientId.IsEmpty()).Select(r => r.Id).ToList();
            if (missingPatientIds.Any())
            {
                _logger.LogWarning("Reports without patient id listed {Ids}", string.Join(";", missingPatientIds.Select(i => i.ToString())));
            }
        }

        public Task<(Stream Stream, string FileName)> ExportCsvReportList() => _exportCsvService.ExportCsvReportList();
    }
}
