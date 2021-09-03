using System.Threading;
using System.Threading.Tasks;
using RadioReport.Common.Consts;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Kafka
{
    public interface IKafkaProducer
    {
        Task WriteMessage(string topic, string message, HttpAuthContext httpAuthContext, string key = null);

        Task WriteMessageAnonymous(string topic, string message, string key = null);

        Task Trigger(string topic, HttpAuthContext httpAuthContext);

        Task TriggerAnonymous(string topic);

        Task<TResponse> SendSynchronousRequest<TResponse>(
            KafkaCachingRequestBase request,
            HttpAuthContext httpAuthContext,
            int timeoutMs = ConfigurationConsts.KafkaSyncRequestTimeoutMs,
            CancellationToken cancellationToken = default
        ) where TResponse : KafkaSyncResponseBase;

        IObservable<TElement> SendObservableRequest<TElement>(
            KafkaCachingRequestBase request,
            HttpAuthContext httpAuthContext,
            int observableTimeoutMs = ConfigurationConsts.KafkaObservableRequestTimeoutMs,
            CancellationToken cancellationToken = default);
    }
}
