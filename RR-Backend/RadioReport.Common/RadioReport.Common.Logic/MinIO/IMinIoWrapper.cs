using Minio;

namespace RadioReport.Common.Logic.MinIO
{
    public interface IMinIOWrapper
    {
        public MinioClient MinIOClient { get; set; }
    }
}