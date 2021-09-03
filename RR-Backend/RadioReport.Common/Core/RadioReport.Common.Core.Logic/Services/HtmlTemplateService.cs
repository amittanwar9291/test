using System;
using System.Text;
using System.Threading.Tasks;
using RadioReport.Common.Consts;
using RadioReport.Common.Core.Logic.Interfaces;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;

namespace RadioReport.Common.Core.Logic.Services
{
    public class HtmlTemplateService : IHtmlTemplateService
    {
        private readonly IMinIOService _minIOService;
        private readonly HttpAuthContext _httpAuthContext;

        public HtmlTemplateService(IMinIOService minIOService, HttpAuthContext httpAuthContext)
        {
            _minIOService = minIOService;
            _httpAuthContext = httpAuthContext;
        }

        public async Task<HtmlTemplates> GetHtmlTemplates()
        {
            try
            {
                var retValue = await GetDefaultHtmlTemplates();
                
                await _minIOService.CreateBucketIfNotExist(MinIO.Buckets.InstituteHtmlTemplates);
                var files = await _minIOService.ListObjectsAsync(MinIO.Buckets.InstituteHtmlTemplates, $"{_httpAuthContext.InstituteId}");
                
                if (files == null)
                {
                    return retValue;
                }
                
                foreach (var file in files)
                {
                    var content = await _minIOService.GetObjectAsync(MinIO.Buckets.InstituteHtmlTemplates, $"{file.Key}");
                    
                    switch (file.Key.Substring(file.Key.LastIndexOf("/") + 1))
                    {
                        case MinIO.HtmlTemplateHeaderFileName:
                            retValue.Header = content;
                            break;
                        case MinIO.HtmlTemplateBodyFileName:
                            retValue.Body = content;
                            break;
                        case MinIO.HtmlTemplateFooterFileName:
                            retValue.Footer = content;
                            break;
                        case MinIO.HtmlTemplateCssFileName:
                            retValue.Css = content;
                            break;
                        case MinIO.HtmlTemplateConfigFileName:
                            retValue.HtmlConfiguration =  content.Deserialize<HtmlConfiguration>();
                            break;
                        default:
                            throw new InvalidInstituteHtmlTemplateException($"Unexpected file found. File: {file.Key}");
                    }
                }

                return retValue;
            }
            catch (Exception exception)
            {
                throw new InstituteHtmlTemplateFailedException(exception.Message, exception);
            }
        }

        public async Task<RequestResponse> UploadHtmlTemplates(HtmlTemplates htmlTemplates)
        {
            if (htmlTemplates == null) throw new ArgumentNullException(nameof(htmlTemplates));

            try
            {
                await _minIOService.CreateBucketIfNotExist(MinIO.Buckets.InstituteHtmlTemplates);
                
                if (!string.IsNullOrWhiteSpace(htmlTemplates.Header))
                {
                    await _minIOService.PutObjectAsync(MinIO.Buckets.InstituteHtmlTemplates,
                        _httpAuthContext.InstituteId.ToString(),
                        $"{MinIO.HtmlTemplateHeaderFileName}",
                        Encoding.ASCII.GetBytes(htmlTemplates.Header));
                }
                
                if (!string.IsNullOrWhiteSpace(htmlTemplates.Body))
                {
                    await _minIOService.PutObjectAsync(MinIO.Buckets.InstituteHtmlTemplates,
                        _httpAuthContext.InstituteId.ToString(),
                        $"{MinIO.HtmlTemplateBodyFileName}",
                        Encoding.ASCII.GetBytes(htmlTemplates.Body));
                }
                
                if (!string.IsNullOrWhiteSpace(htmlTemplates.Footer))
                {
                    await _minIOService.PutObjectAsync(MinIO.Buckets.InstituteHtmlTemplates,
                        _httpAuthContext.InstituteId.ToString(),
                        $"{MinIO.HtmlTemplateFooterFileName}",
                        Encoding.ASCII.GetBytes(htmlTemplates.Footer));
                }
                
                if (!string.IsNullOrWhiteSpace(htmlTemplates.Css))
                {
                    await _minIOService.PutObjectAsync(MinIO.Buckets.InstituteHtmlTemplates,
                        _httpAuthContext.InstituteId.ToString(),
                        $"{MinIO.HtmlTemplateCssFileName}",
                        Encoding.ASCII.GetBytes(htmlTemplates.Css));
                }
                
                if (htmlTemplates.HtmlConfiguration != null)
                {
                    await _minIOService.PutObjectAsync(MinIO.Buckets.InstituteHtmlTemplates,
                        _httpAuthContext.InstituteId.ToString(),
                        $"{MinIO.HtmlTemplateConfigFileName}",
                        Encoding.ASCII.GetBytes(htmlTemplates.HtmlConfiguration.AsJson()));
                }
                
                return RequestResponse.Success();
            }
            catch (Exception exception)
            {
                throw new UploadInstituteHtmlTemplateFailedException(htmlTemplates.AsJson(), exception);
            }
        }

        public async Task<RequestResponse> RemoveHtmlTemplates(HtmlTemplates htmlTemplates)
        {
            if (htmlTemplates == null) throw new ArgumentNullException(nameof(htmlTemplates));

            try
            {
                if (await _minIOService.BucketExistsAsync(MinIO.Buckets.InstituteHtmlTemplates))
                {
                    if ((htmlTemplates.HtmlTemplateTypes & HtmlTemplateTypes.Header) == HtmlTemplateTypes.Header)
                    {
                        await _minIOService.RemoveObjectAsync(MinIO.Buckets.InstituteHtmlTemplates,
                            $"{_httpAuthContext.InstituteId.ToString()}/{MinIO.HtmlTemplateHeaderFileName}");
                    }

                    if ((htmlTemplates.HtmlTemplateTypes & HtmlTemplateTypes.Body) == HtmlTemplateTypes.Body)
                    {
                        await _minIOService.RemoveObjectAsync(MinIO.Buckets.InstituteHtmlTemplates,
                            $"{_httpAuthContext.InstituteId.ToString()}/{MinIO.HtmlTemplateBodyFileName}");
                    }

                    if ((htmlTemplates.HtmlTemplateTypes & HtmlTemplateTypes.Footer) == HtmlTemplateTypes.Footer)
                    {
                        await _minIOService.RemoveObjectAsync(MinIO.Buckets.InstituteHtmlTemplates,
                            $"{_httpAuthContext.InstituteId.ToString()}/{MinIO.HtmlTemplateFooterFileName}");
                    }

                    if ((htmlTemplates.HtmlTemplateTypes & HtmlTemplateTypes.Css) == HtmlTemplateTypes.Css)
                    {
                        await _minIOService.RemoveObjectAsync(MinIO.Buckets.InstituteHtmlTemplates,
                            $"{_httpAuthContext.InstituteId.ToString()}/{MinIO.HtmlTemplateCssFileName}");
                    }

                    if ((htmlTemplates.HtmlTemplateTypes & HtmlTemplateTypes.Config) == HtmlTemplateTypes.Config)
                    {
                        await _minIOService.RemoveObjectAsync(MinIO.Buckets.InstituteHtmlTemplates,
                            $"{_httpAuthContext.InstituteId.ToString()}/{MinIO.HtmlTemplateConfigFileName}");
                    }
                }

                return RequestResponse.Success();
            }
            catch (Exception exception)
            {
                throw new RemoveInstituteHtmlTemplateFailedException(htmlTemplates.AsJson(), exception);
            }
        }

        private async Task<HtmlTemplates> GetDefaultHtmlTemplates()
        {
            try
            {
                await _minIOService.CreateBucketIfNotExist(MinIO.Buckets.InstituteDefaultHtmlTemplates);
                var files = await _minIOService.ListObjectsAsync(MinIO.Buckets.InstituteDefaultHtmlTemplates, "");
                
                if (files == null || files.Count != 4)
                {
                    throw new InstituteHtmlTemplateNotFoundException($"Default institute html template not found.");
                }

                var retValue = new HtmlTemplates();
                
                foreach (var file in files)
                {
                    var content = await _minIOService.GetObjectAsync(MinIO.Buckets.InstituteDefaultHtmlTemplates, $"{file.Key}");
                    if (content == null)
                    {
                        throw new InvalidInstituteHtmlTemplateException($"Default institute html template is invalid.");
                    }
                    
                    switch (file.Key.Substring(file.Key.LastIndexOf("/") + 1))
                    {
                        case MinIO.HtmlTemplateHeaderFileName:
                            retValue.Header = content;
                            break;
                        case MinIO.HtmlTemplateBodyFileName:
                            retValue.Body = content;
                            break;
                        case MinIO.HtmlTemplateFooterFileName:
                            retValue.Footer = content;
                            break;
                        case MinIO.HtmlTemplateCssFileName:
                            retValue.Css = content;
                            break;
                        case MinIO.HtmlTemplateConfigFileName:
                            retValue.HtmlConfiguration =  content.Deserialize<HtmlConfiguration>();
                            break;
                        default:
                            throw new InvalidInstituteHtmlTemplateException($"Unexpected file found. File: {file.Key}");
                    }
                }

                return retValue;
            }
            catch (Exception exception)
            {
                throw new InstituteHtmlTemplateFailedException(exception.Message, exception);
            }
        }
    }
}
