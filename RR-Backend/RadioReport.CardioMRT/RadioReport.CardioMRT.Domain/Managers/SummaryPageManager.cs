using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.CardioMRT.Domain.Interfaces;
using RadioReport.CardioMRT.Domain.Models;
using Microsoft.Extensions.Configuration;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.CardioMRT.Domain.Managers
{
    public class SummaryPageManager : PageManagerBase<SummaryPage, ISummaryPageRepository>
    {
        public override string PageTypeName => PageTypeNames.CardioMrtSummary;

        private readonly IPageManager<AreaOfExaminationPage> _areaOfExaminationPageManager;
        private readonly IPageManager<FindingsVentriclesPage> _findingsVentriclesPageManager;
        private readonly IPageManager<RightVentriclePage> _rightVentriclePageManager;

        public SummaryPageManager(ISummaryPageRepository repository, IReportManager reportManager, IReportService reportService, IConfiguration configuration,
            IPageManager<AreaOfExaminationPage> areaOfExaminationPageManager, IPageManager<FindingsVentriclesPage> findingsVentriclesPageManager,
            IPageManager<RightVentriclePage> rightVentriclePageManager, IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext,
            ModuleContext moduleContext)
            : base(reportManager, reportService, repository,
                kafkaProducer, httpAuthContext, moduleContext)
        {
            _areaOfExaminationPageManager = areaOfExaminationPageManager;
            _findingsVentriclesPageManager = findingsVentriclesPageManager;
            _rightVentriclePageManager = rightVentriclePageManager;
        }

        public override async Task<SummaryPage> GetByIdAsync(Guid id, Expression<Func<SummaryPage, bool>> predicate = null)
        {
            var page = await base.GetByIdAsync(id);

            if (page != null)
            {
                var areaOfExaminationPage =
                    await _areaOfExaminationPageManager.GetByReportIdAsync(page.ReportId, new[] { nameof(AreaOfExaminationPage.PatientInformation) });
                var findingsVentriclesPage = await _findingsVentriclesPageManager.GetByReportId(page.ReportId);
                var rightVentriclePage = await _rightVentriclePageManager.GetByReportId(page.ReportId);

                if (areaOfExaminationPage is null || findingsVentriclesPage is null || rightVentriclePage is null)
                {
                    return page;
                }

                page.IsMajorCriteria = isMajorCriterion(areaOfExaminationPage, findingsVentriclesPage, rightVentriclePage);
                page.IsMinorCriteria = isMinorCriterion(areaOfExaminationPage, findingsVentriclesPage, rightVentriclePage);
            }
            return page;
        }

        private bool isMajorCriterion(AreaOfExaminationPage areaOfExaminationPage,
            FindingsVentriclesPage findingsVentriclesPage, RightVentriclePage rightVentriclePage)
        {
            return isNotNoneFunction(rightVentriclePage) &&
                   (isRVEDVForMaleInMajorCriterion(areaOfExaminationPage, findingsVentriclesPage) ||
                    isRVEDVForFemaleInMajorCriterion(areaOfExaminationPage, findingsVentriclesPage) ||
                    isRVEFInMajorCriterion(findingsVentriclesPage));
        }

        private bool isMinorCriterion(AreaOfExaminationPage areaOfExaminationPage,
            FindingsVentriclesPage findingsVentriclesPage, RightVentriclePage rightVentriclePage)
        {
            return isNotNoneFunction(rightVentriclePage) &&
                   (isRVEDVForMaleInMinorCriterion(areaOfExaminationPage, findingsVentriclesPage) ||
                    isRVEDVForFemaleInMinorCriterion(areaOfExaminationPage, findingsVentriclesPage) ||
                    isRVEFInMinorCriterion(findingsVentriclesPage));
        }

        private bool isNotNoneFunction(RightVentriclePage rightVentriclePage) => rightVentriclePage.FunctionType > 0;

        private bool isRVEDVForMaleInMajorCriterion(AreaOfExaminationPage areaOfExaminationPage,
            FindingsVentriclesPage findingsVentriclesPage)
            => areaOfExaminationPage.PatientInformation.Gender == Gender.Male &&
               findingsVentriclesPage.RVEDVAndBSAInMlM2 >= 110;

        private bool isRVEDVForFemaleInMajorCriterion(AreaOfExaminationPage areaOfExaminationPage,
            FindingsVentriclesPage findingsVentriclesPage)
            => areaOfExaminationPage.PatientInformation.Gender == Gender.Female &&
               findingsVentriclesPage.RVEDVAndBSAInMlM2 >= 100;

        private bool isRVEDVForMaleInMinorCriterion(AreaOfExaminationPage areaOfExaminationPage,
            FindingsVentriclesPage findingsVentriclesPage)
            => areaOfExaminationPage.PatientInformation.Gender == Gender.Male &&
               findingsVentriclesPage.RVEDVAndBSAInMlM2 >= 100 && findingsVentriclesPage.RVEDVAndBSAInMlM2 < 110;

        private bool isRVEDVForFemaleInMinorCriterion(AreaOfExaminationPage areaOfExaminationPage,
            FindingsVentriclesPage findingsVentriclesPage)
            => areaOfExaminationPage.PatientInformation.Gender == Gender.Female &&
               findingsVentriclesPage.RVEDVAndBSAInMlM2 >= 90 && findingsVentriclesPage.RVEDVAndBSAInMlM2 < 100;

        private bool isRVEFInMajorCriterion(FindingsVentriclesPage findingsVentriclesPage)
            => findingsVentriclesPage.RVEFInPercent <= 40;

        private bool isRVEFInMinorCriterion(FindingsVentriclesPage findingsVentriclesPage)
            => findingsVentriclesPage.RVEFInPercent > 40 && findingsVentriclesPage.RVEFInPercent <= 45;
    }
}
