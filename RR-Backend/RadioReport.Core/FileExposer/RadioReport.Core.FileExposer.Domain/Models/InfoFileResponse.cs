using Minio.DataModel;

namespace RadioReport.Core.FileExposer.Domain.Models
{
    public class InfoFileResponse
    {
        public bool IsSuccess { get; set; }
        public Item BucketObject { get; set; }
        public string DownloadUrl { get; set; }

        public InfoFileResponse(bool isSuccess, Item bucketObject, string downloadUrl)
        {
            IsSuccess = isSuccess;
            BucketObject = bucketObject;
            DownloadUrl = downloadUrl;
        }
    }
}