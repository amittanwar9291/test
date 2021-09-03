using System.IO;

namespace RadioReport.Common.Module.Logic.Models.Pages
{
    public class ImageSaveDto
    {
        public string FileName { get; set; }
        public string FileType { get; set; }
        public Stream OriginalImage { get; set; }
        public Stream MiniatureImage { get; set; }
    }
}
