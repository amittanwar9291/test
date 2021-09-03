using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Minio.DataModel;

namespace RadioReport.Common.Logic.Interfaces
{
    public interface IMinIOService
    {
        Task<bool> BucketExistsAsync(string bucketName, CancellationToken cancellationToken = default);
        Task<SortedList<DateTime, string>> GetBucketObjectsAsync(string bucketName, string prefix, CancellationToken cancellationToken = default);
        Task<string> GetObjectAsync(string bucketName, string objectName, CancellationToken cancellationToken = default);
        Task<byte[]> GetBinaryObjectAsync(string bucketName, string objectName, CancellationToken cancellationToken = default);
        Task CreateBucketIfNotExist(string bucketName, CancellationToken cancellationToken = default);
        Task PutObjectAsync(string bucketName, string filePath, string fileName, byte[] data);
        Task PutJsonAsync(string bucketName, string filePath, string fileName, object data, CancellationToken cancellationToken = default);
        Task RemoveObjectAsync(string bucketName, string objectName, CancellationToken cancellationToken = default);
        Task<List<Item>> ListObjectsAsync(string bucketName, string prefix, bool recursive = true, CancellationToken cancellationToken = default);
        Task<string> GetPresignedObject(string bucketName, string itemKey, int expireTime, CancellationToken cancellationToken = default);
        Task<string> PresignedPutObjectAsync(string bucketName, string objectName, int expiresInt);
    }
}
