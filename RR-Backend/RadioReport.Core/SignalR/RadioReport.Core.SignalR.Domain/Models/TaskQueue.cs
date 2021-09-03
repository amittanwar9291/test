using System;
using System.Collections.Concurrent;
using System.Threading.Tasks;

namespace RadioReport.Core.SignalR.Domain.Models
{
    public class TaskQueue : ConcurrentQueue<Func<Task>>
    {
    }
}
