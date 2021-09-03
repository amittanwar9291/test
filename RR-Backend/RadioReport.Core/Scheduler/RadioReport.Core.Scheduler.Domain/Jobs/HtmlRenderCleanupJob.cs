using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Quartz;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Interfaces;

namespace RadioReport.Core.Scheduler.Domain.Jobs
{
    public class HtmlRenderCleanupJob : IJob
    {
        private readonly IMinIOService _minIOService;

        public HtmlRenderCleanupJob(IMinIOService minIOService, ILogger<HtmlRenderCleanupJob> logger)
        {
            _minIOService = minIOService;
        }
        
        public async Task Execute(IJobExecutionContext context)
        {
            if (!await  _minIOService.BucketExistsAsync(MinIO.Buckets.HtmlRenders)) return;

            var renderFiles = await _minIOService.ListObjectsAsync(MinIO.Buckets.HtmlRenders, "");
            renderFiles.Where(dir =>
                    dir.LastModifiedDateTime != null &&
                    dir.LastModifiedDateTime.Value.AddMilliseconds(ConfigurationConsts.HtmlRenderMinIOLifetime) < DateTime.UtcNow)
                .ToList()
                .ForEach(async renderFile => await _minIOService.RemoveObjectAsync(MinIO.Buckets.HtmlRenders, renderFile.Key));
        }
    }
}