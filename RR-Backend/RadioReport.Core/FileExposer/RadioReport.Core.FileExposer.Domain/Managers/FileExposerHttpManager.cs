using System;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Common.Consts;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Resources;
using RadioReport.Core.FileExposer.Domain.Interface;
using RadioReport.Core.FileExposer.Domain.Models;

namespace RadioReport.Core.FileExposer.Domain.Managers
{
    public class FileExposerHttpManager : IFileExposerHttpManager
    {
        private const string _fallbackLanguageCode = "en";
        private readonly IMinIOService _minIoService;

        public FileExposerHttpManager(IMinIOService minIoService)
        {
            _minIoService = minIoService;
        }

        public async Task<InfoFileResponse> GetInfoFile(InfoFileRequest infoFileRequest)
        {
            if (infoFileRequest == null)
            {
                throw new ArgumentNullException(nameof(infoFileRequest));
            }

            if (infoFileRequest.Category.IsNullOrEmpty() || infoFileRequest.Identifier.IsNullOrEmpty() || infoFileRequest.LanguageCode.IsNullOrEmpty())
            {
                return new InfoFileResponse(false, null, null);
            }

            var matchingItemList = await _minIoService.ListObjectsAsync(MinIO.Buckets.StaticFiles, "info-pdf");

            var narrowMatchingItemList = matchingItemList.Where(item =>
                item.Key.Contains(infoFileRequest.Category, StringComparison.OrdinalIgnoreCase) &&
                item.Key.Contains(infoFileRequest.Identifier, StringComparison.OrdinalIgnoreCase)).ToList();

            var matchingItem =
                narrowMatchingItemList.FirstOrDefault(item => GetFileNameFromPath(item.Key).Contains(infoFileRequest.LanguageCode, StringComparison.OrdinalIgnoreCase)) ??
                narrowMatchingItemList.FirstOrDefault(item => GetFileNameFromPath(item.Key).Contains(_fallbackLanguageCode, StringComparison.OrdinalIgnoreCase)) ??
                matchingItemList.FirstOrDefault(item => 
                    item.Key.Contains(MinIO.DefaultInfoFileName, StringComparison.OrdinalIgnoreCase) && 
                    GetFileNameFromPath(item.Key).Contains(infoFileRequest.LanguageCode, StringComparison.OrdinalIgnoreCase)) ??
                matchingItemList.FirstOrDefault(item => 
                    item.Key.Contains(MinIO.DefaultInfoFileName, StringComparison.OrdinalIgnoreCase) && 
                    GetFileNameFromPath(item.Key).Contains(_fallbackLanguageCode, StringComparison.OrdinalIgnoreCase));

            if (matchingItem == null)
                throw new GeneralNotFoundException(ErrorMessageResources.GeneralNotFound);

            var matchingItemUrl =
                await _minIoService.GetPresignedObject(MinIO.Buckets.StaticFiles, matchingItem.Key, ConfigurationConsts.DefaultMinIOPresignedUrlExpiary);
            matchingItemUrl = matchingItemUrl.SubstringAfter("/" + MinIO.Buckets.StaticFiles, StringComparison.InvariantCultureIgnoreCase);

            return new InfoFileResponse(true, matchingItem, matchingItemUrl);
        }

        private static string GetFileNameFromPath(string pathToFile) {
            return pathToFile.Split('/')[pathToFile.Split('/').Length-1];
        }
    }
}
