using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.ReportList;

namespace RadioReport.Common.Core.Logic.Interfaces
{
    public interface IPaginationService
    {
        int GetSkipCount(PaginationOptions options, int pageSize);
        int GetPageCount(PaginationOptions options);
        void CapCurrentPage(PaginationOptions options);
    }
}
