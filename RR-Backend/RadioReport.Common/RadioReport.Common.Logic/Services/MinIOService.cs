using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reactive.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Minio.DataModel;
using Minio.Exceptions;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.MinIO;

namespace RadioReport.Common.Logic.Services
{
    public class MinIOService : IMinIOService
    {
        private readonly IMinIOWrapper _minIOWrapper;

        public MinIOService(IMinIOWrapper minIOWrapper)
        {
            _minIOWrapper = minIOWrapper;
        }

        public async Task<bool> BucketExistsAsync(string bucketName, CancellationToken cancellationToken = default) =>
            await _minIOWrapper.MinIOClient.BucketExistsAsync(bucketName, cancellationToken);

        public async Task<SortedList<DateTime, string>> GetBucketObjectsAsync(string bucketName, string prefix,
            CancellationToken cancellationToken = default)
        {
            try
            {
                var items = new SortedList<DateTime, string>();
                await _minIOWrapper.MinIOClient
                    .ListObjectsAsync(bucketName, prefix, cancellationToken: cancellationToken).ForEachAsync(item =>
                    {
                        if (item.LastModifiedDateTime.HasValue)
                        {
                            items.Add(item.LastModifiedDateTime.Value, item.Key);
                        }
                    }, cancellationToken);

                return items;
            }
            catch (Exception exception)
            {
                throw new MinIOOperationException($"Get bucket object failed. Bucket name: {bucketName}", exception);
            }
        }

        public async Task<string> GetObjectAsync(string bucketName, string objectName, CancellationToken cancellationToken = default)
        {
            var result = string.Empty;
            try
            {
                await _minIOWrapper.MinIOClient.GetObjectAsync(bucketName, objectName, stream => result = new StreamReader(stream, Encoding.UTF8).ReadToEnd(),
                    cancellationToken: cancellationToken);

                return result;
            }
            catch (Exception exception)
            {
                throw new MinIOOperationException($"Get object failed. Bucket name: {bucketName}. Object name: {objectName}", exception);
            }
        }

        public async Task<byte[]> GetBinaryObjectAsync(string bucketName, string objectName, CancellationToken cancellationToken = default)
        {
            byte[] result = null;
            try
            {
                await _minIOWrapper.MinIOClient.GetObjectAsync(bucketName, objectName, stream =>
                {
                    using var memStream = new MemoryStream();
                    stream.CopyTo(memStream);
                    result = memStream.ToArray();
                }, cancellationToken: cancellationToken);

                return result;
            }
            catch (Exception exception)
            {
                throw new MinIOOperationException($"Get binary object failed. Bucket name: {bucketName}. Object name: {objectName}", exception);
            }
        }

        public async Task CreateBucketIfNotExist(string bucketName, CancellationToken cancellationToken = default)
        {
            try
            {
                if (await _minIOWrapper.MinIOClient.BucketExistsAsync(bucketName, cancellationToken)) return;
                await _minIOWrapper.MinIOClient.MakeBucketAsync(bucketName, cancellationToken: cancellationToken);
            }
            catch (Exception exception)
            {
                throw new MinIOOperationException($"Create bucket failed. Bucket name: {bucketName}", exception);
            }
        }

        public async Task PutJsonAsync(string bucketName, string filePath, string fileName, object data,
            CancellationToken cancellationToken = default)
        {
            var json = data.AsJson();
            try
            {
                await File.WriteAllTextAsync(fileName, json, cancellationToken);
                await _minIOWrapper.MinIOClient.PutObjectAsync(bucketName, filePath + fileName, fileName, cancellationToken: cancellationToken);
            }
            catch (Exception exception)
            {
                throw new MinIOOperationException($"Put json failed. Bucket name: {bucketName}. File path: {filePath}. Json: {json}", exception);
            }
            finally
            {
                File.Delete(fileName);
            }
        }

        public async Task PutObjectAsync(string bucketName, string filePath, string fileName, byte[] data)
        {
            if (data.IsNullOrEmpty())
            {
                throw new MinIOOperationException($"Putting object failed since data is empty. Bucket name: {bucketName}. File path: {filePath}/{fileName}");
            }

            var memoryStream = new MemoryStream(data);
            try
            {
                await _minIOWrapper.MinIOClient.PutObjectAsync(bucketName, $"{filePath}/{fileName}", memoryStream, data.LongLength);
            }
            catch (Exception exception)
            {
                throw new MinIOOperationException($"Put object failed. Bucket name: {bucketName}. File path: {filePath}/{fileName}", exception);
            }
            finally
            {
                await memoryStream.DisposeAsync();
            }
        }

        public async Task RemoveObjectAsync(string bucketName, string objectName, CancellationToken cancellationToken = default)
        {
            try
            {
                await _minIOWrapper.MinIOClient.RemoveObjectAsync(bucketName, objectName, cancellationToken);
            }
            catch (Exception exception)
            {
                throw new MinIOOperationException($"Remove object failed. Bucket name: {bucketName}. Object name: {objectName}", exception);
            }
        }

        public async Task<List<Item>> ListObjectsAsync(string bucketName, string prefix, bool recursive, CancellationToken cancellationToken = default)
        {
            try
            {
                if (!await _minIOWrapper.MinIOClient.BucketExistsAsync(bucketName, cancellationToken))
                {
                    throw new BucketNotFoundException(bucketName, $"{prefix}.{bucketName}");
                }

                var matchingItemsList = await _minIOWrapper.MinIOClient.ListObjectsAsync(bucketName, prefix, recursive, cancellationToken).ToList();

                return matchingItemsList.Select(item => item).ToList();
            }
            catch (Exception exception)
            {
                throw new MinIOOperationException($"List object failed. Bucket name: {bucketName}", exception);
            }
        }

        public async Task<string> GetPresignedObject(string bucketName, string itemKey, int expireTime,
            CancellationToken cancellationToken = default)
        {
            try
            {
                if (!await _minIOWrapper.MinIOClient.BucketExistsAsync(bucketName, cancellationToken))
                {
                    throw new BucketNotFoundException(bucketName, $"{bucketName}.{itemKey}");
                }

                return await _minIOWrapper.MinIOClient.PresignedGetObjectAsync(bucketName, itemKey, expireTime);
            }
            catch (Exception exception)
            {
                throw new MinIOOperationException($"Get presigned object failed. Bucket name: {bucketName}. Item key: {itemKey}", exception);
            }
        }

        public async Task<string> PresignedPutObjectAsync(string bucketName, string objectName, int expiresInt)
        {
            try
            {
                return await _minIOWrapper.MinIOClient.PresignedPutObjectAsync(bucketName, objectName, expiresInt);
            }
            catch (Exception exception)
            {
                throw new MinIOOperationException($"Presigned put object failed. Bucket name: {bucketName}. Object name: {objectName}", exception);
            }
        }
    }
}
