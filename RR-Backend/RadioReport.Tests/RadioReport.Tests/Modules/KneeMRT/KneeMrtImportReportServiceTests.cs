using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using FakeItEasy;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Dtos;
using RadioReport.Common.Logic.Models.Import;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.KneeMRT.Domain.Interfaces;
using RadioReport.KneeMRT.Domain.Models;
using RadioReport.KneeMRT.Domain.Services;
using Xunit;

namespace RadioReport.Tests.Modules.KneeMRT
{
    public class KneeMrtImportReportServiceTests
    {
        private readonly KneeMRTImportReportService _classUnderTest;
        private readonly IKafkaProducer _kafkaProducerFake;
        private readonly ModuleContext _moduleContextFake;
        private readonly HttpAuthContext _httpAuthContextFake;
        private readonly IDicomValueParser _dicomValueParserFake;
        private readonly IReportManager _reportManagerFake;
        private readonly IReportPageService _reportPageServiceFake;
        private readonly IPageManager<LocalizationPage> _localizationPageManagerFake;
        private readonly IPageManager<TechnologyPage> _technologyPageManagerFake;

        public KneeMrtImportReportServiceTests()
        {
            var fakeLogger = A.Fake<ILogger<KneeMRTImportReportService>>();
            _kafkaProducerFake = A.Fake<IKafkaProducer>();
            _moduleContextFake = A.Fake<ModuleContext>();
            _httpAuthContextFake = A.Fake<HttpAuthContext>();
            _dicomValueParserFake = A.Fake<IDicomValueParser>();
            _reportManagerFake = A.Fake<IReportManager>();
            _reportPageServiceFake = A.Fake<IReportPageService>();
            _localizationPageManagerFake = A.Fake<IPageManager<LocalizationPage>>();
            _technologyPageManagerFake = A.Fake<IPageManager<TechnologyPage>>();
            _classUnderTest = new KneeMRTImportReportService(fakeLogger, _kafkaProducerFake, _moduleContextFake, _dicomValueParserFake, _httpAuthContextFake,
                _localizationPageManagerFake, _technologyPageManagerFake, _reportManagerFake, _reportPageServiceFake);
        }

        [Fact]
        public async void ImportReport_ValuesImportable_ValuesImportedProperly()
        {
            // Arrange
            var expectedPatientId = Guid.NewGuid();
            var expectedUserId = Guid.NewGuid();
            var expectedInstituteId = Guid.NewGuid();
            var expectedLocalizationPageId = Guid.NewGuid();
            var expectedTechnologyPageId = Guid.NewGuid();
            const string expectedStudyInstanceUid = "thestudyinstanceuid";
            var expectedExaminationDate = new DateTime(2020, 4, 19);
            const string expectedAccessionNumber = "theaccessionnumber";
            const byte expectedAge = 33;
            var addPatientResponse = new GetOrAddPatientSyncResponse
            {
                IsSuccess = true,
                PatientDto = new PatientDto { Id = expectedPatientId }
            };
            var pageInfos = new List<PageInfo>
            {
                new PageInfo { TypeName = PageTypeNames.KneeMrtLocalization },
                new PageInfo { TypeName = PageTypeNames.KneeMrtTechnology }
            };

            A.CallTo(() => _kafkaProducerFake.SendSynchronousRequest<GetOrAddPatientSyncResponse>(A<GetOrAddPatientSyncRequest>.Ignored,
                A<HttpAuthContext>.Ignored, A<int>.Ignored, A<CancellationToken>.Ignored)).Returns(addPatientResponse);
            A.CallTo(() => _moduleContextFake.LocalizationPageName).Returns(PageTypeNames.KneeMrtLocalization);
            A.CallTo(() => _moduleContextFake.TechnologyPageName).Returns(PageTypeNames.KneeMrtTechnology);
            A.CallTo(() => _moduleContextFake.TotalPageCount).Returns((byte) 2);
            A.CallTo(() => _moduleContextFake.Type).Returns(ModuleType.KneeMRT);
            A.CallTo(() => _httpAuthContextFake.UserId).Returns(expectedUserId);
            A.CallTo(() => _httpAuthContextFake.InstituteId).Returns(expectedInstituteId);
            A.CallTo(() => _reportManagerFake.AddAsync(A<Report>.Ignored, A<bool>.Ignored))
                .ReturnsLazily(objectCall => Task.FromResult(objectCall.GetArgument<Report>(0)));
            A.CallTo(() => _reportManagerFake.UpdateAsync(A<Report>.Ignored))
                .ReturnsLazily(objectCall => Task.FromResult(objectCall.GetArgument<Report>(0)));
            A.CallTo(() => _reportPageServiceFake.GetPagesForPreset(A<string>.Ignored)).Returns(pageInfos);
            A.CallTo(() => _dicomValueParserFake.ParseDate(A<StringImportValue>.That.Matches(v => v.RadioReportId == "rep_x_000002")))
                .Returns(expectedExaminationDate);
            A.CallTo(() => _dicomValueParserFake.ParseAgeString(A<StringImportValue>.That.Matches(v => v.RadioReportId == "uni_01_009")))
                .Returns(expectedAge);
            A.CallTo(() => _localizationPageManagerFake.AddAsync(A<LocalizationPage>.Ignored, A<bool>.Ignored)).Returns(new LocalizationPage
            {
                Id = expectedLocalizationPageId
            });
            A.CallTo(() => _technologyPageManagerFake.AddAsync(A<TechnologyPage>.Ignored, A<bool>.Ignored)).Returns(new TechnologyPage
            {
                Id = expectedTechnologyPageId
            });

            var request = new ImportReportRequest
            {
                ImportValues = new List<ImportValueDto>
                {
                    new ImportValueDto
                    {
                        ImportValueIdentifier = "rep_x_000001",
                        Value = "thestudyinstanceuid"
                    },
                    new ImportValueDto
                    {
                        ImportValueIdentifier = "rep_x_000002",
                        Value = "20200419"
                    },
                    new ImportValueDto
                    {
                        ImportValueIdentifier = "rep_x_000003",
                        Value = "theaccessionnumber"
                    },
                    new ImportValueDto
                    {
                        ImportValueIdentifier = "uni_01_009",
                        Value = "033Y"
                    },
                    new ImportValueDto
                    {
                        ImportValueIdentifier = "any",
                        Value = JArray.FromObject(new List<ImportValueDto>
                        {
                            new ImportValueDto
                            {
                                ImportValueIdentifier = "any",
                                Value = "any"
                            }
                        })
                    }
                }
            };

            // Act
            var result = await _classUnderTest.ImportReport(request);

            // Assert
            Assert.Equal(2, result.Pages.Count);
            Assert.Equal(2, result.TotalPageCount);
            Assert.Equal(expectedPatientId, result.PatientId);
            Assert.Equal(expectedUserId, result.UserId);
            Assert.Equal(expectedInstituteId, result.InstituteId);
            Assert.NotEqual(default, result.CreationDate);
            Assert.Equal(expectedStudyInstanceUid, result.StudyInstanceUID);
            Assert.Equal(expectedExaminationDate, result.ExaminationDate);
            Assert.Equal(expectedAccessionNumber, result.AccessionNumber);
            Assert.Equal(ModuleType.KneeMRT.GetReportTypeName(), result.ExaminationType);
            Assert.NotEqual(default, result.FindingsDate);
            Assert.Equal(ReportStatus.InProgress, result.Status);
            Assert.Equal(expectedAge, result.PatientAge);
            Assert.Contains(result.Pages, p => p.PageId == expectedLocalizationPageId);
            Assert.Contains(result.Pages, p => p.PageId == expectedTechnologyPageId);
            Assert.Null(result.PresetCode);
            Assert.Null(result.FreeField);
            Assert.Null(result.Language);
            Assert.Null(result.Evaluation);
        }

        [Fact]
        public async void ImportReport_MissingImportData_ThrowsException()
        {
            // Arrange
            var request = new ImportReportRequest { ImportValues = new List<ImportValueDto>() };

            // Act + Assert
            await Assert.ThrowsAsync<MissingImportDataException>(() => _classUnderTest.ImportReport(request));
        }
    }
}
