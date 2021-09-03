using System;
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
    public class ReportSchemaSessionManagerTests
    {
        [Theory]
        [ClassData(typeof(ReportSchemaSessionManagerGetTestData))]
        public async Task GetByIdSchemaSessionTest(ReportSchemaSession session, bool shouldRemove)
        {
            // Arrange
            if (session is null)
            {
                throw new ArgumentNullException(nameof(session));
            }

            ReportSchemaSession expectedResult = shouldRemove ? null : session;
            var repositoryMock = new Mock<IReportSchemaSessionRepository>();
            repositoryMock
                .Setup(r => r.GetByIdAsync(It.Is<Guid>(i => i == session.Id), null))
                .ReturnsAsync(session)
                .Verifiable();
            if (shouldRemove)
            {
                repositoryMock
                .Setup(r => r.Delete(It.Is<Guid>(i => i == session.Id)))
                .Verifiable();
            }

            var manager = new ReportSchemaSessionManager(repositoryMock.Object);

            // Act
            var actualResult = await manager.GetByIdAsync(session.Id);

            // Assert
            Assert.Equal(expectedResult, actualResult);
            repositoryMock.Verify();
        }

        [Theory]
        [ClassData(typeof(ReportSchemaSessionManagerGetTestData))]
        public async Task GetByReportIdSchemaSessionTest(ReportSchemaSession session, bool shouldRemove)
        {
            // Arrange
            if (session is null)
            {
                throw new ArgumentNullException(nameof(session));
            }

            ReportSchemaSession expectedResult = shouldRemove ? null : session;
            var repositoryMock = new Mock<IReportSchemaSessionRepository>();
            repositoryMock
                .Setup(r => r.GetByReportIdAsync(It.Is<Guid>(i => i == session.ReportSchemaId)))
                .ReturnsAsync(session)
                .Verifiable();
            if (shouldRemove)
            {
                repositoryMock
                .Setup(r => r.Delete(It.Is<Guid>(i => i == session.Id)))
                .Verifiable();
            }

            var manager = new ReportSchemaSessionManager(repositoryMock.Object);

            // Act
            var actualResult = await manager.GetByReportId(session.ReportSchemaId);

            // Assert
            Assert.Equal(expectedResult, actualResult);
            repositoryMock.Verify();
        }

        [Theory]
        [ClassData(typeof(ReportSchemaSessionManagerGetTestData))]
        public async Task GetByIdAsNoTrackSchemaSessionTest(ReportSchemaSession session, bool shouldRemove)
        {
            // Arrange
            if (session is null)
            {
                throw new ArgumentNullException(nameof(session));
            }

            ReportSchemaSession expectedResult = shouldRemove ? null : session;
            var repositoryMock = new Mock<IReportSchemaSessionRepository>();
            repositoryMock
                .Setup(r => r.GetAsNoTrackingAsync(It.Is<Guid>(i => i == session.Id)))
                .ReturnsAsync(session)
                .Verifiable();
            if (shouldRemove)
            {
                repositoryMock
                .Setup(r => r.Delete(It.Is<Guid>(i => i == session.Id)))
                .Verifiable();
            }

            var manager = new ReportSchemaSessionManager(repositoryMock.Object);

            // Act
            var actualResult = await manager.GetAsNoTrackingAsync(session.Id);

            // Assert
            Assert.Equal(expectedResult, actualResult);
            repositoryMock.Verify();
        }

        [Theory]
        [ClassData(typeof(ReportSchemaSessionManagerAddTestData))]
        public async Task AddSchemaSessionTest(ReportSchemaSession session, ReportSchemaSession activeSession)
        {
            // Arrange
            if (session is null)
            {
                throw new ArgumentNullException(nameof(session));
            }

            ReportSchemaSession expectedResult = null;
            DateTime originalDate = session.LastActivity;

            var repositoryMock = new Mock<IReportSchemaSessionRepository>();
            repositoryMock
                .Setup(r => r.SaveChangesAsync())
                .ReturnsAsync(1)
                .Verifiable();
            repositoryMock
                .Setup(r => r.Add(It.IsAny<ReportSchemaSession>()))
                .Returns<ReportSchemaSession>(returnedSession => returnedSession)
                .Callback<ReportSchemaSession>(returnedSession => expectedResult = returnedSession)
                .Verifiable();
            repositoryMock
                .Setup(r => r.GetByReportIdAsync(It.Is<Guid>(i => i == session.ReportSchemaId)))
                .ReturnsAsync(activeSession)
                .Verifiable();
            if (activeSession != null)
            {
                repositoryMock
                .Setup(r => r.Delete(It.Is<Guid>(i => i == activeSession.Id)))
                .Verifiable();
            }

            var manager = new ReportSchemaSessionManager(repositoryMock.Object);

            // Act
            var actualResult = await manager.AddAsync(session);

            // Assert
            Assert.Equal(expectedResult, actualResult);
            Assert.True(originalDate < actualResult.LastActivity);
            repositoryMock.Verify();
        }

        [Theory]
        [ClassData(typeof(ReportSchemaSessionManagerUpdateTestData))]
        public async Task UpdateSessionSchemaTest(ReportSchemaSession session)
        {
            // Arrange
            if (session is null)
            {
                throw new ArgumentNullException(nameof(session));
            }

            ReportSchemaSession expectedResult = null;
            DateTime originalDate = session.LastActivity;

            var repositoryMock = new Mock<IReportSchemaSessionRepository>();
            repositoryMock
                .Setup(r => r.SaveChangesAsync())
                .ReturnsAsync(1)
                .Verifiable();
            repositoryMock
                .Setup(r => r.Update(It.IsAny<ReportSchemaSession>()))
                .Returns<ReportSchemaSession>(returnedSession => returnedSession)
                .Callback<ReportSchemaSession>(returnedSession => expectedResult = returnedSession)
                .Verifiable();

            var manager = new ReportSchemaSessionManager(repositoryMock.Object);

            // Act
            var actualResult = await manager.UpdateAsync(session);

            // Assert
            Assert.Equal(expectedResult, actualResult);
            Assert.True(originalDate < actualResult.LastActivity);
            repositoryMock.Verify();
        }

        [Fact]
        public void UpdateSchemaSessionShouldThrowWhenBadIdTest()
        {
            // Arrange
            var session = new ReportSchemaSession();
            var repositoryMock = new Mock<IReportSchemaSessionRepository>();
            var manager = new ReportSchemaSessionManager(repositoryMock.Object);

            // Act
            Task Act() => manager.UpdateAsync(session);

            // Assert
            Assert.ThrowsAsync<NotFoundException>(Act);
        }

        [Theory]
        [ClassData(typeof(ReportsSchemaSessionManagerRemoveTestData))]
        public async void RemoveSchemaSessionTest(ReportSchemaSession session)
        {
            // Arrange
            if (session is null)
            {
                throw new ArgumentNullException(nameof(session));
            }

            var repositoryMock = new Mock<IReportSchemaSessionRepository>();
            repositoryMock
                .Setup(r => r.SaveChangesAsync())
                .ReturnsAsync(1)
                .Verifiable();
            repositoryMock
                .Setup(r => r.Delete(It.Is<Guid>(i => i == session.Id)))
                .Verifiable();

            var manager = new ReportSchemaSessionManager(repositoryMock.Object);

            // Act
            await manager.RemoveAsync(session.Id);

            // Assert
            repositoryMock.Verify();
        }
    }
}
