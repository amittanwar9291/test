using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Import;
using RadioReport.Common.Logic.Resources;
using RadioReport.Common.Models;
using RadioReport.Core.InstituteManager.Domain.Interfaces;

namespace RadioReport.Core.InstituteManager.Domain.Managers
{
    public class DicomMapIOService : IDicomMapIOService
    {
        private readonly IMinIOService _minIOService;
        private readonly HttpAuthContext _httpAuthContext;

        public DicomMapIOService(IMinIOService minIOService, HttpAuthContext httpAuthContext)
        {
            _minIOService = minIOService;
            _httpAuthContext = httpAuthContext;
        }

        public async Task<RequestResponse> SetDicomMap(DicomMap dicomMap)
        {
            if (dicomMap == null)
            {
                throw new ArgumentNullException(nameof(dicomMap));
            }

            try
            {
                await _minIOService.CreateBucketIfNotExist(MinIO.Buckets.DicomMap);

                var isUniversal = string.Equals(dicomMap.Module, MinIO.UniversalFolder, StringComparison.CurrentCultureIgnoreCase);
                var couldParseModuleType = Enum.TryParse<ModuleType>(dicomMap.Module, true, out var moduleType);
                if (!isUniversal && !couldParseModuleType)
                {
                    throw new WriteDicomMapFailedException(ErrorMessageResources.DicomMapIO_ModuleTypeUnkown);
                }

                var dicomMapFileName = (isUniversal
                    ? MinIO.UniversalFolder.ToUpperInvariant()
                    : moduleType.ToServiceName().ToUpperInvariant()) + ".json";
                var instituteDir = GetInstituteDirectoryPath(_httpAuthContext.InstituteId);
                var dicomMapFilePath = isUniversal
                    ? GetUniversalDicomMapFilePath(_httpAuthContext.InstituteId)
                    : GetModuleDicomMapFilePath(_httpAuthContext.InstituteId, moduleType);

                var dicomMaps = await _minIOService.GetBucketObjectsAsync(MinIO.Buckets.DicomMap, instituteDir);
                if (dicomMaps.Values.Contains(dicomMapFilePath, StringComparer.CurrentCultureIgnoreCase))
                {
                    await _minIOService.RemoveObjectAsync(MinIO.Buckets.DicomMap, dicomMapFilePath);
                }

                await _minIOService.PutJsonAsync(MinIO.Buckets.DicomMap, instituteDir, dicomMapFileName, dicomMap);

                return RequestResponse.Success();
            }
            catch (Exception exception)
            {
                throw new WriteDicomMapFailedException(exception.Message, exception);
            }
        }

        public async Task<RequestResponse> SetDicomMaps(IEnumerable<DicomMap> dicomMaps)
        {
            if (dicomMaps == null)
            {
                throw new ArgumentNullException(nameof(dicomMaps));
            }

            var responses = new List<RequestResponse>();
            var failedModules = new List<string>();
            foreach (var dicomMap in dicomMaps)
            {
                var response = await SetDicomMap(dicomMap);
                if (!response.IsSuccess)
                {
                    failedModules.Add(dicomMap.Module);
                }

                responses.Add(response);
            }

            if (responses.Any(r => !r.IsSuccess))
            {
                throw new WriteDicomMapFailedException(ErrorMessageResources.DicomMapIO_CompoundUploadAtLeastOneFailed + string.Join(",", failedModules));
            }

            return RequestResponse.Success(string.Join(",", responses.Select(r => r.Payload)));
        }

        public async Task<RequestResponse> GetDicomMap(string moduleTypeString, bool includeUniversal = true)
        {
            try
            {
                var isUniversal = string.Equals(moduleTypeString, MinIO.UniversalFolder, StringComparison.CurrentCultureIgnoreCase);

                var couldParseModuleType = Enum.TryParse<ModuleType>(moduleTypeString, true, out var moduleType);
                if (!isUniversal && !couldParseModuleType)
                {
                    throw new GetDicomMapFailedException(ErrorMessageResources.DicomMapIO_ModuleTypeUnkown);
                }

                if (!await _minIOService.BucketExistsAsync(MinIO.Buckets.DicomMap))
                {
                    throw new GetDicomMapFailedException(ErrorMessageResources.DicomMapIO_BucketNotExisting);
                }

                var instituteDir = GetInstituteDirectoryPath(_httpAuthContext.InstituteId);
                var dicomMapFilePath = isUniversal
                    ? GetUniversalDicomMapFilePath(_httpAuthContext.InstituteId)
                    : GetModuleDicomMapFilePath(_httpAuthContext.InstituteId, moduleType);

                var instituteDicomMaps =
                    await _minIOService.GetBucketObjectsAsync(MinIO.Buckets.DicomMap, instituteDir);

                if (!instituteDicomMaps.Any())
                {
                    throw new GetDicomMapFailedException(ErrorMessageResources.DicomMapIO_NoMapUploaded);
                }

                var universalDicomMap = default(DicomMap);
                if (includeUniversal || isUniversal)
                {
                    if (!instituteDicomMaps.Values.Contains(GetUniversalDicomMapFilePath(_httpAuthContext.InstituteId),
                        StringComparer.CurrentCultureIgnoreCase))
                    {
                        throw new GetDicomMapFailedException(ErrorMessageResources.DicomMapIO_NoUniversalDicomMap);
                    }

                    var universalDicomMapJson = await _minIOService.GetObjectAsync(MinIO.Buckets.DicomMap,
                        GetUniversalDicomMapFilePath(_httpAuthContext.InstituteId));
                    universalDicomMap = universalDicomMapJson.Deserialize<DicomMap>();

                    if (isUniversal ||
                        !instituteDicomMaps.Values.Contains(dicomMapFilePath, StringComparer.CurrentCultureIgnoreCase))
                    {
                        return RequestResponse.Success(universalDicomMap.AsJson());
                    }
                }

                if (!instituteDicomMaps.Values.Contains(dicomMapFilePath, StringComparer.CurrentCultureIgnoreCase))
                {
                    throw new GetDicomMapFailedException(ErrorMessageResources.DicomMapIO_NoModuleDicomMap);
                }

                var moduleDicomMapJson = await _minIOService.GetObjectAsync(MinIO.Buckets.DicomMap, dicomMapFilePath);
                var moduleDicomMap = moduleDicomMapJson.Deserialize<DicomMap>();

                if (includeUniversal)
                {
                    moduleDicomMap = OverrideDicomMap(universalDicomMap, moduleDicomMap);
                }

                return RequestResponse.Success(moduleDicomMap.AsJson());
            }
            catch (Exception exception)
            {
                throw new GetDicomMapFailedException(exception.Message, exception);
            }
        }

        private static DicomMap OverrideDicomMap(DicomMap destinationDicomMap, DicomMap sourceDicomMap)
        {
            destinationDicomMap.Module = sourceDicomMap.Module;
            destinationDicomMap.Patient = InsertOrReplaceDicomMapEntries(destinationDicomMap.Patient.ToList(), sourceDicomMap.Patient);
            destinationDicomMap.Study = InsertOrReplaceDicomMapEntries(destinationDicomMap.Study.ToList(), sourceDicomMap.Study);
            destinationDicomMap.Series = InsertOrReplaceDicomMapEntries(destinationDicomMap.Series.ToList(), sourceDicomMap.Series);

            return destinationDicomMap;
        }

        private static IEnumerable<DicomMapEntry> InsertOrReplaceDicomMapEntries(List<DicomMapEntry> destinationDicomMapEntries,
            IEnumerable<DicomMapEntry> sourceDicomMapEntries)
        {
            var tagGroupedMapEntries = sourceDicomMapEntries.GroupBy(mapEntry => mapEntry.DicomTag).ToList();
            tagGroupedMapEntries.ForEach(mapEntryGroup =>
            {
                var tagGroupEntries = mapEntryGroup.ToList();
                var rrIdGroupedEntries = tagGroupEntries.GroupBy(tagGroupEntry => tagGroupEntry.RadioReportId).ToList();

                rrIdGroupedEntries.ForEach(rrIdGroupedEntry =>
                {
                    var rrIdGroupEntries = rrIdGroupedEntry.ToList();

                    destinationDicomMapEntries.RemoveAll(destinationMapEntry =>
                        destinationMapEntry.DicomTag == rrIdGroupEntries[0].DicomTag &&
                        destinationMapEntry.RadioReportId == rrIdGroupEntries[0].RadioReportId);
                    destinationDicomMapEntries.AddRange(rrIdGroupEntries.ToList());
                });
            });
            return destinationDicomMapEntries;
        }

        private static string GetInstituteDirectoryPath(Guid instituteId) => $"{instituteId}/";

        private static string GetUniversalDicomMapFilePath(Guid instituteId) =>
            $"{GetInstituteDirectoryPath(instituteId)}{MinIO.UniversalFolder.ToUpperInvariant()}.json";

        private static string GetModuleDicomMapFilePath(Guid instituteId, ModuleType moduleType) =>
            $"{GetInstituteDirectoryPath(instituteId)}{moduleType.ToServiceName().ToUpperInvariant()}.json";
    }
}
