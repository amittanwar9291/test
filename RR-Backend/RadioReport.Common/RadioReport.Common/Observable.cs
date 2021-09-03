using System;
using System.Threading.Tasks;

namespace RadioReport.Common
{
    public class Observable<T> : Interfaces.IObservable<T>
    {
        private readonly Func<Action<T>, Action<Exception>, Action, Task> _onSubscribeAction;

        private Observable(Func<Action<T>, Action<Exception>, Action, Task> onSubscribeAction)
        {
            _onSubscribeAction = onSubscribeAction;
        }

        public static Observable<T> Create(Func<Action<T>, Action<Exception>, Action, Task> onSubscribeAction) => new Observable<T>(onSubscribeAction);

        public Task Subscribe(Action<T> onNext, Action<Exception> onError = null, Action onComplete = null) =>
            _onSubscribeAction(onNext, onError, onComplete);
    }
}
