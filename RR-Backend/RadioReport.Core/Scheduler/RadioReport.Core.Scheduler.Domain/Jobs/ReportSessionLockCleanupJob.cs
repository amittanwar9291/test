using System.Threading.Tasks;
using Quartz;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Kafka;

namespace RadioReport.Core.Scheduler.Domain.Jobs
{
    public class ReportSessionLockCleanupJob : IJob
    {
        private readonly IKafkaProducer _kafkaProducer;

        public ReportSessionLockCleanupJob(IKafkaProducer kafkaProducer)
        {
            _kafkaProducer = kafkaProducer;
        }

        public async Task Execute(IJobExecutionContext context)
        {
            await _kafkaProducer.TriggerAnonymous(KafkaTopic.Request.ReportSessionLockCleanup);
        }
    }
}
