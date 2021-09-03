using System;
using System.Threading.Tasks;

namespace RadioReport.Common.Interfaces
{
    public interface IObservable<out T>
    {
        Task Subscribe(Action<T> onNext, Action<Exception> onError = null, Action onComplete = null);
    }
}
