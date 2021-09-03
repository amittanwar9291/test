using System;
using Minio;

namespace RadioReport.Common.Logic.MinIO
{
    public class MinIOWrapper : IMinIOWrapper
    {
        public MinioClient MinIOClient { get; set; }

        public MinIOWrapper(MinIOConfig minIOConfig)
        {
            if (minIOConfig == null) throw new ArgumentNullException(nameof(minIOConfig));

            MinIOClient = new MinioClient(minIOConfig.Address, minIOConfig.AccessKey, minIOConfig.SecretKey);
        }
    }
}
