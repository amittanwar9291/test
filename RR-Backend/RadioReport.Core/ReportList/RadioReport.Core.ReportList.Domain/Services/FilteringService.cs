using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Common.Consts;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Logic.Models.ReportList;
using RadioReport.Common.Models;
using RadioReport.Core.ReportList.Domain.Consts;
using RadioReport.Core.ReportList.Domain.Interfaces;

namespace RadioReport.Core.ReportList.Domain.Services
{
    public class FilteringService : IFilteringService
    {
        private readonly IKafkaProducer _kafkaProducer;
        private readonly HttpAuthContext _httpAuthContext;

        public FilteringService(IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext)
        {
            _kafkaProducer = kafkaProducer;
            _httpAuthContext = httpAuthContext;
        }

        private readonly string[] _allMrtExaminations =
        {
            ReportTypeNames.AngiographyMRT,
            ReportTypeNames.PelvisMRT,
            ReportTypeNames.FeetMRT,
            ReportTypeNames.HandMRT,
            ReportTypeNames.HipMRT,
            ReportTypeNames.CardioMRT,
            ReportTypeNames.KneeMRT,
            ReportTypeNames.MammaMRT,
            ReportTypeNames.ShoulderMRT,
            ReportTypeNames.SpineMRT,
            ReportTypeNames.ElbowMRT,
            ReportTypeNames.MammaMX
        };

        private readonly string[] _allCtExaminations =
        {
            ReportTypeNames.ThoraxCT,
            ReportTypeNames.SpineCT
        };

        public void SetDefaultsIfEmpty(ReportListOptions options)
        {
            if (options == null) throw new ArgumentNullException(nameof(options));

            options.Filter ??= new FilterOptions();
        }

        public async Task<List<Guid>> GetPatientIdsByFilterOptions(PatientFilterOptions options)
        {
            var searchRequest = new FilterPatientsSyncRequest
            {
                FilterOptions = options
            };
            var response = await _kafkaProducer.SendSynchronousRequest<FilterPatientsSyncResponse>(searchRequest, _httpAuthContext);
            if (!response.IsSuccess) throw new PatientFilterFailedException(searchRequest.AsIndentedJson());

            return response.PatientIds;
        }

        public ICollection<string> GetExaminationFilterMatches(ICollection<string> examinationSelection)
        {
            var result = examinationSelection;
            if (examinationSelection.IsNullOrEmpty() || examinationSelection.Contains(FilterValue.ExaminationNone))
            {
                result = Array.Empty<string>();
            }

            if (examinationSelection.Contains(FilterValue.ExaminationAllMrt))
            {
                result = _allMrtExaminations;
            }

            if (examinationSelection.Contains(FilterValue.ExaminationAllCt))
            {
                result = _allCtExaminations;
            }

            return result.Select(e => e.ToLower()).ToArray();
        }

        public bool HasPatientFilter(PatientFilterOptions options)
        {
            if (options == null) throw new ArgumentNullException(nameof(options));

            return options.Gender != Gender.None ||
                   options.BirthDate.HasValue ||
                   !options.PatientId.IsNullOrEmpty() ||
                   !options.PatientFirstName.IsNullOrWhiteSpace() ||
                   !options.PatientLastName.IsNullOrWhiteSpace();
        }
    }
}
