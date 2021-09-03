using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Processing;
using System.IO;
using System.Threading.Tasks;

namespace RadioReport.Common.Module.Logic.Helpers
{
    public static class ImageFileHelper
    {
        public static async Task<Stream> ResizeImageAsync(Stream sourceStream, int width, int height)
        {
            var ms = new MemoryStream();
            (var image, var format) = await Image.LoadWithFormatAsync(sourceStream);
            image.Mutate(x => x.Resize(width, height));
            await image.SaveAsync(ms, format);
            image.Dispose();
            return ms;
        }

        public static Stream ResizeImage(Stream sourceStream, int width, int height)
        {
            var ms = new MemoryStream();
            using var image = Image.Load(sourceStream, out var format);
            image.Mutate(x => x.Resize(width, height));
            image.Save(ms, format);
            return ms;
        }
    }
}
