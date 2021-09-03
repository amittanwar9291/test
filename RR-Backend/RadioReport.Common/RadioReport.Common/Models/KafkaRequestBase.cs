namespace RadioReport.Common.Models
{
    public abstract class KafkaRequestBase
    {
        protected KafkaRequestBase(string responseTopicPrefix)
        {
            ResponseTopicPrefix = responseTopicPrefix;
        }

        public string ResponseTopicPrefix { get; }
    }
}
