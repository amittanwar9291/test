using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.MammaMX.Domain.Interfaces;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Repo.Repositories
{
    public class UltrasoundMammaryGlandsPageRepository : PageRepositoryBase<UltrasoundMammaryGlandsPage>, IUltrasoundMammaryGlandsPageRepository
    {
        public UltrasoundMammaryGlandsPageRepository(MammaMXDbContext dbContext) : base(dbContext)
        {
        }
    }
}