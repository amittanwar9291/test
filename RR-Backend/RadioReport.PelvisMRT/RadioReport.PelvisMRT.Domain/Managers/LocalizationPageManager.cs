using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.PelvisMRT.Domain.Interfaces;
using RadioReport.PelvisMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;

namespace RadioReport.PelvisMRT.Domain.Managers
{
    public class LocalizationPageManager : PageManagerBase<LocalizationPage, ILocalizationPageRepository>
    {
        public override string PageTypeName => PageTypeNames.PelvisMrtLocalization;

        private readonly IPageManager<ProstataPage> _prostatePageManager;
        private readonly IPageManager<MaleGenderPage> _maleGenderPageManager;
        private readonly IPageManager<FemaleGenderPage> _femaleGenderPageManager;
        private readonly IPageManager<PelvicFloorPage> _pelvicFloorPageManager;

        public LocalizationPageManager(ILocalizationPageRepository repository, IReportManager reportManager, IReportService reportService,
            IPageManager<ProstataPage> prostatePageManager, IPageManager<MaleGenderPage> maleGenderPageManager, IPageManager<FemaleGenderPage> femaleGenderPageManager, 
            IPageManager<PelvicFloorPage> pelvicFloorPageManager, IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext)
            : base(reportManager, reportService, repository,
                kafkaProducer, httpAuthContext, moduleContext)
        {
            _prostatePageManager = prostatePageManager;
            _maleGenderPageManager = maleGenderPageManager;
            _femaleGenderPageManager = femaleGenderPageManager;
            _pelvicFloorPageManager = pelvicFloorPageManager;
        }

        protected override async Task RemoveBlockedPages(Guid reportId, Dictionary<string, bool> pagesToBlock)
        {
            if (pagesToBlock == null) throw new ArgumentNullException(nameof(pagesToBlock));

            if (pagesToBlock.ContainsKey(PageTypeNames.PelvisMrtProstata) && pagesToBlock[PageTypeNames.PelvisMrtProstata])
            {
                await _prostatePageManager.RemoveByReportIdAsync(reportId);
            }

            if (pagesToBlock.ContainsKey(PageTypeNames.PelvisMrtMaleGender) && pagesToBlock[PageTypeNames.PelvisMrtMaleGender])
            {
                await _maleGenderPageManager.RemoveByReportIdAsync(reportId);
            }

            if (pagesToBlock.ContainsKey(PageTypeNames.PelvisMrtFemaleGender) && pagesToBlock[PageTypeNames.PelvisMrtFemaleGender])
            {
                await _femaleGenderPageManager.RemoveByReportIdAsync(reportId);
            }

            if (pagesToBlock.ContainsKey(PageTypeNames.PelvisMrtPelvicFloor) && pagesToBlock[PageTypeNames.PelvisMrtPelvicFloor])
            {
                await _pelvicFloorPageManager.RemoveByReportIdAsync(reportId);
            }
        }

        public override async Task<Dictionary<string, bool>> GetPagesToBlock(LocalizationPage newModel)
        {
            var pagesToBlock = new Dictionary<string, bool>();

            if (newModel?.Id == Guid.Empty)
            {
                pagesToBlock.Add(PageTypeNames.PelvisMrtProstata, newModel.PatientInformation.Gender != Gender.Male);
                pagesToBlock.Add(PageTypeNames.PelvisMrtMaleGender, newModel.PatientInformation.Gender != Gender.Male);
                pagesToBlock.Add(PageTypeNames.PelvisMrtFemaleGender, newModel.PatientInformation.Gender != Gender.Female);
                pagesToBlock.Add(PageTypeNames.PelvisMrtPelvicFloor, newModel.PatientInformation.Gender != Gender.Female);
            }
            else
            {
                var oldModel = await base.GetAsNoTrackingAsync(newModel.Id, new string[] { nameof(LocalizationPage.PatientInformation) });

                if (oldModel.PatientInformation.Gender != newModel.PatientInformation.Gender)
                {
                    pagesToBlock.Add(PageTypeNames.PelvisMrtProstata, newModel.PatientInformation.Gender != Gender.Male);
                    pagesToBlock.Add(PageTypeNames.PelvisMrtMaleGender, newModel.PatientInformation.Gender != Gender.Male);
                    pagesToBlock.Add(PageTypeNames.PelvisMrtFemaleGender, newModel.PatientInformation.Gender != Gender.Female);
                    pagesToBlock.Add(PageTypeNames.PelvisMrtPelvicFloor, newModel.PatientInformation.Gender != Gender.Female);
                }
            }

            return pagesToBlock;
        }
    }
}
