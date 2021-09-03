using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Models;
using Xunit;

namespace RadioReport.Tests.Common.LogicTests
{
    public class ReportSessionTests
    {
        [Fact]
        public void Create_ValidInput_ValuesSet()
        {
            // Arrange
            var expectedReportId = Guid.NewGuid();
            var expectedUserId = Guid.NewGuid();
            var expectedInstituteId = Guid.NewGuid();

            // Act
            var session = ReportSession.Create(expectedReportId, new HttpAuthContext
            {
                UserId = expectedUserId,
                InstituteId = expectedInstituteId
            });

            // Assert
            Assert.Equal(expectedReportId, session.ReportId);
            Assert.Equal(expectedUserId, session.UserId);
            Assert.Equal(expectedInstituteId, session.InstituteId);
            Assert.NotEqual(default, session.CreationDate);
        }

        [Theory]
        [MemberData(nameof(CreateInvalidInputData))]
        public void Create_InValidInput_ExceptionThrown(Guid userId, Guid instituteId)
        {
            // Act + Assert
            Assert.Throws<ArgumentException>(() => ReportSession.Create(Guid.NewGuid(), new HttpAuthContext
            {
                UserId = userId,
                InstituteId = instituteId
            }));
            Assert.Throws<ArgumentNullException>(() => ReportSession.Create(Guid.Empty, new HttpAuthContext()));
            Assert.Throws<ArgumentNullException>(() => ReportSession.Create(Guid.NewGuid(), null));
        }

        public static IEnumerable<object[]> CreateInvalidInputData =>
            new List<object[]>
            {
                new object[] { Guid.Empty, Guid.NewGuid() },
                new object[] { Guid.NewGuid(), Guid.Empty },
            };
    }
}
