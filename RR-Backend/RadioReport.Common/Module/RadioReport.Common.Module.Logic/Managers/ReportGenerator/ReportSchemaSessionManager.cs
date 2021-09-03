using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.Common.Module.Logic.Managers.ReportGenerator
{
    public class ReportSchemaSessionManager : Manager<ReportSchemaSession, IReportSchemaSessionRepository>,
        IReportSchemaSessionManager
    {
        private const int _sessionTimeoutInHrs = 3;

        public ReportSchemaSessionManager(IReportSchemaSessionRepository repository) : base(repository)
        {
        }

        public async Task<ReportSchemaSession> GetByReportId(Guid reportId) =>
            await GetSessionIfNotOutdated(await Repository.GetByReportIdAsync(reportId));

        public override async Task<ReportSchemaSession> GetByIdAsync(Guid id, Expression<Func<ReportSchemaSession, bool>> predicate = null) =>
            await GetSessionIfNotOutdated(await Repository.GetByIdAsync(id));

        public override async Task<ReportSchemaSession> GetAsNoTrackingAsync(Guid id) =>
            await GetSessionIfNotOutdated(await Repository.GetAsNoTrackingAsync(id));

        public override async Task<ReportSchemaSession> AddAsync(ReportSchemaSession newSession, bool keepId = false)
        {
            if (newSession is null)
            {
                throw new ArgumentNullException(nameof(newSession));
            }

            await TakeOverSession(newSession);

            newSession.LastActivity = DateTime.Now;
            return await base.AddAsync(newSession);
        }

        public override async Task<ReportSchemaSession> UpdateAsync(ReportSchemaSession session)
        {
            if (session is null)
            {
                throw new ArgumentNullException(nameof(session));
            }

            session.LastActivity = DateTime.Now;
            return await base.UpdateAsync(session);
        }

        /// <summary>
        /// Current session is being returned.
        /// If session was not active for a period of time given in _sessionTimeoutInHrs it is being removed.
        /// </summary>
        /// <param name="session"></param>
        /// <returns></returns>
        private async Task<ReportSchemaSession> GetSessionIfNotOutdated(ReportSchemaSession session)
        {
            if (session != null && session.LastActivity.AddHours(_sessionTimeoutInHrs) < DateTime.Now)
            {
                await RemoveAsync(session.Id);
                return null;
            }
            return session;
        }

        /// <summary>
        /// If another session is active it is removed in order to replace it with the new session
        /// </summary>
        /// <param name="newSession"></param>
        /// <returns></returns>
        private async Task TakeOverSession(ReportSchemaSession newSession)
        {
            var activeSession = await Repository.GetByReportIdAsync(newSession.ReportSchemaId);

            if (activeSession != null)
            {
                await RemoveAsync(activeSession.Id);
            }
        }
    }
}
