using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using FakeItEasy;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Core.Logic.Interfaces;
using Microsoft.Extensions.Options;
using RadioReport.Common.Enums.Models;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.InstituteModels;
using RadioReport.Common.Logic.Services;
using RadioReport.Common.Models;
using RadioReport.Core.InstituteManager.Domain.Interfaces;
using RadioReport.Core.InstituteManager.Domain.Managers;
using RadioReport.Core.InstituteManager.Domain.Models;
using Xunit;

namespace RadioReport.Tests.InstituteManager
{
    public class SettingsHttpManagerTests
    {
        private readonly IDicomMapIOService _dicomMapIOService;
        private readonly IInstituteLogoService _instituteLogoService;
        private readonly IInstituteManager _instituteManager;
        private readonly ILogger<SettingsHttpManager> _logger;
        private readonly IKafkaProducer _kafkaProducer;
        private readonly HttpAuthContext _httpAuthContext;
        private readonly IInstituteService _instituteServiceFake;

        private readonly SettingsHttpManager _classUnderTest;

        public SettingsHttpManagerTests()
        {
            _dicomMapIOService = A.Fake<IDicomMapIOService>();
            _instituteLogoService = A.Fake<IInstituteLogoService>();
            _instituteManager = A.Fake<IInstituteManager>();
            _logger = A.Fake<ILogger<SettingsHttpManager>>();
            _kafkaProducer = A.Fake<IKafkaProducer>();
            _httpAuthContext = A.Fake<HttpAuthContext>();
            _instituteServiceFake = A.Fake<IInstituteService>();
            var keyStoreOptions = A.Fake<IOptions<KeyStoreOptions>>();
            A.CallTo(() => keyStoreOptions.Value).Returns(new KeyStoreOptions
            {
                KeySecret = "cRfUjXn2r5u8x/A?D(G+KbPeSgVkYp3s"
            });

            _classUnderTest = new SettingsHttpManager(_dicomMapIOService, _instituteLogoService, _instituteManager, _logger, _kafkaProducer,
                _httpAuthContext, new PublicKeyStoreService(keyStoreOptions), _instituteServiceFake);
        }

        private Institute GetDummyInstitute()
        {
            var instituteId = Guid.Parse("5C9E7101-0046-4B47-F32B-08D8C85170A4");
            return new Institute
            {
                Address = new Feature
                {
                    Geometry = new Geometry
                    {
                        Coordinates = new List<double> { 1.1, 1.2 },
                        Id = Guid.NewGuid(),
                        Type = "GeometryType"
                    },
                    Id = Guid.NewGuid(),
                    Type = "FeatureType",
                    InstituteId = instituteId,
                    Properties = new Properties
                    {
                        City = "City",
                        Country = "Country",
                        Countrycode = "CountryCode",
                        District = "District",
                        Extent = new List<double> { 1.1, 1.2 },
                        Housenumber = "Housenumber",
                        Id = Guid.NewGuid(),
                        Name = "Name",
                        Postcode = "Postcode",
                        State = "State",
                        Street = "Street",
                        Type = "PropertiesType",
                        OsmId = 0,
                        OsmKey = "OsmKey",
                        OsmType = "OsmType",
                        OsmValue = "OsmValue"
                    }
                },
                Id = instituteId,
                Name = "NameOfInstitute",
                ApiKey = "ApiKey",
                ConnectionType = ConnectionType.Offline,
                InstituteToken = "InstituteToken",
                DuplicateExternalIdentifierAllowed = false
            };
        }

        [Fact]
        public async Task Initialize_InvalidJwt_ExceptionThrown()
        {
            // Arrange
            var invalidSignatureJwt = "invalidToken";
            var instituteLogo = new InstituteLogo
            {
                Content = "abcd",
                FileFormat = FileFormat.Png
            };
            var file = new InstituteConfigurationFile
            {
                InstituteConfigJwt = invalidSignatureJwt,
                InstituteLogo = instituteLogo
            };

            // Act & Assert
            await Assert.ThrowsAsync<InitializeInstituteFailedException>(() => _classUnderTest.InitializeInstitute(file));
        }

        [Fact]
        public async Task Initialize_CreateNewInstitute_Success()
        {
            // Arrange
            var validSignatureJwt =
                "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnN0aXR1dGVDb25maWd1cmF0aW9uIjp7Ik5hbWUiOiJ5b3VyaG91c2VfODUiLCJBcGlLZXkiOiJIZlVYek1iMmFVTlB4RERMNDRqS2tYMmRLVHRXZzQ1a3dvYmN5WlZTUFQyZVUzQzljdVBYNUc1Z1llbnRTbTk4eHhNQWVtaFNHV3VoWDJQV2FjbXlVWG5zWTNtWFVtb0hpYlVOUFpwR01nYThhN0VwWDVSQmpUZlpGcDhjcmFONGhZejVDbmdjNHN1amdtbXA1QlJMenp4R1RpTWVpUFlQOVpXVVdIVEJZdE1vTEJLIiwiQWRkcmVzcyI6eyJHZW9tZXRyeSI6eyJDb29yZGluYXRlcyI6WzEzLjYxOTIyMzg5NDUxODIwNyw1Mi41MDI0Nl0sIlR5cGUiOiJQb2ludCJ9LCJUeXBlIjoiRmVhdHVyZSIsIlByb3BlcnRpZXMiOnsib3NtX2lkIjo0MDQ3NzY0MTMsIkV4dGVudCI6WzEzLjYxOTE1MjIsNTIuNTAyNTA0NywxMy42MTkyOTQzLDUyLjUwMjQxNDRdLCJDb3VudHJ5IjoiRGV1dHNjaGxhbmQiLCJDaXR5IjoiQmVybGluIiwiQ291bnRyeWNvZGUiOiJERSIsIlBvc3Rjb2RlIjoiMTI2MjMiLCJUeXBlIjoiaG91c2UiLCJvc21fdHlwZSI6IlciLCJvc21fa2V5IjoiYnVpbGRpbmciLCJIb3VzZW51bWJlciI6IjI2IiwiU3RyZWV0IjoiTGFyYXdlZyIsIkRpc3RyaWN0IjoiTWFobHNkb3JmIiwib3NtX3ZhbHVlIjoiaG91c2UiLCJOYW1lIjpudWxsLCJTdGF0ZSI6IkJlcmxpbiJ9fSwiRHVwbGljYXRlRXh0ZXJuYWxJZGVudGlmaWVyQWxsb3dlZCI6ZmFsc2UsIlRyYWNraW5nRW5hYmxlZCI6ZmFsc2UsIkFwcGxpY2F0aW9uQ29uZmlnIjpudWxsLCJJZCI6IjJkNzVmYTVkLWYwMDctNDQ3Yy02YWY0LTA4ZDhkMWRlZTRmNSIsIkNvbm5lY3Rpb25UeXBlIjoib25saW5lIn0sImtleUlkIjoiMzEzZmQ5ZjItODJjZi00MTA2LWE4NjYtYjIxZTRjMWZmMjlmIiwiaXNzIjoiNGI2N2Y5ZmMtYmZiNi00NDU3LTkxM2UtN2IzMzcwMDczMjA1IiwiYXVkIjoiMmQ3NWZhNWQtZjAwNy00NDdjLTZhZjQtMDhkOGQxZGVlNGY1In0.LhVcgy4pR4yGZhXq_4pGKd4sy80kPGiHpSHv_DSXpJFhp8lTKCybjeLPhQ1upIQ0ZWeQs1XruVrKWjYNDfX7z5pEUM0UHHsR1__-H2B2yqexxerEus3WM5hQNSsHi4y_uIPw0vVZPap-1I8kDZh-32ZAwgwPZhja7IJIXGXunE3kKOYWvy2nEI13vdGQrkIOCKrIwSHwUWFxnuFpHuFahF5IRouI52VYJMpKrjc8-9i36OhyCi4Ee43dSZHNrarC8eHBd3TA_dfjYmF5y2wzbE5jlIvH_JS0wOgx1HIAsq5kiXn3TLQKq_L57BBn7gMmIs7P5wh3H24zvHuV2xpF0qgxPz-wab3zAE_wWoRR0ASe3DE_qHAReLXtnW0GplgZ2HWtalYYUWyNR6RmsJYrfA9V5XfCyZN135JPbam0AfXeIG0b4gndUkFY13HaSx-Biyfag5Dfp68xDjAQx73LGo7JIHonpjamoihviQHiR0Ve56VD_tLsztxS8mS0ZhFumqe8Ynw8XJjUugFDfIpeCYL7eJFC9cDPtfrZ6UY6BMJUEtMPnDTNiLSAtTaUV9GrSIvaOe4CiFhmopLoYcaujxcuCJFgiYAH7R2HNaAGS9tBAUzUcwICLQ2RHWZyMuWnrQH7tQj0TccI_q7pN0m1AgOUe_K0GVNlRr-xrPTC1Zk";
            var instituteLogo = new InstituteLogo
            {
                Content = "abcd",
                FileFormat = FileFormat.Png
            };
            var file = new InstituteConfigurationFile
            {
                InstituteConfigJwt = validSignatureJwt,
                InstituteLogo = instituteLogo
            };
            A.CallTo(() => _instituteManager.GetFullInstituteNoTracking(A<Guid>.Ignored)).Returns(Task.FromResult((Institute) null));

            // Act
            await _classUnderTest.InitializeInstitute(file);

            //Assert
            A.CallTo(() => _instituteManager.AddAsync(A<Institute>.Ignored, A<bool>.Ignored)).MustHaveHappened();
            A.CallTo(() => _instituteLogoService.UploadInstituteLogo(A<InstituteLogo>.Ignored)).MustHaveHappened();
        }

        [Fact]
        public async Task Initialize_UpdateInstitute_Success()
        {
            // Arrange
            var validSignatureJwt =
                "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnN0aXR1dGVDb25maWd1cmF0aW9uIjp7Ik5hbWUiOiJ5b3VyaG91c2VfODUiLCJBcGlLZXkiOiJIZlVYek1iMmFVTlB4RERMNDRqS2tYMmRLVHRXZzQ1a3dvYmN5WlZTUFQyZVUzQzljdVBYNUc1Z1llbnRTbTk4eHhNQWVtaFNHV3VoWDJQV2FjbXlVWG5zWTNtWFVtb0hpYlVOUFpwR01nYThhN0VwWDVSQmpUZlpGcDhjcmFONGhZejVDbmdjNHN1amdtbXA1QlJMenp4R1RpTWVpUFlQOVpXVVdIVEJZdE1vTEJLIiwiQWRkcmVzcyI6eyJHZW9tZXRyeSI6eyJDb29yZGluYXRlcyI6WzEzLjYxOTIyMzg5NDUxODIwNyw1Mi41MDI0Nl0sIlR5cGUiOiJQb2ludCJ9LCJUeXBlIjoiRmVhdHVyZSIsIlByb3BlcnRpZXMiOnsib3NtX2lkIjo0MDQ3NzY0MTMsIkV4dGVudCI6WzEzLjYxOTE1MjIsNTIuNTAyNTA0NywxMy42MTkyOTQzLDUyLjUwMjQxNDRdLCJDb3VudHJ5IjoiRGV1dHNjaGxhbmQiLCJDaXR5IjoiQmVybGluIiwiQ291bnRyeWNvZGUiOiJERSIsIlBvc3Rjb2RlIjoiMTI2MjMiLCJUeXBlIjoiaG91c2UiLCJvc21fdHlwZSI6IlciLCJvc21fa2V5IjoiYnVpbGRpbmciLCJIb3VzZW51bWJlciI6IjI2IiwiU3RyZWV0IjoiTGFyYXdlZyIsIkRpc3RyaWN0IjoiTWFobHNkb3JmIiwib3NtX3ZhbHVlIjoiaG91c2UiLCJOYW1lIjpudWxsLCJTdGF0ZSI6IkJlcmxpbiJ9fSwiRHVwbGljYXRlRXh0ZXJuYWxJZGVudGlmaWVyQWxsb3dlZCI6ZmFsc2UsIlRyYWNraW5nRW5hYmxlZCI6ZmFsc2UsIkFwcGxpY2F0aW9uQ29uZmlnIjpudWxsLCJJZCI6IjJkNzVmYTVkLWYwMDctNDQ3Yy02YWY0LTA4ZDhkMWRlZTRmNSIsIkNvbm5lY3Rpb25UeXBlIjoib25saW5lIn0sImtleUlkIjoiMzEzZmQ5ZjItODJjZi00MTA2LWE4NjYtYjIxZTRjMWZmMjlmIiwiaXNzIjoiNGI2N2Y5ZmMtYmZiNi00NDU3LTkxM2UtN2IzMzcwMDczMjA1IiwiYXVkIjoiMmQ3NWZhNWQtZjAwNy00NDdjLTZhZjQtMDhkOGQxZGVlNGY1In0.LhVcgy4pR4yGZhXq_4pGKd4sy80kPGiHpSHv_DSXpJFhp8lTKCybjeLPhQ1upIQ0ZWeQs1XruVrKWjYNDfX7z5pEUM0UHHsR1__-H2B2yqexxerEus3WM5hQNSsHi4y_uIPw0vVZPap-1I8kDZh-32ZAwgwPZhja7IJIXGXunE3kKOYWvy2nEI13vdGQrkIOCKrIwSHwUWFxnuFpHuFahF5IRouI52VYJMpKrjc8-9i36OhyCi4Ee43dSZHNrarC8eHBd3TA_dfjYmF5y2wzbE5jlIvH_JS0wOgx1HIAsq5kiXn3TLQKq_L57BBn7gMmIs7P5wh3H24zvHuV2xpF0qgxPz-wab3zAE_wWoRR0ASe3DE_qHAReLXtnW0GplgZ2HWtalYYUWyNR6RmsJYrfA9V5XfCyZN135JPbam0AfXeIG0b4gndUkFY13HaSx-Biyfag5Dfp68xDjAQx73LGo7JIHonpjamoihviQHiR0Ve56VD_tLsztxS8mS0ZhFumqe8Ynw8XJjUugFDfIpeCYL7eJFC9cDPtfrZ6UY6BMJUEtMPnDTNiLSAtTaUV9GrSIvaOe4CiFhmopLoYcaujxcuCJFgiYAH7R2HNaAGS9tBAUzUcwICLQ2RHWZyMuWnrQH7tQj0TccI_q7pN0m1AgOUe_K0GVNlRr-xrPTC1Zk";
            var instituteLogo = new InstituteLogo
            {
                Content = "abcd",
                FileFormat = FileFormat.Png
            };
            var file = new InstituteConfigurationFile
            {
                InstituteConfigJwt = validSignatureJwt,
                InstituteLogo = instituteLogo
            };
            A.CallTo(() => _instituteManager.GetFullInstituteNoTracking(A<Guid>.Ignored)).Returns(Task.FromResult(GetDummyInstitute()));

            // Act
            await _classUnderTest.InitializeInstitute(file);

            //Assert
            A.CallTo(() => _instituteManager.UpdateAsync(A<Institute>.Ignored)).MustHaveHappened();
            A.CallTo(() => _instituteLogoService.UploadInstituteLogo(A<InstituteLogo>.Ignored)).MustHaveHappened();
        }
    }
}
