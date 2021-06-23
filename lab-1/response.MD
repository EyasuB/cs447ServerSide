## Exercise 2

1. Explain why do we want sometimes to use setImmediate instead of using setTimeout?
<p>
<b>SetTimeout</b> is simply like calling the function after delay has finished. Whenever a function is called it is not executed immediately, but queued so that it is executed after all the executing and currently queued eventhandlers finish first. setTimeout(callback, 0) essentially means execute after all current functions in the present queue get executed. There is no garantee that can be made how long it could take.
<b>setImmediate</b> is very similar to setTimeout except that it doesn't use queue of functions. It checks queue of I/O eventhandlers. If all I/O efnets in the current snapshots are processed, it executs the callback. It queues them immediately after the last I/O handler someaht like process process.nextTick.So it is faster than setTimeOut(cb,delaytime). setTimeout checks the timer at least once before executing. This makes it at times twice as slower than setImmediate. 
</p>

2. Explain the difference between process.nextTick and setImmediate?
The Node.js event loop has the following sequence of steps.
### Timers--> I/O callbacks --> Idle/Prepare --> Poll --> check--> close Callacks.
But in the middle of the loop lies nextTickQueue, not as part of the eventloop itself. 
From the workflow of event loop, now we can say setImmediate() is not exactly immediate, but the queue containing the callbacks of this, will be executed once in every iteration (when event loop is in Check phase).


3. Name 10 global modules/methods available in Node environment.
