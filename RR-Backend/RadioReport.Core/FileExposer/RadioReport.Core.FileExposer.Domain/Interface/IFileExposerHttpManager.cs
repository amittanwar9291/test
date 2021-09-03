using System.Threading.Tasks;
using RadioReport.Core.FileExposer.Domain.Models;

namespace RadioReport.Core.FileExposer.Domain.Interface
{
    public interface IFileExposerHttpManager
    {
        Task<InfoFileResponse> GetInfoFile(InfoFileRequest infoFileRequest);
    }
}