using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Moq;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using RadioReport.Tests.Common.TestData;
using Xunit;

namespace RadioReport.Tests.Common.LogicTests
{
    public class ReportSchemaManagerTests
    {

        [Theory]
        [ClassData(typeof(ReportSchemaManagerAddTestData))]
        public async Task AddSchemaTest(ReportSchema reportSchema, ReportSchemaSession session)
        {
            // Arrange
            if (reportSchema is null)
            {
                throw new ArgumentNullException(nameof(reportSchema));
            }   
            
            reportSchema.Session = session;
            ReportSchema expectedResult = null;

            var repositoryMock = new Mock<IReportSchemaRepository>();
            repositoryMock
                .Setup(r => r.SaveChangesAsync())
                .ReturnsAsync(1)
                .Verifiable();
            repositoryMock
                .Setup(r => r.Add(It.IsAny<ReportSchema>()))
                .Returns<ReportSchema>(report => report)
                .Callback<ReportSchema>(report => expectedResult = report)
                .Verifiable();
            var sessionManagerMock = new Mock<IReportSchemaSessionManager>();
            sessionManagerMock
                .Setup(s => s.AddAsync(It.IsAny<ReportSchemaSession>(), false))
                .ReturnsAsync(session)
                .Verifiable();

            var manager = new ReportSchemaManager(repositoryMock.Object, sessionManagerMock.Object);

            // Act
            var actualResult = await manager.AddAsync(reportSchema);

            // Assert
            Assert.Equal(expectedResult, actualResult);
            repositoryMock.Verify();
            sessionManagerMock.Verify();
        }

        [Theory]
        [ClassData(typeof(ReportSchemaManagerUpdateTestData))]
        public async Task UpdateSchemaTest(ReportSchema reportSchema, ReportSchemaSession session)
        {
            // Arrange
            if (reportSchema is null)
            {
                throw new ArgumentNullException(nameof(reportSchema));
            }

            reportSchema.Session = session;
            ReportSchema expectedResult = null;

            var repositoryMock = new Mock<IReportSchemaRepository>();
            repositoryMock
                .Setup(r => r.SaveChangesAsync())
                .ReturnsAsync(1)
                .Verifiable();
            repositoryMock
                .Setup(r => r.Update(It.IsAny<ReportSchema>()))
                .Returns<ReportSchema>(report => report)
                .Callback<ReportSchema>(report => expectedResult = report)
                .Verifiable();
            var sessionManagerMock = new Mock<IReportSchemaSessionManager>();
            sessionManagerMock
                .Setup(s => s.GetByReportId(It.Is<Guid>(i => i == reportSchema.Id)))
                .ReturnsAsync(session)
                .Verifiable();

            var manager = new ReportSchemaManager(repositoryMock.Object, sessionManagerMock.Object);

            // Act
            var actualResult = await manager.UpdateAsync(reportSchema);

            // Assert
            Assert.Equal(expectedResult, actualResult);
            repositoryMock.Verify();
            sessionManagerMock.Verify();
        }

        [Theory]
        [ClassData(typeof(ReportSchemaManagerUpdateBadSessionTestData))]
        public void UpdateSchemaShouldThrowWhenBadSessionTest(ReportSchema reportSchema, 
            ReportSchemaSession correctSession, ReportSchemaSession session)
        {
            // Arrange
            if (reportSchema is null)
            {
                throw new ArgumentNullException(nameof(reportSchema));
            }

            reportSchema.Session = session;
            ReportSchema expectedResult = null;

            var repositoryMock = new Mock<IReportSchemaRepository>();
            repositoryMock
                .Setup(r => r.SaveChangesAsync())
                .ReturnsAsync(1)
                .Verifiable();
            repositoryMock
                .Setup(r => r.Update(It.IsAny<ReportSchema>()))
                .Returns<ReportSchema>(report => report)
                .Callback<ReportSchema>(report => expectedResult = report)
                .Verifiable();
            var sessionManagerMock = new Mock<IReportSchemaSessionManager>();
            sessionManagerMock
                .Setup(s => s.GetByReportId(It.Is<Guid>(i => i == reportSchema.Id)))
                .ReturnsAsync(correctSession)
                .Verifiable();

            var manager = new ReportSchemaManager(repositoryMock.Object, sessionManagerMock.Object);

            // Act
            Task Act() => manager.UpdateAsync(reportSchema);

            // Assert
            Assert.ThrowsAsync<ReportSchemaInvalidSessionException>(Act);
        }

        [Fact]
        public async void UpdateSchemaShouldThrowWhenBadIdTest()
        {
            // Arrange
            var sessionGuid = new Guid();
            var reportSchema = new ReportSchema();
            var session = new ReportSchemaSession { Id = sessionGuid };
            reportSchema.Session = session;

            var repositoryMock = new Mock<IReportSchemaRepository>();
            var sessionManagerMock = new Mock<IReportSchemaSessionManager>();
            sessionManagerMock
                .Setup(m => m.GetByReportId(It.IsAny<Guid>()))
                .ReturnsAsync(session);

            var manager = new ReportSchemaManager(repositoryMock.Object, sessionManagerMock.Object);

            // Act
            Task Act() => manager.UpdateAsync(reportSchema);

            // Assert
            await Assert.ThrowsAsync<NotFoundException>(Act);
        }

        [Theory]
        [ClassData(typeof(ReportsSchemaManagerRemoveTestData))]
        public async void RemoveSchemaTest(ReportSchema report)
        {
            // Arrange
            if (report is null)
            {
                throw new ArgumentNullException(nameof(report));
            }

            var repositoryMock = new Mock<IReportSchemaRepository>();
            repositoryMock
                .Setup(r => r.SaveChangesAsync())
                .ReturnsAsync(1)
                .Verifiable();
            repositoryMock
                .Setup(r => r.Delete(It.Is<Guid>(i => i == report.Id)))
                .Verifiable();
            repositoryMock
                .Setup(r => r.GetByIdAsync(It.Is<Guid>(i => i == report.Id), null))
                .ReturnsAsync(report)
                .Verifiable();
            var sessionManagerMock = new Mock<IReportSchemaSessionManager>();
            var manager = new ReportSchemaManager(repositoryMock.Object, sessionManagerMock.Object);

            // Act
            await manager.RemoveAsync(report.Id);

            // Assert
            repositoryMock.Verify();
        }

        [Theory]
        [ClassData(typeof(ReportsSchemaManagerRemoveDefaultTestTwoData))]
        public async Task RemoveSchemaDefaultWithManyTest(ReportSchema report1, ReportSchema report2)
        {
            // Arrange
            var repositoryMock = new Mock<IReportSchemaRepository>();
            repositoryMock
                .Setup(r => r.GetByIdAsync(It.Is<Guid>(i => i == report1.Id), null))
                .ReturnsAsync(report1)
                .Verifiable();
            repositoryMock
                .Setup(r => r.GetManyAsync(It.IsAny<Expression<Func<ReportSchema, bool>>>()))
                .ReturnsAsync(new List<ReportSchema>() { report2 })
                .Verifiable();
            var sessionManagerMock = new Mock<IReportSchemaSessionManager>();
            var manager = new ReportSchemaManager(repositoryMock.Object, sessionManagerMock.Object);

            // Act
            Task Act() => manager.RemoveAsync(report1.Id);

            // Assert
            await Assert.ThrowsAsync<ReportSchemaDeletionNotPermittedException>(Act);
            repositoryMock.Verify();
        }

        [Theory]
        [ClassData(typeof(ReportsSchemaManagerRemoveDefaultTestOneData))]
        public async Task RemoveSchemaDefaultWithOnlyOneTestAsync(ReportSchema report1)
        {
            // Arrange
            if (report1 is null)
            {
                throw new ArgumentNullException(nameof(report1));
            }

            var repositoryMock = new Mock<IReportSchemaRepository>();
            repositoryMock
                .Setup(r => r.SaveChangesAsync())
                .ReturnsAsync(1)
                .Verifiable();
            repositoryMock
                .Setup(r => r.Delete(It.Is<Guid>(i => i == report1.Id)))
                .Verifiable();
            repositoryMock
                .Setup(r => r.GetByIdAsync(It.Is<Guid>(i => i == report1.Id), null))
                .ReturnsAsync(report1)
                .Verifiable();
            repositoryMock
                .Setup(r => r.GetManyAsync(It.IsAny<Expression<Func<ReportSchema, bool>>>()))
                .ReturnsAsync(new List<ReportSchema>() { })
                .Verifiable();
            var sessionManagerMock = new Mock<IReportSchemaSessionManager>();
            var manager = new ReportSchemaManager(repositoryMock.Object, sessionManagerMock.Object);

            // Act
            await manager.RemoveAsync(report1.Id);

            // Assert
            repositoryMock.Verify();
        }
    }
}
