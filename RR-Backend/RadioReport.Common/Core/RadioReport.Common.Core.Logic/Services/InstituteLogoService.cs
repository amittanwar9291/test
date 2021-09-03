using System;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Common.Consts;
using RadioReport.Common.Core.Logic.Interfaces;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models.InstituteModels;
using RadioReport.Common.Models;

namespace RadioReport.Common.Core.Logic.Services
{
    public class InstituteLogoService : IInstituteLogoService
    {
        private readonly IMinIOService _minIOService;
        private readonly HttpAuthContext _httpAuthContext;

        public InstituteLogoService(IMinIOService minIOService, HttpAuthContext httpAuthContext)
        {
            _minIOService = minIOService;
            _httpAuthContext = httpAuthContext;
        }

        public async Task<bool> UploadInstituteLogo(InstituteLogo instituteLogo)
        {
            if (instituteLogo == null) throw new ArgumentNullException(nameof(instituteLogo));

            try
            {
                await _minIOService.CreateBucketIfNotExist(MinIO.Buckets.InstituteLogo);
                await _minIOService.PutObjectAsync(MinIO.Buckets.InstituteLogo,
                    _httpAuthContext.InstituteId.ToString(),
                    $"{MinIO.InstituteLogoName}.{instituteLogo.FileFormat}",
                    Convert.FromBase64String(instituteLogo.Content));

                return true;
            }
            catch (Exception exception)
            {
                throw new UploadInstituteLogoFailedException(instituteLogo.ToString(), exception);
            }
        }

        public async Task<InstituteLogo> GetInstituteLogo()
        {
            await _minIOService.CreateBucketIfNotExist(MinIO.Buckets.InstituteLogo);
            var files = await _minIOService.ListObjectsAsync(MinIO.Buckets.InstituteLogo, $"{_httpAuthContext.InstituteId.ToString()}");
            var item = files.FirstOrDefault();
            if (item == null) return null;

            var content = await _minIOService.GetBinaryObjectAsync(MinIO.Buckets.InstituteLogo, $"{item.Key}");
            if (content == null) return null;

            var logo = new InstituteLogo
            {
                FileFormat = Enum.Parse<FileFormat>(item.Key.Substring(item.Key.LastIndexOf(".", StringComparison.OrdinalIgnoreCase) + 1)),
                Content = Convert.ToBase64String(content)
            };

            return logo;
        }

        public async Task<bool> DeleteInstituteLogo()
        {
            try
            {
                if (!await _minIOService.BucketExistsAsync(MinIO.Buckets.InstituteLogo))
                {
                    return true;
                }

                var files = await _minIOService.ListObjectsAsync(MinIO.Buckets.InstituteLogo, $"{_httpAuthContext.InstituteId.ToString()}");
                files.ForEach(async file => await _minIOService.RemoveObjectAsync(MinIO.Buckets.InstituteLogo, file.Key));
                
                return true;
            }
            catch (Exception exception)
            {
                throw new DeleteInstituteLogoFailedException(exception.Message, exception);
            }
        }
    }
}
